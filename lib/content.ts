// =============================================================================
// SITE CONTENT - All translatable text content
// =============================================================================

export const SITE_CONFIG = {
  name: "Bevel Graphics",
  siteUrl: "https://bevel.graphics",
  email: "bevel.graphics1@gmail.com",
  tagline: "Architectural Visualization Studio",
  description: "Professional 3D architectural visualization services including residential interiors, exterior renders, office visualization, hospitality interiors, and photorealistic presentation imagery.",
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
  backgroundImage: "/images/Project_Images/greenmarble1.webp",
  mobileBackgroundImage: "/images/Project_Images/greenmarble4.webp",
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
// WORK TOGETHER PAGE CONTENT
// =============================================================================

export const WORK_TOGETHER_CONTENT = {
  hero: {
    title: "Work Together",
    subtitle: "Let's bring your architectural vision to life",
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Initial Contact",
        description: "Send your project details through the inquiry form so I can understand your needs and prepare a quote.",
      },
      {
        number: "02",
        title: "Quote & Timeline",
        description: "Within max 24 hours, I review your files and send a quote with an estimated timeline.",
      },
      {
        number: "03",
        title: "Production",
        description: "After approval, I start production and share progress updates at key stages.",
      },
      {
        number: "04",
        title: "Delivery",
        description: "Final renders are delivered in your preferred format, with revisions to refine the result.",
      },
    ],
  },
  whatToPrepare: {
    title: "What to Prepare",
    description: "Having these materials ready will help me provide an accurate quote and start production faster:",
    items: [
      {
        title: "Floor Plans & Blueprints",
        description: "Hand-drawn plans, simple sketches, or reference layouts with basic measurements are enough to get started.",
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
    "interior visualization": "Interior Visualization",
    "3D floor plans": "3D Floor Plans",
    "client guide": "Client Guide",
    "AI workflow": "AI Workflow",
    lighting: "Lighting",
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
