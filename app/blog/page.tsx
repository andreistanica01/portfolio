import type { Metadata } from "next"
import { BlogPageClient } from "@/components/blog/blog-page-client"
import { SITE_CONFIG } from "@/lib/content"
import { BLOG_ARTICLES } from "@/lib/blog-data"
import { getRequestLocale } from "@/lib/i18n"
import { getDictionary } from "@/lib/locale-dictionary"
import { getCollectionPageJsonLd, getOpenGraphLocale } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  const isRomanian = locale === "ro"

  return {
    title: "Blog",
    description: isRomanian
      ? "Blog de vizualizare arhitecturala cu ghiduri despre vizualizare de interior, office si hospitality, planuri 3D, pregatirea materialelor clientului si workflow de randare realista."
      : "Architectural visualization blog with guides on interior visualization, office and hospitality presentation, 3D floor plans, client preparation, and realistic render workflow.",
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      locale: getOpenGraphLocale(locale),
      title: isRomanian
        ? `${SITE_CONFIG.name} Blog | Ghiduri de Vizualizare Arhitecturala`
        : `${SITE_CONFIG.name} Blog | Architectural Visualization Guides`,
      description: isRomanian
        ? "Citeste ghiduri de vizualizare arhitecturala despre concepte de interior, prezentare office si hospitality, planuri 3D, pregatirea clientului si workflow de randare realista."
        : "Read architectural visualization guides about interior concepts, office and hospitality presentation, 3D floor plans, client preparation, and realistic render workflow.",
      url: `${SITE_CONFIG.siteUrl}/blog`,
      images: [
        {
          url: "/images/Project_Images/exteriorsunset2.webp",
          alt: isRomanian
            ? "Imagine preview pentru articolele de blog Bevel Graphics"
            : "Bevel Graphics blog architectural visualization article preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isRomanian
        ? `${SITE_CONFIG.name} Blog | Ghiduri de Vizualizare Arhitecturala`
        : `${SITE_CONFIG.name} Blog | Architectural Visualization Guides`,
      description: isRomanian
        ? "Citeste ghiduri de vizualizare arhitecturala despre concepte de interior, prezentare office si hospitality, planuri 3D, pregatirea clientului si workflow de randare realista."
        : "Read architectural visualization guides about interior concepts, office and hospitality presentation, 3D floor plans, client preparation, and realistic render workflow.",
      images: ["/images/Project_Images/exteriorsunset2.webp"],
    },
  }
}

export default async function BlogPage() {
  const locale = await getRequestLocale()
  const { blogContent } = getDictionary(locale)
  const blogCollectionJsonLd = getCollectionPageJsonLd({
    name: `${SITE_CONFIG.name} Blog`,
    description: blogContent.hero.subtitle,
    path: "/blog",
    itemPaths: BLOG_ARTICLES.map((article) => `/blog/${article.slug}`),
    locale,
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
