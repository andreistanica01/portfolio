import { SITE_CONFIG } from "@/lib/content"
import type { BlogArticle } from "@/lib/blog-data"
import { getArticleMetadata, getLocalizedArticle } from "@/lib/blog-data"
import type { Locale } from "@/lib/i18n"
import type { Project } from "@/lib/projects"
import { getLocalizedProject, getProjectMetadata } from "@/lib/projects"
import { REEL_DIRECTOR_PATH } from "@/lib/shop/catalog"

export const getAbsoluteUrl = (path = "/") =>
  new URL(path, SITE_CONFIG.siteUrl).toString()

export const ORGANIZATION_ID = getAbsoluteUrl("/#organization")
export const WEBSITE_ID = getAbsoluteUrl("/#website")

export const serializeJsonLd = (value: unknown) =>
  JSON.stringify(value).replace(/</g, "\\u003c")

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
  "@id": WEBSITE_ID,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.siteUrl,
  description,
  inLanguage: getLanguageTag(locale),
  publisher: { "@id": ORGANIZATION_ID },
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
  "@id": ORGANIZATION_ID,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.siteUrl,
  email: SITE_CONFIG.email,
  logo: getAbsoluteUrl("/apple-icon.png"),
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
          "Blender addons",
          "Reel Director",
          "3D content creation",
        ]),
  ],
  sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.behance, SITE_CONFIG.social.superhive],
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
  "@id": `${getAbsoluteUrl(path)}#webpage`,
  name,
  description,
  url: getAbsoluteUrl(path),
  isPartOf: { "@id": WEBSITE_ID },
  publisher: { "@id": ORGANIZATION_ID },
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
  const articleUrl = getAbsoluteUrl(`/blog/${article.slug}`)
  const faqs = localizedArticle.content.flatMap((section) =>
    section.type === "faq" ? section.faqs ?? [] : [],
  )

  const articleNode = {
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: localizedArticle.title,
    description: metadata.description,
    url: articleUrl,
    image: [getAbsoluteUrl(localizedArticle.image)],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: articleUrl,
    articleSection: article.category,
    keywords: localizedArticle.keywords,
    about: article.relatedProduct ? [{
      "@type": "SoftwareApplication",
      "@id": getAbsoluteUrl(`${REEL_DIRECTOR_PATH}#${article.relatedProduct}`),
      name: article.relatedProduct === "pro" ? "Reel Director Pro" : "Reel Director",
      url: getAbsoluteUrl(REEL_DIRECTOR_PATH),
    }] : localizedArticle.keywords?.slice(0, 6).map((name) => ({
      "@type": "Thing",
      name,
    })),
    isAccessibleForFree: true,
    inLanguage: getLanguageTag(locale),
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_CONFIG.name,
      url: getAbsoluteUrl("/#about"),
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteUrl("/apple-icon.png"),
      },
    },
  }

  const faqNode = faqs.length
    ? {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        url: articleUrl,
        inLanguage: getLanguageTag(locale),
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null

  return {
    "@context": "https://schema.org",
    "@graph": faqNode ? [articleNode, faqNode] : [articleNode],
  }
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
  "@id": getAbsoluteUrl(`/project/${project.slug}#project`),
  name: localizedProject.title,
  description: metadata.description,
  url: getAbsoluteUrl(`/project/${project.slug}`),
  image: localizedProject.images.map((image) => getAbsoluteUrl(image.image)),
  genre: localizedProject.type,
  keywords: [
    ...localizedProject.tools,
    localizedProject.type,
  ],
  inLanguage: getLanguageTag(locale),
  creator: {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_CONFIG.name,
  },
  publisher: {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
  },
})
}
