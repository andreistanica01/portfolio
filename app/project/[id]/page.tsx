'use client'

import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { NoiseOverlay } from "@/components/noise-overlay"
import { ArrowLeft, Play, X } from "lucide-react"

const projects = [
  {
    id: "1",
    thumbnail: "/images/Project_Images/purple3.webp",
    thumbnail_main: "/images/Project_Images/purple3.webp",
    title: "Julietta H6",
    subtitle: "Personal Project",
    description: "The Julietta H6 was created with strong attention to real-world proportions, clean surface transitions, and high-detail modeling based on accurate references. I focus on precise body lines, realistic materials, and controlled lighting to achieve a professional automotive look suitable for marketing, visualization, and commercial use.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Automotive",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/purple3.webp" },
      { type: "image", label: "Render 2", image: "/images/Project_Images/green5.webp"},
      { type: "image", label: "Render 3", image: "/images/Project_Images/purple2.webp"},
      { type: "image", label: "Render 4", image: "/images/Project_Images/green4.webp"},
      { type: "image", label: "Render 5", image: "/images/Project_Images/purple1.webp"},
      { type: "image", label: "Render 6", image: "/images/Project_Images/green1.webp"},
      { type: "image", label: "Render 7", image: "/images/Project_Images/green3.webp"},
      { type: "image", label: "Render 8", image: "/images/Project_Images/green2.webp"},
      { type: "image", label: "Render 9", image: "/images/Project_Images/purple4.webp"},
      
    ]
  },
  {
    id: "2",
    thumbnail: "/images/Project_Images/steering1.webp",
    thumbnail_main: "/images/Project_Images/steering1.webp",
    title: "R8 Steering Wheel",
    subtitle: "Personal Project",
    description: "The Audi R8 Steering Wheel is modeled with high attention to detail and precision hard surface techniques. I focused on very accurate proportions, sharp surface transitions, and small mechanical elements to achieve a realistic and production-level result. The materials and lighting were carefully set to highlight textures and metallic finishes for a premium automotive presentation.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Automotive Interior Part / Product Visualization",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/steering1.webp" },
      { type: "image", label: "Render 2", image: "/images/Project_Images/steering2.webp"},
      { type: "image", label: "Render 3", image: "/images/Project_Images/steering3.webp"},
      { type: "image", label: "Render 4", image: "/images/Project_Images/steering4.webp"},
    ]
  },
  {
    id: "3",
    thumbnail: "/images/Project_Images/nespresso1.webp",
    thumbnail_main: "/images/Project_Images/nespresso1.webp",
    title: "Nespresso Vertuo Blue",
    subtitle: "Personal Project",
    description: "This blue edition of the Nespresso Vertuo explores a different presentation style, using lighting and composition to enhance the richness of the color and surface detail. The scene was designed to elevate the product visually while maintaining realism and brand consistency.",
    tools: ["Blender", "Affinity Photo"],
    year: "2025",
    type: "Product Visualization",
    images: [
        { type: "image", label: "Render 1", image: "/images/Project_Images/nespresso1.webp"},
        { type: "image", label: "Render 2", image: "/images/Project_Images/nespresso3.webp"},
        { type: "image", label: "Render 3", image: "/images/Project_Images/nespresso2.webp"},
    ]
  },
  {
    id: "4",
    thumbnail: "/images/Project_Images/replica2.webp",
    thumbnail_main: "/images/Project_Images/replica1.webp",
    title: "Maison Margiela - Replica Perfume",
    subtitle: "Personal Project",
    description: "Photorealistic product rendering with studio lighting and material refinement. Created for a premium watch brand showcasing attention to detail and realistic materials.",
    tools: ["Blender", "Affinity Photo"],
    year: "2025",
    type: "Product Visualization",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/replica1.webp" },
      { type: "image", label: "Render 2", image: "/images/Project_Images/replica2.webp"},
      { type: "image", label: "Render 3", image: "/images/Project_Images/replica3.webp"},
    ]
  },
  {
    id: "5",
    thumbnail: "/images/Project_Images/VerticalShot011.webp",
    thumbnail_main: "/images/Project_Images/VerticalShot011.webp",
    title: "Nespresso Vertuo 6 Colors",
    subtitle: "Personal Project",
    description: "High-detail 3D recreation of the Nespresso Vertuo presented in six color variations. The project emphasizes accurate modeling, realistic materials, and controlled lighting to achieve clean, premium product visuals suitable for commercial use.",
    tools: ["Blender", "Affinity Photo"],
    year: "2025",
    type: "Creature Design",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/VerticalShot013.webp" },
      { type: "image", label: "Render 2", image: "/images/Project_Images/VerticalShot011.webp"},
      { type: "image", label: "Render 3", image: "/images/Project_Images/TableRender005.webp"},
      { type: "image", label: "Render 4", image: "/images/Project_Images/TableRender004.webp"},
    ]
  },
  {
    id: "6",
    thumbnail: "/images/Project_Images/oceandrive2.webp",
    thumbnail_main: "/images/Project_Images/oceandrive1.webp",
    title: "Ocean Drive - Miami Street Scene",
    subtitle: "Personal Project",
    description: "This is a cinematic recreation of Ocean Drive, emphasizing lighting, scale, and coastal urban details. The scene is built to convey a vibrant street atmosphere with realistic materials and a polished, professional look.",
    tools: ["Blender", "Affinity Photo"],
    year: "2025",
    type: "Architecture",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/oceandrive1.webp"},
      { type: "image", label: "Render 2", image: "/images/Project_Images/oceandrive2.webp"},
      { type: "image", label: "Render 3", image: "/images/Project_Images/oceandrive3.webp"},
      { type: "image", label: "Render 4", image: "/images/Project_Images/oceandrive4.webp"},
      { type: "image", label: "Render 5", image: "/images/Project_Images/oceandrive5.webp"},
      { type: "image", label: "Render 6", image: "/images/Project_Images/oceandrive6.webp"},
      { type: "image", label: "Render 7", image: "/images/Project_Images/oceandrive7.webp"},
    ]
  }
]

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find(p => p.id === params.id)
  const [selectedImage, setSelectedImage] = useState<{ type: string; image: any; index: number } | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [params.id])

  const modalContentRef = useRef<HTMLDivElement | null>(null)
  const [displayIndex, setDisplayIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animDirection, setAnimDirection] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const closeModal = () => {
    setIsExiting(true)
    setTimeout(() => {
      setSelectedImage(null)
      setIsExiting(false)
    }, 500)
  }

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  useEffect(() => {
    if (!selectedImage) return

    // when modal opens/setSelectedImage changes, sync displayIndex
    setDisplayIndex(selectedImage.index)
  }, [selectedImage])

  const navigate = (delta: number) => {
    if (!selectedImage || !project) return
    const current = selectedImage.index
    const newIndex = Math.min(Math.max(0, current + delta), project.images.length - 1)
    if (newIndex === current) return

    setAnimDirection(delta)
    setIsAnimating(true)

    // animate out, swap image, animate in
    setTimeout(() => {
      setDisplayIndex(newIndex)
      setSelectedImage({ type: project.images[newIndex].type, image: project.images[newIndex], index: newIndex })
      setIsAnimating(false)
    }, 260)
  }

  useEffect(() => {
    if (!project) return
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === "Escape") {
        closeModal()
        return
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
  }, [selectedImage, project])

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <NoiseOverlay />
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoiseOverlay />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="border-b border-border/50 bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
              <Link 
                href="/"
                className="text-base md:text-lg font-bold tracking-tight hover:text-muted-foreground transition-colors"
              >
                Bevel Graphics
              </Link>
              <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                <Link href="/" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  Home
                </Link>
                <Link href="/#work" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  Work
                </Link>
                <Link href="/#about" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  About
                </Link>
                <Link href="/#contact" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  Contact
                </Link>
              </div>
              <a 
                href="mailto:bevel.graphics1@gmail.com" 
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors break-all md:break-normal"
              >
                bevel.graphics1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>

 <div className="absolute -top-24 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${project.thumbnail})`, filter: 'brightness(0.5)' }}/>
        {/* Gradient Overlay - same strong fade at top and bottom */}
      <div className="absolute -top-24 left-0 right-0 bottom-0 bg-gradient-to-b from-background via-transparent to-background" />
        

      {/* Hero with Background */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col justify-end pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-6 lg:px-12">
           {/* aseta doua de refacut 
                   <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />*/}

        <div className="max-w-7xl mx-auto relative z-10 w-full space-y-4 md:space-y-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-8">
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-2xl md:text-4xl font-light text-muted-foreground">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Media Carousel */}
      <section className="py-6 md:py-8 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-3 md:gap-4 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${carouselIndex * (isMobile ? 100 : 33.333)}%)` }}
              >
                {project.images.map((image, index) => {
                  const imageSrc = (image as any).image
                  return (
                    <div 
                      key={index}
                      onClick={() => setSelectedImage({ type: image.type, image: image, index })}
                      className="group relative flex-shrink-0 w-full md:w-1/3 aspect-video bg-muted/20 border border-border overflow-hidden cursor-pointer hover:border-foreground/30 transition-all duration-500"
                    >
                      {imageSrc && (
                        <img 
                          src={imageSrc} 
                          alt={image.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors" />
                      
                      {image.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-foreground/30 flex items-center justify-center group-hover:scale-110 group-hover:border-foreground/50 transition-all duration-300">
                            <Play className="h-4 w-4 md:h-6 md:w-6 fill-current" />
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            {project.images.length > (isMobile ? 1 : 3) && (
              <>
                <button
                  onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                  disabled={carouselIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 lg:-translate-x-16 p-2 rounded-full border border-border hover:bg-foreground/10 disabled:opacity-50 disabled:cursor-default transition-all cursor-pointer bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  onClick={() => setCarouselIndex(Math.min(project.images.length - (isMobile ? 1 : 3), carouselIndex + 1))}
                  disabled={carouselIndex >= project.images.length - (isMobile ? 1 : 3)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 lg:translate-x-16 p-2 rounded-full border border-border hover:bg-foreground/10 disabled:opacity-50 disabled:cursor-default transition-all cursor-pointer bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 rotate-180" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[2fr,1fr] gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2 md:space-y-3">
                {project.tools.map((tool, index) => (
                  <p key={index} className="text-xs md:text-sm font-mono">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">More Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/project/${p.id}`}
                  className="group relative aspect-[4/3] bg-muted/20 border border-border overflow-hidden hover:border-foreground/30 transition-all duration-500"
                >
                  {p.thumbnail && (
                    <img src={p.thumbnail_main} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2 group-hover:scale-105 transition-transform duration-500">
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-background/90 to-transparent">
                    <div className="space-y-1">
                      <h3 className="text-base md:text-lg font-bold">{p.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{p.type}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-8 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2026 All rights reserved
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </a>
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              ArtStation
            </a>
          </div>
        </div>
      </footer>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 modal-backdrop-enter transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
          onClick={(e) => {
            const rect = modalContentRef.current?.getBoundingClientRect()
            if (!rect) return
            const evt: any = e
            const x = evt.clientX
            const y = evt.clientY

            // Close when clicking anywhere outside the modal content
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
            className={`relative w-[95vw] md:w-[85vw] h-[85vh] flex items-center justify-center modal-content-enter rounded-lg overflow-hidden transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 md:top-4 right-2 md:right-4 p-1.5 md:p-2 rounded-full bg-black/30 hover:bg-black/40 border border-border text-white z-30 cursor-pointer"
            >
              <X className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            
            {/* Left / Right arrows inside modal */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => navigate(-1)}
                  disabled={displayIndex === null || displayIndex <= 0}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/30 hover:bg-black/40 border border-border text-white z-20 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  onClick={() => navigate(1)}
                  disabled={displayIndex === null || displayIndex >= project.images.length - 1}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/30 hover:bg-black/40 border border-border text-white z-20 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 rotate-180" />
                </button>
              </>
            )}
            {/* Content */}
            {displayIndex !== null && project.images[displayIndex].type === "video" ? (
              <div className={`w-full h-full flex items-center justify-center bg-black rounded-lg ${isAnimating ? 'opacity-0 transition-opacity duration-500' : 'opacity-100 transition-opacity duration-500'}`}>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto">
                    <Play className="h-8 w-8 fill-white text-white" />
                  </div>
                  <p className="text-white text-lg font-semibold">Video Player</p>
                  <p className="text-white/60 text-sm">Video playback feature coming soon</p>
                </div>
              </div>
            ) : (
              displayIndex !== null && (
                <img
                  src={(project.images[displayIndex] as any).image}
                  alt={(project.images[displayIndex] as any).label}
                  key={displayIndex}
                  className={`w-full h-full object-contain rounded-lg transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}