'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NoiseOverlay } from "@/components/noise-overlay"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
          {
      id: 1,
      thumbnail: "/images/Project_Images/bedroom2.webp",
      title: "Mediterranean Stone Bedroom - ArchViz",
      subtitle: "Personal Project",
      description: "Warm Mediterranean-inspired bedroom featuring natural stone walls, soft lighting, and minimal design. The scene was modeled and rendered in Blender with a focus on realistic materials, lighting, and real-world scale to create a calm and cozy architectural space.",
      tools: ["Blender","Affinity Photo"],
      year: "2026",
      type: "Architectural Visualization"
    },
      {
      id: 2,
      thumbnail: "/images/Project_Images/living1.webp",
      title: "Contemporary Apartment - ArchViz",
      subtitle: "Personal Project",
      description: "This project was created using blueprints and CAD files, with every object modeled and scaled according to real-world references. The main focus of the project was achieving a realistic and accurate architectural visualization.",
      tools: ["Blender","Affinity Photo"],
      year: "2026",
      type: "Architectural Visualization"
    },
    {
      id: 3,
      thumbnail: "/images/Project_Images/purple3.webp",
      title: "Julietta H6",
      subtitle: "Personal Project",
      description: "The Julietta H6 is created with strong attention to real-world proportions, clean surface transitions, and high-detail modeling based on accurate references. I focus on precise body lines, realistic materials, and controlled lighting to achieve a professional automotive look suitable for marketing, visualization, and commercial use.",
      tools: ["Blender","Affinity Photo"],
      year: "2026",
      type: "Automotive"
    },
    {
      id: 4,
      thumbnail: "/images/Project_Images/steering1.webp",
      title: "R8 Steering Wheel",
      subtitle: "Personal Project",
      description: "The Audi R8 Steering Wheel is modeled with high attention to detail and precision hard surface techniques. I focused on very accurate proportions, sharp surface transitions, and small mechanical elements to achieve a realistic and production-level result. The materials and lighting were carefully set to highlight textures and metallic finishes for a premium automotive presentation.",
      tools: ["Blender", "Affinity Photo"],
      year: "2026",
      type: "Automotive Interior Part / Product Visualization",
    },
    {
      id: 5,
      thumbnail: "/images/Project_Images/nespresso1.webp",
      title: "Nespresso Vertuo Blue",
      subtitle: "Personal Project",
      description: "This blue edition of the Nespresso Vertuo explores a different presentation style, using lighting and composition to enhance the richness of the color and surface detail. The scene was designed to elevate the product visually while maintaining realism and brand consistency.",
      tools: ["Blender", "Affinity Photo"], 
      year: "2025",
      type: "Product Visualization"
    },
    {
      id: 6,
      thumbnail: "/images/Project_Images/replica1.webp",
      title: "Maison Margiela Replica",
      subtitle: "Premium Watch",
      description: "Photorealistic product rendering with studio lighting and material refinement.",
      tools: ["Blender", "Affinity Photo"],
      year: "2025",
      type: "Product Visualization"
    },
    {
      id: 7,
      thumbnail: "/images/Project_Images/VerticalShot011.webp",
      title: "Nespresso Vertuo 6 Colors",
      subtitle: "Personal Project",
      description: "High-detail 3D recreation of the Nespresso Vertuo presented in six color variations. The project emphasizes accurate modeling, realistic materials, and controlled lighting to achieve clean, premium product visuals suitable for commercial use.",
      tools: ["Blender", "Affinity Photo"],
      year: "2024",
      type: "Creature Design"
    },
    {
      id: 8,
      thumbnail: "/images/Project_Images/oceandrive1.webp",
      title: "Ocean Drive - Miami Street Scene",
      subtitle: "Personal Project",
      description: "This is a cinematic recreation of Ocean Drive, emphasizing lighting, scale, and coastal urban details. The scene is built to convey a vibrant street atmosphere with realistic materials and a polished, professional look.",
      tools: ["Blender", "Affinity Photo"],
      year: "2025",
      type: "Architecture"
    }
  ]

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
            Bevel Graphics
          </h1>
          <div className="h-1 w-24 md:w-32 bg-foreground mx-auto animate-pulse" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 delay-300 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="border-b border-border/20 bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
              <h1 className="text-base md:text-lg font-bold tracking-tight hover:text-muted-foreground transition-colors cursor-pointer">
                Bevel Graphics
              </h1>
              <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                <a href="#" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  Home
                </a>
                <Link href="#work" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  Work
                </Link>
                <Link href="#about" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
                  About
                </Link>
                <Link href="#contact" className="text-xs md:text-sm hover:text-muted-foreground transition-colors">
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

      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex flex-col justify-end pb-12 md:pb-20 px-4 md:px-6 lg:px-12 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Background Image - extends to cover header */}
        <div 
          className="absolute -top-24 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/Project_Images/purple3.webp)' }}
        />
        {/* Gradient Overlay - same strong fade at top and bottom */}
      <div className="absolute -top-24 left-0 right-0 bottom-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight">
                Portfolio
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">
                Featured Projects
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-2xl md:text-4xl font-light text-muted-foreground">
                2026
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

      {/* About Section */}
      <section 
        id="about" 
        className="py-16 md:py-32 px-4 md:px-6 lg:px-12 bg-muted/10"
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
                About
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
             Dedicated 3D artist with nearly 2 years of experience in Blender, specializing in hard-surface modeling and exterior and interior architectural rendering. I focus on blueprint-based modeling accuracy, ensuring precise proportions and clean topology in every project. With strong attention to detail, I create high-quality, production-ready assets enhanced by realistic materials and professional lighting setups. My goal is to deliver visually striking renders, further refined through post-production.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8">
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                Modeling
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                <p>Blender</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                Rendering
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                <p>Blender Cycles</p>
                <p>Unreal Engine</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                Post Production
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                <p>Photoshop</p>
                <p>DaVinci Resolve</p>
                <p>Affinity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        className="py-16 md:py-32 px-4 md:px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {'Let\'s work together'}
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Available for freelance projects and collaborations
          </p>
          <div className="pt-4 md:pt-8">
          <Link href="mailto:bevel.graphics1@gmail.com" >
            <Button 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 hover:scale-105 transition-transform"       >

              Get in touch
            </Button>
          </Link>
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
            <a href="https://www.instagram.com/bevel.graphics/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="https://www.artstation.com/bevelgraphics" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
             Behance
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}