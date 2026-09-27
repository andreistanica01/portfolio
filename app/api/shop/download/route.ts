import { NextRequest, NextResponse } from "next/server"
import { getEdition } from "@/lib/shop/catalog"
import { readSession, validReceiptCapture, type PayPalCapture } from "@/lib/shop/security"
import { fetchDownload, noStoreHeaders, paypalEnvironment, paypalRequest, receiptCookie, shopSecret } from "@/lib/shop/paypal"

export const runtime = "nodejs"
export const maxDuration = 300

export async function GET(request: NextRequest) {
  const edition = getEdition(request.nextUrl.searchParams.get("edition") || "")
  const session = edition ? readSession(request.cookies.get(receiptCookie(edition.id))?.value, shopSecret()) : null
  if (!edition || !session || session.kind !== "receipt" || !session.captureId || session.edition !== edition.id || session.environment !== paypalEnvironment()) {
    return NextResponse.json({ error: "A verified purchase is required. Contact bevel.graphics1@gmail.com with your PayPal receipt for download recovery." }, { status: 401, headers: noStoreHeaders })
  }
  try {
    const capture = await paypalRequest<PayPalCapture>(`/v2/payments/captures/${session.captureId}`)
    if (!validReceiptCapture(capture, session)) return NextResponse.json({ error: "This payment is not eligible for a download. Please contact support." }, { status: 403, headers: noStoreHeaders })
    const file = await fetchDownload(edition.id, "GET")
    if (!file.ok || !file.body || file.headers.get("content-type")?.includes("text/html")) throw new Error("Download unavailable")
    return new Response(file.body, { headers: {
      ...noStoreHeaders,
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${edition.filename}"`,
      "X-Content-Type-Options": "nosniff",
    } })
  } catch {
    return NextResponse.json({ error: "Your download is temporarily unavailable. Retry shortly or contact bevel.graphics1@gmail.com with your PayPal receipt. Do not purchase again." }, { status: 502, headers: noStoreHeaders })
  }
}
