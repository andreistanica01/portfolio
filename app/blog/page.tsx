"use client"

import { useState } from "react"
import Link from "next/link"
import { NoiseOverlay } from "@/components/noise-overlay"
import { BlogHero } from "@/components/blog/blog-hero"
import { ArticleCard } from "@/components/blog/article-card"
import { Button } from "@/components/ui/button"
import { BLOG_CONTENT, SITE_CONFIG, NAV_LINKS } from "@/lib/content"
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="border-b border-border/20 bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
              <Link
                href="/"
                className="text-base md:text-lg font-bold tracking-tight hover:text-muted-foreground transition-colors"
              >
                {SITE_CONFIG.name}
              </Link>
              <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                <Link href="/" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  {NAV_LINKS.home}
                </Link>
                <Link href="/#work" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  {NAV_LINKS.work}
                </Link>
                <Link href="/blog" className="text-xs md:text-sm text-foreground font-medium">
                  {NAV_LINKS.blog}
                </Link>
                <Link href="/work-together" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  {NAV_LINKS.workTogether}
                </Link>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors break-all md:break-normal"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </nav>

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
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground/50"
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
