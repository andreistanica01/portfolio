import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SITE_CONFIG } from "@/lib/content"
import { REEL_DIRECTOR_PATH } from "@/lib/shop/catalog"

export const metadata: Metadata = { title: "Shop Purchase Terms & Privacy", robots: { index: false, follow: true } }
export const dynamic = "force-dynamic"

export default function ShopTerms() {
  return <main className="rd-document">
    <Link href={REEL_DIRECTOR_PATH} className="rd-text-link"><ArrowLeft size={16} /> Reel Director</Link>
    <h1>Purchase terms & privacy</h1>
    <p>These terms apply to direct purchases of Reel Director and Reel Director Pro from Bevel Graphics. Marketplace purchases remain subject to the relevant marketplace terms.</p>
    <h2>Seller and contact</h2>
    <p>{process.env.SHOP_SELLER_NAME || SITE_CONFIG.name}<br />{process.env.SHOP_SELLER_ADDRESS}<br /><a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
    <h2>Your purchase</h2>
    <p>You are purchasing a digital Blender addon, supplied as a ZIP download. The selected edition and the total in USD are displayed before you approve payment. There is no recurring subscription. Any conversion applied by your payment provider is shown by that provider.</p>
    <p>Both editions include 12 months of product updates and support from the date of purchase. The purchased version remains usable after this period. Promotional renders and demonstration scenes are not part of the purchase unless explicitly included in the download.</p>
    <h2>Compatibility and license</h2>
    <p>The current release supports Blender 4.2 through 5.2. Wool Dynamics / Native Wool Style requires Blender 5.2; optional XPBD dynamics are experimental. Review the feature requirements before purchasing. Performance depends on your hardware and scene.</p>
    <p>The addon is distributed under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GNU General Public License</a>. The license included with the download governs the software. You can create personal and commercial work with the addon.</p>
    <h2>Payment and delivery</h2>
    <p>PayPal processes the payment on its own checkout. Card options depend on PayPal eligibility. After PayPal confirms a completed payment, return to this website to download the selected edition. Pending or unsuccessful payments do not unlock a download.</p>
    <p>Download access is retained in the same browser for 7 days. Keep your PayPal receipt. If you lose access, change devices, or need an update during the support period, email support with your payment reference. Never send your password or full payment card details.</p>
    <h2>Problems, cancellations and refunds</h2>
    <p>For a missing download, duplicate charge, compatibility question or refund request, contact {SITE_CONFIG.email} with your order reference and a description of the issue. Do not place a second order to fix a failed download. Any statutory consumer rights, including applicable withdrawal and remedies for defective digital content, remain unaffected by these terms.</p>
    <p>PayPal Buyer Protection may apply to eligible purchases subject to <a href="https://www.paypal.com/ro/legalhub/paypal/buyer-protection" target="_blank" rel="noopener noreferrer">PayPal&apos;s terms and exclusions</a>. It is not a blanket guarantee for every transaction.</p>
    <h2>Privacy for purchases</h2>
    <p>PayPal handles payment credentials. This website does not receive your card number or PayPal password. Order references, selected editions, amounts and payment status are used to verify purchases, deliver files and resolve support requests. PayPal may make buyer and transaction information available to the seller in its merchant records.</p>
    <p>Essential HttpOnly cookies retain checkout verification for up to 3 hours and verified download access for up to 7 days. They are used to complete the purchase and protect downloads. The portfolio also uses Vercel Analytics and Speed Insights for site performance and usage measurement.</p>
    <p>Payment information is processed under <a href="https://www.paypal.com/ro/legalhub/paypal/privacy-full" target="_blank" rel="noopener noreferrer">PayPal&apos;s privacy statement</a>. Transaction records may be retained where needed for accounting, disputes or legal obligations. Contact the seller for questions about your purchase data or applicable access, correction and deletion rights.</p>
  </main>
}
