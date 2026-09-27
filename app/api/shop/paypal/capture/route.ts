import { NextRequest, NextResponse } from "next/server"
import { completedCapture, matchesOrder, readSession, signSession, type PayPalOrder } from "@/lib/shop/security"
import { CHECKOUT_COOKIE, RECEIPT_MAX_AGE, cookieOptions, noStoreHeaders, paypalEnvironment, paypalRequest, receiptCookie, shopOrigin, shopSecret } from "@/lib/shop/paypal"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== shopOrigin()) return NextResponse.json({ error: "Invalid checkout origin." }, { status: 403, headers: noStoreHeaders })
  const body = await request.json().catch(() => null)
  const session = readSession(request.cookies.get(CHECKOUT_COOKIE)?.value, shopSecret())
  if (!session || session.kind !== "checkout" || session.orderId !== body?.orderId || session.environment !== paypalEnvironment()) {
    return NextResponse.json({ error: "This checkout session has expired or belongs to another order. Contact support with your PayPal reference if you already paid." }, { status: 401, headers: noStoreHeaders })
  }
  try {
    let order = await paypalRequest<PayPalOrder>(`/v2/checkout/orders/${session.orderId}`)
    if (!matchesOrder(order, session)) return NextResponse.json({ error: "Order details could not be verified. Please contact support." }, { status: 409, headers: noStoreHeaders })
    if (order.status === "APPROVED") {
      try {
        // Repeated callbacks share an idempotency key and cannot create a second charge.
        await paypalRequest<PayPalOrder>(`/v2/checkout/orders/${session.orderId}/capture`, { body: {}, requestId: `capture-${session.orderId}` })
      } catch {
        // Capture may have succeeded even if the response was interrupted.
      }
      // Capture responses can omit purchase-unit details. Re-read the complete order.
      order = await paypalRequest<PayPalOrder>(`/v2/checkout/orders/${session.orderId}`)
    }
    const capture = completedCapture(order, session)
    if (!capture) return NextResponse.json({ pending: true, error: "Payment is not confirmed yet. Check its status again before starting another purchase." }, { status: 202, headers: noStoreHeaders })
    const receipt = signSession({ ...session, kind: "receipt", captureId: capture.id, expires: Date.now() + RECEIPT_MAX_AGE * 1000 }, shopSecret())
    const response = NextResponse.json({ paid: true, edition: session.edition, orderId: session.orderId }, { headers: noStoreHeaders })
    response.cookies.set(receiptCookie(session.edition), receipt, cookieOptions(RECEIPT_MAX_AGE))
    return response
  } catch {
    return NextResponse.json({ error: "We could not confirm the payment status. Please retry here; do not start another purchase." }, { status: 502, headers: noStoreHeaders })
  }
}
