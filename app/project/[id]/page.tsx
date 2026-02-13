'use client'

import { useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { NoiseOverlay } from "@/components/noise-overlay"
import { ArrowLeft, Play } from "lucide-react"

const projects = [
  {
    id: "1",
    thumbnail: "/images/purple.png",
    title: "Anuket",
    subtitle: "Personal Project",
    description: "'Anuket' is the ancient Egyptian goddess of the Nile. This was a personal project to display my 3D environment/generalist abilities. Most of the models are from BigMediumSmall or Quixel, which allowed me to focus on scene assembly and other aspects. You can watch the breakdown video above.",
    tools: ["Blender", "Houdini", "Geo-Scatter", "Gaea", "Liquigen", "After-Effects", "Photoshop"],
    year: "2024",
    type: "Environment Design",
    images: [
      { type: "wireframe", label: "Wireframe View" },
      { type: "clay", label: "Clay Render" },
      { type: "video", label: "Breakdown Video" }
    ]
  },
  {
    id: "2",
    title: "Cyberpunk District",
    subtitle: "Personal Project",
    description: "A futuristic cityscape featuring neon-lit streets, atmospheric fog, and detailed architectural elements. The project explores advanced lighting techniques and environment storytelling through a dystopian lens.",
    tools: ["Blender", "Unreal Engine", "Substance Painter"],
    year: "2026",
    type: "Environment Design",
    images: [
      { type: "wireframe", label: "Wireframe View" },
      { type: "clay", label: "Clay Render" },
      { type: "video", label: "Breakdown Video" }
    ]
  },
  {
    id: "3",
    title: "Character Design",
    subtitle: "Personal Project",
    description: "High-detail sci-fi warrior character sculpt with advanced texturing, rigging, and material work. The design focuses on combining organic forms with hard-surface armor elements.",
    tools: ["ZBrush", "Maya", "Substance Painter", "Marmoset"],
    year: "2025",
    type: "Character Art",
    images: [
      { type: "wireframe", label: "Wireframe View" },
      { type: "clay", label: "Clay Render" },
      { type: "video", label: "Turntable" }
    ]
  },
  {
    id: "4",
    title: "Product Visualization",
    subtitle: "Commercial Project",
    description: "Photorealistic product rendering with studio lighting and material refinement. Created for a premium watch brand showcasing attention to detail and realistic materials.",
    tools: ["Cinema 4D", "Octane", "Photoshop"],
    year: "2025",
    type: "Product Design",
    images: [
      { type: "wireframe", label: "Wireframe View" },
      { type: "clay", label: "Clay Render" },
      { type: "video", label: "Animation" }
    ]
  },
  {
    id: "5",
    title: "Organic Creature",
    subtitle: "Personal Project",
    description: "Detailed creature design with organic modeling, fur simulation, and realistic shading. The project explores anatomy, surface detail, and believable creature design.",
    tools: ["ZBrush", "Maya", "Houdini", "V-Ray"],
    year: "2024",
    type: "Creature Design",
    images: [
      { type: "wireframe", label: "Wireframe View" },
      { type: "clay", label: "Clay Render" },
      { type: "video", label: "Turntable" }
    ]
  },
  {
    id: "6",
    title: "Architectural Viz",
    subtitle: "Commercial Project",
    description: "Contemporary interior space with photorealistic lighting, materials, and composition. The project demonstrates architectural visualization techniques for real estate marketing.",
    tools: ["Blender", "V-Ray", "Photoshop"],
    year: "2024",
    type: "Architecture",
    images: [
      { type: "wireframe", label: "Wireframe View" },
      { type: "clay", label: "Clay Render" },
      { type: "video", label: "Walkthrough" }
    ]
  }
]

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find(p => p.id === params.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.id])

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
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex items-center justify-between">
              <Link 
                href="/"
                className="text-lg font-bold tracking-tight hover:text-muted-foreground transition-colors"
              >
                Your Name
              </Link>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-sm hover:text-muted-foreground transition-colors">
                  Home
                </Link>
                <Link href="/#work" className="text-sm hover:text-muted-foreground transition-colors">
                  Work
                </Link>
                <Link href="/#about" className="text-sm hover:text-muted-foreground transition-colors">
                  About
                </Link>
                <Link href="/#contact" className="text-sm hover:text-muted-foreground transition-colors">
                  Contact
                </Link>
              </div>
              <a 
                href="mailto:your.email@example.com" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                your.email@example.com
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero with Background */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pt-32 pb-12 px-6 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          <div className="absolute -top-24 left-0 right-0 bottom-0 bg-gradient-to-b from-background via-transparent to-background" />
            <img src={project.thumbnail} alt={project.title} className="w-1/3 aspect-video object-cover rounded-lg border border-border shadow-lg" /> 
          </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full space-y-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO CASES
          </Link>
          
          <div className="flex items-end justify-between gap-8">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-light text-muted-foreground">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Media Grid */}
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-video bg-muted/20 border border-border overflow-hidden cursor-pointer hover:border-foreground/30 transition-all duration-500"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-foreground/10">
                      {index + 1}
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {image.label}
                    </p>
                  </div>
                </div>
                
                {image.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-foreground/30 flex items-center justify-center group-hover:scale-110 group-hover:border-foreground/50 transition-all duration-300">
                      <Play className="h-6 w-6 fill-current" />
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[2fr,1fr] gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-3">
                {project.tools.map((tool, index) => (
                  <p key={index} className="text-sm font-mono">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-16 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">More Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/project/${p.id}`}
                  className="group relative aspect-[4/3] bg-muted/20 border border-border overflow-hidden hover:border-foreground/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2 group-hover:scale-105 transition-transform duration-500">
                      <div className="text-5xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                        {p.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-background/90 to-transparent">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.type}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 All rights reserved
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ArtStation
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
