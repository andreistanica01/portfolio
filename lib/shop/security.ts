import { createHmac, timingSafeEqual } from "node:crypto"
import { z } from "zod"

const sessionSchema = z.object({
  kind: z.enum(["checkout", "receipt"]),
  orderId: z.string().regex(/^[A-Z0-9]{10,32}$/),
  edition: z.enum(["standard", "pro"]),
  amount: z.string().regex(/^\d+\.\d{2}$/),
  currency: z.literal("USD"),
  environment: z.enum(["sandbox", "live"]),
  expires: z.number().int().positive(),
  captureId: z.string().regex(/^[A-Z0-9]{10,32}$/).optional(),
})

export type PurchaseSession = z.infer<typeof sessionSchema>

export function signSession(value: PurchaseSession, secret: string) {
  if (secret.length < 32) throw new Error("A strong shop session secret is required")
  const payload = Buffer.from(JSON.stringify(sessionSchema.parse(value))).toString("base64url")
  const signature = createHmac("sha256", secret).update(payload).digest("base64url")
  return `${payload}.${signature}`
}

export function readSession(token: string | undefined, secret: string): PurchaseSession | null {
  if (!token || token.length > 2048 || secret.length < 32) return null
  try {
    const parts = token.split(".")
    if (parts.length !== 2) return null
    const [payload, signature] = parts
    const expected = createHmac("sha256", secret).update(payload).digest()
    const supplied = Buffer.from(signature, "base64url")
    if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) return null
    const session = sessionSchema.parse(JSON.parse(Buffer.from(payload, "base64url").toString()))
    return session.expires > Date.now() ? session : null
  } catch {
    return null
  }
}

type Money = { currency_code: string; value: string }
export type PayPalCapture = {
  id: string
  status: string
  amount: Money
  supplementary_data?: { related_ids?: { order_id?: string } }
}
export type PayPalOrder = {
  id: string
  status: string
  links?: { rel: string; href: string }[]
  purchase_units?: {
    custom_id?: string
    amount: Money
    payments?: { captures?: PayPalCapture[] }
  }[]
}

function matchesMoney(money: Money | undefined, session: PurchaseSession) {
  return money?.currency_code === session.currency &&
    /^\d+(\.\d{1,2})?$/.test(money.value) &&
    Math.round(Number(money.value) * 100) === Math.round(Number(session.amount) * 100)
}

export function matchesOrder(order: PayPalOrder, session: PurchaseSession) {
  const unit = order.purchase_units?.[0]
  return order.id === session.orderId && order.purchase_units?.length === 1 &&
    unit?.custom_id === `reel-director:${session.edition}` && matchesMoney(unit.amount, session)
}

export function completedCapture(order: PayPalOrder, session: PurchaseSession) {
  if (!matchesOrder(order, session) || order.status !== "COMPLETED") return null
  const captures = order.purchase_units?.[0].payments?.captures
  if (captures?.length !== 1) return null
  const capture = captures[0]
  return capture.status === "COMPLETED" && matchesMoney(capture.amount, session) ? capture : null
}

export function validReceiptCapture(capture: PayPalCapture, session: PurchaseSession) {
  const relatedOrder = capture.supplementary_data?.related_ids?.order_id
  return session.kind === "receipt" && capture.id === session.captureId &&
    capture.status === "COMPLETED" && matchesMoney(capture.amount, session) &&
    (!relatedOrder || relatedOrder === session.orderId)
}

export function isPayPalApprovalUrl(value: string, environment: "sandbox" | "live") {
  try {
    const url = new URL(value)
    const host = environment === "live" ? "www.paypal.com" : "www.sandbox.paypal.com"
    return url.protocol === "https:" && url.hostname === host && !url.username && !url.password
  } catch { return false }
}
