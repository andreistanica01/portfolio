import type { Metadata } from "next"
import { NoiseOverlay } from "@/components/noise-overlay"
import { SiteNavbar } from "@/components/site-navbar"
import { HowItWorks } from "@/components/work-together/how-it-works"
import { WhatToPrepare } from "@/components/work-together/what-to-prepare"
import { ProjectForm } from "@/components/work-together/project-form"
import { SITE_CONFIG } from "@/lib/content"
import { getRequestLocale } from "@/lib/i18n"
import { getDictionary } from "@/lib/locale-dictionary"
import { getOpenGraphLocale } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  const isRomanian = locale === "ro"

  return {
    title: isRomanian ? "Colaborare" : "Work Together",
    description: isRomanian
      ? "Porneste proiectul tau de vizualizare arhitecturala si cere o oferta pentru interioare rezidentiale, exterioare de lux, vizualizare office, randari hospitality si imagini de prezentare."
      : "Start your architectural visualization project and request a quote for residential interiors, luxury exteriors, office visualization, hospitality renders, and presentation visuals.",
    alternates: {
      canonical: "/work-together",
    },
    openGraph: {
      locale: getOpenGraphLocale(locale),
      title: isRomanian
        ? "Colaborare | Bevel Graphics"
        : "Work Together | Bevel Graphics",
      description: isRomanian
        ? "Cere o oferta pentru servicii de vizualizare arhitecturala, inclusiv interioare rezidentiale, exterioare de lux, office, hospitality si imagini fotorealiste de prezentare."
        : "Request a quote for architectural visualization services including residential interiors, luxury exteriors, office visualization, hospitality renders, and presentation visuals.",
      url: `${SITE_CONFIG.siteUrl}/work-together`,
      images: [
        {
          url: "/images/Project_Images/greenmarble1.webp",
          alt: isRomanian
            ? "Pagina Bevel Graphics pentru cereri de proiect"
            : "Bevel Graphics architectural visualization inquiry page",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isRomanian
        ? "Colaborare | Bevel Graphics"
        : "Work Together | Bevel Graphics",
      description: isRomanian
        ? "Cere o oferta pentru servicii de vizualizare arhitecturala, inclusiv interioare rezidentiale, exterioare de lux, office, hospitality si imagini fotorealiste de prezentare."
        : "Request a quote for architectural visualization services including residential interiors, luxury exteriors, office visualization, hospitality renders, and presentation visuals.",
      images: ["/images/Project_Images/greenmarble1.webp"],
    },
  }
}

export default async function WorkTogetherPage() {
  const locale = await getRequestLocale()
  const { workTogetherContent, siteConfig } = getDictionary(locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoiseOverlay />

      <SiteNavbar activePage="workTogether" />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-6 md:pb-8 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {workTogetherContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {workTogetherContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Project Inquiry Form */}
      <section id="inquiry" className="py-16 md:py-24 px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {workTogetherContent.formSection.title}
            </h2>
            <p className="text-muted-foreground">
              {workTogetherContent.formSection.description}
            </p>
          </div>

          <ProjectForm />
        </div>
      </section>

      {/* What to Prepare */}
      <WhatToPrepare />

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-8 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-muted-foreground">
            {siteConfig.copyright}
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.behance}
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
