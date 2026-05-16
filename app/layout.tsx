import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LocaleProvider } from "@/components/locale-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_CONFIG } from "@/lib/content"
import { getRequestLocale, type Locale } from "@/lib/i18n"
import { getDictionary } from "@/lib/locale-dictionary"
import {
  getOpenGraphLocale,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/seo"
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
function getLocalizedRootMetadata(locale: Locale): Metadata {
  const isRomanian = locale === "ro"
  const description = isRomanian
    ? "Portofoliu de vizualizare arhitecturala cu interioare rezidentiale, exterioare de lux, vizualizare office, randari hospitality si imagini fotorealiste pentru prezentare imobiliara si de design."
    : "Architectural visualization portfolio featuring residential interiors, luxury exteriors, office visualization, hospitality renders, and presentation imagery for design and real estate marketing."

  return {
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    applicationName: SITE_CONFIG.name,
    title: {
      default: isRomanian
        ? `${SITE_CONFIG.name} | Vizualizare Arhitecturala`
        : `${SITE_CONFIG.name} | Architectural Visualization`,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    keywords: isRomanian
      ? [
          "vizualizare arhitecturala",
          "vizualizare interior",
          "vizualizare exterior",
          "planuri 3D",
          "vizualizare rezidentiala",
          "randari prezentare imobiliara",
          "imagini de prezentare arhitecturala",
        ]
      : [
          "architectural visualization",
          "interior visualization",
          "exterior visualization",
          "3D floor plans",
          "residential visualization",
          "real estate presentation renders",
          "architectural presentation visuals",
        ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      siteName: SITE_CONFIG.name,
      title: isRomanian
        ? `${SITE_CONFIG.name} | Vizualizare Arhitecturala`
        : `${SITE_CONFIG.name} | Architectural Visualization`,
      description,
      url: SITE_CONFIG.siteUrl,
      images: [
        {
          url: "/images/Project_Images/elegantvilla1.webp",
          alt: isRomanian
            ? "Portofoliu Bevel Graphics de vizualizare arhitecturala"
            : "Bevel Graphics architectural visualization portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isRomanian
        ? `${SITE_CONFIG.name} | Vizualizare Arhitecturala`
        : `${SITE_CONFIG.name} | Architectural Visualization`,
      description,
      images: ["/images/Project_Images/elegantvilla1.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        {
          url: '/icon-light-32x32.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon-dark-32x32.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
      ],
      apple: '/apple-icon.png',
    },
    category: "architecture",
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  return getLocalizedRootMetadata(locale)
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getRequestLocale()
  const dictionary = getDictionary(locale)
  const websiteJsonLd = getWebsiteJsonLd({
    locale,
    description: dictionary.siteConfig.description,
  })
  const organizationJsonLd = getOrganizationJsonLd({
    locale,
    description: dictionary.siteConfig.description,
  })

  return (
    <html
      lang={locale}
      className={`${geist.variable} ${geistMono.variable} ${geist.className}`}
      suppressHydrationWarning
    >
      <body className={`font-sans antialiased`}>
        <LocaleProvider dictionary={dictionary}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            {children}
          </ThemeProvider>
        </LocaleProvider>
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  )
}
