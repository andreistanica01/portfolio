import { signSession } from "@/lib/shop/security"
import { noStoreHeaders, shopSecret } from "@/lib/shop/paypal"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const maxDuration = 60

const origin = "https://codex-paypal-sandbox--bevelgraphics.netlify.app"

export async function GET() {
  if (process.env.PAYPAL_ENVIRONMENT !== "sandbox" || process.env.SHOP_SITE_URL !== origin ||
      process.env.REEL_DIRECTOR_BLOB_KEY !== "sandbox/2026-09-30/standard-test.zip" ||
      process.env.REEL_DIRECTOR_PRO_BLOB_KEY !== "sandbox/2026-09-30/pro-test.zip") {
    return new Response(null, { status: 404, headers: noStoreHeaders })
  }

  // Fixed sandbox transactions only; never accept account or file IDs from callers.
  const results = []
  try {
    for (const purchase of [
      { edition: "pro" as const, amount: "16.50", orderId: "6EH020943H9387502", captureId: "781622359E743520M", expected: 200 },
      { edition: "standard" as const, amount: "12.00", orderId: "1PK74664916905158", captureId: "5XW523664F596102Y", expected: 403 },
    ]) {
      const { expected, ...details } = purchase
      const receipt = signSession({ ...details, kind: "receipt", currency: "USD", environment: "sandbox", expires: Date.now() + 60000 }, shopSecret())
      const response = await fetch(`${origin}/api/shop/download?edition=${purchase.edition}`, {
        headers: { Cookie: `rd_receipt_${purchase.edition}=${receipt}` },
        cache: "no-store", redirect: "error", signal: AbortSignal.timeout(25000),
      })
      results.push({ edition: purchase.edition, status: response.status, expected, passed: response.status === expected })
      await response.body?.cancel()
    }
    return Response.json({ passed: results.every(result => result.passed), results }, { headers: noStoreHeaders })
  } catch {
    return Response.json({ passed: false, results, error: "Sandbox verification could not finish." }, { status: 502, headers: noStoreHeaders })
  }
}
