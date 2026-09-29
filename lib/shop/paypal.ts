import "server-only"
import { SITE_CONFIG } from "@/lib/content"
import { getEdition, type EditionId } from "@/lib/shop/catalog"
import { getStore } from "@netlify/blobs"
import { BLOB_PROVIDER, RELEASE_STORE } from "@/lib/shop/delivery"

export const CHECKOUT_COOKIE = "rd_checkout"
export const RECEIPT_MAX_AGE = 60 * 60 * 24 * 7
export const receiptCookie = (edition: EditionId) => `rd_receipt_${edition}`
export const shopSecret = () => process.env.SHOP_SESSION_SECRET || ""
export const paypalEnvironment = (): "sandbox" | "live" => process.env.PAYPAL_ENVIRONMENT === "live" ? "live" : "sandbox"

export function shopOrigin() {
  return new URL(process.env.SHOP_SITE_URL || SITE_CONFIG.siteUrl).origin
}

export function downloadSource(edition: EditionId) {
  const product = getEdition(edition)!
  const value = process.env[product.downloadEnv]
  if (!value) return null
  try {
    const url = new URL(value)
    return url.protocol === "https:" && !url.username && !url.password ? url.toString() : null
  } catch { return null }
}

export function releaseBlobKey(edition: EditionId) {
  const value = process.env[getEdition(edition)!.blobKeyEnv]
  return value && /^[a-zA-Z0-9][a-zA-Z0-9/._-]{0,599}$/.test(value) ? value : null
}

function downloadConfigured(edition: EditionId) {
  return process.env.SHOP_DOWNLOAD_PROVIDER === BLOB_PROVIDER
    ? Boolean(releaseBlobKey(edition))
    : Boolean(downloadSource(edition))
}

export async function releaseAvailable(edition: EditionId) {
  if (process.env.SHOP_DOWNLOAD_PROVIDER === BLOB_PROVIDER) {
    const key = releaseBlobKey(edition)
    return Boolean(key && await getStore({ name: RELEASE_STORE, consistency: "strong" }).getMetadata(key))
  }
  const file = await fetchDownload(edition, "HEAD")
  return file.ok && !file.headers.get("content-type")?.includes("text/html")
}

export function checkoutAvailability() {
  const connected = process.env.SHOP_CHECKOUT_ENABLED === "true" &&
    Boolean(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET) &&
    shopSecret().length >= 32 &&
    Boolean(process.env.SHOP_SELLER_NAME && process.env.SHOP_SELLER_ADDRESS) &&
    (paypalEnvironment() !== "live" || shopOrigin().startsWith("https://"))
  return {
    environment: paypalEnvironment(),
    standard: connected && downloadConfigured("standard"),
    pro: connected && downloadConfigured("pro"),
  }
}

export function cookieOptions(maxAge: number) {
  return { httpOnly: true, secure: shopOrigin().startsWith("https://"), sameSite: "lax" as const, path: "/", maxAge }
}

export const noStoreHeaders = { "Cache-Control": "private, no-store", "Referrer-Policy": "no-referrer" }

export class PayPalError extends Error {
  constructor(public status: number) { super("PayPal request failed") }
}

export async function paypalRequest<T>(path: string, options: { body?: unknown; requestId?: string } = {}): Promise<T> {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !clientSecret) throw new PayPalError(503)
  const base = paypalEnvironment() === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"
  const auth = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  })
  if (!auth.ok) throw new PayPalError(auth.status)
  const token = await auth.json() as { access_token: string }
  const response = await fetch(`${base}${path}`, {
    method: options.body === undefined ? "GET" : "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.requestId ? { "PayPal-Request-Id": options.requestId } : {}),
    },
    ...(options.body === undefined ? {} : { body: JSON.stringify(options.body) }),
    cache: "no-store",
    signal: AbortSignal.timeout(25000),
  })
  if (!response.ok) throw new PayPalError(response.status)
  return response.json() as Promise<T>
}

export async function fetchDownload(edition: EditionId, method: "HEAD" | "GET") {
  const source = downloadSource(edition)
  if (!source) throw new Error("Download unavailable")
  return fetch(source, {
    method,
    headers: process.env.SHOP_DOWNLOAD_BEARER_TOKEN
      ? { Authorization: `Bearer ${process.env.SHOP_DOWNLOAD_BEARER_TOKEN}` }
      : {},
    // Do not forward private storage credentials to redirects.
    redirect: "error",
    cache: "no-store",
    signal: AbortSignal.timeout(method === "HEAD" ? 10000 : 180000),
  })
}
