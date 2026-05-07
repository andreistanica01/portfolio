import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { NoiseOverlay } from "@/components/noise-overlay"
import { FAQBlock } from "@/components/blog/faq-block"
import { ArticleCard } from "@/components/blog/article-card"
import { SiteNavbar } from "@/components/site-navbar"
import { Button } from "@/components/ui/button"
import { BLOG_CONTENT, SITE_CONFIG } from "@/lib/content"
import { BLOG_ARTICLES, getArticleBySlug } from "@/lib/blog-data"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Article Not Found | Bevel Graphics",
    }
  }

  return {
    title: `${article.title} | Bevel Graphics Blog`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = BLOG_ARTICLES
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoiseOverlay />

      <SiteNavbar activePage="blog" />

      {/* Article Header */}
      <article>
        <header className="pt-32 md:pt-40 pb-8 md:pb-12 px-4 md:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="uppercase tracking-wider">
                {BLOG_CONTENT.categories[article.category]}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>
                {article.readTime} {BLOG_CONTENT.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="px-4 md:px-6 lg:px-12 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video overflow-hidden border border-border">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="px-4 md:px-6 lg:px-12 pb-16">
          <div className="max-w-3xl mx-auto">
            {article.content.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                      {section.content}
                    </p>
                  )
                case "heading":
                  return (
                    <h2 key={index} className="text-xl md:text-2xl font-bold mt-10 mb-4">
                      {section.content}
                    </h2>
                  )
                case "list":
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                      {section.items?.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  )
                case "quote":
                  return (
                    <blockquote key={index} className="border-l-2 border-foreground pl-6 my-8 italic text-lg text-muted-foreground">
                      {section.content}
                    </blockquote>
                  )
                case "faq":
                  return section.faqs ? <FAQBlock key={index} faqs={section.faqs} /> : null
                default:
                  return null
              }
            })}
          </div>
        </div>
      </article>

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

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}

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
