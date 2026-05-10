import type { Metadata } from "next"
import { HomePageClient } from "@/components/home/home-page-client"
import { SITE_CONFIG } from "@/lib/content"
import { PROJECTS } from "@/lib/projects"
import { getCollectionPageJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Architectural Visualization Portfolio",
  description:
    "Architectural visualization portfolio featuring luxury villas, residential interiors, office visualization, hospitality renders, and presentation imagery for design and real estate marketing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Architectural Visualization Portfolio`,
    description:
      "Explore architectural visualization work across luxury villas, residential interiors, office spaces, hospitality concepts, and photorealistic presentation imagery.",
    url: SITE_CONFIG.siteUrl,
    images: [
      {
        url: "/images/Project_Images/elegantvilla1.webp",
        alt: "Bevel Graphics architectural visualization portfolio hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Architectural Visualization Portfolio`,
    description:
      "Explore architectural visualization work across luxury villas, residential interiors, office spaces, hospitality concepts, and photorealistic presentation imagery.",
    images: ["/images/Project_Images/elegantvilla1.webp"],
  },
}

export default function HomePage() {
  const portfolioJsonLd = getCollectionPageJsonLd({
    name: `${SITE_CONFIG.name} Portfolio`,
    description: metadata.description as string,
    path: "/",
    itemPaths: PROJECTS.map((project) => `/project/${project.slug}`),
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <HomePageClient />
    </>
  )
}
