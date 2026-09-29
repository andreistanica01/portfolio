import type { Metadata } from "next"
import { ReelDirectorPage } from "@/components/shop/reel-director-page"
import { SITE_CONFIG } from "@/lib/content"
import { REEL_CONTENT_UPDATED_AT, REEL_DESCRIPTION, REEL_DIRECTOR_PATH, REEL_EDITIONS, REEL_FAQS, SUPERHIVE_URL } from "@/lib/shop/catalog"
import { checkoutAvailability } from "@/lib/shop/paypal"
import { ORGANIZATION_ID, WEBSITE_ID, getBreadcrumbJsonLd, serializeJsonLd } from "@/lib/seo"

const title = "Reel Director: Blender Animation Addon"
const description = "Create Blender reels with camera animation, clay renders and Pro Wool Dynamics. Compare Reel Director Standard and Pro, features, compatibility and pricing."

export const metadata: Metadata = {
  title: { absolute: `${title} | Bevel Graphics` },
  description,
  alternates: { canonical: REEL_DIRECTOR_PATH },
  keywords: ["Reel Director", "Reel Director Pro", "Blender addon", "Blender camera animation", "Blender clay render", "Wool Dynamics", "Blender reels addon"],
  openGraph: {
    type: "website", title, description, url: REEL_DIRECTOR_PATH, locale: "en_US", siteName: SITE_CONFIG.name,
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
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description: REEL_DESCRIPTION,
        inLanguage: "en",
        dateModified: REEL_CONTENT_UPDATED_AT,
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntity: REEL_EDITIONS.map((edition) => ({ "@id": `${url}#${edition.id}` })),
      },
      ...REEL_EDITIONS.map((edition) => ({
        "@type": "SoftwareApplication",
        "@id": `${url}#${edition.id}`,
        name: edition.name,
        url: `${url}#${edition.id}`,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        description: `${edition.description} ${edition.features.join(". ")}.`,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Windows, macOS, Linux",
        softwareRequirements: edition.id === "pro" ? "Blender 4.2-5.2. Wool Dynamics requires Blender 5.2; optional XPBD dynamics are experimental." : "Blender 4.2-5.2; Cycles and Eevee.",
        featureList: [...edition.features],
        inLanguage: "en",
        image: `${SITE_CONFIG.siteUrl}/images/secondary/reel-director-thumbnail.webp`,
        creator: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        sameAs: SUPERHIVE_URL,
        license: "https://www.gnu.org/licenses/gpl-3.0.html",
        ...(availability[edition.id] && availability.environment === "live" ? {
          offers: { "@type": "Offer", price: edition.price, priceCurrency: edition.currency, availability: "https://schema.org/InStock", url: `${url}#${edition.id}`, seller: { "@id": ORGANIZATION_ID } },
        } : {}),
      })),
      { "@type": "FAQPage", "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` }, inLanguage: "en", mainEntity: REEL_FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      getBreadcrumbJsonLd([{ name: SITE_CONFIG.name, path: "/" }, { name: "Reel Director", path: REEL_DIRECTOR_PATH }]),
    ],
  }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
    <ReelDirectorPage availability={availability} />
  </>
}
