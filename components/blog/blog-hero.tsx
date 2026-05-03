import { BLOG_CONTENT } from "@/lib/content"

export function BlogHero() {
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {BLOG_CONTENT.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {BLOG_CONTENT.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
