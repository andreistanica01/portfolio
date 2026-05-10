import type { Metadata } from "next"
import { BlogPageClient } from "@/components/blog/blog-page-client"
import { SITE_CONFIG } from "@/lib/content"
import { BLOG_ARTICLES } from "@/lib/blog-data"
import { getCollectionPageJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Architectural visualization blog with guides on interior visualization, office and hospitality presentation, 3D floor plans, client preparation, and realistic render workflow.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} Blog | Architectural Visualization Guides`,
    description:
      "Read architectural visualization guides about interior concepts, office and hospitality presentation, 3D floor plans, client preparation, and realistic render workflow.",
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
      "Read architectural visualization guides about interior concepts, office and hospitality presentation, 3D floor plans, client preparation, and realistic render workflow.",
    images: ["/images/Project_Images/exteriorsunset2.webp"],
  },
}

export default function BlogPage() {
  const blogCollectionJsonLd = getCollectionPageJsonLd({
    name: `${SITE_CONFIG.name} Blog`,
    description: metadata.description as string,
    path: "/blog",
    itemPaths: BLOG_ARTICLES.map((article) => `/blog/${article.slug}`),
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionJsonLd) }}
      />
      <BlogPageClient />
    </>
  )
}
