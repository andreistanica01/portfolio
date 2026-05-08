import type { Metadata } from "next"
import { HomePageClient } from "@/components/home/home-page-client"
import { SITE_CONFIG } from "@/lib/content"

export const metadata: Metadata = {
  title: "Architectural Visualization Portfolio",
  description:
    "Architectural visualization portfolio featuring interior renders, exterior renders, 3D floor plans, and presentation visuals for residential and real estate projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Architectural Visualization Portfolio`,
    description:
      "Explore architectural visualization work including interior visualization, exterior renders, 3D floor plans, and photorealistic presentation imagery.",
    url: SITE_CONFIG.siteUrl,
    images: [
      {
        url: "/images/Project_Images/greenmarble1.webp",
        alt: "Bevel Graphics architectural visualization portfolio hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Architectural Visualization Portfolio`,
    description:
      "Explore architectural visualization work including interior visualization, exterior renders, 3D floor plans, and photorealistic presentation imagery.",
    images: ["/images/Project_Images/greenmarble1.webp"],
  },
}

export default function HomePage() {
  return <HomePageClient />
}
