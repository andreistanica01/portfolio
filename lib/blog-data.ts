// =============================================================================
// BLOG ARTICLES DATA
// =============================================================================

export interface BlogArticle {
  slug: string
  title: string
  excerpt: string
  category: "workflow" | "materials" | "lighting" | "software" | "business"
  readTime: number
  publishedAt: string
  featured: boolean
  image: string
  content: BlogSection[]
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "quote" | "faq"
  content?: string
  items?: string[]
  faqs?: { question: string; answer: string }[]
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "preparing-files-for-archviz-projects",
    title: "How to Prepare Files for an ArchViz Project",
    excerpt: "A comprehensive guide for architects and developers on organizing and exporting files that will result in faster turnaround times and better visualization quality.",
    category: "workflow",
    readTime: 8,
    publishedAt: "2026-01-15",
    featured: true,
    image: "/images/Project_Images/exteriorday1.webp",
    content: [
      {
        type: "paragraph",
        content: "Proper file preparation is one of the most overlooked aspects of a successful architectural visualization project. When clients provide well-organized, complete files, the entire process moves faster and the final results are significantly better. This guide covers everything you need to know about preparing your files for an archviz artist.",
      },
      {
        type: "heading",
        content: "Why File Preparation Matters",
      },
      {
        type: "paragraph",
        content: "The quality of source files directly impacts the accuracy and efficiency of the visualization process. Missing information leads to assumptions, which can result in costly revisions. Complete files, on the other hand, allow the artist to focus on creating beautiful imagery rather than hunting down specifications.",
      },
      {
        type: "heading",
        content: "Essential Files to Provide",
      },
      {
        type: "list",
        items: [
          "Floor plans in CAD format (.dwg or .dxf) with accurate measurements",
          "Elevations and sections showing heights and vertical relationships",
          "Material schedules or finish specifications",
          "Reference images for desired mood and style",
          "Furniture layouts and fixture specifications",
          "Site context information for exterior views",
        ],
      },
      {
        type: "heading",
        content: "File Format Best Practices",
      },
      {
        type: "paragraph",
        content: "Export CAD files in a clean state with unnecessary layers removed. PDFs should be high-resolution (300 DPI minimum) and to scale. When providing reference images, organize them by room or area and include notes about what specifically you want to capture from each reference.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "What if I only have hand-drawn sketches?",
            answer: "Hand-drawn sketches can work, but they need to include clear measurements and annotations. Scan them at high resolution and provide a scale reference.",
          },
          {
            question: "How should I organize reference images?",
            answer: "Create folders for each space or view. Name files descriptively (e.g., 'living-room-lighting-reference.jpg') and include a brief notes document explaining what you like about each image.",
          },
          {
            question: "Do I need to provide 3D models?",
            answer: "If you have existing 3D models from your design software (Revit, SketchUp, ArchiCAD), providing them can speed up the process significantly. Export in common formats like .fbx, .obj, or native file formats.",
          },
        ],
      },
    ],
  },
  {
    slug: "understanding-archviz-pricing",
    title: "Understanding Architectural Visualization Pricing",
    excerpt: "What factors influence the cost of 3D renders? Learn how complexity, detail level, and timeline affect pricing so you can budget effectively for your projects.",
    category: "business",
    readTime: 6,
    publishedAt: "2026-01-08",
    featured: false,
    image: "/images/Project_Images/living1.webp",
    content: [
      {
        type: "paragraph",
        content: "Architectural visualization pricing can seem opaque to those new to commissioning renders. Understanding what goes into a quote helps you budget appropriately and communicate effectively with your visualization partner.",
      },
      {
        type: "heading",
        content: "Key Pricing Factors",
      },
      {
        type: "list",
        items: [
          "Scene complexity: number of rooms, furniture pieces, and architectural details",
          "Level of detail: conceptual vs. photorealistic",
          "Number of views and angles required",
          "Timeline and urgency",
          "Revision rounds included",
          "Output resolution and format requirements",
        ],
      },
      {
        type: "heading",
        content: "Interior vs. Exterior Projects",
      },
      {
        type: "paragraph",
        content: "Interior projects typically require more detailed modeling and texturing for furniture, fixtures, and finishes. Exterior projects often involve landscape modeling and environmental effects. Both have unique challenges that affect pricing.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "How much does a typical interior render cost?",
            answer: "Interior renders typically range from $300-800 per image depending on complexity. A fully furnished living room with custom furniture will cost more than a minimalist bathroom.",
          },
          {
            question: "Are revisions included in the price?",
            answer: "Most quotes include 2-3 revision rounds. Additional revisions beyond the agreed scope may incur extra charges. Clear communication upfront minimizes revision needs.",
          },
          {
            question: "How does timeline affect cost?",
            answer: "Rush projects (less than 1 week) typically carry a 25-50% premium. Planning ahead allows for better pricing and often better results.",
          },
        ],
      },
    ],
  },
  {
    slug: "interior-vs-exterior-visualization",
    title: "Interior vs. Exterior Visualization: Key Differences",
    excerpt: "Each type of architectural render presents unique challenges and opportunities. Understand what makes each approach distinct to better plan your visualization needs.",
    category: "workflow",
    readTime: 5,
    publishedAt: "2025-12-20",
    featured: false,
    image: "/images/Project_Images/exteriornight2.webp",
    content: [
      {
        type: "paragraph",
        content: "While both interior and exterior visualizations share fundamental principles, each requires different approaches to lighting, materials, and composition. Understanding these differences helps set appropriate expectations for your project.",
      },
      {
        type: "heading",
        content: "Interior Visualization Challenges",
      },
      {
        type: "list",
        items: [
          "Complex lighting with multiple artificial sources",
          "Detailed furniture and decor modeling",
          "Material accuracy at close viewing distances",
          "Balancing natural and artificial light",
          "Creating inviting, livable atmospheres",
        ],
      },
      {
        type: "heading",
        content: "Exterior Visualization Challenges",
      },
      {
        type: "list",
        items: [
          "Environmental context and landscaping",
          "Sky and weather conditions",
          "Time of day lighting variations",
          "Scale and building proportions",
          "Integrating with surrounding context",
        ],
      },
      {
        type: "quote",
        content: "The best exterior renders capture not just the building, but the feeling of being in that place at that moment in time.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Which type of render takes longer to produce?",
            answer: "It depends on complexity. A detailed interior with custom furniture may take longer than a simple exterior, but a complex site with extensive landscaping can exceed both.",
          },
          {
            question: "Can I get both interior and exterior renders of the same project?",
            answer: "Absolutely. Many clients request a package that includes key exterior views plus important interior spaces. This provides a complete picture of the design.",
          },
        ],
      },
    ],
  },
  {
    slug: "choosing-camera-angles-for-renders",
    title: "Choosing the Right Camera Angles for Your Renders",
    excerpt: "Camera placement dramatically affects how a space is perceived. Learn professional techniques for selecting angles that showcase your design's best features.",
    category: "workflow",
    readTime: 7,
    publishedAt: "2025-12-10",
    featured: false,
    image: "/images/Project_Images/bedroom2.webp",
    content: [
      {
        type: "paragraph",
        content: "The camera angle in an architectural render can make or break the final image. A well-chosen viewpoint draws the eye to key design features, creates depth, and tells a story about how the space will feel to inhabit.",
      },
      {
        type: "heading",
        content: "Principles of Good Composition",
      },
      {
        type: "list",
        items: [
          "Use the rule of thirds to place key elements",
          "Create depth with foreground, middle ground, and background",
          "Lead the eye through the space with lines and forms",
          "Avoid distortion by using appropriate focal lengths",
          "Consider human eye level for relatable perspectives",
        ],
      },
      {
        type: "heading",
        content: "Common Camera Height Guidelines",
      },
      {
        type: "paragraph",
        content: "For interior spaces, camera height is typically set at human eye level (approximately 1.6m or 5'3\") to create a natural, immersive perspective. Lower angles can make spaces feel larger, while higher angles provide more overview of the layout.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "How many angles should I request per room?",
            answer: "For marketing purposes, 2-3 angles per key space is typical. One main 'hero' shot plus 1-2 supporting angles that highlight specific features or provide alternative views.",
          },
          {
            question: "Should I specify exact camera positions?",
            answer: "You can mark approximate positions on floor plans, but allow your visualization artist flexibility. They can suggest angles based on experience with what renders well.",
          },
        ],
      },
    ],
  },
  {
    slug: "realistic-materials-in-archviz",
    title: "Why Realistic Materials Matter in Architectural Visualization",
    excerpt: "Material accuracy is crucial for convincing renders. Explore how proper texture work, reflections, and surface details create photorealism in 3D visualization.",
    category: "materials",
    readTime: 6,
    publishedAt: "2025-11-28",
    featured: false,
    image: "/images/Project_Images/kitchen1.webp",
    content: [
      {
        type: "paragraph",
        content: "Materials are what make a render feel real. The subtle grain of wood, the soft texture of fabric, the precise reflectivity of glass – these details communicate quality and give viewers confidence in the design.",
      },
      {
        type: "heading",
        content: "Key Material Properties",
      },
      {
        type: "list",
        items: [
          "Color and albedo: the base color without lighting effects",
          "Roughness: how smooth or matte a surface appears",
          "Reflectivity: how much light bounces off the surface",
          "Normal/bump maps: surface detail without geometry",
          "Displacement: actual geometry-level surface detail",
        ],
      },
      {
        type: "heading",
        content: "Common Material Mistakes",
      },
      {
        type: "paragraph",
        content: "Many renders fail because materials are too perfect or too uniform. Real materials have variation, wear, and imperfection. Wood has grain direction and knots. Concrete has subtle color shifts. Metal has fingerprints and microscopic scratches.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Can you match specific manufacturer materials?",
            answer: "Yes, given product codes or samples, I can create accurate digital representations of specific flooring, tiles, fabrics, and other specified materials.",
          },
          {
            question: "How do I specify materials I want?",
            answer: "Provide manufacturer names and product codes when possible. Photos of actual samples are also helpful. Include notes about finish (matte, gloss, satin) and any special treatments.",
          },
        ],
      },
    ],
  },
  {
    slug: "lighting-techniques-for-archviz",
    title: "Lighting Techniques That Elevate Architectural Renders",
    excerpt: "Lighting sets the mood and defines the atmosphere of a visualization. Discover professional lighting approaches that make spaces feel alive and inviting.",
    category: "lighting",
    readTime: 8,
    publishedAt: "2025-11-15",
    featured: false,
    image: "/images/Project_Images/exteriorsunset2.webp",
    content: [
      {
        type: "paragraph",
        content: "Lighting is perhaps the most important element in architectural visualization. It defines mood, creates depth, highlights features, and ultimately determines whether a render feels like a photograph or a 3D model.",
      },
      {
        type: "heading",
        content: "Natural Lighting Considerations",
      },
      {
        type: "list",
        items: [
          "Geographic location affects sun angle and color",
          "Time of day dramatically changes mood",
          "Weather conditions add atmosphere",
          "Season affects sun path and vegetation",
          "Window orientation determines light quality",
        ],
      },
      {
        type: "heading",
        content: "Artificial Lighting in Interiors",
      },
      {
        type: "paragraph",
        content: "Interior spaces require careful balancing of natural and artificial light. The goal is to create a realistic mix that feels natural while highlighting architectural features and creating the desired atmosphere.",
      },
      {
        type: "quote",
        content: "Good lighting in a render does what good lighting does in life – it makes you feel something about the space.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Should I choose day or night renders?",
            answer: "Consider your marketing needs. Day renders show spaces in their everyday state. Night/evening renders create mood and highlight interior lighting design. Many projects benefit from both.",
          },
          {
            question: "Can you match a specific time of day?",
            answer: "Yes, given the project location and desired time, I can accurately simulate sun position and light quality for any time of day and year.",
          },
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug)
}

export function getFeaturedArticle(): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.featured)
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  if (category === "all") return BLOG_ARTICLES
  return BLOG_ARTICLES.filter((article) => article.category === category)
}
