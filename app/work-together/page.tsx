import Link from "next/link"
import type { Metadata } from "next"
import { NoiseOverlay } from "@/components/noise-overlay"
import { HowItWorks } from "@/components/work-together/how-it-works"
import { WhatToPrepare } from "@/components/work-together/what-to-prepare"
import { ProjectForm } from "@/components/work-together/project-form"
import { WORK_TOGETHER_CONTENT, SITE_CONFIG, NAV_LINKS } from "@/lib/content"

export const metadata: Metadata = {
  title: "Work Together | Bevel Graphics - Architectural Visualization",
  description: "Start your architectural visualization project. Get a quote for interior renders, exterior renders, and 3D floor plans.",
}

export default function WorkTogetherPage() {
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
                <Link href="/blog" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  {NAV_LINKS.blog}
                </Link>
                <Link href="/work-together" className="text-xs md:text-sm text-foreground font-medium">
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

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-6 md:pb-8 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {WORK_TOGETHER_CONTENT.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {WORK_TOGETHER_CONTENT.hero.subtitle}
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
              {WORK_TOGETHER_CONTENT.formSection.title}
            </h2>
            <p className="text-muted-foreground">
              {WORK_TOGETHER_CONTENT.formSection.description}
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
