import assert from "node:assert/strict"
import fs from "node:fs/promises"
import path from "node:path"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
let playwright
try { playwright = require("playwright") } catch {
  playwright = require(path.join(process.env.USERPROFILE, ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright"))
}
const origin = process.env.SEO_TEST_URL || "http://127.0.0.1:3000"
const canonicalOrigin = "https://bevelgraphics.com"
const productPath = "/shop/reel-director"
const output = path.resolve(".reel-qa")
await fs.mkdir(output, { recursive: true })
const browser = await playwright.chromium.launch({ channel: "chrome", headless: true })

try {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  const sitemapResponse = await context.request.get(`${origin}/sitemap.xml`)
  assert.equal(sitemapResponse.status(), 200)
  const xml = await sitemapResponse.text()
  const sitemap = await page.evaluate((xml) => {
    const document = new DOMParser().parseFromString(xml, "application/xml")
    return [...document.getElementsByTagName("url")].map((node) => ({
      url: node.getElementsByTagName("loc")[0].textContent,
      modified: node.getElementsByTagName("lastmod")[0]?.textContent,
      images: [...node.getElementsByTagNameNS("http://www.google.com/schemas/sitemap-image/1.1", "loc")].map((image) => image.textContent),
    }))
  }, xml)
  assert.ok(sitemap.length > 20, "Expected portfolio, blog and product routes")
  const urls = new Set(sitemap.map((item) => item.url))
  assert.equal(urls.size, sitemap.length, "Duplicate sitemap URLs")
  const titles = new Set()
  const descriptions = new Set()
  const internalLinks = new Set()
  const images = new Set()
  for (const item of sitemap) {
    const url = new URL(item.url)
    assert.equal(url.origin, canonicalOrigin)
    assert.ok(!/checkout|\/terms|\/api\//.test(url.pathname))
    if (item.modified) assert.ok(Date.parse(item.modified) <= Date.now(), `Future lastmod: ${item.url}`)
    for (const image of item.images) images.add(new URL(image).pathname)
    const response = await page.goto(`${origin}${url.pathname}`, { waitUntil: "domcontentloaded" })
    assert.equal(response.status(), 200, url.pathname)
    assert.doesNotMatch(response.headers()["x-robots-tag"] || "", /noindex/)
    const data = await page.evaluate(() => {
      const copy = document.body.cloneNode(true)
      copy.querySelectorAll("script,style").forEach((node) => node.remove())
      return {
        title: document.title,
        descriptions: [...document.querySelectorAll('meta[name="description"]')].map((node) => node.content),
        canonicals: [...document.querySelectorAll('link[rel="canonical"]')].map((node) => node.href),
        h1: [...document.querySelectorAll("h1")].map((node) => node.textContent),
        lang: document.documentElement.lang,
        robots: [...document.querySelectorAll('meta[name="robots"],meta[name="googlebot"]')].map((node) => node.content),
        graph: [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((node) => {
          const data = JSON.parse(node.textContent)
          return data["@graph"] || [data]
        }),
        body: copy.textContent.replace(/\s+/g, " "),
        ogUrl: document.querySelector('meta[property="og:url"]')?.content,
        ogImage: document.querySelector('meta[property="og:image"]')?.content,
        links: [...document.querySelectorAll("a[href]")].map((node) => node.getAttribute("href")),
        images: [...document.querySelectorAll("img[src]")].map((node) => ({ src: node.getAttribute("src"), alt: node.getAttribute("alt") })),
      }
    })
    assert.equal(data.lang, "en", url.pathname)
    assert.equal(data.h1.length, 1, `Expected one H1: ${url.pathname}`)
    assert.ok(data.title && !titles.has(data.title), `Missing/duplicate title: ${url.pathname}`)
    assert.ok((data.title.match(/Bevel Graphics/g) || []).length <= 1, `Repeated title branding: ${url.pathname}`)
    titles.add(data.title)
    assert.equal(data.descriptions.length, 1, `Description count: ${url.pathname}`)
    assert.ok(data.descriptions[0] && !descriptions.has(data.descriptions[0]), `Missing/duplicate description: ${url.pathname}`)
    descriptions.add(data.descriptions[0])
    assert.deepEqual(data.canonicals, [url.href], `Canonical mismatch: ${url.pathname}`)
    assert.equal(new URL(data.ogUrl).href, url.href, `Open Graph URL: ${url.pathname}`)
    images.add(new URL(data.ogImage).pathname)
    assert.ok(data.robots.every((value) => !value.includes("noindex")), url.pathname)
    assert.ok(data.graph.some((node) => node["@id"] === `${canonicalOrigin}/#organization`))
    assert.ok(data.graph.some((node) => node["@id"] === `${canonicalOrigin}/#website`))
    if (url.pathname === "/") {
      assert.ok(await page.locator("h1").evaluate((heading) => {
        for (let node = heading; node; node = node.parentElement) {
          const style = getComputedStyle(node)
          if (style.opacity === "0" || style.visibility === "hidden" || style.display === "none") return false
        }
        return true
      }), "Homepage hidden without JavaScript")
      await page.screenshot({ path: path.join(output, "seo-home-no-javascript.png") })
    }
    for (const node of data.graph.filter((node) => node["@type"] === "FAQPage")) {
      for (const faq of node.mainEntity) {
        assert.ok(data.body.includes(faq.name.replace(/\s+/g, " ")), `Missing FAQ question in HTML: ${url.pathname}`)
        assert.ok(data.body.includes(faq.acceptedAnswer.text.replace(/\s+/g, " ")), `Missing FAQ answer in HTML: ${url.pathname}`)
      }
    }
    const article = data.graph.find((node) => node["@type"] === "BlogPosting")
    if (article) {
      assert.ok(data.body.includes("By Bevel Graphics"), `Missing byline: ${url.pathname}`)
      assert.ok(Date.parse(article.dateModified) >= Date.parse(article.datePublished))
      assert.equal(item.modified.slice(0, 10), article.dateModified)
      if (article.about?.some((node) => node["@type"] === "SoftwareApplication")) assert.ok(data.links.includes(productPath))
    }
    if (url.pathname === productPath) {
      const products = data.graph.filter((node) => node["@type"] === "SoftwareApplication")
      assert.equal(products.length, 2)
      for (const product of products) {
        assert.equal(product.creator["@id"], `${canonicalOrigin}/#organization`)
        if (data.body.includes("Direct checkout is temporarily unavailable")) assert.equal(product.offers, undefined)
      }
      assert.ok(data.body.includes("optional experimental XPBD dynamics"), "Wool feature absent from initial HTML")
      assert.ok(data.body.includes("Fine film grain"), "Compositor feature absent from initial HTML")
    }
    for (const link of data.links) {
      const parsed = new URL(link, `${origin}${url.pathname}`)
      if ([origin, canonicalOrigin].includes(parsed.origin) && !parsed.pathname.startsWith("/api/")) internalLinks.add(parsed.pathname)
    }
    for (const image of data.images) {
      assert.notEqual(image.alt, null, `Missing image alt: ${image.src}`)
      if (image.src.startsWith("/")) images.add(image.src)
    }
    console.log(`SEO passed: ${url.pathname}`)
  }
  for (const route of internalLinks) {
    if (urls.has(new URL(route, canonicalOrigin).href)) continue
    const response = await context.request.get(`${origin}${route}`)
    assert.ok(response.ok(), `Broken internal link: ${route} (${response.status()})`)
  }
  const brokenImages = []
  for (const image of images) {
    const response = await context.request.head(`${origin}${image}`)
    if (response.status() !== 200 || !response.headers()["content-type"]?.startsWith("image/")) brokenImages.push(`${image}: ${response.status()}`)
  }
  assert.deepEqual(brokenImages, [], "Broken images")
  const robots = await (await context.request.get(`${origin}/robots.txt`)).text()
  assert.match(robots, /User-Agent: \*/i)
  assert.match(robots, /Allow: \/\s/)
  assert.match(robots, /Disallow: \/api\//)
  assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`))
  for (const route of ["/shop/terms", `${productPath}/checkout?cancelled=1`]) {
    await page.goto(`${origin}${route}`, { waitUntil: "domcontentloaded" })
    for (const name of ["robots", "googlebot"]) assert.match(await page.locator(`meta[name="${name}"]`).getAttribute("content"), /noindex/)
  }
  const api = await context.request.get(`${origin}/api/shop/download`)
  assert.match(api.headers()["x-robots-tag"], /noindex/)
  for (const route of ["/shop", "/project/9"]) {
    const response = await context.request.get(`${origin}${route}`, { maxRedirects: 0 })
    assert.equal(response.status(), 308, `Expected permanent redirect: ${route}`)
  }
  for (const route of ["/not-a-real-page", "/blog/not-a-real-article", "/project/not-a-real-project"]) {
    const response = await context.request.get(`${origin}${route}`)
    assert.equal(response.status(), 404, `Expected real 404: ${route}`)
  }
  await context.close()

  // Verify the crawlable tab content still behaves correctly after hydration.
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: "reduce" })
    await page.goto(origin, { waitUntil: "networkidle" })
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Homepage overflow at ${width}`)
    await page.screenshot({ path: path.join(output, `seo-home-${width}.png`) })
    await page.goto(`${origin}${productPath}`, { waitUntil: "networkidle" })
    await page.getByRole("tab", { name: /Wool Dynamics/ }).click()
    assert.equal(await page.getByRole("tabpanel").count(), 1)
    await page.getByRole("heading", { name: "Make familiar forms feel unexpected." }).waitFor()
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow at ${width}`)
    await page.locator("#features").screenshot({ path: path.join(output, `seo-features-${width}.png`) })
    await page.goto(`${origin}/blog/reel-director-pro-wool-dynamics-blender-addon`, { waitUntil: "networkidle" })
    await page.screenshot({ path: path.join(output, `seo-article-${width}.png`) })
    await page.getByText("Is Reel Director Pro 25% off?", { exact: true }).click()
    await page.getByText(/^On 29 September 2026/).waitFor()
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Article overflow at ${width}`)
    await page.close()
  }
  console.log(`Passed: ${sitemap.length} indexable pages, ${images.size} images, internal links, initial-HTML FAQs, structured data, redirects and desktop/mobile UI.`)
} finally {
  await browser.close()
}
