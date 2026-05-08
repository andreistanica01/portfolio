import { SITE_CONFIG } from "@/lib/content"
import type { BlogArticle } from "@/lib/blog-data"
import type { Project } from "@/lib/projects"

export const getAbsoluteUrl = (path = "/") =>
  new URL(path, SITE_CONFIG.siteUrl).toString()

export const getWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.siteUrl,
  description: SITE_CONFIG.description,
  inLanguage: "en",
})

export const getOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.siteUrl,
  email: SITE_CONFIG.email,
  description: SITE_CONFIG.description,
  sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.behance],
})

export const getBlogArticleJsonLd = (article: BlogArticle) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.excerpt,
  image: [getAbsoluteUrl(article.image)],
  datePublished: article.publishedAt,
  mainEntityOfPage: getAbsoluteUrl(`/blog/${article.slug}`),
  articleSection: article.category,
  inLanguage: "en",
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

export const getProjectJsonLd = (project: Project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.metaDescription ?? project.description,
  url: getAbsoluteUrl(`/project/${project.slug}`),
  image: project.images.map((image) => getAbsoluteUrl(image.image)),
  genre: project.type,
  keywords: [...project.tools, project.type, "architectural visualization"],
  inLanguage: "en",
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
