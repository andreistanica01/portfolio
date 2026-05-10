'use client'

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play, X } from "lucide-react"
import { useLocaleDictionary } from "@/components/locale-provider"
import { NoiseOverlay } from "@/components/noise-overlay"
import { SiteNavbar } from "@/components/site-navbar"
import type { Project } from "@/lib/projects"

interface ProjectPageClientProps {
  project: Project
  moreProjects: Project[]
}

export function ProjectPageClient({
  project,
  moreProjects,
}: ProjectPageClientProps) {
  const { siteConfig, locale } = useLocaleDictionary()
  const [selectedImage, setSelectedImage] = useState<{
    type: string
    image: Project["images"][number]
    index: number
  } | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const modalContentRef = useRef<HTMLDivElement | null>(null)
  const [displayIndex, setDisplayIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [project.id])

  const closeModal = () => {
    setIsExiting(true)
    setTimeout(() => {
      setSelectedImage(null)
      setIsExiting(false)
    }, 500)
  }

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  useEffect(() => {
    if (selectedImage) {
      setDisplayIndex(selectedImage.index)
    }
  }, [selectedImage])

  const navigate = useCallback((delta: number) => {
    if (!selectedImage) return
    const current = selectedImage.index
    const newIndex = Math.min(
      Math.max(0, current + delta),
      project.images.length - 1,
    )

    if (newIndex === current) return

    setIsAnimating(true)

    setTimeout(() => {
      setDisplayIndex(newIndex)
      setSelectedImage({
        type: project.images[newIndex].type,
        image: project.images[newIndex],
        index: newIndex,
      })
      setIsAnimating(false)
    }, 260)
  }, [project.images, selectedImage])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedImage) return

      if (e.key === "Escape") {
        closeModal()
      }

      if (e.key === "ArrowLeft") {
        navigate(-1)
      }

      if (e.key === "ArrowRight") {
        navigate(1)
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [navigate, selectedImage])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoiseOverlay />

      <SiteNavbar activePage="project" />

      <section className="relative isolate flex min-h-[50vh] flex-col justify-end px-4 pb-8 pt-24 md:min-h-[60vh] md:px-6 md:pb-12 md:pt-32 lg:px-12">
        <div
          className="pointer-events-none absolute -top-24 bottom-0 left-0 right-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${project.heroImage})`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="pointer-events-none absolute -top-24 bottom-0 left-0 right-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="relative z-10 mx-auto w-full max-w-7xl space-y-4 md:space-y-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1 md:h-4 md:w-4" />
            {locale === "ro" ? "INAPOI ACASA" : "BACK TO HOME"}
          </Link>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-8">
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-8xl">
                {project.title}
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                {project.subtitle}
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-2xl font-light text-muted-foreground md:text-4xl">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:px-6 md:py-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-3 transition-transform duration-300 ease-out md:gap-4"
                style={{
                  transform: `translateX(-${
                    carouselIndex * (isMobile ? 100 : 33.333)
                  }%)`,
                }}
              >
                {project.images.map((image, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    onClick={() =>
                      setSelectedImage({ type: image.type, image, index })
                    }
                    className="group relative aspect-video w-full flex-shrink-0 cursor-pointer overflow-hidden border border-border bg-muted/20 transition-all duration-500 hover:border-foreground/30 md:w-1/3"
                  >
                    <Image
                      src={image.image}
                      alt={image.alt ?? image.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10" />

                    {image.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/30 transition-all duration-300 group-hover:scale-110 group-hover:border-foreground/50 md:h-16 md:w-16">
                          <Play className="h-4 w-4 fill-current md:h-6 md:w-6" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {project.images.length > (isMobile ? 1 : 3) && (
              <>
                <button
                  onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                  disabled={carouselIndex === 0}
                  className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur-sm transition-[color,background-color,border-color,transform,box-shadow,opacity] duration-200 ease-out hover:-translate-y-[55%] hover:border-foreground/40 hover:bg-foreground/10 hover:shadow-md disabled:cursor-default disabled:opacity-50 md:-translate-x-12 md:bg-transparent md:backdrop-blur-none lg:-translate-x-16"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  onClick={() =>
                    setCarouselIndex(
                      Math.min(
                        project.images.length - (isMobile ? 1 : 3),
                        carouselIndex + 1,
                      ),
                    )
                  }
                  disabled={carouselIndex >= project.images.length - (isMobile ? 1 : 3)}
                  className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur-sm transition-[color,background-color,border-color,transform,box-shadow,opacity] duration-200 ease-out hover:-translate-y-[55%] hover:border-foreground/40 hover:bg-foreground/10 hover:shadow-md disabled:cursor-default disabled:opacity-50 md:translate-x-12 md:bg-transparent md:backdrop-blur-none lg:translate-x-16"
                >
                  <ArrowLeft className="h-4 w-4 rotate-180 md:h-5 md:w-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2 md:space-y-3">
                {project.tools.map((tool, index) => (
                  <p key={`${project.id}-tool-${index}`} className="text-xs font-mono md:text-sm">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-12 md:px-6 md:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-6 md:space-y-8">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">
            {locale === "ro" ? "Mai Multe Proiecte" : "More Projects"}
          </h2>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {moreProjects.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/project/${relatedProject.slug}`}
                className="group relative aspect-[4/3] overflow-hidden border border-border bg-muted/20 transition-all duration-500 hover:border-foreground/30"
              >
                <Image
                  src={relatedProject.previewImage}
                  alt={relatedProject.imageAlt ?? relatedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transition-transform duration-500 group-hover:scale-105" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-6">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold md:text-lg">
                      {relatedProject.title}
                    </h3>
                    <p className="text-xs text-muted-foreground md:text-sm">
                      {relatedProject.type}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-6 md:px-6 md:py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground md:text-sm">
            {siteConfig.copyright}
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <a
              href={siteConfig.social.instagram}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.behance}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
            >
              Behance
            </a>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className={`modal-backdrop-enter fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-500 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
          onClick={(e) => {
            const rect = modalContentRef.current?.getBoundingClientRect()
            if (!rect) return

            const x = e.clientX
            const y = e.clientY
            const dx = Math.max(rect.left - x, x - rect.right, 0)
            const dy = Math.max(rect.top - y, y - rect.bottom, 0)
            const distance = Math.max(dx, dy)

            if (distance > 0) {
              closeModal()
            }
          }}
        >
          <div
            ref={modalContentRef}
            className={`modal-content-enter relative flex h-[85vh] w-[95vw] items-center justify-center overflow-hidden rounded-lg transition-opacity duration-500 md:w-[85vw] ${
              isExiting ? "opacity-0" : "opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-2 top-2 z-30 rounded-full border border-white/20 bg-black/30 p-1.5 text-white transition-[color,background-color,border-color,transform,box-shadow,opacity] duration-200 ease-out hover:-translate-y-0.5 hover:border-white/40 hover:bg-black/50 hover:shadow-md md:right-4 md:top-4 md:p-2"
            >
              <X className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => navigate(-1)}
                  disabled={displayIndex === null || displayIndex <= 0}
                  className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-1.5 text-white transition-[color,background-color,border-color,transform,box-shadow,opacity] duration-200 ease-out hover:-translate-y-[55%] hover:border-white/40 hover:bg-black/50 hover:shadow-md disabled:cursor-default disabled:opacity-50 md:left-4 md:p-2"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  onClick={() => navigate(1)}
                  disabled={
                    displayIndex === null ||
                    displayIndex >= project.images.length - 1
                  }
                  className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-1.5 text-white transition-[color,background-color,border-color,transform,box-shadow,opacity] duration-200 ease-out hover:-translate-y-[55%] hover:border-white/40 hover:bg-black/50 hover:shadow-md disabled:cursor-default disabled:opacity-50 md:right-4 md:p-2"
                >
                  <ArrowLeft className="h-4 w-4 rotate-180 md:h-5 md:w-5" />
                </button>
              </>
            )}

            {displayIndex !== null && project.images[displayIndex].type === "video" ? (
              <div
                className={`flex h-full w-full items-center justify-center rounded-lg bg-black transition-opacity duration-500 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-white">
                    <Play className="h-8 w-8 fill-white text-white" />
                  </div>
                  <p className="text-lg font-semibold text-white">Video Player</p>
                  <p className="text-sm text-white/60">
                    Video playback feature coming soon
                  </p>
                </div>
              </div>
            ) : (
              displayIndex !== null && (
                <Image
                  src={project.images[displayIndex].image}
                  alt={project.images[displayIndex].alt ?? project.images[displayIndex].label}
                  key={`${project.id}-${displayIndex}`}
                  fill
                  sizes="95vw"
                  className={`rounded-lg object-contain transition-opacity duration-500 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
