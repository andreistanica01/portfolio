import type { Locale } from "@/lib/i18n"
import { SITE_CONFIG } from "@/lib/content"

export type ProjectMediaItem = {
  type: "image" | "video"
  label: string
  image: string
  alt?: string
  labelRo?: string
  altRo?: string
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
  titleRo?: string
  subtitleRo?: string
  descriptionRo?: string
  typeRo?: string
  imageAltRo?: string
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
    titleRo: "Vila Moderna din Piatra Calda",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic architectural visualization of a luxury modern villa designed with warm stone textures, oak wood detailing, floor-to-ceiling glazing, soft indirect lighting, and refined Mediterranean landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the poolside facade, marble kitchen, spa-style bathroom, and calm living area in a cohesive high-end residential design. Created for portfolio presentation, luxury real estate visualization, residential architecture marketing, premium interior design concepts, and contemporary villa presentation.",
    descriptionRo:
      "Vizualizare arhitecturala fotorealista pentru o vila moderna de lux, definita prin texturi calde de piatra, detalii din lemn de stejar, vitraje pe toata inaltimea, iluminare indirecta subtila si peisagistica mediteraneana rafinata. Acest proiect ArchViz realizat in Blender include randari de exterior si interior, prezentand fatada catre piscina, bucataria cu marmura, baia tip spa si zona de living intr-un concept rezidential coerent si premium. Creat pentru prezentare de portofoliu, vizualizare imobiliara de lux, marketing rezidential si prezentari arhitecturale contemporane.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Luxury Residential Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala Rezidentiala de Lux",
    imageAlt:
      "Photorealistic warm stone modern villa architectural visualization with luxury exterior, marble kitchen, spa bathroom, and living room created in Blender",
    imageAltRo:
      "Vizualizare arhitecturala fotorealista pentru o vila moderna din piatra, cu exterior de lux, bucatarie cu marmura, baie tip spa si living realizata in Blender",
    metaTitle: "Warm Stone Modern Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury modern villa architectural visualization featuring warm stone, oak wood, marble finishes, poolside exterior, and photorealistic Blender interior and exterior renders.",
    images: [
      {
        type: "image",
        label: "Modern Kitchen",
        labelRo: "Bucatarie Moderna",
        image: "/images/Project_Images/stonevilla1.webp",
        alt: "Luxury modern kitchen visualization with marble island, walnut cabinetry, warm lighting, and floor-to-ceiling glazing",
        altRo: "Vizualizare de bucatarie moderna de lux cu insula din marmura, mobilier din nuc, lumina calda si vitraje pe toata inaltimea",
      },
      {
        type: "image",
        label: "Spa-Style Bathroom",
        labelRo: "Baie Tip Spa",
        image: "/images/Project_Images/stonevilla2.webp",
        alt: "Spa-style bathroom visualization with freestanding bathtub, stone walls, double vanity, and soft natural light",
        altRo: "Vizualizare de baie tip spa cu cada freestanding, pereti din piatra, lavoar dublu si lumina naturala delicata",
      },
      {
        type: "image",
        label: "Living Room",
        labelRo: "Living",
        image: "/images/Project_Images/stonevilla3.webp",
        alt: "Warm modern living room visualization with stone wall, fireplace, oak ceiling, and soft neutral seating",
        altRo: "Vizualizare de living modern cald cu perete din piatra, semineu, tavan din stejar si mobilier in tonuri neutre",
      },
      {
        type: "image",
        label: "Poolside Exterior View",
        labelRo: "Exterior spre Piscina",
        image: "/images/Project_Images/stonevilla4.webp",
        alt: "Photorealistic luxury villa exterior with pool, warm stone walls, oak detailing, landscaped garden, and evening lighting",
        altRo: "Exterior fotorealist al unei vile de lux cu piscina, pereti din piatra calda, detalii din stejar, gradina amenajata si lumina de seara",
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
    titleRo: "Vila Clasica Eleganta",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic architectural visualization of a luxury classic villa designed with elegant stone detailing, arched openings, richly crafted wood finishes, marble surfaces, ornate lighting, and refined Mediterranean landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the grand front facade, classical kitchen, luxury bathroom, and formal living space in a cohesive high-end residential design. Created for portfolio presentation, luxury real estate visualization, residential architecture marketing, premium interior design concepts, and timeless villa presentation.",
    descriptionRo:
      "Vizualizare arhitecturala fotorealista pentru o vila clasica de lux, construita in jurul detaliilor elegante din piatra, golurilor arcuite, finisajelor bogate din lemn, suprafetelor din marmura, corpurilor decorative de iluminat si unei peisagistici mediteraneene rafinate. Acest proiect ArchViz realizat in Blender include randari de exterior si interior, prezentand fatada principala, bucataria clasica, baia de lux si livingul formal intr-un concept rezidential premium si coerent. Creat pentru prezentare de portofoliu, vizualizare imobiliara de lux si marketing arhitectural atemporal.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Luxury Residential Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala Rezidentiala de Lux",
    imageAlt:
      "Photorealistic classic luxury villa architectural visualization with grand exterior facade, elegant kitchen, bathroom, and formal living room created in Blender",
    imageAltRo:
      "Vizualizare arhitecturala fotorealista pentru o vila clasica de lux, cu fatada grandioasa, bucatarie eleganta, baie si living formal, realizata in Blender",
    metaTitle: "Classic Elegant Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury classic villa architectural visualization featuring stone detailing, arched openings, marble finishes, elegant interiors, and photorealistic Blender exterior and interior renders.",
    images: [
      {
        type: "image",
        label: "Front Facade",
        labelRo: "Fatada Principala",
        image: "/images/Project_Images/elegantvilla1.webp",
        alt: "Photorealistic front facade of a luxury classic villa with columns, arched windows, stone detailing, and landscaped entrance",
        altRo: "Fatada principala fotorealista a unei vile clasice de lux, cu coloane, ferestre arcuite, detalii din piatra si intrare amenajata",
      },
      {
        type: "image",
        label: "Classic Kitchen",
        labelRo: "Bucatarie Clasica",
        image: "/images/Project_Images/elegantvilla2.webp",
        alt: "Luxury classic kitchen visualization with carved wood cabinetry, marble island, pendant lanterns, and arched French doors",
        altRo: "Vizualizare de bucatarie clasica de lux cu mobilier sculptat din lemn, insula din marmura, felinare suspendate si usi arcuite",
      },
      {
        type: "image",
        label: "Luxury Bathroom",
        labelRo: "Baie de Lux",
        image: "/images/Project_Images/elegantvilla3.webp",
        alt: "Elegant classic bathroom visualization with freestanding bathtub, marble vanity, arched window, and stone-textured walls",
        altRo: "Vizualizare de baie clasica eleganta cu cada freestanding, mobilier din marmura, fereastra arcuita si pereti texturati",
      },
      {
        type: "image",
        label: "Formal Living Room",
        labelRo: "Living Formal",
        image: "/images/Project_Images/elegantvilla4.webp",
        alt: "Formal luxury living room visualization with chandelier, fireplace, leather seating, tall green drapes, and classic architectural detailing",
        altRo: "Vizualizare de living formal de lux cu candelabru, semineu, mobilier din piele, draperii verzi si detalii arhitecturale clasice",
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
    titleRo: "Vila Minimalista cu Sticla si Atmosfera Calda",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic architectural visualization of a luxury modern villa designed with warm minimalist interiors, natural stone finishes, oak wood details, floor-to-ceiling glass, soft ambient lighting, and refined garden landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the villa facade, open-plan living room, modern kitchen, and spa-style bathroom in a cohesive high-end residential design. Created for portfolio presentation, real estate visualization, premium interior design concepts, residential architecture marketing, and luxury property visualization in Bucharest, Romania.",
    descriptionRo:
      "Vizualizare arhitecturala fotorealista pentru o vila moderna de lux, cu interioare minimaliste calde, finisaje din piatra naturala, detalii din stejar, sticla pe toata inaltimea, iluminare ambientala delicata si gradina amenajata elegant. Acest proiect ArchViz realizat in Blender include randari de exterior si interior, prezentand fatada vilei, livingul open-space, bucataria moderna si baia tip spa intr-un concept rezidential premium si coerent. Creat pentru portofoliu, vizualizare imobiliara si prezentari de design rezidential de lux.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Luxury Residential Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala Rezidentiala de Lux",
    imageAlt:
      "Photorealistic warm minimalist glass villa exterior and interior architectural visualization with luxury kitchen, living room, and bathroom created in Blender",
    imageAltRo:
      "Vizualizare arhitecturala fotorealista pentru o vila minimalista cu sticla, cu bucatarie, living si baie de lux realizate in Blender",
    metaTitle: "Warm Minimalist Glass Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury minimalist glass villa visualization with warm interiors, oak wood, natural stone, garden landscaping, and photorealistic Blender renders.",
    images: [
      {
        type: "image",
        label: "Exterior Front View",
        labelRo: "Vedere Exterioara Frontala",
        image: "/images/Project_Images/glassvilla1.webp",
        alt: "Photorealistic exterior rendering of a warm minimalist glass villa with oak entrance, large windows, and landscaped garden",
        altRo: "Randare exterioara fotorealista a unei vile minimaliste cu sticla, intrare din stejar, ferestre ample si gradina amenajata",
      },
      {
        type: "image",
        label: "Open-Plan Living Room",
        labelRo: "Living Open-Space",
        image: "/images/Project_Images/glassvilla2.webp",
        alt: "Luxury minimalist living room visualization with oak wall panels, soft beige sofa, fireplace, glass walls, and garden view",
        altRo: "Vizualizare de living minimalist de lux cu panouri din stejar, canapea bej, semineu, pereti vitrați si vedere spre gradina",
      },
      {
        type: "image",
        label: "Modern Kitchen",
        labelRo: "Bucatarie Moderna",
        image: "/images/Project_Images/glassvilla3.webp",
        alt: "Photorealistic modern kitchen interior with white marble island, warm wood accents, pendant lights, and floor-to-ceiling windows",
        altRo: "Interior fotorealist de bucatarie moderna cu insula din marmura alba, accente din lemn cald, corpuri suspendate si ferestre pe toata inaltimea",
      },
      {
        type: "image",
        label: "Spa-Style Bathroom",
        labelRo: "Baie Tip Spa",
        image: "/images/Project_Images/glassvilla4.webp",
        alt: "Luxury spa-style bathroom visualization with freestanding bathtub, natural stone walls, glass shower, wood vanity, and garden view",
        altRo: "Vizualizare de baie tip spa de lux cu cada freestanding, pereti din piatra naturala, dus din sticla si mobilier din lemn",
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
    titleRo: "Vila Moderna cu Marmura Calacatta",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic architectural visualization of a luxury modern villa designed with Calacatta white marble, walnut wood finishes, black metal accents, floor-to-ceiling glass, soft warm lighting, and refined contemporary landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the villa facade, open-plan living room, modern kitchen, and luxury bathroom in a cohesive high-end residential design. Created for portfolio presentation, real estate visualization, premium interior design concepts, residential architecture marketing, and luxury property visualization in Bucharest, Romania.",
    descriptionRo:
      "Vizualizare arhitecturala fotorealista pentru o vila moderna de lux, definita de marmura alba Calacatta, finisaje din nuc, accente metalice negre, sticla pe toata inaltimea, iluminare calda si peisagistica contemporana. Acest proiect ArchViz realizat in Blender include randari de exterior si interior, prezentand fatada vilei, livingul open-space, bucataria moderna si baia de lux intr-un concept rezidential premium si coerent. Creat pentru portofoliu, vizualizare imobiliara si marketing rezidential de lux.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Luxury Residential Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala Rezidentiala de Lux",
    imageAlt:
      "Photorealistic Calacatta marble modern villa exterior and interior architectural visualization with luxury kitchen, living room, and bathroom created in Blender",
    imageAltRo:
      "Vizualizare arhitecturala fotorealista pentru o vila moderna cu marmura Calacatta, bucatarie, living si baie de lux realizate in Blender",
    metaTitle: "Calacatta Marble Modern Villa | Luxury ArchViz Project",
    metaDescription:
      "Luxury modern villa architectural visualization featuring Calacatta marble, walnut wood, glass walls, warm lighting, and photorealistic Blender exterior and interior renders. ArchViz portfolio project by a 3D visualization artist in Bucharest, Romania.",
    images: [
      {
        type: "image",
        label: "Exterior Perspective",
        labelRo: "Perspectiva Exterioara",
        image: "/images/Project_Images/whitemarble1.webp",
        alt: "Photorealistic exterior perspective of a Calacatta marble modern villa with large glazing and warm evening lighting",
        altRo: "Perspectiva exterioara fotorealista a unei vile moderne cu marmura Calacatta, vitraje ample si lumina calda de seara",
      },
      {
        type: "image",
        label: "Living Room",
        labelRo: "Living",
        image: "/images/Project_Images/whitemarble2.webp",
        alt: "Luxury villa living room visualization with Calacatta marble accents, walnut wood finishes, and soft ambient lighting",
        altRo: "Vizualizare de living de lux cu accente din marmura Calacatta, finisaje din nuc si iluminare ambientala delicata",
      },
      {
        type: "image",
        label: "Kitchen",
        labelRo: "Bucatarie",
        image: "/images/Project_Images/whitemarble3.webp",
        alt: "Modern kitchen visualization with Calacatta marble surfaces, walnut cabinetry, and floor-to-ceiling glazing",
        altRo: "Vizualizare de bucatarie moderna cu suprafete Calacatta, mobilier din nuc si vitraje pe toata inaltimea",
      },
      {
        type: "image",
        label: "Bathroom",
        labelRo: "Baie",
        image: "/images/Project_Images/whitemarble4.webp",
        alt: "Luxury villa bathroom visualization with Calacatta marble detailing, soft natural light, and premium fixtures",
        altRo: "Vizualizare de baie de lux cu detalii din marmura Calacatta, lumina naturala delicata si finisaje premium",
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
    titleRo: "Vila Moderna cu Marmura Inchisa",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic architectural visualization of a luxury modern villa defined by dark marble cladding, rich walnut finishes, expansive glazing, warm recessed lighting, and clean contemporary landscaping. This Blender ArchViz project includes exterior and interior renders, presenting the villa facade, living room, kitchen, and bathroom in a cohesive high-end residential narrative. Created for portfolio presentation, luxury real estate marketing, residential design approval, and premium architectural presentation.",
    descriptionRo:
      "Vizualizare arhitecturala fotorealista pentru o vila moderna de lux, definita prin placari din marmura inchisa, finisaje bogate din nuc, vitraje ample, iluminare incastrata calda si peisagistica contemporana clara. Acest proiect ArchViz realizat in Blender include randari de exterior si interior, prezentand fatada, livingul, bucataria si baia intr-o naratiune rezidentiala premium si coerenta. Creat pentru portofoliu, marketing imobiliar de lux si prezentari arhitecturale rafinate.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Exterior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Exterior",
    imageAlt:
      "Photorealistic dark marble modern villa architectural visualization with luxury exterior, living room, kitchen, and bathroom renders created in Blender",
    imageAltRo:
      "Vizualizare arhitecturala fotorealista pentru o vila moderna cu marmura inchisa, exterior de lux, living, bucatarie si baie realizate in Blender",
    metaTitle: "Dark Marble Modern Villa | Luxury Exterior ArchViz Project",
    metaDescription:
      "Luxury modern villa visualization with dark marble cladding, walnut wood, glass walls, and warm lighting across polished exterior and interior presentation renders.",
    images: [
      {
        type: "image",
        label: "Exterior View",
        labelRo: "Vedere Exterioara",
        image: "/images/Project_Images/blackmarble1.webp",
        alt: "Photorealistic exterior view of a dark marble modern villa with warm interior glow and landscaped surroundings",
        altRo: "Vedere exterioara fotorealista a unei vile moderne cu marmura inchisa, lumina interioara calda si peisaj amenajat",
      },
      {
        type: "image",
        label: "Living Room",
        labelRo: "Living",
        image: "/images/Project_Images/blackmarble2.webp",
        alt: "Luxury living room visualization with dark marble, walnut wood, and moody architectural lighting",
        altRo: "Vizualizare de living de lux cu marmura inchisa, lemn de nuc si iluminare arhitecturala ambientala",
      },
      {
        type: "image",
        label: "Kitchen",
        labelRo: "Bucatarie",
        image: "/images/Project_Images/blackmarble3.webp",
        alt: "Modern villa kitchen visualization with dark stone surfaces, walnut cabinetry, and refined warm lighting",
        altRo: "Vizualizare de bucatarie moderna pentru vila, cu piatra inchisa, mobilier din nuc si iluminare calda rafinata",
      },
      {
        type: "image",
        label: "Bathroom",
        labelRo: "Baie",
        image: "/images/Project_Images/blackmarble4.webp",
        alt: "Luxury villa bathroom visualization with dark marble textures, glass shower enclosure, and warm ambient lighting",
        altRo: "Vizualizare de baie de lux cu texturi de marmura inchisa, dus din sticla si iluminare ambientala calda",
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
    titleRo: "Vila Tropicala cu Marmura Verde",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic architectural visualization of a luxury tropical villa designed with green marble, warm oak wood, bronze accents, large glass openings, soft interior lighting, and dense planted surroundings. This Blender ArchViz project includes exterior and interior renders, showing the facade, bedroom, bathroom, and living spaces in a cohesive high-end residential concept. Created for portfolio presentation, luxury real estate marketing, interior concept approval, and contemporary villa presentation.",
    descriptionRo:
      "Vizualizare arhitecturala fotorealista pentru o vila tropicala de lux, construita in jurul marmurei verzi, lemnului cald de stejar, accentelor de bronz, deschiderilor vitrate ample si unei vegetatii dense. Acest proiect ArchViz realizat in Blender include randari de exterior si interior, prezentand fatada, dormitorul, baia si spatiile de zi intr-un concept rezidential premium si coerent. Creat pentru portofoliu, marketing imobiliar de lux si prezentari arhitecturale contemporane.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Exterior",
    imageAlt:
      "Photorealistic tropical green marble villa architectural visualization with luxury exterior, bedroom, living room, and bathroom renders",
    imageAltRo:
      "Vizualizare arhitecturala fotorealista pentru o vila tropicala cu marmura verde, exterior de lux, dormitor, living si baie",
    metaTitle: "Tropical Green Marble Villa | Luxury ArchViz Portfolio Project",
    metaDescription:
      "Luxury tropical villa visualization featuring green marble, oak wood, bronze accents, large glass openings, and lush landscaping across premium exterior and interior renders.",
    images: [
      {
        type: "image",
        label: "Exterior View",
        labelRo: "Vedere Exterioara",
        image: "/images/Project_Images/greenmarble1.webp",
        alt: "Photorealistic tropical villa exterior with green marble accents, large glazing, and lush landscaping",
        altRo: "Exterior fotorealist al unei vile tropicale cu accente din marmura verde, vitraje mari si vegetatie bogata",
      },
      {
        type: "image",
        label: "Bathroom",
        labelRo: "Baie",
        image: "/images/Project_Images/greenmarble2.webp",
        alt: "Luxury tropical villa bathroom visualization with green marble, bronze details, and soft natural lighting",
        altRo: "Vizualizare de baie tropicala de lux cu marmura verde, detalii din bronz si lumina naturala delicata",
      },
      {
        type: "image",
        label: "Living Room",
        labelRo: "Living",
        image: "/images/Project_Images/greenmarble3.webp",
        alt: "Warm tropical living room visualization with green stone accents, oak wood, and open garden views",
        altRo: "Vizualizare de living tropical cald cu accente din piatra verde, lemn de stejar si deschidere spre gradina",
      },
      {
        type: "image",
        label: "Mood Render",
        labelRo: "Cadru de Atmosfera",
        image: "/images/Project_Images/greenmarble4.webp",
        alt: "Architectural mood render from a tropical luxury villa concept with green marble and warm evening atmosphere",
        altRo: "Randare de atmosfera dintr-un concept de vila tropicala de lux cu marmura verde si lumina calda de seara",
      },
      {
        type: "image",
        label: "Bedroom",
        labelRo: "Dormitor",
        image: "/images/Project_Images/greenmarble5.webp",
        alt: "Luxury tropical bedroom visualization with warm oak wood, green marble accents, and soft layered lighting",
        altRo: "Vizualizare de dormitor tropical de lux cu stejar cald, accente din marmura verde si iluminare stratificata",
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
    titleRo: "Interior de Birou Modern cu Pereti de Sticla",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic office interior visualization of a modern workspace with full-height glazing, glass meeting rooms, warm oak desks, integrated linear lighting, and soft neutral finishes. The scene presents an open-plan office with focused workstations, executive rooms, lounge seating, and built-in storage in a clean contemporary composition. Created for portfolio presentation, workplace design approval, office leasing visuals, commercial real estate marketing, and premium office interior concepts.",
    descriptionRo:
      "Vizualizare fotorealista de interior office pentru un spatiu de lucru modern, cu vitraje pe toata inaltimea, sali de meeting din sticla, birouri din stejar, iluminare liniara integrata si finisaje neutre. Imaginea prezinta un birou open-space cu zone de lucru concentrate, spatii executive, lounge si depozitare integrata intr-o compozitie contemporana curata. Creat pentru portofoliu, prezentari de amenajare office si marketing imobiliar comercial.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Office Interior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Interior Office",
    imageAlt:
      "Photorealistic modern office interior architectural visualization with glass meeting rooms, oak desks, lounge seating, and soft natural daylight created in Blender",
    imageAltRo:
      "Vizualizare fotorealista de birou modern cu sali de meeting din sticla, birouri din stejar si lumina naturala delicata realizata in Blender",
    metaTitle: "Modern Glass Office Interior | Office ArchViz Project",
    metaDescription:
      "Modern office interior visualization with glass meeting rooms, oak finishes, soft daylight, and photorealistic workspace presentation for commercial interiors and leasing marketing.",
    images: [
      {
        type: "image",
        label: "Open-Plan Office View",
        labelRo: "Vedere Open-Space",
        image: "/images/Project_Images/office1.webp",
        alt: "Photorealistic modern office interior with open-plan desks, glass meeting rooms, oak finishes, lounge seating, and large windows",
        altRo: "Interior office fotorealist cu birouri open-space, sali de meeting din sticla, finisaje din stejar si ferestre mari",
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
    titleRo: "Birou Contemporan Open-Space",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic office interior visualization of a contemporary open-plan workspace designed with warm oak finishes, glass-partition meeting rooms, integrated ceiling lighting, and a calm material palette. The project presents collaborative desks, private meeting spaces, lounge seating, and built-in storage in a polished commercial environment suited for design review, leasing presentation, and workplace marketing.",
    descriptionRo:
      "Vizualizare fotorealista de interior office pentru un spatiu open-space contemporan, definit prin finisaje calde din stejar, sali de meeting compartimentate cu sticla, iluminare integrata in tavan si o paleta materiala calma. Proiectul prezinta birouri colaborative, zone private de intalnire, lounge si depozitare intr-un ambient comercial bine finisat, potrivit pentru prezentari de design si leasing.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Office Interior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Interior Office",
    imageAlt:
      "Photorealistic contemporary open-plan office interior visualization with glass meeting rooms, oak desks, lounge seating, and integrated ceiling lighting created in Blender",
    imageAltRo:
      "Vizualizare fotorealista de birou open-space contemporan cu sali de meeting din sticla, birouri din stejar si iluminare integrata",
    metaTitle: "Contemporary Open-Plan Office | Office ArchViz Project",
    metaDescription:
      "Contemporary open-plan office visualization featuring glass meeting rooms, oak finishes, integrated lighting, and photorealistic commercial workspace presentation.",
    images: [
      {
        type: "image",
        label: "Open-Plan Office Workspace",
        labelRo: "Spatiu Office Open-Space",
        image: "/images/Project_Images/office2.webp",
        alt: "Photorealistic contemporary office interior with open-plan desks, glass meeting rooms, oak finishes, lounge seating, and integrated ceiling lighting",
        altRo: "Interior office contemporan fotorealist cu birouri open-space, sali din sticla, finisaje din stejar si iluminare integrata",
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
    titleRo: "Interior de Studio Creativ",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic office interior visualization of a creative studio workspace with oak worktables, lounge seating, black-framed glass partitions, slatted wood wall panels, and a material presentation area. The project balances collaborative desks with informal meeting zones to create a professional but relaxed studio atmosphere suited for brand presentation, design approval, and commercial workplace marketing.",
    descriptionRo:
      "Vizualizare fotorealista de interior office pentru un studio creativ, cu mese de lucru din stejar, zona lounge, compartimentari din sticla cu rame negre, panouri riflate din lemn si zona pentru prezentarea materialelor. Proiectul echilibreaza birourile colaborative cu zonele informale de discutie pentru a crea o atmosfera profesionala, dar relaxata, potrivita pentru prezentari de brand si marketing comercial.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Office Interior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Interior Office",
    imageAlt:
      "Photorealistic creative studio office interior visualization with oak worktables, lounge seating, slatted wood walls, and glass meeting space created in Blender",
    imageAltRo:
      "Vizualizare fotorealista de studio creativ cu mese din stejar, zona lounge, pereti riflati si spatiu de meeting din sticla realizata in Blender",
    metaTitle: "Creative Studio Office Interior | Office ArchViz Project",
    metaDescription:
      "Creative studio office visualization featuring oak worktables, lounge seating, glass partitions, and warm contemporary workspace design rendered photorealistically in Blender.",
    images: [
      {
        type: "image",
        label: "Creative Studio Workspace",
        labelRo: "Spatiu de Studio Creativ",
        image: "/images/Project_Images/office3.webp",
        alt: "Photorealistic creative office interior with oak desks, lounge seating, glass partitions, slatted wood walls, and a material presentation board",
        altRo: "Interior office creativ fotorealist cu birouri din stejar, lounge, compartimentari din sticla, pereti riflati si panou de materiale",
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
    titleRo: "Coffee Shop Minimalist cu Atmosfera Calda",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic hospitality interior visualization of a warm minimalist coffee shop designed with natural wood finishes, soft plaster textures, pendant lighting, built-in seating, and a welcoming espresso counter. The scene presents pastry display, lounge-style seating, and calm daylight atmosphere in a cohesive cafe concept created for branding presentation, hospitality design review, and commercial marketing.",
    descriptionRo:
      "Vizualizare fotorealista de interior hospitality pentru un coffee shop minimalist cu atmosfera calda, definit prin finisaje naturale din lemn, texturi fine de tencuiala, iluminare suspendata, banchete integrate si un bar de espresso primitor. Cadrul prezinta vitrina de patiserie, zone de relaxare si o lumina de zi calma intr-un concept coerent de cafenea, creat pentru branding, prezentari de design hospitality si marketing comercial.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2025",
    type: "Hospitality Interior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Interior Hospitality",
    imageAlt:
      "Photorealistic warm minimalist coffee shop interior visualization with wood counter, pastry display, soft seating, and natural daylight created in Blender",
    imageAltRo:
      "Vizualizare fotorealista de coffee shop minimalist, cu bar din lemn, vitrina de patiserie, seating confortabil si lumina naturala",
    metaTitle: "Warm Minimalist Coffee Shop | Hospitality ArchViz Project",
    metaDescription:
      "Warm minimalist coffee shop visualization with wood finishes, pastry display, soft seating, pendant lighting, and photorealistic hospitality presentation.",
    images: [
      {
        type: "image",
        label: "Coffee Shop Interior View",
        labelRo: "Vedere Interior Cafenea",
        image: "/images/Project_Images/coffeeshop1.webp",
        alt: "Photorealistic coffee shop interior with wood counter, espresso machine, pastry display, lounge seating, and warm natural daylight",
        altRo: "Interior fotorealist de coffee shop cu bar din lemn, espressor, vitrina de patiserie, seating relaxat si lumina naturala calda",
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
    titleRo: "Cafe Contemporan de Cartier",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic hospitality interior visualization of a contemporary neighborhood cafe designed with warm wood wall paneling, soft neutral plaster finishes, marble-topped communal seating, pendant lighting, and a refined espresso counter. The image presents a calm daytime cafe atmosphere with balanced circulation, curated shelving, and welcoming service zone for hospitality branding, leasing presentation, and interior design approval.",
    descriptionRo:
      "Vizualizare fotorealista de interior hospitality pentru un cafe contemporan de cartier, proiectat cu lambriuri calde din lemn, finisaje neutre din tencuiala, mese comunale cu blat de marmura, iluminare suspendata si un bar de espresso rafinat. Imaginea transmite o atmosfera calma de zi, cu circulatii bine echilibrate, rafturi curate si o zona de servire primitoare, utila pentru branding hospitality, leasing si aprobari de design interior.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Hospitality Interior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Interior Hospitality",
    imageAlt:
      "Photorealistic contemporary cafe interior visualization with warm wood finishes, marble tables, pendant lights, and espresso counter created in Blender",
    imageAltRo:
      "Vizualizare fotorealista de cafe contemporan, cu finisaje din lemn, mese din marmura, corpuri suspendate si bar de espresso realizata in Blender",
    metaTitle: "Contemporary Neighborhood Cafe | Hospitality ArchViz Project",
    metaDescription:
      "Contemporary cafe interior visualization featuring warm wood finishes, marble seating, pendant lighting, espresso counter, and photorealistic hospitality presentation.",
    images: [
      {
        type: "image",
        label: "Cafe Interior View",
        labelRo: "Vedere Interior Cafe",
        image: "/images/Project_Images/coffeeshop2.webp",
        alt: "Photorealistic cafe interior with warm wood finishes, marble communal table, bench seating, pendant lights, and espresso counter",
        altRo: "Interior fotorealist de cafe cu finisaje calde din lemn, masa comuna din marmura, banchete, corpuri suspendate si bar de espresso",
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
    titleRo: "Vila Moderna",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic exterior architectural visualization of a modern luxury villa featuring warm wood cladding, dark facade panels, expansive glazing, landscaping, pool reflections, and calibrated architectural lighting. The project includes day, sunset, and night render sets to communicate different moods for real estate presentation, marketing, and architectural approval.",
    descriptionRo:
      "Vizualizare arhitecturala fotorealista de exterior pentru o vila moderna de lux, cu placari calde din lemn, panouri inchise la culoare, vitraje ample, peisagistica, reflexii in piscina si iluminare arhitecturala controlata. Proiectul include seturi de randari de zi, la apus si de noapte pentru a comunica diferite atmosfere in prezentari imobiliare si arhitecturale.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Exterior",
    imageAlt:
      "Modern luxury villa exterior architectural visualization with warm wood cladding, pool reflections, and day, sunset, and night render variations",
    imageAltRo:
      "Vizualizare arhitecturala de exterior pentru o vila moderna de lux, cu placari din lemn, reflexii in piscina si variante de zi, apus si noapte",
    metaTitle: "Modern Villa | Exterior Architectural Visualization Project",
    metaDescription:
      "Exterior architectural visualization of a modern luxury villa with warm wood cladding, dark facade panels, pool reflections, landscaping, and day-to-night lighting studies.",
    images: [
      {
        type: "image",
        label: "Sunset Render",
        labelRo: "Randare la Apus",
        image: "/images/Project_Images/exteriorsunset2.webp",
        alt: "Modern villa exterior render at sunset with warm facade lighting, pool reflections, and landscaped garden",
      },
      {
        type: "image",
        label: "Day Render",
        labelRo: "Randare de Zi",
        image: "/images/Project_Images/exteriorday2.webp",
        alt: "Daylight exterior render of a modern villa with wood cladding, large glazing, and poolside landscape design",
      },
      {
        type: "image",
        label: "Night Render",
        labelRo: "Randare de Noapte",
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
    titleRo: "Exterior Casa Moderna",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic exterior visualization of a modern house with clean architectural lines, generous glazing, and a warm natural material palette. The project focuses on atmosphere, realistic daylight behavior, and evening presentation, showing how the same facade performs across different lighting conditions.",
    descriptionRo:
      "Vizualizare fotorealista de exterior pentru o casa moderna, cu linii arhitecturale curate, vitraje generoase si o paleta calda de materiale naturale. Proiectul pune accent pe atmosfera, comportamentul realist al luminii de zi si prezentarea de seara, aratand cum aceeasi fatada functioneaza in conditii diferite de iluminare.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Exterior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Exterior",
    imageAlt:
      "Modern house exterior architectural visualization with clean lines, large glass openings, and warm materials shown in day and night lighting",
    imageAltRo:
      "Vizualizare arhitecturala de exterior pentru o casa moderna, cu linii curate, vitraje mari si materiale calde, prezentata in lumina de zi si de noapte",
    metaTitle: "Modern House Exterior | Residential ArchViz Project",
    metaDescription:
      "Residential exterior visualization of a modern house with large glass openings, natural materials, and realistic day and night lighting for architectural presentation.",
    images: [
      {
        type: "image",
        label: "Day Render",
        labelRo: "Randare de Zi",
        image: "/images/Project_Images/exteriorday1.webp",
        alt: "Daylight render of a modern house exterior with large glass openings and warm natural materials",
      },
      {
        type: "image",
        label: "Night Render",
        labelRo: "Randare de Noapte",
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
    titleRo: "Apartament Contemporan",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic interior visualization of a contemporary apartment developed from blueprints and CAD references, with each room modeled to real-world scale and proportion. The project presents the living room, bedroom, and kitchen as a cohesive residential interior focused on accurate layout translation, realistic materials, and clear presentation for design approval and marketing.",
    descriptionRo:
      "Vizualizare fotorealista de interior pentru un apartament contemporan dezvoltat pe baza planurilor si fisierelor CAD, cu fiecare incapere modelata la scara reala si proportii corecte. Proiectul prezinta livingul, dormitorul si bucataria ca un interior rezidential coerent, axat pe transpunerea precisa a layout-ului, materiale realiste si prezentare clara pentru aprobare si marketing.",
    tools: ["Blender", "Affinity Photo", "Autodesk AutoCAD"],
    year: "2026",
    type: "Interior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Interior",
    imageAlt:
      "Contemporary apartment interior visualization with accurately modeled living room, bedroom, and kitchen based on blueprints and CAD references",
    imageAltRo:
      "Vizualizare de apartament contemporan cu living, dormitor si bucatarie modelate precis pe baza planurilor si fisierelor CAD",
    metaTitle: "Contemporary Apartment | Interior ArchViz Portfolio Project",
    metaDescription:
      "Contemporary apartment interior visualization developed from blueprints and CAD files, featuring accurate living room, bedroom, and kitchen renders with real-world scale and material realism.",
    images: [
      {
        type: "image",
        label: "Living Room Render",
        labelRo: "Randare Living",
        image: "/images/Project_Images/living1.webp",
        alt: "Contemporary apartment living room visualization with clean furniture layout, soft lighting, and realistic material detailing",
      },
      {
        type: "image",
        label: "Bedroom Render",
        labelRo: "Randare Dormitor",
        image: "/images/Project_Images/bedroom1.webp",
        alt: "Contemporary apartment bedroom visualization with calm neutral palette, accurate proportions, and soft daylight",
      },
      {
        type: "image",
        label: "Kitchen Render",
        labelRo: "Randare Bucatarie",
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
    titleRo: "Dormitor Mediteranean din Piatra",
    subtitle: "Personal ArchViz Project",
    subtitleRo: "Proiect Personal ArchViz",
    description:
      "Photorealistic interior visualization of a warm Mediterranean-inspired bedroom featuring natural stone walls, soft layered lighting, restrained furnishings, and a calm minimal palette. The scene was modeled and rendered in Blender with close attention to material realism, proportion, and atmosphere to create a serene residential presentation image.",
    descriptionRo:
      "Vizualizare fotorealista de interior pentru un dormitor cu influente mediteraneene, definit prin pereti din piatra naturala, iluminare stratificata delicata, mobilier discret si o paleta minima, calma. Scena a fost modelata si randata in Blender cu atentie la realismul materialelor, proportii si atmosfera, pentru a crea o imagine rezidentiala senina.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Interior Architectural Visualization",
    typeRo: "Vizualizare Arhitecturala de Interior",
    imageAlt:
      "Mediterranean-inspired bedroom interior visualization with natural stone walls, soft lighting, and warm minimalist styling",
    imageAltRo:
      "Vizualizare de dormitor cu inspiratie mediteraneana, pereti din piatra naturala, lumina delicata si stil minimal cald",
    metaTitle: "Mediterranean Stone Bedroom | Interior Visualization Project",
    metaDescription:
      "Interior visualization of a Mediterranean-inspired bedroom with natural stone walls, soft lighting, and warm minimal styling created for residential ArchViz presentation.",
    images: [
      {
        type: "image",
        label: "Bedroom Render",
        labelRo: "Randare Dormitor",
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
    titleRo: "Julietta H6",
    subtitle: "Personal Project",
    subtitleRo: "Proiect Personal",
    description:
      "The Julietta H6 was created with strong attention to real-world proportions, clean surface transitions, and high-detail modeling based on accurate references. I focus on precise body lines, realistic materials, and controlled lighting to achieve a professional automotive look suitable for marketing, visualization, and commercial use.",
    descriptionRo:
      "Julietta H6 a fost creata cu atentie mare la proportiile reale, tranzitiile curate ale suprafetelor si modelarea detaliata bazata pe referinte corecte. Accentul este pus pe liniile precise ale caroseriei, materiale realiste si iluminare controlata pentru un rezultat auto profesional, potrivit pentru prezentare si marketing.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Automotive",
    typeRo: "Automotive",
    imageAlt:
      "High-detail Julietta H6 automotive visualization with accurate body proportions, refined surfacing, and studio-style lighting",
    imageAltRo:
      "Vizualizare auto Julietta H6 cu detaliu ridicat, proportii precise ale caroseriei si iluminare de studio",
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
    titleRo: "Volan R8",
    subtitle: "Personal Project",
    subtitleRo: "Proiect Personal",
    description:
      "The Audi R8 Steering Wheel is modeled with high attention to detail and precision hard surface techniques. I focused on very accurate proportions, sharp surface transitions, and small mechanical elements to achieve a realistic and production-level result.",
    descriptionRo:
      "Volanul inspirat de Audi R8 este modelat cu atentie ridicata la detalii si tehnici precise de hard-surface. M-am concentrat pe proportii foarte exacte, tranzitii ferme ale suprafetelor si elemente mecanice mici pentru a obtine un rezultat realist si la nivel de productie.",
    tools: ["Blender", "Affinity Photo"],
    year: "2026",
    type: "Automotive Interior Part / Product Visualization",
    typeRo: "Piesa Auto de Interior / Vizualizare de Produs",
    imageAlt:
      "Detailed Audi R8 steering wheel visualization with precise hard-surface modeling, metallic finishes, and close-up product presentation lighting",
    imageAltRo:
      "Vizualizare detaliata a unui volan inspirat de Audi R8, cu modelare hard-surface precisa, finisaje metalice si iluminare de produs",
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

export function getLocalizedProject(project: Project, locale: Locale): Project {
  if (locale !== "ro") {
    return project
  }

  return {
    ...project,
    title: project.titleRo ?? project.title,
    subtitle: project.subtitleRo ?? project.subtitle,
    description: project.descriptionRo ?? project.description,
    type: project.typeRo ?? project.type,
    imageAlt: project.imageAltRo ?? project.imageAlt,
    images: project.images.map((image) => ({
      ...image,
      label: image.labelRo ?? image.label,
      alt: image.altRo ?? image.alt,
    })),
  }
}

export const getProjectMetadata = (project: Project) => ({
  title: project.metaTitle ?? defaultMetaTitle(project),
  description: project.metaDescription ?? defaultMetaDescription(project),
})
