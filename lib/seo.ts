import { SITE_CONFIG } from "@/lib/content"
import type { BlogArticle } from "@/lib/blog-data"
import { getArticleMetadata, getLocalizedArticle } from "@/lib/blog-data"
import type { Locale } from "@/lib/i18n"
import type { Project } from "@/lib/projects"
import { getLocalizedProject, getProjectMetadata } from "@/lib/projects"

export const getAbsoluteUrl = (path = "/") =>
  new URL(path, SITE_CONFIG.siteUrl).toString()

const getLanguageTag = (locale: Locale) => (locale === "ro" ? "ro-RO" : "en")
export const getOpenGraphLocale = (locale: Locale) =>
  locale === "ro" ? "ro_RO" : "en_US"

export const getWebsiteJsonLd = ({
  locale,
  description,
}: {
  locale: Locale
  description: string
}) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.siteUrl,
  description,
  inLanguage: getLanguageTag(locale),
})

export const getOrganizationJsonLd = ({
  locale,
  description,
}: {
  locale: Locale
  description: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.siteUrl,
  email: SITE_CONFIG.email,
  description,
  areaServed: "Worldwide",
  knowsAbout: [
    ...(locale === "ro"
      ? [
          "Vizualizare arhitecturala",
          "Vizualizare de interior",
          "Vizualizare de exterior",
          "Planuri 3D",
          "Vizualizare office",
          "Vizualizare hospitality",
        ]
      : [
          "Architectural visualization",
          "Interior visualization",
          "Exterior visualization",
          "3D floor plans",
          "Office visualization",
          "Hospitality visualization",
        ]),
  ],
  inLanguage: getLanguageTag(locale),
  sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.behance],
})

export const getBreadcrumbJsonLd = (
  items: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: getAbsoluteUrl(item.path),
  })),
})

export const getCollectionPageJsonLd = ({
  name,
  description,
  path,
  itemPaths,
  locale,
}: {
  name: string
  description: string
  path: string
  itemPaths: string[]
  locale: Locale
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: getAbsoluteUrl(path),
  inLanguage: getLanguageTag(locale),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: itemPaths.map((itemPath, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: getAbsoluteUrl(itemPath),
    })),
  },
})

export const getBlogArticleJsonLd = (
  article: BlogArticle,
  locale: Locale = "en",
) => {
  const localizedArticle = getLocalizedArticle(article, locale)
  const metadata = getArticleMetadata(article, locale)

  return ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: localizedArticle.title,
  description: metadata.description,
  image: [getAbsoluteUrl(localizedArticle.image)],
  datePublished: article.publishedAt,
  mainEntityOfPage: getAbsoluteUrl(`/blog/${article.slug}`),
  articleSection: article.category,
  inLanguage: getLanguageTag(locale),
  author: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: getAbsoluteUrl("/icon.svg"),
    },
  },
})
}

export const getProjectJsonLd = (
  project: Project,
  locale: Locale = "en",
) => {
  const localizedProject = getLocalizedProject(project, locale)
  const metadata = getProjectMetadata(project, locale)

  return ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: localizedProject.title,
  description: metadata.description,
  url: getAbsoluteUrl(`/project/${project.slug}`),
  image: localizedProject.images.map((image) => getAbsoluteUrl(image.image)),
  genre: localizedProject.type,
  keywords: [
    ...localizedProject.tools,
    localizedProject.type,
    ...(locale === "ro"
      ? ["vizualizare arhitecturala"]
      : ["architectural visualization"]),
  ],
  inLanguage: getLanguageTag(locale),
  creator: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
  },
})
}
