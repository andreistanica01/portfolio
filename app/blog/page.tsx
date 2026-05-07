"use client"

import { useState } from "react"
import Link from "next/link"
import { NoiseOverlay } from "@/components/noise-overlay"
import { BlogHero } from "@/components/blog/blog-hero"
import { ArticleCard } from "@/components/blog/article-card"
import { SiteNavbar } from "@/components/site-navbar"
import { Button } from "@/components/ui/button"
import { BLOG_CONTENT, SITE_CONFIG } from "@/lib/content"
import { BLOG_ARTICLES, getFeaturedArticle } from "@/lib/blog-data"

const categories = Object.entries(BLOG_CONTENT.categories) as [string, string][]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const featuredArticle = getFeaturedArticle()

  const filteredArticles = selectedCategory === "all"
    ? BLOG_ARTICLES.filter((a) => !a.featured)
    : BLOG_ARTICLES.filter((a) => a.category === selectedCategory && !a.featured)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoiseOverlay />

      <SiteNavbar activePage="blog" />

      <BlogHero />

      {/* Featured Article */}
      {featuredArticle && (
        <section className="px-4 md:px-6 lg:px-12 pb-12">
          <div className="max-w-7xl mx-auto">
            <ArticleCard article={featuredArticle} featured />
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="px-4 md:px-6 lg:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 text-sm border transition-all duration-300 ${
                  selectedCategory === key
                    ? "border-foreground bg-foreground text-background shadow-md"
                    : "border-border hover:border-foreground/50 hover:bg-accent/60 hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-sm"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 md:px-6 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-muted/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {BLOG_CONTENT.cta.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {BLOG_CONTENT.cta.description}
          </p>
          <div className="pt-4">
            <Link href="/work-together">
              <Button size="lg" className="px-8">
                {BLOG_CONTENT.cta.button}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-8 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-muted-foreground">
            {SITE_CONFIG.copyright}
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href={SITE_CONFIG.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Behance
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
