import type { Metadata } from "next"
import { cookies } from "next/headers"
import { CheckoutResult } from "@/components/shop/checkout-result"
import { CHECKOUT_COOKIE, paypalEnvironment, receiptCookie, shopSecret } from "@/lib/shop/paypal"
import { readSession } from "@/lib/shop/security"
import { REEL_EDITIONS } from "@/lib/shop/catalog"

export const metadata: Metadata = {
  title: "Reel Director Checkout",
  alternates: { canonical: "/shop/reel-director/checkout" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
}

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams
  const jar = await cookies()
  const session = readSession(jar.get(CHECKOUT_COOKIE)?.value, shopSecret())
  const requestedOrder = typeof params.token === "string" ? params.token : session?.orderId
  const receipt = REEL_EDITIONS.map((edition) => readSession(jar.get(receiptCookie(edition.id))?.value, shopSecret()))
    .filter((value) => value?.kind === "receipt" && value.captureId && value.environment === paypalEnvironment() && (!requestedOrder || value.orderId === requestedOrder))
    .sort((a, b) => b!.expires - a!.expires)[0]
  const cancelled = params.cancelled === "1"
  return <CheckoutResult orderId={requestedOrder || receipt?.orderId || null} cancelled={cancelled} confirmedEdition={!cancelled ? receipt?.edition : undefined} />
}
