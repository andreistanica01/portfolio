"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Download, LoaderCircle, RefreshCw } from "lucide-react"
import { SITE_CONFIG } from "@/lib/content"
import { getEdition, REEL_DIRECTOR_PATH, type EditionId } from "@/lib/shop/catalog"

export function CheckoutResult({ orderId, cancelled, confirmedEdition }: { orderId: string | null; cancelled: boolean; confirmedEdition?: EditionId }) {
  const [state, setState] = useState<"checking" | "paid" | "cancelled" | "error">(confirmedEdition ? "paid" : cancelled ? "cancelled" : orderId ? "checking" : "error")
  const [message, setMessage] = useState(orderId ? "" : "No active checkout was found. Please start from the product page.")
  const [edition, setEdition] = useState<EditionId | null>(confirmedEdition || null)

  const verify = useCallback(async () => {
    if (!orderId) return
    setState("checking")
    try {
      const response = await fetch("/api/shop/paypal/capture", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ orderId }) })
      const data = await response.json()
      if (!response.ok || !data.paid || !getEdition(data.edition || "")) throw new Error(data.error || "Payment has not been confirmed yet. Please check again.")
      setEdition(data.edition)
      setState("paid")
      // The HttpOnly session lets a reload recover without keeping provider IDs in the URL.
      window.history.replaceState(null, "", `${REEL_DIRECTOR_PATH}/checkout`)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Payment status could not be confirmed. Please retry here before making another purchase.")
      setState("error")
    }
  }, [orderId])

  useEffect(() => { if (orderId && !cancelled && !confirmedEdition) void verify() }, [orderId, cancelled, confirmedEdition, verify])

  const product = edition ? getEdition(edition)! : null
  return <main className="rd-document rd-receipt">
    <Link href={REEL_DIRECTOR_PATH} className="rd-text-link"><ArrowLeft size={16} /> Back to Reel Director</Link>
    <h1>{state === "paid" ? "You're ready to create." : state === "checking" ? "Confirming your payment." : state === "cancelled" ? "Checkout cancelled." : "Let's check your order."}</h1>
    <div aria-live="polite">
      {state === "checking" && <><div className="rd-receipt-status"><LoaderCircle className="rd-spin" /> Checking with PayPal</div><p>Keep this page open while your payment is verified.</p></>}
      {state === "paid" && product && <>
        <div className="rd-receipt-status"><CheckCircle2 /> Payment confirmed</div>
        <p>Thank you for supporting Bevel Graphics. Download your addon below and keep your PayPal receipt for future support.</p>
        <dl><dt>Your addon</dt><dd>{product.name}</dd><dt>Order reference</dt><dd>{orderId}</dd><dt>Payment currency</dt><dd>USD</dd></dl>
        <a href={`/api/shop/download?edition=${edition}`} className="rd-button"><Download size={19} /> Download {product.name}</a>
        <h2>Install in Blender</h2><p>Open Preferences, go to Add-ons and choose Install from Disk. Select the downloaded ZIP, then enable Reel Director. Use Blender 4.2-5.2; Wool Dynamics in Pro requires Blender 5.2.</p>
        <p>Your download remains available in this browser for 7 days. Need it again later, or on another device? Email support with your PayPal receipt reference.</p>
      </>}
      {state === "cancelled" && <p>You can return to the product page whenever you are ready. If you completed payment in another tab, check its status here before buying again.</p>}
      {state === "error" && <p role="alert">{message}</p>}
      {(state === "error" || state === "cancelled") && <div className="rd-receipt-actions">{orderId && <button onClick={verify} className="rd-button"><RefreshCw size={17} /> Check payment status</button>}<Link href={`${REEL_DIRECTOR_PATH}#pricing`} className="rd-text-link">Return to editions <ArrowLeft size={15} /></Link></div>}
    </div>
    <h2>Order support</h2><p><a href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(`Reel Director order ${orderId || "help"}`)}`}>{SITE_CONFIG.email}</a></p><p>If a payment appears on your PayPal account but your download does not, contact us with the order reference. You do not need to buy again.</p>
  </main>
}
