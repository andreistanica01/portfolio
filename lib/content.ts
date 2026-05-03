// =============================================================================
// SITE CONTENT - All translatable text content
// =============================================================================

export const SITE_CONFIG = {
  name: "Bevel Graphics",
  email: "bevel.graphics1@gmail.com",
  tagline: "Architectural Visualization Studio",
  description: "Professional 3D architectural visualization services. Interior and exterior renders, 3D floor plans, and photorealistic imagery for architects, developers, and real estate.",
  copyright: "2026 All rights reserved",
  social: {
    instagram: "https://www.instagram.com/bevel.graphics/",
    behance: "https://www.artstation.com/bevelgraphics",
  },
}

export const NAV_LINKS = {
  home: "Home",
  work: "Work",
  services: "Services",
  blog: "Blog",
  about: "About",
  contact: "Contact",
  workTogether: "Work Together",
}

export const HERO_CONTENT = {
  title: "Portfolio",
  subtitle: "Architectural Visualization",
  year: "2026",
}

export const SERVICES_SECTION = {
  title: "Services",
  subtitle: "What I offer",
  items: [
    {
      id: "interior",
      title: "Interior Visualization",
      description: "Photorealistic interior renders that bring your spaces to life. From residential to commercial, I create detailed visualizations with accurate lighting, materials, and atmosphere.",
      features: ["Residential Interiors", "Commercial Spaces", "Lighting Studies"],
    },
    {
      id: "exterior",
      title: "Exterior Visualization",
      description: "Professional exterior architectural renders showcasing your building designs. Day, sunset, and night scenes with realistic landscaping and environmental context.",
      features: ["Building Facades", "Day/Night Renders", "Aerial Views"],
    },
    {
      id: "floorplans",
      title: "3D Floor Plans",
      description: "Clear, elegant 3D floor plans that help clients understand spatial layouts. Perfect for real estate marketing and architectural presentations.",
      features: ["Furnished Plans", "Top-Down Views", "Marketing Ready"],
    },
  ],
}

export const ABOUT_SECTION = {
  title: "About",
  bio: "Dedicated 3D artist with nearly 2 years of experience in Blender, specializing in hard-surface modeling and exterior and interior architectural rendering. I focus on blueprint-based modeling accuracy, ensuring precise proportions and clean topology in every project, supported by working knowledge of AutoCAD for building accurate layouts. With strong attention to detail, I create high-quality, production-ready assets enhanced by realistic materials and professional lighting setups. My goal is to deliver visually striking renders, further refined through post-production.",
  skills: {
    modeling: {
      title: "Modeling",
      items: ["Blender"],
    },
    rendering: {
      title: "Rendering",
      items: ["Blender Cycles", "Unreal Engine"],
    },
    postProduction: {
      title: "Post Production",
      items: ["Photoshop", "DaVinci Resolve", "Affinity"],
    },
  },
}

export const CONTACT_SECTION = {
  title: "Let's work together",
  subtitle: "Available for freelance projects and collaborations",
  cta: "Get in touch",
}

export const FOOTER_CONTENT = {
  copyright: SITE_CONFIG.copyright,
  socialLinks: {
    instagram: "Instagram",
    behance: "Behance",
  },
}

// =============================================================================
// ALL PROJECTS
// =============================================================================

export const ALL_PROJECTS = [
  {
    id: 1,
    thumbnail: "/images/Project_Images/exteriorsunset2.webp",
    title: "Modern Villa",
    subtitle: "Personal Project",
    description: "Modern luxury villa exterior visualization created in Blender, featuring realistic materials, warm wood cladding, dark facade panels, glass openings, landscaping, pool reflections, and architectural lighting. The project includes day, sunset, and night renders to show different moods for real estate and archviz presentation.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
  },
  {
    id: 2,
    thumbnail: "/images/Project_Images/bg.webp",
    title: "Modern House Exterior",
    subtitle: "Personal Project",
    description: "A modern house exterior visualized in Blender, featuring clean architecture, large glass openings, and a warm, natural material palette. The scene focuses on realistic lighting and atmosphere, capturing the space in both daytime and nighttime conditions to highlight mood and detail.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
  },
  {
    id: 3,
    thumbnail: "/images/Project_Images/bedroom2.webp",
    title: "Mediterranean Stone Bedroom",
    subtitle: "Personal Project",
    description: "Warm Mediterranean-inspired bedroom featuring natural stone walls, soft lighting, and minimal design. The scene was modeled and rendered in Blender with a focus on realistic materials, lighting, and real-world scale to create a calm and cozy architectural space.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Interior Architectural Visualization",
  },
  {
    id: 4,
    thumbnail: "/images/Project_Images/bedroom1.webp",
    title: "Contemporary Apartment",
    subtitle: "Personal Project",
    description: "This project was created using blueprints and CAD files, with every object modeled and scaled according to real-world references. The main focus of the project was achieving a realistic and accurate architectural visualization.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Interior Architectural Visualization",
  },
  {
    id: 5,
    thumbnail: "/images/Project_Images/purple3.webp",
    title: "Julietta H6",
    subtitle: "Personal Project",
    description: "The Julietta H6 was created with strong attention to real-world proportions, clean surface transitions, and high-detail modeling based on accurate references. I focus on precise body lines, realistic materials, and controlled lighting to achieve a professional automotive look suitable for marketing, visualization, and commercial use.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Automotive",
  },
  {
    id: 6,
    thumbnail: "/images/Project_Images/steering1.webp",
    title: "R8 Steering Wheel",
    subtitle: "Personal Project",
    description: "The Audi R8 Steering Wheel is modeled with high attention to detail and precision hard surface techniques. I focused on very accurate proportions, sharp surface transitions, and small mechanical elements to achieve a realistic and production-level result.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Automotive Interior Part / Product Visualization",
  },
  {
    id: 7,
    thumbnail: "/images/Project_Images/nespresso1.webp",
    title: "Nespresso Vertuo Blue",
    subtitle: "Personal Project",
    description: "This blue edition of the Nespresso Vertuo explores a different presentation style, using lighting and composition to enhance the richness of the color and surface detail. The scene was designed to elevate the product visually while maintaining realism and brand consistency.",
    tools: ["Blender", "Affinity Photo"],
    year: "2025",
    type: "Product Visualization",
  },
  {
    id: 8,
    thumbnail: "/images/Project_Images/replica2.webp",
    title: "Maison Margiela - Replica Perfume",
    subtitle: "Personal Project",
    description: "Photorealistic product rendering with studio lighting and material refinement. Created for a premium watch brand showcasing attention to detail and realistic materials.",
    tools: ["Blender", "Affinity Photo"],
    year: "2025",
    type: "Product Visualization",
  },
  {
    id: 9,
    thumbnail: "/images/Project_Images/VerticalShot011.webp",
    title: "Nespresso Vertuo 6 Colors",
    subtitle: "Personal Project",
    description: "High-detail 3D recreation of the Nespresso Vertuo presented in six color variations. The project emphasizes accurate modeling, realistic materials, and controlled lighting to achieve clean, premium product visuals suitable for commercial use.",
    tools: ["Blender", "Affinity Photo"],
    year: "2025",
    type: "Product Visualization",
  },
  {
    id: 10,
    thumbnail: "/images/Project_Images/oceandrive2.webp",
    title: "Ocean Drive - Miami Street Scene",
    subtitle: "Personal Project",
    description: "This is a cinematic recreation of Ocean Drive, emphasizing lighting, scale, and coastal urban details. The scene is built to convey a vibrant street atmosphere with realistic materials and a polished, professional look.",
    tools: ["Blender", "Affinity Photo"],
    year: "2025",
    type: "Architecture",
  },
]

// =============================================================================
// WORK TOGETHER PAGE CONTENT
// =============================================================================

export const WORK_TOGETHER_CONTENT = {
  hero: {
    title: "Work Together",
    subtitle: "Let's bring your architectural vision to life",
    description: "I partner with architects, developers, interior designers, and real estate professionals to create stunning architectural visualizations that communicate your design intent clearly and beautifully.",
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Initial Contact",
        description: "Fill out the project inquiry form below with details about your project. The more information you provide, the better I can understand your needs and prepare an accurate quote.",
      },
      {
        number: "02",
        title: "Quote & Timeline",
        description: "Within 24-48 hours, I'll review your materials and send you a detailed quote with timeline estimates. We'll discuss any questions and refine the scope if needed.",
      },
      {
        number: "03",
        title: "Production",
        description: "Once we agree on the scope, I begin working on your project. You'll receive work-in-progress updates and have opportunities to provide feedback at key milestones.",
      },
      {
        number: "04",
        title: "Delivery",
        description: "Final renders are delivered in your preferred format and resolution. I include revision rounds to ensure the result matches your vision perfectly.",
      },
    ],
  },
  whatToPrepare: {
    title: "What to Prepare",
    description: "Having these materials ready will help me provide an accurate quote and start production faster:",
    items: [
      {
        title: "Floor Plans & Blueprints",
        description: "CAD files (.dwg, .dxf) or high-resolution PDF plans with measurements",
      },
      {
        title: "Reference Images",
        description: "Mood boards, inspiration images, or examples of the style you're looking for",
      },
      {
        title: "Material Specifications",
        description: "Information about finishes, colors, textures, and any specific products to include",
      },
      {
        title: "Camera Angles",
        description: "Marked floor plans or descriptions of the views you need rendered",
      },
    ],
  },
  formSection: {
    title: "Project Inquiry",
    description: "Tell me about your project. All fields marked with * are required.",
  },
  privacyNote: "Your information is kept confidential and will only be used to discuss your project.",
}

// =============================================================================
// BLOG SECTION CONTENT
// =============================================================================

export const BLOG_CONTENT = {
  hero: {
    title: "3D Visualization Guides",
    subtitle: "Tips, tutorials, and insights for architects and developers working with 3D visualization",
  },
  categories: {
    all: "All Articles",
    workflow: "Workflow",
    materials: "Materials",
    lighting: "Lighting",
    software: "Software",
    business: "Business",
  },
  cta: {
    title: "Ready to Start Your Project?",
    description: "Let's discuss how I can help bring your architectural vision to life with stunning 3D visualizations.",
    button: "Work Together",
  },
  readMore: "Read Article",
  readTime: "min read",
  featured: "Featured",
}
