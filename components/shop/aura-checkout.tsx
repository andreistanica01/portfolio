"use client"

import { useState } from "react"
import Link from "next/link"

export function AuraCheckout({ available }: { available: boolean }) {
  const [accepted, setAccepted] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  async function checkout() {
    setBusy(true)
    setError("")
    try {
      const response = await fetch("/api/shop/paypal", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ edition: "product-aura", acceptedTerms: accepted }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Checkout could not start.")
      const url = new URL(data.approvalUrl)
      if (url.protocol !== "https:" || !["www.paypal.com", "www.sandbox.paypal.com"].includes(url.hostname)) throw new Error("Invalid checkout address.")
      window.location.assign(url.href)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Please try again.")
      setBusy(false)
    }
  }
  return <div>
    <p><strong>$10 USD</strong> / Product Aura 0.18.3 and all ten decoration assets.</p>
    {available ? <>
      <p><label><input type="checkbox" checked={accepted} onChange={event => setAccepted(event.target.checked)} disabled={busy} /> I agree to the <Link href="/shop/terms">purchase terms</Link> and request immediate digital delivery.</label></p>
      <button className="aura-button" disabled={!accepted || busy} onClick={checkout}>{busy ? "Opening PayPal..." : "Pay with PayPal - $10 USD"}</button>
    </> : <p>Direct PayPal checkout is temporarily unavailable. Purchase on Gumroad below.</p>}
    {error && <p role="alert">{error}</p>}
  </div>
}
