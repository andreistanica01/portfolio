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
      title: "Julietta H6",
      subtitle: "Ancient Egyptian Temple",
      description: "A detailed recreation of an ancient Egyptian temple environment showcasing advanced modeling and rendering techniques.",
      tools: ["Blender","Photoshop"],
      year: "2026",
      type: "Automotive"
    },
    {
      id: 2,
      title: "R8 Steering Wheel",
      subtitle: "Urban Night Scene",
      description: "Futuristic cityscape with neon-lit streets, atmospheric fog, and detailed architectural elements.",
      tools: ["Blender", "Affinity Photo"],
      year: "2026",
      type: "Automotive Interior Part"
    },
    {
      id: 3,
      title: "Ocean Drive",
      subtitle: "Sci-Fi Warrior",
      description: "High-detail character sculpt with advanced texturing, rigging, and material work.",
      tools: ["ZBrush", "Maya", "Substance Painter", "Marmoset"],
      year: "2025",
      type: ""
    },
    {
      id: 4,
      title: "Maison Margiela Replica",
      subtitle: "Premium Watch",
      description: "Photorealistic product rendering with studio lighting and material refinement.",
      tools: ["Cinema 4D", "Octane", "Photoshop"],
      year: "2025",
      type: "Product Design"
    },
    {
      id: 5,
      title: "Organic Creature",
      subtitle: "Fantasy Beast",
      description: "Detailed creature design with organic modeling, fur simulation, and realistic shading.",
      tools: ["ZBrush", "Maya", "Houdini", "V-Ray"],
      year: "2024",
      type: "Creature Design"
    },
    {
      id: 6,
      title: "Architectural Viz",
      subtitle: "Modern Interior",
      description: "Contemporary interior space with photorealistic lighting, materials, and composition.",
      tools: ["Blender", "V-Ray", "Photoshop"],
      year: "2024",
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
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-pulse">
            Bevel Graphics
          </h1>
          <div className="h-1 w-32 bg-foreground mx-auto animate-pulse" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 delay-300 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="border-b border-border/20 bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold tracking-tight hover:text-muted-foreground transition-colors cursor-pointer">
                Bevel Graphics
              </h1>
              <div className="flex items-center gap-8">
                <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
                  Home
                </a>
                <a href="#work" className="text-sm hover:text-muted-foreground transition-colors">
                  Work
                </a>
                <a href="#about" className="text-sm hover:text-muted-foreground transition-colors">
                  About
                </a>
                <a href="#contact" className="text-sm hover:text-muted-foreground transition-colors">
                  Contact
                </a>
              </div>
              <a 
                href="mailto:bevel.graphics1@gmail.com" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                bevel.graphics1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="work"
        className={`relative min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-12 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Background Image - extends to cover header */}
        <div 
          className="absolute -top-24 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/purple1.jpg)' }}
        />
        {/* Gradient Overlay - same strong fade at top and bottom */}
        <div className="absolute -top-24 left-0 right-0 bottom-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-7xl md:text-9xl font-bold tracking-tight">
                Portfolio
              </h2>
              <p className="text-xl text-muted-foreground">
                Featured Projects
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-light text-muted-foreground">
                2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background/90 backdrop-blur-sm">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {project.type}
                      </p>
                      <h3 className="text-2xl font-bold">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed line-clamp-3">
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

                  {/* Default State */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-foreground/5 group-hover:text-foreground/20 transition-colors duration-500">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-500">
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
        className="py-32 px-6 lg:px-12 bg-muted/10"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-muted via-muted/50 to-background border-2 border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-muted-foreground" >
                  <img src='/images/image2.jpeg' alt="Profile Image" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="space-y-4 flex-1">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                About
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated 3D artist with nearly 2 years of experience in Blender, specializing in hard-surface modeling and product visualization.
              I focus on blueprint-based modeling accuracy, ensuring precise proportions and clean topology in every project. 
              With my strong attention to detail, i create high-quality, production-ready assets enhanced by realistic materials and professional lighting setups. 
              My goal is to deliver visually striking renders that are getting enhanced with my post-production.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Modeling
              </h3>
              <div className="space-y-2 text-sm">
                <p>Blender</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Rendering
              </h3>
              <div className="space-y-2 text-sm">
                <p>Blender Cycles</p>
                <p>Unreal Engine</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Post Production
              </h3>
              <div className="space-y-2 text-sm">
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
        className="py-32 px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            {'Let\'s work together'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available for freelance projects and collaborations
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Get in touch
            </Button>
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
            <a href="https://www.instagram.com/bevel.graphics/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="https://www.artstation.com/bevelgraphics" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ArtStation
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
