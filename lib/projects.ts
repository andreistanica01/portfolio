import { SITE_CONFIG } from "@/lib/content"

export type ProjectMediaItem = {
  type: "image" | "video"
  label: string
  image: string
  alt?: string
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
    id: "16",
    slug: "warm-stone-modern-villa",
    thumbnail: "/images/Project_Images/stonevilla1.webp",
    heroImage: "/images/Project_Images/stonevilla1.webp",
    previewImage: "/images/Project_Images/stonevilla1.webp",
    title: "Warm Stone Modern Villa",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic architectural visualization of a luxury modern villa designed with warm stone textures, oak wood detailing, floor-to-ceiling glazing, soft indirect lighting, and refined Mediterranean landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the poolside facade, marble kitchen, spa-style bathroom, and calm living area in a cohesive high-end residential design. Created for portfolio presentation, luxury real estate visualization, residential architecture marketing, premium interior design concepts, and contemporary villa presentation.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Luxury Residential Architectural Visualization",
    imageAlt:
      "Photorealistic warm stone modern villa architectural visualization with luxury exterior, marble kitchen, spa bathroom, and living room created in Blender",
    metaTitle: "Warm Stone Modern Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury modern villa architectural visualization featuring warm stone, oak wood, marble finishes, poolside exterior, and photorealistic Blender interior and exterior renders.",
    images: [
      {
        type: "image",
        label: "Modern Kitchen",
        image: "/images/Project_Images/stonevilla1.webp",
        alt: "Luxury modern kitchen visualization with marble island, walnut cabinetry, warm lighting, and floor-to-ceiling glazing",
      },
      {
        type: "image",
        label: "Spa-Style Bathroom",
        image: "/images/Project_Images/stonevilla2.webp",
        alt: "Spa-style bathroom visualization with freestanding bathtub, stone walls, double vanity, and soft natural light",
      },
      {
        type: "image",
        label: "Living Room",
        image: "/images/Project_Images/stonevilla3.webp",
        alt: "Warm modern living room visualization with stone wall, fireplace, oak ceiling, and soft neutral seating",
      },
      {
        type: "image",
        label: "Poolside Exterior View",
        image: "/images/Project_Images/stonevilla4.webp",
        alt: "Photorealistic luxury villa exterior with pool, warm stone walls, oak detailing, landscaped garden, and evening lighting",
      },
    ],
  },
  {
    id: "17",
    slug: "classic-elegant-villa",
    thumbnail: "/images/Project_Images/elegantvilla1.webp",
    heroImage: "/images/Project_Images/elegantvilla1.webp",
    previewImage: "/images/Project_Images/elegantvilla1.webp",
    title: "Classic Elegant Villa",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic architectural visualization of a luxury classic villa designed with elegant stone detailing, arched openings, richly crafted wood finishes, marble surfaces, ornate lighting, and refined Mediterranean landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the grand front facade, classical kitchen, luxury bathroom, and formal living space in a cohesive high-end residential design. Created for portfolio presentation, luxury real estate visualization, residential architecture marketing, premium interior design concepts, and timeless villa presentation.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Luxury Residential Architectural Visualization",
    imageAlt:
      "Photorealistic classic luxury villa architectural visualization with grand exterior facade, elegant kitchen, bathroom, and formal living room created in Blender",
    metaTitle: "Classic Elegant Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury classic villa architectural visualization featuring stone detailing, arched openings, marble finishes, elegant interiors, and photorealistic Blender exterior and interior renders.",
    images: [
      {
        type: "image",
        label: "Front Facade",
        image: "/images/Project_Images/elegantvilla1.webp",
        alt: "Photorealistic front facade of a luxury classic villa with columns, arched windows, stone detailing, and landscaped entrance",
      },
      {
        type: "image",
        label: "Classic Kitchen",
        image: "/images/Project_Images/elegantvilla2.webp",
        alt: "Luxury classic kitchen visualization with carved wood cabinetry, marble island, pendant lanterns, and arched French doors",
      },
      {
        type: "image",
        label: "Luxury Bathroom",
        image: "/images/Project_Images/elegantvilla3.webp",
        alt: "Elegant classic bathroom visualization with freestanding bathtub, marble vanity, arched window, and stone-textured walls",
      },
      {
        type: "image",
        label: "Formal Living Room",
        image: "/images/Project_Images/elegantvilla4.webp",
        alt: "Formal luxury living room visualization with chandelier, fireplace, leather seating, tall green drapes, and classic architectural detailing",
      },
    ],
  },
  {
    id: "10",
    slug: "warm-minimalist-glass-villa",
    thumbnail: "/images/Project_Images/glassvilla1.webp",
    heroImage: "/images/Project_Images/glassvilla1.webp",
    previewImage: "/images/Project_Images/glassvilla1.webp",
    title: "Warm Minimalist Glass Villa",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic architectural visualization of a luxury modern villa designed with warm minimalist interiors, natural stone finishes, oak wood details, floor-to-ceiling glass, soft ambient lighting, and refined garden landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the villa facade, open-plan living room, modern kitchen, and spa-style bathroom in a cohesive high-end residential design. Created for portfolio presentation, real estate visualization, premium interior design concepts, residential architecture marketing, and luxury property visualization in Bucharest, Romania.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Luxury Residential Architectural Visualization",
    imageAlt:
      "Photorealistic warm minimalist glass villa exterior and interior architectural visualization with luxury kitchen, living room, and bathroom created in Blender",
    metaTitle: "Warm Minimalist Glass Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury minimalist glass villa visualization with warm interiors, oak wood, natural stone, garden landscaping, and photorealistic Blender renders.",
    images: [
      {
        type: "image",
        label: "Exterior Front View",
        image: "/images/Project_Images/glassvilla1.webp",
        alt: "Photorealistic exterior rendering of a warm minimalist glass villa with oak entrance, large windows, and landscaped garden",
      },
      {
        type: "image",
        label: "Open-Plan Living Room",
        image: "/images/Project_Images/glassvilla2.webp",
        alt: "Luxury minimalist living room visualization with oak wall panels, soft beige sofa, fireplace, glass walls, and garden view",
      },
      {
        type: "image",
        label: "Modern Kitchen",
        image: "/images/Project_Images/glassvilla3.webp",
        alt: "Photorealistic modern kitchen interior with white marble island, warm wood accents, pendant lights, and floor-to-ceiling windows",
      },
      {
        type: "image",
        label: "Spa-Style Bathroom",
        image: "/images/Project_Images/glassvilla4.webp",
        alt: "Luxury spa-style bathroom visualization with freestanding bathtub, natural stone walls, glass shower, wood vanity, and garden view",
      },
    ],
  },
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
    year: "2025",
    type: "Luxury Residential Architectural Visualization",
    imageAlt:
      "Photorealistic Calacatta marble modern villa exterior and interior architectural visualization with luxury kitchen, living room, and bathroom created in Blender",
    metaTitle: "Calacatta Marble Modern Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury modern villa architectural visualization featuring Calacatta marble, walnut wood, glass walls, warm lighting, and photorealistic Blender exterior and interior renders. ArchViz portfolio project by a 3D visualization artist in Bucharest, Romania.",
    images: [
      {
        type: "image",
        label: "Exterior Perspective",
        image: "/images/Project_Images/whitemarble1.webp",
        alt: "Photorealistic exterior perspective of a Calacatta marble modern villa with large glazing and warm evening lighting",
      },
      {
        type: "image",
        label: "Living Room",
        image: "/images/Project_Images/whitemarble2.webp",
        alt: "Luxury villa living room visualization with Calacatta marble accents, walnut wood finishes, and soft ambient lighting",
      },
      {
        type: "image",
        label: "Kitchen",
        image: "/images/Project_Images/whitemarble3.webp",
        alt: "Modern kitchen visualization with Calacatta marble surfaces, walnut cabinetry, and floor-to-ceiling glazing",
      },
      {
        type: "image",
        label: "Bathroom",
        image: "/images/Project_Images/whitemarble4.webp",
        alt: "Luxury villa bathroom visualization with Calacatta marble detailing, soft natural light, and premium fixtures",
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
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic architectural visualization of a luxury modern villa defined by dark marble cladding, rich walnut finishes, expansive glazing, warm recessed lighting, and clean contemporary landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the villa facade, living room, kitchen, and bathroom in a cohesive high-end residential narrative. Created for portfolio presentation, luxury real estate marketing, residential design approval, and premium architectural presentation.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Exterior Architectural Visualization",
    imageAlt:
      "Photorealistic dark marble modern villa architectural visualization with luxury exterior, living room, kitchen, and bathroom renders created in Blender",
    metaTitle: "Dark Marble Modern Villa | Luxury Exterior ArchViz Project",
    metaDescription:
      "Luxury modern villa visualization with dark marble cladding, walnut wood, glass walls, and warm lighting across polished exterior and interior presentation renders.",
    images: [
      {
        type: "image",
        label: "Exterior View",
        image: "/images/Project_Images/blackmarble1.webp",
        alt: "Photorealistic exterior view of a dark marble modern villa with warm interior glow and landscaped surroundings",
      },
      {
        type: "image",
        label: "Living Room",
        image: "/images/Project_Images/blackmarble2.webp",
        alt: "Luxury living room visualization with dark marble, walnut wood, and moody architectural lighting",
      },
      {
        type: "image",
        label: "Kitchen",
        image: "/images/Project_Images/blackmarble3.webp",
        alt: "Modern villa kitchen visualization with dark stone surfaces, walnut cabinetry, and refined warm lighting",
      },
      {
        type: "image",
        label: "Bathroom",
        image: "/images/Project_Images/blackmarble4.webp",
        alt: "Luxury villa bathroom visualization with dark marble textures, glass shower enclosure, and warm ambient lighting",
      },
    ],
  },
  {
    id: "3",
    slug: "tropical-green-marble-villa",
    thumbnail: "/images/Project_Images/greenmarble1.webp",
    heroImage: "/images/Project_Images/greenmarble3.webp",
    previewImage: "/images/Project_Images/greenmarble3.webp",
    title: "Tropical Green Marble Villa",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic architectural visualization of a luxury tropical villa designed with green marble, warm oak wood, bronze accents, large glass openings, soft interior lighting, and dense planted surroundings. This Blender ArchViz project includes exterior and interior renders, showing the facade, bedroom, bathroom, and living spaces in a cohesive high-end residential concept. Created for portfolio presentation, luxury real estate marketing, interior concept approval, and contemporary villa presentation.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    imageAlt:
      "Photorealistic tropical green marble villa architectural visualization with luxury exterior, bedroom, living room, and bathroom renders",
    metaTitle: "Tropical Green Marble Villa | Luxury ArchViz Portfolio Project",
    metaDescription:
      "Luxury tropical villa visualization featuring green marble, oak wood, bronze accents, large glass openings, and lush landscaping across premium exterior and interior renders.",
    images: [
      {
        type: "image",
        label: "Exterior View",
        image: "/images/Project_Images/greenmarble1.webp",
        alt: "Photorealistic tropical villa exterior with green marble accents, large glazing, and lush landscaping",
      },
      {
        type: "image",
        label: "Bathroom",
        image: "/images/Project_Images/greenmarble2.webp",
        alt: "Luxury tropical villa bathroom visualization with green marble, bronze details, and soft natural lighting",
      },
      {
        type: "image",
        label: "Living Room",
        image: "/images/Project_Images/greenmarble3.webp",
        alt: "Warm tropical living room visualization with green stone accents, oak wood, and open garden views",
      },
      {
        type: "image",
        label: "Mood Render",
        image: "/images/Project_Images/greenmarble4.webp",
        alt: "Architectural mood render from a tropical luxury villa concept with green marble and warm evening atmosphere",
      },
      {
        type: "image",
        label: "Bedroom",
        image: "/images/Project_Images/greenmarble5.webp",
        alt: "Luxury tropical bedroom visualization with warm oak wood, green marble accents, and soft layered lighting",
      },
    ],
  },
  {
    id: "11",
    slug: "modern-glass-office-interior",
    thumbnail: "/images/Project_Images/office1.webp",
    heroImage: "/images/Project_Images/office1.webp",
    previewImage: "/images/Project_Images/office1.webp",
    title: "Modern Glass Office Interior",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic office interior visualization of a modern workspace with full-height glazing, glass meeting rooms, warm oak desks, integrated linear lighting, and soft neutral finishes. The scene presents an open-plan office with focused workstations, executive rooms, lounge seating, and built-in storage in a clean contemporary composition. Created for portfolio presentation, workplace design approval, office leasing visuals, commercial real estate marketing, and premium office interior concepts.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Office Interior Architectural Visualization",
    imageAlt:
      "Photorealistic modern office interior architectural visualization with glass meeting rooms, oak desks, lounge seating, and soft natural daylight created in Blender",
    metaTitle: "Modern Glass Office Interior | Office ArchViz Project",
    metaDescription:
      "Modern office interior visualization with glass meeting rooms, oak finishes, soft daylight, and photorealistic workspace presentation for commercial interiors and leasing marketing.",
    images: [
      {
        type: "image",
        label: "Open-Plan Office View",
        image: "/images/Project_Images/office1.webp",
        alt: "Photorealistic modern office interior with open-plan desks, glass meeting rooms, oak finishes, lounge seating, and large windows",
      },
    ],
  },
  {
    id: "12",
    slug: "contemporary-open-plan-office",
    thumbnail: "/images/Project_Images/office2.webp",
    heroImage: "/images/Project_Images/office2.webp",
    previewImage: "/images/Project_Images/office2.webp",
    title: "Contemporary Open-Plan Office",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic office interior visualization of a contemporary open-plan workspace designed with warm oak finishes, glass-partition meeting rooms, integrated ceiling lighting, and a calm material palette. The project presents collaborative desks, private meeting spaces, lounge seating, and built-in storage in a polished commercial environment suited for design review, leasing presentation, and workplace marketing.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Office Interior Architectural Visualization",
    imageAlt:
      "Photorealistic contemporary open-plan office interior visualization with glass meeting rooms, oak desks, lounge seating, and integrated ceiling lighting created in Blender",
    metaTitle: "Contemporary Open-Plan Office | Office ArchViz Project",
    metaDescription:
      "Contemporary open-plan office visualization featuring glass meeting rooms, oak finishes, integrated lighting, and photorealistic commercial workspace presentation.",
    images: [
      {
        type: "image",
        label: "Open-Plan Office Workspace",
        image: "/images/Project_Images/office2.webp",
        alt: "Photorealistic contemporary office interior with open-plan desks, glass meeting rooms, oak finishes, lounge seating, and integrated ceiling lighting",
      },
    ],
  },
  {
    id: "13",
    slug: "creative-studio-office-interior",
    thumbnail: "/images/Project_Images/office3.webp",
    heroImage: "/images/Project_Images/office3.webp",
    previewImage: "/images/Project_Images/office3.webp",
    title: "Creative Studio Office Interior",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic office interior visualization of a creative studio workspace with oak worktables, lounge seating, black-framed glass partitions, slatted wood wall panels, and a material presentation area. The project balances collaborative desks with informal meeting zones to create a professional but relaxed studio atmosphere suited for brand presentation, design approval, and commercial workplace marketing.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Office Interior Architectural Visualization",
    imageAlt:
      "Photorealistic creative studio office interior visualization with oak worktables, lounge seating, slatted wood walls, and glass meeting space created in Blender",
    metaTitle: "Creative Studio Office Interior | Office ArchViz Project",
    metaDescription:
      "Creative studio office visualization featuring oak worktables, lounge seating, glass partitions, and warm contemporary workspace design rendered photorealistically in Blender.",
    images: [
      {
        type: "image",
        label: "Creative Studio Workspace",
        image: "/images/Project_Images/office3.webp",
        alt: "Photorealistic creative office interior with oak desks, lounge seating, glass partitions, slatted wood walls, and a material presentation board",
      },
    ],
  },
  {
    id: "14",
    slug: "warm-minimalist-coffee-shop",
    thumbnail: "/images/Project_Images/coffeeshop1.webp",
    heroImage: "/images/Project_Images/coffeeshop1.webp",
    previewImage: "/images/Project_Images/coffeeshop1.webp",
    title: "Warm Minimalist Coffee Shop",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic hospitality interior visualization of a warm minimalist coffee shop designed with natural wood finishes, soft plaster textures, pendant lighting, built-in seating, and a welcoming espresso counter. The scene presents pastry display, lounge-style seating, and calm daylight atmosphere in a cohesive cafe concept created for branding presentation, hospitality design review, and commercial marketing.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Hospitality Interior Architectural Visualization",
    imageAlt:
      "Photorealistic warm minimalist coffee shop interior visualization with wood counter, pastry display, soft seating, and natural daylight created in Blender",
    metaTitle: "Warm Minimalist Coffee Shop | Hospitality ArchViz Project",
    metaDescription:
      "Warm minimalist coffee shop visualization with wood finishes, pastry display, soft seating, pendant lighting, and photorealistic hospitality presentation.",
    images: [
      {
        type: "image",
        label: "Coffee Shop Interior View",
        image: "/images/Project_Images/coffeeshop1.webp",
        alt: "Photorealistic coffee shop interior with wood counter, espresso machine, pastry display, lounge seating, and warm natural daylight",
      },
    ],
  },
  {
    id: "15",
    slug: "contemporary-neighborhood-cafe",
    thumbnail: "/images/Project_Images/coffeeshop2.webp",
    heroImage: "/images/Project_Images/coffeeshop2.webp",
    previewImage: "/images/Project_Images/coffeeshop2.webp",
    title: "Contemporary Neighborhood Cafe",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic hospitality interior visualization of a contemporary neighborhood cafe designed with warm wood wall paneling, soft neutral plaster finishes, marble-topped communal seating, pendant lighting, and a refined espresso counter. The image presents a calm daytime cafe atmosphere with balanced circulation, curated shelving, and welcoming service zone for hospitality branding, leasing presentation, and interior design approval.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Hospitality Interior Architectural Visualization",
    imageAlt:
      "Photorealistic contemporary cafe interior visualization with warm wood finishes, marble tables, pendant lights, and espresso counter created in Blender",
    metaTitle: "Contemporary Neighborhood Cafe | Hospitality ArchViz Project",
    metaDescription:
      "Contemporary cafe interior visualization featuring warm wood finishes, marble seating, pendant lighting, espresso counter, and photorealistic hospitality presentation.",
    images: [
      {
        type: "image",
        label: "Cafe Interior View",
        image: "/images/Project_Images/coffeeshop2.webp",
        alt: "Photorealistic cafe interior with warm wood finishes, marble communal table, bench seating, pendant lights, and espresso counter",
      },
    ],
  },
  {
    id: "4",
    slug: "modern-villa",
    thumbnail: "/images/Project_Images/exteriorsunset2.webp",
    heroImage: "/images/Project_Images/exteriorday2.webp",
    previewImage: "/images/Project_Images/exteriorday2.webp",
    title: "Modern Villa",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic exterior architectural visualization of a modern luxury villa featuring warm wood cladding, dark facade panels, expansive glazing, landscaping, pool reflections, and calibrated architectural lighting. The project includes day, sunset, and night render sets to communicate different moods for real estate presentation, marketing, and architectural approval.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    imageAlt:
      "Modern luxury villa exterior architectural visualization with warm wood cladding, pool reflections, and day, sunset, and night render variations",
    metaTitle: "Modern Villa | Exterior Architectural Visualization Project",
    metaDescription:
      "Exterior architectural visualization of a modern luxury villa with warm wood cladding, dark facade panels, pool reflections, landscaping, and day-to-night lighting studies.",
    images: [
      {
        type: "image",
        label: "Sunset Render",
        image: "/images/Project_Images/exteriorsunset2.webp",
        alt: "Modern villa exterior render at sunset with warm facade lighting, pool reflections, and landscaped garden",
      },
      {
        type: "image",
        label: "Day Render",
        image: "/images/Project_Images/exteriorday2.webp",
        alt: "Daylight exterior render of a modern villa with wood cladding, large glazing, and poolside landscape design",
      },
      {
        type: "image",
        label: "Night Render",
        image: "/images/Project_Images/exteriornight2.webp",
        alt: "Night exterior visualization of a modern villa with illuminated interiors, pool reflections, and architectural lighting",
      },
    ],
  },
  {
    id: "5",
    slug: "modern-house-exterior",
    thumbnail: "/images/Project_Images/bg.webp",
    heroImage: "/images/Project_Images/exteriorday1.webp",
    previewImage: "/images/Project_Images/exteriorday1.webp",
    title: "Modern House Exterior",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic exterior visualization of a modern house with clean architectural lines, generous glazing, and a warm natural material palette. The project focuses on atmosphere, realistic daylight behavior, and evening presentation, showing how the same facade performs across different lighting conditions.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    imageAlt:
      "Modern house exterior architectural visualization with clean lines, large glass openings, and warm materials shown in day and night lighting",
    metaTitle: "Modern House Exterior | Residential ArchViz Project",
    metaDescription:
      "Residential exterior visualization of a modern house with large glass openings, natural materials, and realistic day and night lighting for architectural presentation.",
    images: [
      {
        type: "image",
        label: "Day Render",
        image: "/images/Project_Images/exteriorday1.webp",
        alt: "Daylight render of a modern house exterior with large glass openings and warm natural materials",
      },
      {
        type: "image",
        label: "Night Render",
        image: "/images/Project_Images/exteriornight1.webp",
        alt: "Night render of a modern house exterior with illuminated glazing and moody architectural lighting",
      },
    ],
  },
  {
    id: "7",
    slug: "contemporary-apartment",
    thumbnail: "/images/Project_Images/bedroom1.webp",
    heroImage: "/images/Project_Images/living1.webp",
    previewImage: "/images/Project_Images/living1.webp",
    title: "Contemporary Apartment",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic interior visualization of a contemporary apartment developed from blueprints and CAD references, with each room modeled to real-world scale and proportion. The project presents the living room, bedroom, and kitchen as a cohesive residential interior focused on accurate layout translation, realistic materials, and clear presentation for design approval and marketing.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Interior Architectural Visualization",
    imageAlt:
      "Contemporary apartment interior visualization with accurately modeled living room, bedroom, and kitchen based on blueprints and CAD references",
    metaTitle: "Contemporary Apartment | Interior ArchViz Portfolio Project",
    metaDescription:
      "Contemporary apartment interior visualization developed from blueprints and CAD files, featuring accurate living room, bedroom, and kitchen renders with real-world scale and material realism.",
    images: [
      {
        type: "image",
        label: "Living Room Render",
        image: "/images/Project_Images/living1.webp",
        alt: "Contemporary apartment living room visualization with clean furniture layout, soft lighting, and realistic material detailing",
      },
      {
        type: "image",
        label: "Bedroom Render",
        image: "/images/Project_Images/bedroom1.webp",
        alt: "Contemporary apartment bedroom visualization with calm neutral palette, accurate proportions, and soft daylight",
      },
      {
        type: "image",
        label: "Kitchen Render",
        image: "/images/Project_Images/kitchen1.webp",
        alt: "Contemporary apartment kitchen visualization with realistic cabinetry, lighting, and accurately scaled layout",
      },
    ],
  },
  {
    id: "6",
    slug: "mediterranean-stone-bedroom",
    thumbnail: "/images/Project_Images/bedroom2.webp",
    heroImage: "/images/Project_Images/bedroom2.webp",
    previewImage: "/images/Project_Images/bedroom2.webp",
    title: "Mediterranean Stone Bedroom",
    subtitle: "Personal ArchViz Project",
    description:
      "Photorealistic interior visualization of a warm Mediterranean-inspired bedroom featuring natural stone walls, soft layered lighting, restrained furnishings, and a calm minimal palette. The scene was modeled and rendered in Blender with close attention to material realism, proportion, and atmosphere to create a serene residential presentation image.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Interior Architectural Visualization",
    imageAlt:
      "Mediterranean-inspired bedroom interior visualization with natural stone walls, soft lighting, and warm minimalist styling",
    metaTitle: "Mediterranean Stone Bedroom | Interior Visualization Project",
    metaDescription:
      "Interior visualization of a Mediterranean-inspired bedroom with natural stone walls, soft lighting, and warm minimal styling created for residential ArchViz presentation.",
    images: [
      {
        type: "image",
        label: "Bedroom Render",
        image: "/images/Project_Images/bedroom2.webp",
        alt: "Mediterranean-inspired bedroom visualization with natural stone walls, warm lighting, and minimal styling",
      },
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
