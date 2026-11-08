import type { MetadataRoute } from "next"
import { BLOG_ARTICLES } from "@/lib/blog-data"
import { SITE_CONFIG } from "@/lib/content"
import { PROJECTS } from "@/lib/projects"
import { REEL_CONTENT_UPDATED_AT, REEL_DIRECTOR_PATH } from "@/lib/shop/catalog"
import { AURA_PATH, AURA_UPDATED_AT, AURA_IMAGE_ROOT } from "@/lib/shop/product-aura"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_CONFIG.siteUrl}/shop/blender-to-obs`, lastModified: new Date("2026-11-08"), images: [`${SITE_CONFIG.siteUrl}/images/blender-to-obs/cover.webp`], changeFrequency: "monthly", priority: 0.95 },
    {
      url: `${SITE_CONFIG.siteUrl}/shop`,
      lastModified: new Date("2026-11-08"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.siteUrl}${AURA_PATH}`,
      lastModified: new Date(AURA_UPDATED_AT),
      images: [`${SITE_CONFIG.siteUrl}${AURA_IMAGE_ROOT}product-aura.webp`],
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_CONFIG.siteUrl}${REEL_DIRECTOR_PATH}`,
      lastModified: new Date(REEL_CONTENT_UPDATED_AT),
      images: [`${SITE_CONFIG.siteUrl}/images/secondary/reel-director-thumbnail.webp`],
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: SITE_CONFIG.siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/blog`,
      lastModified: new Date(BLOG_ARTICLES.map((article) => article.updatedAt ?? article.publishedAt).sort().at(-1)!),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/work-together`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_CONFIG.siteUrl}/project/${project.slug}`,
    images: [new URL(project.previewImage, SITE_CONFIG.siteUrl).toString()],
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${SITE_CONFIG.siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    images: [new URL(article.image, SITE_CONFIG.siteUrl).toString()],
    changeFrequency: "monthly",
    priority: article.featured ? 0.85 : 0.75,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
