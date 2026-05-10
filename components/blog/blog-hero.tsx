import { useLocaleDictionary } from "@/components/locale-provider"

export function BlogHero() {
  const { blogContent } = useLocaleDictionary()

  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {blogContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {blogContent.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
