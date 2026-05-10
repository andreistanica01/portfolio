import Image from "next/image"
import Link from "next/link"
import { useLocaleDictionary } from "@/components/locale-provider"
import type { BlogArticle } from "@/lib/blog-data"

interface ArticleCardProps {
  article: BlogArticle
  featured?: boolean
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const { blogContent } = useLocaleDictionary()

  if (featured) {
    return (
      <Link
        href={`/blog/${article.slug}`}
        className="group relative block overflow-hidden border border-border hover:border-foreground/30 transition-all duration-500"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative aspect-video lg:aspect-auto lg:w-1/2 overflow-hidden">
            <Image
              src={article.image}
              alt={article.imageAlt ?? article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-foreground text-background">
                {blogContent.featured}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 lg:p-8 lg:w-1/2 bg-card">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="uppercase tracking-wider">
                  {blogContent.categories[article.category]}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>
                  {article.readTime} {blogContent.readTime}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors">
                {article.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="pt-2">
                <span className="text-sm font-medium group-hover:underline">
                  {blogContent.readMore}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group relative block overflow-hidden border border-border hover:border-foreground/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt ?? article.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3 bg-card">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="uppercase tracking-wider">
            {blogContent.categories[article.category]}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>
            {article.readTime} {blogContent.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </Link>
  )
}
