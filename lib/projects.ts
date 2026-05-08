import { SITE_CONFIG } from "@/lib/content"

export type ProjectMediaItem = {
  type: "image" | "video"
  label: string
  image: string
}

export type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  tools: string[]
  year: string
  type: string
  thumbnail: string
  heroImage: string
  previewImage: string
  imageAlt?: string
  metaTitle?: string
  metaDescription?: string
  images: ProjectMediaItem[]
}

const defaultMetaTitle = (project: Project) =>
  `${project.title} | ${SITE_CONFIG.name}`

const defaultMetaDescription = (project: Project) =>
  project.description.length > 160
    ? `${project.description.slice(0, 157).trimEnd()}...`
    : project.description

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "calacatta-marble-modern-villa",
    thumbnail: "/images/Project_Images/whitemarble1.webp",
    heroImage: "/images/Project_Images/whitemarble1.webp",
    previewImage: "/images/Project_Images/whitemarble1.webp",
    title: "Calacatta Marble Modern Villa",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic architectural visualization of a luxury modern villa designed with Calacatta white marble, walnut wood finishes, black metal accents, floor-to-ceiling glass, soft warm lighting, and refined contemporary landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the villa facade, open-plan living room, modern kitchen, and luxury bathroom in a cohesive high-end residential design. Created for portfolio presentation, real estate visualization, premium interior design concepts, residential architecture marketing, and luxury property visualization in Bucharest, Romania.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Luxury Residential Architectural Visualization",
    imageAlt:
      "Photorealistic Calacatta marble modern villa exterior and interior architectural visualization with luxury kitchen, living room, and bathroom created in Blender",
    metaTitle: "Calacatta Marble Modern Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury modern villa architectural visualization featuring Calacatta marble, walnut wood, glass walls, warm lighting, and photorealistic Blender exterior and interior renders. ArchViz portfolio project by a 3D visualization artist in Bucharest, Romania.",
    images: [
      {
        type: "image",
        label: "Project Preview",
        image: "/images/Project_Images/whitemarble1.webp",
      },
    ],
  },
  {
    id: "2",
    slug: "dark-marble-modern-villa",
    thumbnail: "/images/Project_Images/blackmarble1.webp",
    heroImage: "/images/Project_Images/blackmarble3.webp",
    previewImage: "/images/Project_Images/blackmarble3.webp",
    title: "Dark Marble Modern Villa",
    subtitle: "Personal Project",
    description:
      "Photorealistic architectural visualization of a luxury modern villa featuring dark marble cladding, rich walnut wood finishes, floor-to-ceiling glass, warm recessed lighting, and refined contemporary landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the villa facade, living room, kitchen, and bathroom in a cohesive high-end residential design. Created for portfolio presentation, luxury real estate visualization, residential architecture marketing, and premium interior design concepts.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    imageAlt:
      "Photorealistic dark marble modern villa architectural visualization with luxury exterior, living room, kitchen, and bathroom renders created in Blender",
    metaTitle: "Dark Marble Modern Villa | Luxury Exterior ArchViz Project",
    metaDescription:
      "Luxury modern villa architectural visualization with dark marble cladding, walnut wood, glass walls, and warm lighting. Exterior and interior ArchViz portfolio project created in Blender.",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/blackmarble1.webp" },
      { type: "image", label: "Render 2", image: "/images/Project_Images/blackmarble2.webp" },
      { type: "image", label: "Render 3", image: "/images/Project_Images/blackmarble3.webp" },
      { type: "image", label: "Render 4", image: "/images/Project_Images/blackmarble4.webp" },
    ],
  },
  {
    id: "3",
    slug: "tropical-green-marble-villa",
    thumbnail: "/images/Project_Images/greenmarble1.webp",
    heroImage: "/images/Project_Images/greenmarble3.webp",
    previewImage: "/images/Project_Images/greenmarble3.webp",
    title: "Tropical Green Marble Villa",
    subtitle: "Personal Project",
    description:
      "Photorealistic architectural visualization of a luxury tropical villa designed with green marble, warm oak wood, bronze accents, large glass openings, soft interior lighting, and dense tropical landscaping. This Blender ArchViz project includes exterior and interior renders, showing the villa facade, bathroom, bedroom, and living room in a cohesive high-end residential design. Created for portfolio presentation, real estate visualization, interior design concepts, and modern luxury villa marketing.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    imageAlt:
      "Photorealistic tropical green marble villa architectural visualization with luxury exterior, bedroom, living room, and bathroom renders",
    metaTitle: "Tropical Green Marble Villa | Luxury ArchViz Portfolio Project",
    metaDescription:
      "Luxury tropical villa architectural visualization featuring green marble, oak wood, bronze accents, large glass openings, and dense landscaping. ArchViz exterior and interior portfolio project.",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/greenmarble1.webp" },
      { type: "image", label: "Render 2", image: "/images/Project_Images/greenmarble2.webp" },
      { type: "image", label: "Render 3", image: "/images/Project_Images/greenmarble3.webp" },
      { type: "image", label: "Render 4", image: "/images/Project_Images/greenmarble4.webp" },
      { type: "image", label: "Render 5", image: "/images/Project_Images/greenmarble5.webp" },
    ],
  },
  {
    id: "4",
    slug: "modern-villa",
    thumbnail: "/images/Project_Images/exteriorsunset2.webp",
    heroImage: "/images/Project_Images/exteriorday2.webp",
    previewImage: "/images/Project_Images/exteriorday2.webp",
    title: "Modern Villa",
    subtitle: "Personal Project",
    description:
      "Modern luxury villa exterior visualization created in Blender, featuring realistic materials, warm wood cladding, dark facade panels, glass openings, landscaping, pool reflections, and architectural lighting. The project includes day, sunset, and night renders to show different moods for real estate and archviz presentation.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    imageAlt:
      "Modern luxury villa exterior architectural visualization with warm wood cladding, pool reflections, and day, sunset, and night render variations",
    metaTitle: "Modern Villa | Exterior Architectural Visualization Project",
    metaDescription:
      "Exterior architectural visualization of a modern luxury villa with warm wood cladding, dark facade panels, landscaping, and lighting studies across day, sunset, and night scenes.",
    images: [
      { type: "image", label: "Sunset Render", image: "/images/Project_Images/exteriorsunset2.webp" },
      { type: "image", label: "Day Render", image: "/images/Project_Images/exteriorday2.webp" },
      { type: "image", label: "Night Render", image: "/images/Project_Images/exteriornight2.webp" },
    ],
  },
  {
    id: "5",
    slug: "modern-house-exterior",
    thumbnail: "/images/Project_Images/bg.webp",
    heroImage: "/images/Project_Images/exteriorday1.webp",
    previewImage: "/images/Project_Images/exteriorday1.webp",
    title: "Modern House Exterior",
    subtitle: "Personal Project",
    description:
      "A modern house exterior visualized in Blender, featuring clean architecture, large glass openings, and a warm, natural material palette. The scene focuses on realistic lighting and atmosphere, capturing the space in both daytime and nighttime conditions to highlight mood and detail.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    imageAlt:
      "Modern house exterior architectural visualization with clean lines, large glass openings, and warm materials shown in day and night lighting",
    metaTitle: "Modern House Exterior | Residential ArchViz Project",
    metaDescription:
      "Residential exterior architectural visualization of a modern house with large glass openings, natural materials, and realistic day and night lighting created in Blender.",
    images: [
      { type: "image", label: "Day Render", image: "/images/Project_Images/exteriorday1.webp" },
      { type: "image", label: "Night Render", image: "/images/Project_Images/exteriornight1.webp" },
    ],
  },
  {
    id: "6",
    slug: "mediterranean-stone-bedroom",
    thumbnail: "/images/Project_Images/bedroom2.webp",
    heroImage: "/images/Project_Images/bedroom2.webp",
    previewImage: "/images/Project_Images/bedroom2.webp",
    title: "Mediterranean Stone Bedroom",
    subtitle: "Personal Project",
    description:
      "Warm Mediterranean-inspired bedroom featuring natural stone walls, soft lighting, and minimal design. The scene was modeled and rendered in Blender with a focus on realistic materials, lighting, and real-world scale to create a calm and cozy architectural space.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Interior Architectural Visualization",
    imageAlt:
      "Mediterranean-inspired bedroom interior visualization with natural stone walls, soft lighting, and warm minimalist styling",
    metaTitle: "Mediterranean Stone Bedroom | Interior Visualization Project",
    metaDescription:
      "Interior visualization of a Mediterranean-inspired bedroom with natural stone walls, soft lighting, and warm minimal styling. Blender ArchViz portfolio project.",
    images: [
      { type: "image", label: "Bedroom Render", image: "/images/Project_Images/bedroom2.webp" },
    ],
  },
  {
    id: "7",
    slug: "contemporary-apartment",
    thumbnail: "/images/Project_Images/bedroom1.webp",
    heroImage: "/images/Project_Images/living1.webp",
    previewImage: "/images/Project_Images/living1.webp",
    title: "Contemporary Apartment",
    subtitle: "Personal Project",
    description:
      "This project was created using blueprints and CAD files, with every object modeled and scaled according to real-world references. The main focus of the project was achieving a realistic and accurate architectural visualization.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Interior Architectural Visualization",
    imageAlt:
      "Contemporary apartment interior visualization with accurately modeled living room, bedroom, and kitchen based on blueprints and CAD references",
    metaTitle: "Contemporary Apartment | Interior ArchViz Portfolio Project",
    metaDescription:
      "Contemporary apartment interior visualization developed from blueprints and CAD files, featuring accurate living room, bedroom, and kitchen renders with real-world scale.",
    images: [
      { type: "image", label: "Living Room Render", image: "/images/Project_Images/living1.webp" },
      { type: "image", label: "Bedroom Render", image: "/images/Project_Images/bedroom1.webp" },
      { type: "image", label: "Kitchen Render", image: "/images/Project_Images/kitchen1.webp" },
    ],
  },
  {
    id: "8",
    slug: "julietta-h6",
    thumbnail: "/images/Project_Images/purple3.webp",
    heroImage: "/images/Project_Images/purple3.webp",
    previewImage: "/images/Project_Images/purple3.webp",
    title: "Julietta H6",
    subtitle: "Personal Project",
    description:
      "The Julietta H6 was created with strong attention to real-world proportions, clean surface transitions, and high-detail modeling based on accurate references. I focus on precise body lines, realistic materials, and controlled lighting to achieve a professional automotive look suitable for marketing, visualization, and commercial use.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Automotive",
    imageAlt:
      "High-detail Julietta H6 automotive visualization with accurate body proportions, refined surfacing, and studio-style lighting",
    metaTitle: "Julietta H6 | Automotive Visualization Portfolio Project",
    metaDescription:
      "Automotive visualization of the Julietta H6 featuring high-detail modeling, accurate proportions, refined materials, and controlled studio lighting for a premium presentation.",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/purple3.webp" },
      { type: "image", label: "Render 2", image: "/images/Project_Images/green5.webp" },
      { type: "image", label: "Render 3", image: "/images/Project_Images/purple2.webp" },
      { type: "image", label: "Render 4", image: "/images/Project_Images/green4.webp" },
      { type: "image", label: "Render 5", image: "/images/Project_Images/purple1.webp" },
      { type: "image", label: "Render 6", image: "/images/Project_Images/green1.webp" },
      { type: "image", label: "Render 7", image: "/images/Project_Images/green3.webp" },
      { type: "image", label: "Render 8", image: "/images/Project_Images/green2.webp" },
      { type: "image", label: "Render 9", image: "/images/Project_Images/purple4.webp" },
    ],
  },
  {
    id: "9",
    slug: "r8-steering-wheel",
    thumbnail: "/images/Project_Images/steering1.webp",
    heroImage: "/images/Project_Images/steering1.webp",
    previewImage: "/images/Project_Images/steering1.webp",
    title: "R8 Steering Wheel",
    subtitle: "Personal Project",
    description:
      "The Audi R8 Steering Wheel is modeled with high attention to detail and precision hard surface techniques. I focused on very accurate proportions, sharp surface transitions, and small mechanical elements to achieve a realistic and production-level result.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Automotive Interior Part / Product Visualization",
    imageAlt:
      "Detailed Audi R8 steering wheel visualization with precise hard-surface modeling, metallic finishes, and close-up product presentation lighting",
    metaTitle: "R8 Steering Wheel | Hard-Surface Visualization Project",
    metaDescription:
      "High-detail steering wheel visualization inspired by the Audi R8, created with precise hard-surface modeling, realistic materials, and premium close-up presentation lighting.",
    images: [
      { type: "image", label: "Render 1", image: "/images/Project_Images/steering1.webp" },
      { type: "image", label: "Render 2", image: "/images/Project_Images/steering2.webp" },
      { type: "image", label: "Render 3", image: "/images/Project_Images/steering3.webp" },
      { type: "image", label: "Render 4", image: "/images/Project_Images/steering4.webp" },
    ],
  },
]

export const getProjectById = (id: string) =>
  PROJECTS.find((project) => project.id === id)

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug)

export const getProjectMetadata = (project: Project) => ({
  title: project.metaTitle ?? defaultMetaTitle(project),
  description: project.metaDescription ?? defaultMetaDescription(project),
})
