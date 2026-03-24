import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bevel Graphics - 3D Modeling Portfolio',
  description: '3D artist specializing in automotive modeling, hard surface design, and photorealistic product rendering for marketing and commercial visualization.',
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
}

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
    <html lang="en" className={geist.className}>
      <body className={`font-sans antialiased`}>
        {children}
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  )
}
