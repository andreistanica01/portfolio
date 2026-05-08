import type { Metadata } from "next"
import { BlogPageClient } from "@/components/blog/blog-page-client"
import { SITE_CONFIG } from "@/lib/content"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Architectural visualization guides, workflow articles, and client resources covering interior visualization, 3D floor plans, lighting, and presentation renders.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} Blog | Architectural Visualization Guides`,
    description:
      "Read architectural visualization guides about interior concepts, 3D floor plans, project preparation, lighting, and ArchViz workflow.",
    url: `${SITE_CONFIG.siteUrl}/blog`,
    images: [
      {
        url: "/images/Project_Images/exteriorsunset2.webp",
        alt: "Bevel Graphics blog architectural visualization article preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} Blog | Architectural Visualization Guides`,
    description:
      "Read architectural visualization guides about interior concepts, 3D floor plans, project preparation, lighting, and ArchViz workflow.",
    images: ["/images/Project_Images/exteriorsunset2.webp"],
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
