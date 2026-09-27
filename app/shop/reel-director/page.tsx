import type { Metadata } from "next"
import { ReelDirectorPage } from "@/components/shop/reel-director-page"
import { SITE_CONFIG } from "@/lib/content"
import { REEL_DIRECTOR_PATH, REEL_EDITIONS, REEL_FAQS, SUPERHIVE_URL } from "@/lib/shop/catalog"
import { checkoutAvailability } from "@/lib/shop/paypal"

const title = "Reel Director | Blender Animation & Content Creation Addon"
const description = "Turn Blender scenes into reels with Reel Director. Camera animation, clay renders, viewport styles and Pro Wool Dynamics. Compare editions and buy from Bevel Graphics."

export const metadata: Metadata = {
  title: { absolute: `${title} | Bevel Graphics` },
  description,
  alternates: { canonical: REEL_DIRECTOR_PATH },
  keywords: ["Reel Director", "Reel Director Pro", "Blender addon", "Blender camera animation", "Blender clay render", "Wool Dynamics", "Blender reels addon"],
  openGraph: {
    type: "website", title, description, url: REEL_DIRECTOR_PATH, locale: "en_US",
    images: [{ url: "/images/secondary/reel-director-thumbnail.webp", width: 1920, height: 1080, alt: "Reel Director by Bevel Graphics, Blender addon for 3D content creators" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/secondary/reel-director-thumbnail.webp"] },
}

export const dynamic = "force-dynamic"

export default function Page() {
  const availability = checkoutAvailability()
  const url = `${SITE_CONFIG.siteUrl}${REEL_DIRECTOR_PATH}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...REEL_EDITIONS.map((edition) => ({
        "@type": "SoftwareApplication",
        "@id": `${url}#${edition.id}`,
        name: edition.name,
        url: `${url}#pricing`,
        description: `${edition.description} ${edition.features.join(". ")}.`,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Windows, macOS, Linux",
        softwareRequirements: "Blender 4.2-5.2. Wool Dynamics requires Blender 5.2.",
        image: `${SITE_CONFIG.siteUrl}/images/secondary/reel-director-thumbnail.webp`,
        creator: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl },
        sameAs: SUPERHIVE_URL,
        license: "https://www.gnu.org/licenses/gpl-3.0.html",
        ...(availability[edition.id] && availability.environment === "live" ? {
          offers: { "@type": "Offer", price: edition.price, priceCurrency: edition.currency, availability: "https://schema.org/InStock", url: `${url}#pricing`, seller: { "@type": "Organization", name: SITE_CONFIG.name } },
        } : {}),
      })),
      { "@type": "FAQPage", mainEntity: REEL_FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Bevel Graphics", item: SITE_CONFIG.siteUrl },
        { "@type": "ListItem", position: 2, name: "Reel Director", item: url },
      ] },
    ],
  }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <ReelDirectorPage availability={availability} />
  </>
}
