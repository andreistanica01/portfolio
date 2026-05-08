'use client'

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NoiseOverlay } from "@/components/noise-overlay"
import { ArticleCard } from "@/components/blog/article-card"
import {
  SITE_CONFIG,
  NAV_LINKS,
  HERO_CONTENT,
  SERVICES_SECTION,
  ABOUT_SECTION,
  CONTACT_SECTION,
  BLOG_CONTENT,
} from "@/lib/content"
import { BLOG_ARTICLES } from "@/lib/blog-data"
import { PROJECTS } from "@/lib/projects"

export function HomePageClient() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeNav, setActiveNav] = useState("home")

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32)
    }

    const syncActiveNav = () => {
      const hash = window.location.hash.replace("#", "")
      setActiveNav(hash || "home")
    }

    handleScroll()
    syncActiveNav()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("hashchange", syncActiveNav)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", syncActiveNav)
    }
  }, [])

  const projects = PROJECTS
  const previewArticles = BLOG_ARTICLES.slice(0, 3)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoiseOverlay />

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-1000 ${
          isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="space-y-4 text-center md:space-y-6">
          <h1 className="animate-pulse text-4xl font-bold tracking-tighter md:text-6xl lg:text-8xl">
            {SITE_CONFIG.name}
          </h1>
          <div className="mx-auto h-1 w-24 animate-pulse bg-foreground md:w-32" />
        </div>
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-700 delay-300 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled ? "px-3 pt-3 sm:px-4 md:px-6 md:pt-4 lg:px-12" : "px-0 pt-0"
          }`}
        >
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isScrolled
                ? "mx-auto max-w-7xl rounded-[1.6rem] border border-border/60 bg-background/60 px-3 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:rounded-[1.8rem] sm:px-4 md:rounded-[2rem] md:px-6"
                : "w-full border-b border-border/20 bg-gradient-to-b from-background/80 to-transparent px-4 py-4 backdrop-blur-sm md:px-6 md:py-6 lg:px-12"
            }`}
          >
            <div
              className={`flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex-row md:items-center md:justify-between md:gap-6 ${
                isScrolled ? "" : "w-full"
              }`}
            >
              <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-start md:pr-6">
                <h1 className="cursor-pointer whitespace-nowrap text-sm font-bold tracking-tight transition-colors hover:text-muted-foreground sm:text-base md:text-lg">
                  {SITE_CONFIG.name}
                </h1>
                <Link href="/work-together" className="shrink-0 md:hidden">
                  <Button
                    variant="default"
                    size="sm"
                    className="group h-7 gap-1 rounded-full px-2.5 text-[11px] sm:px-3"
                  >
                    {NAV_LINKS.workTogether}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </Link>
              </div>
              <div
                className={`flex items-center self-start border border-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:self-auto ${
                  isScrolled
                    ? "mx-auto grid w-full grid-cols-5 items-center justify-items-center gap-0.5 rounded-[1.2rem] bg-muted/55 p-1 sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:gap-1.5 sm:rounded-full sm:px-2 sm:py-1.5 md:mx-0 md:w-auto"
                    : "mx-auto grid w-full grid-cols-5 items-center justify-items-center gap-0.5 sm:flex sm:w-fit sm:flex-wrap sm:justify-center md:mx-0 md:w-auto md:gap-8"
                }`}
              >
                <a
                  href="#"
                  onClick={() => setActiveNav("home")}
                  className={`min-w-0 rounded-full px-1.5 py-1.5 text-xs leading-none transition-colors sm:shrink-0 sm:px-3 sm:text-xs md:text-sm ${
                    isScrolled
                      ? activeNav === "home"
                        ? "bg-foreground text-background shadow-sm"
                        : "hover:text-muted-foreground"
                      : activeNav === "home"
                        ? "text-foreground"
                        : "hover:text-muted-foreground"
                  }`}
                >
                  {NAV_LINKS.home}
                </a>
                <Link
                  href="#work"
                  onClick={() => setActiveNav("work")}
                  className={`min-w-0 rounded-full px-1.5 py-1.5 text-xs leading-none transition-colors sm:shrink-0 sm:px-3 sm:text-xs md:text-sm ${
                    isScrolled
                      ? activeNav === "work"
                        ? "bg-foreground text-background shadow-sm"
                        : "hover:text-muted-foreground"
                      : activeNav === "work"
                        ? "text-foreground"
                        : "hover:text-muted-foreground"
                  }`}
                >
                  {NAV_LINKS.work}
                </Link>
                <Link
                  href="#services"
                  onClick={() => setActiveNav("services")}
                  className={`min-w-0 rounded-full px-1.5 py-1.5 text-xs leading-none transition-colors sm:shrink-0 sm:px-3 sm:text-xs md:text-sm ${
                    isScrolled
                      ? activeNav === "services"
                        ? "bg-foreground text-background shadow-sm"
                        : "hover:text-muted-foreground"
                      : activeNav === "services"
                        ? "text-foreground"
                        : "hover:text-muted-foreground"
                  }`}
                >
                  {NAV_LINKS.services}
                </Link>
                <Link
                  href="/blog"
                  className="min-w-0 rounded-full px-1.5 py-1.5 text-xs leading-none transition-colors hover:text-muted-foreground sm:shrink-0 sm:px-3 sm:text-xs md:text-sm"
                >
                  {NAV_LINKS.blog}
                </Link>
                <Link
                  href="#about"
                  onClick={() => setActiveNav("about")}
                  className={`min-w-0 rounded-full px-1.5 py-1.5 text-xs leading-none transition-colors sm:shrink-0 sm:px-3 sm:text-xs md:text-sm ${
                    isScrolled
                      ? activeNav === "about"
                        ? "bg-foreground text-background shadow-sm"
                        : "hover:text-muted-foreground"
                      : activeNav === "about"
                        ? "text-foreground"
                        : "hover:text-muted-foreground"
                  }`}
                >
                  {NAV_LINKS.about}
                </Link>
              </div>
              <Link href="/work-together" className="hidden md:inline-flex md:shrink-0">
                <Button
                  variant="default"
                  size="sm"
                  className={`group h-8 gap-1.5 rounded-full text-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isScrolled ? "px-3.5" : "px-3"
                  }`}
                >
                  {NAV_LINKS.workTogether}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section
        className={`relative flex min-h-screen flex-col justify-end px-4 pb-12 md:px-6 md:pb-20 lg:px-12 transition-all duration-1000 delay-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="absolute -top-24 bottom-0 left-0 right-0 bg-cover bg-center bg-no-repeat max-[599px]:hidden"
          style={{ backgroundImage: `url(${HERO_CONTENT.backgroundImage})` }}
        />
        <div
          className="absolute -top-24 bottom-0 left-0 right-0 bg-cover bg-center bg-no-repeat min-[600px]:hidden"
          style={{ backgroundImage: `url(${HERO_CONTENT.mobileBackgroundImage})` }}
        />
        <div className="absolute -top-24 bottom-0 left-0 right-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-9xl">
                {HERO_CONTENT.title}
              </h2>
              <p className="text-base text-muted-foreground md:text-xl">
                {HERO_CONTENT.subtitle}
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-2xl font-light text-muted-foreground md:text-4xl">
                {HERO_CONTENT.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-32 px-4 py-8 md:px-6 md:py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                href={`/project/${project.slug}`}
                key={project.id}
                className={`group relative aspect-[4/3] cursor-pointer overflow-hidden transition-all duration-700 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="absolute inset-0 border border-border bg-gradient-to-br from-muted/30 via-muted/20 to-background/50 transition-all duration-500 group-hover:border-foreground/30">
                  <img
                    src={project.thumbnail}
                    alt={project.imageAlt ?? project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between bg-background/90 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 md:p-6 backdrop-blur-sm">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {project.type}
                      </p>
                      <h3 className="text-lg font-bold md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground md:text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="line-clamp-3 text-xs leading-relaxed md:text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 3).map((tool, i) => (
                          <span
                            key={i}
                            className="bg-muted/50 px-2 py-1 text-xs text-muted-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="bg-muted/50 px-2 py-1 text-xs text-muted-foreground">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-3 top-3 text-xs text-muted-foreground transition-colors duration-500 group-hover:text-foreground md:right-4 md:top-4">
                    {project.year}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition-all duration-500 group-hover:border-foreground/20" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-32 px-4 py-16 md:px-6 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
              {SERVICES_SECTION.subtitle}
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {SERVICES_SECTION.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {SERVICES_SECTION.items.map((service) => (
              <div
                key={service.id}
                className="group border border-border p-6 transition-all duration-500 hover:border-foreground/30 md:p-8"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-muted-foreground md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="border-t border-border pt-4">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between border-b border-border/50 py-2.5 last:border-b-0"
                      >
                        <span className="text-xs font-medium uppercase tracking-wide">
                          {feature}
                        </span>
                        <span className="tabular-nums text-xs text-muted-foreground">
                          0{index + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/work-together">
              <Button size="lg" className="group gap-2 px-8">
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 md:px-6 md:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-8 md:space-y-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
            <div className="shrink-0">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-border bg-gradient-to-br from-muted via-muted/50 to-background md:h-32 md:w-32">
                <div className="flex h-full w-full items-center justify-center text-5xl font-bold text-muted-foreground">
                  <img
                    src="/images/image2.webp"
                    alt="Bevel Graphics profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-3 md:space-y-4">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {ABOUT_SECTION.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-xl">
                {ABOUT_SECTION.bio}
              </p>
            </div>
          </div>

          <div className="grid gap-6 pt-6 md:grid-cols-3 md:gap-8 md:pt-8">
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {ABOUT_SECTION.skills.modeling.title}
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                {ABOUT_SECTION.skills.modeling.items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {ABOUT_SECTION.skills.rendering.title}
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                {ABOUT_SECTION.skills.rendering.items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {ABOUT_SECTION.skills.postProduction.title}
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                {ABOUT_SECTION.skills.postProduction.items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/10 px-4 py-16 md:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {BLOG_CONTENT.hero.subtitle}
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {BLOG_CONTENT.hero.title}
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              View all articles
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previewArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-muted/10 px-4 py-16 md:px-6 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-4xl space-y-6 text-center md:space-y-8">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {CONTACT_SECTION.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-xl">
            {CONTACT_SECTION.subtitle}
          </p>
          <div className="flex justify-center pt-4 md:pt-8">
            <Link href="/work-together">
              <Button
                size="lg"
                className="group gap-2 px-6 py-4 text-base md:px-8 md:py-6 md:text-lg"
              >
                Start a Project
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-6 md:px-6 md:py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground md:text-sm">
            {SITE_CONFIG.copyright}
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <Link
              href="/blog"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            >
              Blog
            </Link>
            <Link
              href="/work-together"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            >
              Work Together
            </Link>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            >
              Instagram
            </a>
            <a
              href={SITE_CONFIG.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            >
              Behance
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
