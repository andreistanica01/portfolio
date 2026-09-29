import test, { afterEach } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"
import ts from "typescript"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(import.meta.url)
const cache = new Map()
const blobStore = { getMetadata: async () => null, get: async () => null }
function load(relative) {
  const filename = path.join(root, relative)
  if (cache.has(filename)) return cache.get(filename)
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } })
  const exports = {}
  cache.set(filename, exports)
  new Function("require", "exports", outputText)((name) => {
    if (name === "server-only") return {}
    if (name === "@netlify/blobs") return { getStore: () => blobStore }
    if (name.startsWith("@/")) return load(`${name.slice(2)}.ts`)
    if (name.startsWith(".")) return load(path.relative(root, path.resolve(path.dirname(filename), `${name}.ts`)))
    return require(name)
  }, exports)
  return exports
}

const security = load("lib/shop/security.ts")
const createOrder = load("app/api/shop/paypal/route.ts").POST
const captureOrder = load("app/api/shop/paypal/capture/route.ts").POST
const download = load("app/api/shop/download/route.ts").GET
const edgeDownload = load("netlify/edge-functions/shop-download.ts").default
const { NextRequest } = require("next/server")
const originalFetch = globalThis.fetch
const originalEnv = { ...process.env }
const originalNetlify = globalThis.Netlify
const secret = "test-only-strong-secret-not-a-real-credential-123456789"
const orderId = "TESTORDER123456789"
const captureId = "TESTCAPTURE1234567"
const baseSession = { kind: "checkout", orderId, edition: "pro", amount: "16.50", currency: "USD", environment: "sandbox", expires: Date.now() + 3600000 }

function configure() {
  delete process.env.SHOP_DOWNLOAD_PROVIDER
  Object.assign(process.env, {
    SHOP_CHECKOUT_ENABLED: "true", SHOP_SITE_URL: "https://shop.example.com", PAYPAL_ENVIRONMENT: "sandbox",
    PAYPAL_CLIENT_ID: "test-client", PAYPAL_CLIENT_SECRET: "test-secret", SHOP_SESSION_SECRET: secret,
    SHOP_SELLER_NAME: "Test Seller", SHOP_SELLER_ADDRESS: "Test address",
    REEL_DIRECTOR_DOWNLOAD_URL: "https://storage.example.com/standard.zip",
    REEL_DIRECTOR_PRO_DOWNLOAD_URL: "https://storage.example.com/pro.zip",
  })
}
function order(status = "COMPLETED", captureStatus = "COMPLETED") {
  return { id: orderId, status, purchase_units: [{ custom_id: "reel-director:pro", amount: { value: "16.50", currency_code: "USD" }, payments: { captures: [{ id: captureId, status: captureStatus, amount: { value: "16.50", currency_code: "USD" } }] } }] }
}
function request(route, body, cookie, origin = "https://shop.example.com") {
  return new NextRequest(`https://shop.example.com${route}`, { method: body ? "POST" : "GET", headers: { Origin: origin, ...(body ? { "Content-Type": "application/json" } : {}), ...(cookie ? { Cookie: cookie } : {}) }, ...(body ? { body: JSON.stringify(body) } : {}) })
}
function checkoutCookie(session = baseSession) { return `rd_checkout=${security.signSession(session, secret)}` }
function receiptCookie() { return `rd_receipt_pro=${security.signSession({ ...baseSession, kind: "receipt", captureId }, secret)}` }
function mockNetwork(handler) {
  globalThis.fetch = async (url, options = {}) => {
    if (String(url).endsWith("/v1/oauth2/token")) return Response.json({ access_token: "test-token" })
    return handler(String(url), options)
  }
}

afterEach(() => {
  globalThis.fetch = originalFetch
  globalThis.Netlify = originalNetlify
  blobStore.getMetadata = async () => null
  blobStore.get = async () => null
  for (const key of Object.keys(process.env)) if (!(key in originalEnv)) delete process.env[key]
  Object.assign(process.env, originalEnv)
})

test("signed sessions reject tampering, expiry, wrong secrets and weak signing keys", () => {
  const token = security.signSession(baseSession, secret)
  assert.deepEqual(security.readSession(token, secret), baseSession)
  assert.equal(security.readSession(`${token.slice(0, 8)}x${token.slice(9)}`, secret), null)
  assert.equal(security.readSession(token, "another-secret-at-least-32-characters-long"), null)
  assert.equal(security.readSession(security.signSession({ ...baseSession, expires: 1 }, secret), secret), null)
  assert.throws(() => security.signSession(baseSession, "short"))
})

test("only the selected edition, amount, currency and order qualify", () => {
  assert.ok(security.completedCapture(order(), baseSession))
  for (const change of [{ edition: "standard" }, { amount: "12.00" }, { orderId: "OTHERORDER12345678" }, { currency: "EUR" }]) assert.equal(security.completedCapture(order(), { ...baseSession, ...change }), null)
  assert.equal(security.completedCapture(order("COMPLETED", "PENDING"), baseSession), null)
  assert.equal(security.completedCapture(order("APPROVED"), baseSession), null)
})

test("approval URLs reject lookalike domains and wrong payment environments", () => {
  assert.equal(security.isPayPalApprovalUrl("https://www.sandbox.paypal.com/checkoutnow?token=ABC", "sandbox"), true)
  assert.equal(security.isPayPalApprovalUrl("https://www.paypal.com/checkoutnow", "sandbox"), false)
  assert.equal(security.isPayPalApprovalUrl("https://www.paypal.com.evil.example/checkout", "live"), false)
  assert.equal(security.isPayPalApprovalUrl("http://www.paypal.com/checkout", "live"), false)
})

test("new orders require same origin, a known edition and accepted terms", async () => {
  configure()
  globalThis.fetch = () => { throw new Error("No network call expected") }
  assert.equal((await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true }, null, "https://evil.example"))).status, 403)
  assert.equal((await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: false }))).status, 400)
  assert.equal((await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true, price: "0.01" }))).status, 400)
  assert.equal((await createOrder(request("/api/shop/paypal", { edition: "invented", acceptedTerms: true }))).status, 400)
})

test("missing credentials or delivery configuration cannot accept payments", async () => {
  configure()
  delete process.env.PAYPAL_CLIENT_SECRET
  assert.equal((await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true }))).status, 503)
  configure()
  delete process.env.REEL_DIRECTOR_PRO_DOWNLOAD_URL
  assert.equal((await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true }))).status, 503)
})

test("file availability is checked before creating a payable order", async () => {
  configure()
  mockNetwork(async (url) => { assert.equal(url, "https://storage.example.com/pro.zip"); return new Response(null, { status: 404 }) })
  assert.equal((await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true }))).status, 502)
})

test("create order uses the catalog price and sets an HttpOnly signed session", async () => {
  configure()
  mockNetwork(async (url, options) => {
    if (url.startsWith("https://storage.example.com")) return new Response(null, { headers: { "Content-Type": "application/zip" } })
    assert.equal(url, "https://api-m.sandbox.paypal.com/v2/checkout/orders")
    const sent = JSON.parse(options.body)
    assert.equal(sent.purchase_units[0].amount.value, "16.50")
    assert.equal(sent.purchase_units[0].amount.currency_code, "USD")
    assert.equal(sent.purchase_units[0].items[0].category, "DIGITAL_GOODS")
    assert.equal(sent.payment_source.paypal.experience_context.return_url, "https://shop.example.com/shop/reel-director/checkout")
    assert.ok(options.headers["PayPal-Request-Id"])
    return Response.json({ id: orderId, links: [{ rel: "payer-action", href: `https://www.sandbox.paypal.com/checkoutnow?token=${orderId}` }] })
  })
  const response = await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true }))
  assert.equal(response.status, 200)
  assert.match(response.headers.get("set-cookie"), /HttpOnly/)
  assert.match(response.headers.get("set-cookie"), /Secure/)
  assert.equal(security.readSession(response.cookies.get("rd_checkout").value, secret).amount, "16.50")
})

test("capture cannot be triggered by an order ID without its valid session", async () => {
  configure()
  assert.equal((await captureOrder(request("/api/shop/paypal/capture", { orderId }))).status, 401)
  assert.equal((await captureOrder(request("/api/shop/paypal/capture", { orderId: "OTHERORDER12345678" }, checkoutCookie()))).status, 401)
  assert.equal((await captureOrder(request("/api/shop/paypal/capture", { orderId }, checkoutCookie(), "https://evil.example"))).status, 403)
})

test("approved orders are captured once; incomplete capture responses are reread", async () => {
  configure()
  let captured = false
  let captures = 0
  mockNetwork(async (url, options) => {
    if (url.endsWith("/capture")) {
      captures++
      assert.equal(options.headers["PayPal-Request-Id"], `capture-${orderId}`)
      captured = true
      return Response.json({ id: orderId, status: "COMPLETED" })
    }
    return Response.json(order(captured ? "COMPLETED" : "APPROVED"))
  })
  for (let i = 0; i < 2; i++) {
    const response = await captureOrder(request("/api/shop/paypal/capture", { orderId }, checkoutCookie()))
    assert.equal((await response.json()).paid, true)
    assert.equal(security.readSession(response.cookies.get("rd_receipt_pro").value, secret).captureId, captureId)
  }
  assert.equal(captures, 1)
})

test("an interrupted successful capture is recovered without another charge", async () => {
  configure()
  let captured = false
  mockNetwork(async (url) => {
    if (url.endsWith("/capture")) { captured = true; throw new Error("Network interrupted") }
    return Response.json(order(captured ? "COMPLETED" : "APPROVED"))
  })
  const response = await captureOrder(request("/api/shop/paypal/capture", { orderId }, checkoutCookie()))
  assert.equal((await response.json()).paid, true)
})

test("pending or mismatched payments never set a download cookie", async () => {
  configure()
  mockNetwork(async () => Response.json(order("COMPLETED", "PENDING")))
  const pending = await captureOrder(request("/api/shop/paypal/capture", { orderId }, checkoutCookie()))
  assert.equal(pending.status, 202)
  assert.equal(pending.cookies.get("rd_receipt_pro"), undefined)
  mockNetwork(async () => Response.json(order()))
  const mismatch = await captureOrder(request("/api/shop/paypal/capture", { orderId }, checkoutCookie({ ...baseSession, amount: "12.00" })))
  assert.equal(mismatch.status, 409)
})

test("download requires a receipt for that edition and blocks refunded payments", async () => {
  configure()
  assert.equal((await download(request("/api/shop/download?edition=pro"))).status, 401)
  assert.equal((await download(request("/api/shop/download?edition=standard", null, receiptCookie()))).status, 401)
  mockNetwork(async () => Response.json({ id: captureId, status: "REFUNDED", amount: { value: "16.50", currency_code: "USD" } }))
  assert.equal((await download(request("/api/shop/download?edition=pro", null, receiptCookie()))).status, 403)
})

test("verified download streams the file without exposing private storage", async () => {
  configure()
  process.env.SHOP_DOWNLOAD_BEARER_TOKEN = "test-storage-token"
  mockNetwork(async (url, options) => {
    if (url.startsWith("https://storage.example.com")) {
      assert.equal(options.headers.Authorization, "Bearer test-storage-token")
      assert.equal(options.redirect, "error")
      return new Response("ZIP-FILE-CONTENTS", { headers: { "Content-Type": "application/zip" } })
    }
    return Response.json({ id: captureId, status: "COMPLETED", amount: { value: "16.50", currency_code: "USD" }, supplementary_data: { related_ids: { order_id: orderId } } })
  })
  const response = await download(request("/api/shop/download?edition=pro", null, receiptCookie()))
  assert.equal(response.status, 200)
  assert.equal(await response.text(), "ZIP-FILE-CONTENTS")
  assert.equal(response.headers.get("location"), null)
  assert.equal(response.headers.get("content-disposition"), 'attachment; filename="reel-director-pro.zip"')
  assert.equal(response.headers.get("cache-control"), "private, no-store")
})

test("payment environment changes invalidate old checkout sessions", async () => {
  configure()
  process.env.PAYPAL_ENVIRONMENT = "live"
  assert.equal((await captureOrder(request("/api/shop/paypal/capture", { orderId }, checkoutCookie()))).status, 401)
})

function configureBlobs() {
  configure()
  process.env.SHOP_DOWNLOAD_PROVIDER = "netlify-blobs"
  process.env.REEL_DIRECTOR_PRO_BLOB_KEY = "pro/0.0.3/reel-director-pro.zip"
  globalThis.Netlify = { env: { get: (name) => process.env[name] } }
  mockNetwork(async () => Response.json({ id: captureId, status: "COMPLETED", amount: { value: "16.50", currency_code: "USD" } }))
}

test("private release storage must exist before creating a PayPal order", async () => {
  configureBlobs()
  let calls = 0
  mockNetwork(async () => { calls++; throw new Error("PayPal must not be called") })
  const response = await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true }))
  assert.equal(response.status, 502)
  assert.equal(calls, 0)
})

test("private storage cannot bypass the checkout switch or seller details", async () => {
  for (const missing of ["SHOP_CHECKOUT_ENABLED", "SHOP_SELLER_NAME", "SHOP_SELLER_ADDRESS", "REEL_DIRECTOR_PRO_BLOB_KEY"]) {
    configureBlobs()
    delete process.env[missing]
    globalThis.fetch = () => { throw new Error("No payment call allowed") }
    assert.equal((await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true }))).status, 503)
  }
})

test("an available private release permits a correctly priced sandbox order", async () => {
  configureBlobs()
  let checked = false
  blobStore.getMetadata = async (key) => {
    assert.equal(key, process.env.REEL_DIRECTOR_PRO_BLOB_KEY)
    checked = true
    return { etag: "test-release", metadata: {} }
  }
  mockNetwork(async (url, options) => {
    assert.equal(checked, true)
    assert.equal(url, "https://api-m.sandbox.paypal.com/v2/checkout/orders")
    assert.equal(JSON.parse(options.body).purchase_units[0].amount.value, "16.50")
    return Response.json({ id: orderId, links: [{ rel: "payer-action", href: `https://www.sandbox.paypal.com/checkoutnow?token=${orderId}` }] })
  })
  assert.equal((await createOrder(request("/api/shop/paypal", { edition: "pro", acceptedTerms: true }))).status, 200)
})

test("only verified receipts authorize edge delivery", async () => {
  configureBlobs()
  const response = await download(request("/api/shop/download?edition=pro", null, receiptCookie()))
  assert.equal(response.status, 200)
  assert.equal(response.headers.get("x-reel-delivery"), "netlify-blobs")
  assert.deepEqual(await response.json(), { edition: "pro", key: process.env.REEL_DIRECTOR_PRO_BLOB_KEY })
  assert.equal((await download(request("/api/shop/download?edition=pro"))).status, 401)
  mockNetwork(async () => Response.json({ id: captureId, status: "REFUNDED", amount: { value: "16.50", currency_code: "USD" } }))
  assert.equal((await download(request("/api/shop/download?edition=pro", null, receiptCookie()))).status, 403)
})

test("edge delivery returns authorization failures without accessing files", async () => {
  configureBlobs()
  let reads = 0
  blobStore.get = async () => { reads++; throw new Error("No file access allowed") }
  const input = request("/api/shop/download?edition=pro")
  const response = await edgeDownload(input, { next: () => download(input) })
  assert.equal(response.status, 401)
  assert.equal(reads, 0)
  const post = await edgeDownload(request("/api/shop/download?edition=pro", {}), { next: () => { throw new Error("No POST allowed") } })
  assert.equal(post.status, 405)
})

test("edge delivery rejects mismatched editions and storage keys", async () => {
  configureBlobs()
  for (const payload of [
    { edition: "standard", key: process.env.REEL_DIRECTOR_PRO_BLOB_KEY },
    { edition: "pro", key: "another-private-file.zip" },
  ]) {
    const response = await edgeDownload(request("/api/shop/download?edition=pro"), {
      next: async () => Response.json(payload, { headers: { "X-Reel-Delivery": "netlify-blobs" } }),
    })
    assert.equal(response.status, 502)
  }
})

test("edge delivery fails privately if the release disappears after purchase", async () => {
  configureBlobs()
  const input = request("/api/shop/download?edition=pro", null, receiptCookie())
  const response = await edgeDownload(input, { next: () => download(input) })
  assert.equal(response.status, 502)
  assert.equal(response.headers.get("cache-control"), "private, no-store")
  assert.match((await response.json()).error, /Do not purchase again/)
})

test("edge delivery streams a release larger than the regular function limit", async () => {
  configureBlobs()
  const size = 24 * 1024 * 1024
  let remaining = size
  blobStore.get = async (key, options) => {
    assert.equal(key, process.env.REEL_DIRECTOR_PRO_BLOB_KEY)
    assert.equal(options.type, "stream")
    return new ReadableStream({ pull(controller) {
      if (!remaining) return controller.close()
      const length = Math.min(remaining, 65536)
      remaining -= length
      controller.enqueue(new Uint8Array(length))
    } })
  }
  const input = request("/api/shop/download?edition=pro", null, receiptCookie())
  const response = await edgeDownload(input, { next: () => download(input) })
  assert.equal(response.status, 200)
  assert.equal(response.headers.get("cache-control"), "private, no-store")
  assert.equal(response.headers.get("content-type"), "application/zip")
  assert.equal(response.headers.get("content-disposition"), 'attachment; filename="reel-director-pro.zip"')
  let received = 0
  for await (const chunk of response.body) received += chunk.byteLength
  assert.equal(received, size)
})
