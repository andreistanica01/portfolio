import { randomUUID } from "node:crypto"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { getEdition, REEL_DIRECTOR_PATH } from "@/lib/shop/catalog"
import { isPayPalApprovalUrl, signSession, type PayPalOrder } from "@/lib/shop/security"
import { CHECKOUT_COOKIE, checkoutAvailability, cookieOptions, releaseAvailable, noStoreHeaders, paypalEnvironment, paypalRequest, shopOrigin, shopSecret } from "@/lib/shop/paypal"

export const runtime = "nodejs"
const inputSchema = z.object({ edition: z.enum(["standard", "pro"]), acceptedTerms: z.literal(true) }).strict()

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== shopOrigin()) {
    return NextResponse.json({ error: "Please start checkout from the product page." }, { status: 403, headers: noStoreHeaders })
  }
  const input = inputSchema.safeParse(await request.json().catch(() => null))
  if (!input.success) return NextResponse.json({ error: "Choose an edition and accept the purchase terms." }, { status: 400, headers: noStoreHeaders })
  const edition = getEdition(input.data.edition)!
  if (!checkoutAvailability()[edition.id]) {
    return NextResponse.json({ error: "Direct checkout is temporarily unavailable. Please try again later or buy on Superhive." }, { status: 503, headers: noStoreHeaders })
  }
  try {
    // Check delivery before asking a customer to pay.
    if (!await releaseAvailable(edition.id)) throw new Error("Download unavailable")
    const order = await paypalRequest<PayPalOrder>("/v2/checkout/orders", {
      requestId: randomUUID(),
      body: {
        intent: "CAPTURE",
        purchase_units: [{
          custom_id: `reel-director:${edition.id}`,
          description: `${edition.name} - Blender addon, digital download`,
          amount: {
            currency_code: edition.currency,
            value: edition.price,
            breakdown: { item_total: { currency_code: edition.currency, value: edition.price } },
          },
          items: [{ name: edition.name, quantity: "1", category: "DIGITAL_GOODS", unit_amount: { currency_code: edition.currency, value: edition.price } }],
        }],
        payment_source: { paypal: { experience_context: {
          brand_name: "Bevel Graphics",
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
          return_url: `${shopOrigin()}${REEL_DIRECTOR_PATH}/checkout`,
          cancel_url: `${shopOrigin()}${REEL_DIRECTOR_PATH}/checkout?cancelled=1`,
        } } },
      },
    })
    const approval = order.links?.find((link) => link.rel === "payer-action" || link.rel === "approve")?.href
    if (!approval || !isPayPalApprovalUrl(approval, paypalEnvironment())) throw new Error("Missing PayPal approval")
    const session = signSession({
      kind: "checkout", orderId: order.id, edition: edition.id,
      amount: edition.price, currency: edition.currency, environment: paypalEnvironment(),
      expires: Date.now() + 3 * 60 * 60 * 1000,
    }, shopSecret())
    const response = NextResponse.json({ approvalUrl: approval }, { headers: noStoreHeaders })
    response.cookies.set(CHECKOUT_COOKIE, session, cookieOptions(3 * 60 * 60))
    return response
  } catch {
    return NextResponse.json({ error: "Checkout could not start. No payment was taken. Please try again later." }, { status: 502, headers: noStoreHeaders })
  }
}
