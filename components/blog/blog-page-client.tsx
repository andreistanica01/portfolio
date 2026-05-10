"use client"

import { useState } from "react"
import Link from "next/link"
import { NoiseOverlay } from "@/components/noise-overlay"
import { BlogHero } from "@/components/blog/blog-hero"
import { ArticleCard } from "@/components/blog/article-card"
import { SiteNavbar } from "@/components/site-navbar"
import { useLocaleDictionary } from "@/components/locale-provider"
import { Button } from "@/components/ui/button"
import {
  BLOG_ARTICLES,
  getFeaturedArticle,
  getLocalizedArticle,
} from "@/lib/blog-data"

export function BlogPageClient() {
  const { blogContent, siteConfig, locale } = useLocaleDictionary()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const featuredArticleRaw = getFeaturedArticle()
  const featuredArticle = featuredArticleRaw
    ? getLocalizedArticle(featuredArticleRaw, locale)
    : undefined
  const categories = Object.entries(blogContent.categories) as [string, string][]
  const localizedArticles = BLOG_ARTICLES.map((article) =>
    getLocalizedArticle(article, locale),
  )

  const filteredArticles =
    selectedCategory === "all"
      ? localizedArticles.filter((a) => !a.featured)
      : localizedArticles.filter(
          (a) => a.category === selectedCategory && !a.featured,
        )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoiseOverlay />

      <SiteNavbar activePage="blog" />

      <BlogHero />

      {featuredArticle && (
        <section className="px-4 pb-12 md:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <ArticleCard article={featuredArticle} featured />
          </div>
        </section>
      )}

      <section className="px-4 pb-8 md:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`border px-4 py-2 text-sm transition-all duration-300 ${
                  selectedCategory === key
                    ? "border-foreground bg-foreground text-background shadow-md"
                    : "border-border hover:-translate-y-0.5 hover:border-foreground/50 hover:bg-accent/60 hover:text-accent-foreground hover:shadow-sm"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-6 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">
                {locale === "ro"
                  ? "Nu exista articole in aceasta categorie momentan."
                  : "No articles in this category yet."}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted/10 px-4 py-16 md:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {blogContent.cta.title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {blogContent.cta.description}
          </p>
          <div className="pt-4">
            <Link href="/work-together">
              <Button size="lg" className="px-8">
                {blogContent.cta.button}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-6 md:px-6 md:py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground md:text-sm">
            {siteConfig.copyright}
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            >
              Behance
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
