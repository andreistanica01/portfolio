import type { Metadata } from "next"
import { HomePageClient } from "@/components/home/home-page-client"
import { SITE_CONFIG } from "@/lib/content"
import { getRequestLocale } from "@/lib/i18n"
import { getDictionary } from "@/lib/locale-dictionary"
import { PROJECTS } from "@/lib/projects"
import { getCollectionPageJsonLd, getOpenGraphLocale } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  const isRomanian = locale === "ro"

  return {
    title: isRomanian
      ? "Portofoliu Vizualizare Arhitecturala"
      : "Architectural Visualization Portfolio",
    description: isRomanian
      ? "Portofoliu de vizualizare arhitecturala cu vile de lux, interioare rezidentiale, vizualizare office, randari hospitality si imagini fotorealiste pentru prezentari de design si real estate."
      : "Architectural visualization portfolio featuring luxury villas, residential interiors, office visualization, hospitality renders, and presentation imagery for design and real estate marketing.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      locale: getOpenGraphLocale(locale),
      title: isRomanian
        ? `${SITE_CONFIG.name} | Portofoliu Vizualizare Arhitecturala`
        : `${SITE_CONFIG.name} | Architectural Visualization Portfolio`,
      description: isRomanian
        ? "Exploreaza proiecte de vizualizare arhitecturala pentru vile de lux, interioare rezidentiale, office, hospitality si imagini fotorealiste de prezentare."
        : "Explore architectural visualization work across luxury villas, residential interiors, office spaces, hospitality concepts, and photorealistic presentation imagery.",
      url: SITE_CONFIG.siteUrl,
      images: [
        {
          url: "/images/Project_Images/elegantvilla1.webp",
          alt: isRomanian
            ? "Imagine hero din portofoliul Bevel Graphics de vizualizare arhitecturala"
            : "Bevel Graphics architectural visualization portfolio hero image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isRomanian
        ? `${SITE_CONFIG.name} | Portofoliu Vizualizare Arhitecturala`
        : `${SITE_CONFIG.name} | Architectural Visualization Portfolio`,
      description: isRomanian
        ? "Exploreaza proiecte de vizualizare arhitecturala pentru vile de lux, interioare rezidentiale, office, hospitality si imagini fotorealiste de prezentare."
        : "Explore architectural visualization work across luxury villas, residential interiors, office spaces, hospitality concepts, and photorealistic presentation imagery.",
      images: ["/images/Project_Images/elegantvilla1.webp"],
    },
  }
}

export default async function HomePage() {
  const locale = await getRequestLocale()
  const { siteConfig } = getDictionary(locale)
  const isRomanian = locale === "ro"
  const portfolioJsonLd = getCollectionPageJsonLd({
    name: isRomanian
      ? `${SITE_CONFIG.name} Portofoliu`
      : `${SITE_CONFIG.name} Portfolio`,
    description: siteConfig.description,
    path: "/",
    itemPaths: PROJECTS.map((project) => `/project/${project.slug}`),
    locale,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <HomePageClient />
    </>
  )
}
