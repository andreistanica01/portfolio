'use client'
import React, { useState, useEffect } from "react"
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
  ALL_PROJECTS,
  BLOG_CONTENT,
} from "@/lib/content"
import { BLOG_ARTICLES } from "@/lib/blog-data"

export default function Portfolio() {
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

  // Use all projects from constants
  const projects = ALL_PROJECTS

  // Get first 3 blog articles for preview
  const previewArticles = BLOG_ARTICLES.slice(0, 3)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated Noise Overlay */}
      <NoiseOverlay />

      {/* Entry Animation Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-1000 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter animate-pulse">
            {SITE_CONFIG.name}
          </h1>
          <div className="h-1 w-24 md:w-32 bg-foreground mx-auto animate-pulse" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 delay-300 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "px-3 pt-3 sm:px-4 md:px-6 md:pt-4 lg:px-12" : "px-0 pt-0"}`}>
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isScrolled
                ? "mx-auto max-w-7xl rounded-[1.6rem] border border-border/60 bg-background/60 px-3 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:rounded-[1.8rem] sm:px-4 md:rounded-[2rem] md:px-6"
                : "w-full border-b border-border/20 bg-gradient-to-b from-background/80 to-transparent px-4 py-4 backdrop-blur-sm md:px-6 md:py-6 lg:px-12"
            }`}
          >
            <div className={`flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex-row md:items-center md:justify-between md:gap-6 ${isScrolled ? "" : "w-full"}`}>
              <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-start md:pr-6">
                <h1 className="whitespace-nowrap text-sm font-bold tracking-tight hover:text-muted-foreground transition-colors cursor-pointer sm:text-base md:text-lg">
                  {SITE_CONFIG.name}
                </h1>
                <Link href="/work-together" className="shrink-0 md:hidden">
                  <Button variant="default" size="sm" className="h-7 rounded-full px-2.5 text-[11px] gap-1 group sm:px-3">
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
                <Link href="/blog" className="min-w-0 rounded-full px-1.5 py-1.5 text-xs leading-none hover:text-muted-foreground transition-colors sm:shrink-0 sm:px-3 sm:text-xs md:text-sm">
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
                  className={`h-8 rounded-full gap-1.5 text-xs group transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "px-3.5" : "px-3"}`}
                >
                  {NAV_LINKS.workTogether}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex flex-col justify-end pb-12 md:pb-20 px-4 md:px-6 lg:px-12 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Background Image - extends to cover header */}
        <div
          className="absolute -top-24 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat max-[599px]:hidden"
          style={{ backgroundImage: `url(${HERO_CONTENT.backgroundImage})` }}
        />
        {/* MOBILE Background Image - extends to cover header */}
        <div
          className="absolute -top-24 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat min-[600px]:hidden"
          style={{ backgroundImage: `url(${HERO_CONTENT.mobileBackgroundImage})` }}
        />
        {/* Gradient Overlay - same strong fade at top and bottom */}
      <div className="absolute -top-24 left-0 right-0 bottom-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight">
                {HERO_CONTENT.title}
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">
                {HERO_CONTENT.subtitle}
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-2xl md:text-4xl font-light text-muted-foreground">
                {HERO_CONTENT.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-8 md:py-12 px-4 md:px-6 lg:px-12 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <Link
                href={`/project/${project.id}`}
                key={project.id}
                className={`group relative aspect-[4/3] overflow-hidden cursor-pointer transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                {/* Project Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/20 to-background/50 border border-border group-hover:border-foreground/30 transition-all duration-500">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background/90 backdrop-blur-sm">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {project.type}
                      </p>
                      <h3 className="text-lg md:text-2xl font-bold">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs md:text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 3).map((tool, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    {project.year}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-foreground/20 pointer-events-none transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-2">
              {SERVICES_SECTION.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {SERVICES_SECTION.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES_SECTION.items.map((service) => (
              <div
                key={service.id}
                className="group p-6 md:p-8 border border-border hover:border-foreground/30 transition-all duration-500"
              >
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-muted-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="pt-4 border-t border-border">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-b-0"
                      >
                        <span className="text-xs font-medium tracking-wide uppercase">{feature}</span>
                        <span className="text-xs text-muted-foreground tabular-nums">0{index + 1}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/work-together">
              <Button size="lg" className="px-8 gap-2 group">
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-16 md:py-32 px-4 md:px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-muted via-muted/50 to-background border-2 border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-muted-foreground" >
                  <img src='/images/image2.webp' alt="Profile Image" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4 flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {ABOUT_SECTION.title}
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                {ABOUT_SECTION.bio}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8">
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                {ABOUT_SECTION.skills.modeling.title}
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                {ABOUT_SECTION.skills.modeling.items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                {ABOUT_SECTION.skills.rendering.title}
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                {ABOUT_SECTION.skills.rendering.items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
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

      {/* Blog Preview Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {BLOG_CONTENT.hero.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {BLOG_CONTENT.hero.title}
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="text-sm hover:text-muted-foreground transition-colors underline underline-offset-4"
            >
              View all articles
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Together CTA Section */}
      <section 
        id="contact"
        className="py-16 md:py-32 px-4 md:px-6 lg:px-12 bg-muted/10"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {CONTACT_SECTION.title}
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {CONTACT_SECTION.subtitle}
          </p>
          <div className="pt-4 md:pt-8 flex justify-center">
            <Link href="/work-together">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 gap-2 group"
              >
                Start a Project
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-8 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-muted-foreground">
            {SITE_CONFIG.copyright}
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/blog" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/work-together" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work Together
            </Link>
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href={SITE_CONFIG.social.behance} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
