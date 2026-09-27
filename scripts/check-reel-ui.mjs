import fs from "node:fs/promises"
import path from "node:path"
import assert from "node:assert/strict"
import { createRequire } from "node:module"
const require = createRequire(import.meta.url)
let playwright
try { playwright = require("playwright") } catch {
  playwright = require(path.join(process.env.USERPROFILE, ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright"))
}
const origin = process.env.REEL_TEST_URL || "http://127.0.0.1:3000"
const output = path.resolve(".reel-qa")
await fs.mkdir(output, { recursive: true })
const browser = await playwright.chromium.launch({ channel: "chrome", headless: true })
const errors = []
try {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 1920, height: 1080 }, { width: 390, height: 844 }, { width: 360, height: 640 }, { width: 320, height: 568 }]) {
    const page = await browser.newPage({ viewport, reducedMotion: "reduce" })
    page.on("pageerror", (error) => errors.push(error.message))
    const response = await page.goto(`${origin}/shop/reel-director`, { waitUntil: "networkidle" })
    assert.equal(response.status(), 200)
    await page.locator("img").evaluateAll((images) => Promise.all(images.map((image) => { image.loading = "eager"; return image.decode().catch(() => {}) })))
    await page.screenshot({ path: path.join(output, `hero-${viewport.width}.png`), animations: "disabled" })
    await page.screenshot({ path: path.join(output, `reel-${viewport.width}.png`), fullPage: true, animations: "disabled" })
    const geometry = await page.evaluate(() => {
      const hero = document.querySelector(".rd-hero").getBoundingClientRect()
      const content = document.querySelector(".rd-hero-footnote").getBoundingClientRect()
      const controls = document.querySelector(".rd-hero-bottom").getBoundingClientRect()
      return { width: innerWidth, scrollWidth: document.documentElement.scrollWidth, heroBottom: hero.bottom, height: innerHeight, contentBottom: content.bottom, controlsTop: controls.top, images: [...document.querySelectorAll("img")].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src) }
    })
    assert.ok(geometry.scrollWidth <= geometry.width, `Horizontal overflow at ${viewport.width}: ${JSON.stringify(geometry)}`)
    assert.ok(geometry.heroBottom < geometry.height, `Next section hidden at ${viewport.width}: ${JSON.stringify(geometry)}`)
    assert.ok(geometry.contentBottom + 8 < geometry.controlsTop, `Hero controls overlap at ${viewport.width}: ${JSON.stringify(geometry)}`)
    assert.equal(geometry.images.length, 0, `Broken images: ${geometry.images}`)
    await page.getByRole("button", { name: "Clay", exact: true }).click()
    assert.equal(await page.getByRole("button", { name: "Clay", exact: true }).getAttribute("aria-pressed"), "true")
    await page.getByRole("tab", { name: /Wool Dynamics/ }).click()
    await page.getByRole("heading", { name: "Make familiar forms feel unexpected." }).waitFor()
    await page.getByRole("button", { name: "Buy Reel Director Pro", exact: true }).click()
    await page.getByRole("dialog").waitFor()
    await page.screenshot({ path: path.join(output, `checkout-${viewport.width}.png`), animations: "disabled" })
    assert.equal(await page.getByRole("link", { name: "Buy on Superhive", exact: true }).getAttribute("href"), "https://superhivemarket.com/products/reel-director-automate-instagram-tiktok-yt-shorts-")
    await page.keyboard.press("Escape")
    await page.getByText("Compare every feature", { exact: true }).click()
    assert.equal(await page.locator(".rd-compare").getAttribute("open"), "")
    await page.getByText("Which Blender versions are supported?", { exact: true }).click()
    await page.getByText(/The current releases support Blender/).waitFor()
    console.log(`Passed: ${viewport.width}x${viewport.height}`)
    await page.close()
  }
  const page = await browser.newPage()
  await page.goto(`${origin}/shop/reel-director/checkout?cancelled=1`, { waitUntil: "networkidle" })
  await page.getByRole("heading", { name: "Checkout cancelled." }).waitFor()
  await page.goto(`${origin}/shop/reel-director/checkout?token=FAKEORDER123456789`, { waitUntil: "networkidle" })
  await page.locator("main [role=alert]").waitFor()
  assert.equal(await page.getByRole("link", { name: /^Download Reel/ }).count(), 0)
  assert.equal((await page.request.get(`${origin}/api/shop/download?edition=pro`)).status(), 401)
  await page.route("**/api/shop/paypal/capture", (route) => route.fulfill({ json: { paid: true, edition: "pro", orderId: "TESTORDER123456789" } }))
  await page.goto(`${origin}/shop/reel-director/checkout?token=TESTORDER123456789`, { waitUntil: "networkidle" })
  await page.getByText("Payment confirmed", { exact: true }).waitFor()
  assert.equal(await page.getByRole("link", { name: "Download Reel Director Pro", exact: true }).getAttribute("href"), "/api/shop/download?edition=pro")
  await page.unroute("**/api/shop/paypal/capture")
  await page.goto(`${origin}/shop/terms`, { waitUntil: "networkidle" })
  await page.getByRole("heading", { name: "Purchase terms & privacy" }).waitFor()
  await page.goto(`${origin}/`, { waitUntil: "networkidle" })
  assert.equal(await page.getByRole("link", { name: "Shop", exact: true }).getAttribute("href"), "/shop/reel-director")
  assert.deepEqual(errors, [])
  console.log("Passed: cancellation, forged payment return, protected downloads, terms and portfolio navigation")
} finally { await browser.close() }
