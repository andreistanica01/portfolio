import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_CONFIG } from "@/lib/content"
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo"
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  applicationName: SITE_CONFIG.name,
  title: {
    default: `${SITE_CONFIG.name} | Architectural Visualization`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Architectural visualization portfolio focused on interior visualization, exterior renders, 3D floor plans, and real estate presentation imagery.",
  keywords: [
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
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Architectural Visualization`,
    description:
      "Architectural visualization portfolio focused on interior visualization, exterior renders, 3D floor plans, and real estate presentation imagery.",
    url: SITE_CONFIG.siteUrl,
    images: [
      {
        url: "/images/Project_Images/greenmarble1.webp",
        alt: "Bevel Graphics architectural visualization portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Architectural Visualization`,
    description:
      "Architectural visualization portfolio focused on interior visualization, exterior renders, 3D floor plans, and real estate presentation imagery.",
    images: ["/images/Project_Images/greenmarble1.webp"],
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

const websiteJsonLd = getWebsiteJsonLd()
const organizationJsonLd = getOrganizationJsonLd()

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
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
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  )
}
