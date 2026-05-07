'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/content"

type NavbarPage = "blog" | "project" | "workTogether"

interface SiteNavbarProps {
  activePage: NavbarPage
}

export function SiteNavbar({ activePage }: SiteNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: NAV_LINKS.home, active: false },
    { href: "/#work", label: NAV_LINKS.work, active: false },
    { href: "/#services", label: NAV_LINKS.services, active: false },
    { href: "/blog", label: NAV_LINKS.blog, active: activePage === "blog" || activePage === "project" },
    { href: "/#about", label: NAV_LINKS.about, active: false },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
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
              <Link
                href="/"
                className="whitespace-nowrap text-sm font-bold tracking-tight hover:text-muted-foreground transition-colors cursor-pointer sm:text-base md:text-lg"
              >
                {SITE_CONFIG.name}
              </Link>
              {activePage !== "workTogether" && (
                <Link href="/work-together" className="shrink-0 md:hidden">
                  <Button variant="default" size="sm" className="h-7 rounded-full px-2.5 text-[11px] gap-1 group sm:px-3">
                    {NAV_LINKS.workTogether}
                  </Button>
                </Link>
              )}
            </div>
              <div
              className={`flex items-center self-start border border-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:self-auto ${
                isScrolled
                  ? "mx-auto grid w-full grid-cols-5 items-center justify-items-center gap-0.5 rounded-[1.2rem] bg-muted/55 p-1 sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:gap-1.5 sm:rounded-full sm:px-2 sm:py-1.5 md:mx-0 md:w-auto"
                  : "mx-auto grid w-full grid-cols-5 items-center justify-items-center gap-0.5 sm:flex sm:w-fit sm:flex-wrap sm:justify-center md:mx-0 md:w-auto md:gap-8"
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-w-0 rounded-full px-1.5 py-1.5 text-xs leading-none transition-colors sm:shrink-0 sm:px-3 sm:text-xs md:text-sm ${
                    isScrolled
                      ? item.active
                        ? "bg-foreground text-background shadow-sm"
                        : "hover:text-muted-foreground"
                      : item.active
                        ? "text-foreground"
                        : "hover:text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {activePage !== "blog" && (
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hidden md:inline-flex text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors break-all md:break-normal"
              >
                {SITE_CONFIG.email}
              </a>
            )}
            {activePage !== "workTogether" && (
              <Link href="/work-together" className="hidden md:inline-flex md:shrink-0">
                <Button
                  variant="default"
                  size="sm"
                  className={`h-8 rounded-full gap-1.5 text-xs group transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "px-3.5" : "px-3"}`}
                >
                  {NAV_LINKS.workTogether}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
