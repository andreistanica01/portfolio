import {
  ABOUT_SECTION,
  BLOG_CONTENT,
  CONTACT_SECTION,
  HERO_CONTENT,
  NAV_LINKS,
  SERVICES_SECTION,
  SITE_CONFIG,
  WORK_TOGETHER_CONTENT,
} from "@/lib/content"
import {
  FORM_CONFIG,
  FORM_FIELDS,
  FORM_MESSAGES,
  FORM_SECTIONS,
} from "@/lib/form-constants"
import type { Locale } from "@/lib/i18n"

export type LocalizedDictionary = {
  locale: Locale
  siteConfig: typeof SITE_CONFIG
  navLinks: typeof NAV_LINKS
  heroContent: typeof HERO_CONTENT
  servicesSection: typeof SERVICES_SECTION
  aboutSection: typeof ABOUT_SECTION
  contactSection: typeof CONTACT_SECTION
  blogContent: typeof BLOG_CONTENT
  workTogetherContent: typeof WORK_TOGETHER_CONTENT
  formConfig: typeof FORM_CONFIG
  formFields: typeof FORM_FIELDS
  formMessages: typeof FORM_MESSAGES
  formSections: typeof FORM_SECTIONS
  faqHeading: string
}

const englishDictionary: LocalizedDictionary = {
  locale: "en",
  siteConfig: SITE_CONFIG,
  navLinks: NAV_LINKS,
  heroContent: HERO_CONTENT,
  servicesSection: SERVICES_SECTION,
  aboutSection: ABOUT_SECTION,
  contactSection: CONTACT_SECTION,
  blogContent: BLOG_CONTENT,
  workTogetherContent: WORK_TOGETHER_CONTENT,
  formConfig: FORM_CONFIG,
  formFields: FORM_FIELDS,
  formMessages: FORM_MESSAGES,
  formSections: FORM_SECTIONS,
  faqHeading: "Frequently Asked Questions",
}

const romanianDictionary: LocalizedDictionary = {
  locale: "ro",
  siteConfig: {
    ...SITE_CONFIG,
    tagline: "Studio de Vizualizare Arhitecturala",
    description:
      "Servicii profesionale de vizualizare arhitecturala 3D pentru interioare rezidentiale, randari exterioare, spatii office, interioare hospitality si imagini fotorealiste de prezentare.",
    copyright: "2026 Toate drepturile rezervate",
  },
  navLinks: {
    home: "Acasa",
    work: "Portofoliu",
    services: "Servicii",
    blog: "Blog",
    about: "Despre",
    contact: "Contact",
    workTogether: "Hai sa colaboram",
  },
  heroContent: {
    ...HERO_CONTENT,
    subtitle: "Vizualizare Arhitecturala",
  },
  servicesSection: {
    title: "Servicii",
    subtitle: "Ce ofer",
    items: [
      {
        id: "interior",
        title: "Vizualizare de Interior",
        description:
          "Randari fotorealiste de interior care dau viata spatiilor tale. De la locuinte la spatii comerciale, creez imagini detaliate cu iluminare, materiale si atmosfera credibile.",
        features: ["Interioare Rezidentiale", "Spatii Comerciale", "Studii de Lumina"],
      },
      {
        id: "exterior",
        title: "Vizualizare de Exterior",
        description:
          "Randari profesionale de exterior care pun in valoare proiectele tale arhitecturale. Scene de zi, apus si noapte, cu peisagistica realista si context ambiental convingator.",
        features: ["Fatade", "Randari Zi/Noapte", "Vederi Aeriene"],
      },
      {
        id: "floorplans",
        title: "Planuri 3D",
        description:
          "Planuri 3D clare si elegante care ajuta clientii sa inteleaga rapid compartimentarea. Ideale pentru marketing imobiliar si prezentari arhitecturale.",
        features: ["Planuri Mobilate", "Vederi de Sus", "Pregatite pentru Marketing"],
      },
    ],
  },
  aboutSection: {
    title: "Despre",
    bio: "Sunt un artist 3D dedicat, cu aproape 2 ani de experienta in Blender, specializat in modelare hard-surface si randari arhitecturale de exterior si interior. Ma concentrez pe acuratetea modelarii bazate pe planuri, pentru a pastra proportii precise si topologie curata in fiecare proiect, sustinuta de cunostinte practice de AutoCAD pentru realizarea layout-urilor corecte. Cu atentie puternica la detalii, creez imagini de calitate, sustinute de materiale realiste, iluminare profesionala si post-productie bine controlata.",
    skills: {
      modeling: {
        title: "Modelare",
        items: ["Blender"],
      },
      rendering: {
        title: "Randare",
        items: ["Blender Cycles", "Unreal Engine"],
      },
      postProduction: {
        title: "Post Productie",
        items: ["Photoshop", "DaVinci Resolve", "Affinity"],
      },
    },
  },
  contactSection: {
    title: "Hai sa lucram impreuna",
    subtitle: "Disponibil pentru proiecte freelance si colaborari",
    cta: "Ia legatura",
  },
  blogContent: {
    hero: {
      title: "Ghiduri de Vizualizare 3D",
      subtitle:
        "Sfaturi, tutoriale si perspective pentru cei care lucreaza cu vizualizare arhitecturala",
    },
    categories: {
      all: "Toate Articolele",
      workflow: "Workflow",
      "interior visualization": "Vizualizare Interior",
      "3D floor plans": "Planuri 3D",
      "client guide": "Ghid Client",
      "AI workflow": "Workflow AI",
      lighting: "Iluminare",
    },
    cta: {
      title: "Vrei sa incepem proiectul?",
      description:
        "Hai sa discutam cum te pot ajuta sa iti prezinti proiectul prin vizualizari 3D de impact.",
      button: "Hai sa colaboram",
    },
    readMore: "Citeste articolul",
    readTime: "min de citit",
    featured: "Recomandat",
  },
  workTogetherContent: {
    hero: {
      title: "Lucram Impreuna",
      subtitle: "Hai sa transformam viziunea ta arhitecturala in imagini convingatoare",
    },
    howItWorks: {
      title: "Cum Decurge",
      steps: [
        {
          number: "01",
          title: "Contact Initial",
          description:
            "Trimite detaliile proiectului prin formularul de inquiry ca sa inteleg nevoile tale si sa pregatesc o oferta.",
        },
        {
          number: "02",
          title: "Oferta si Termen",
          description:
            "In maximum 24 de ore analizez fisierele si iti trimit o oferta cu un termen estimativ.",
        },
        {
          number: "03",
          title: "Productie",
          description:
            "Dupa aprobare, incep productia si iti trimit update-uri in etapele importante.",
        },
        {
          number: "04",
          title: "Livrare",
          description:
            "Randarile finale sunt livrate in formatul dorit, iar reviziile rafineaza rezultatul final.",
        },
      ],
    },
    whatToPrepare: {
      title: "Ce Sa Pregatesti",
      description:
        "Daca ai aceste materiale pregatite, pot estima mai corect proiectul si pot incepe mai repede:",
      items: [
        {
          title: "Planuri si Schite",
          description:
            "Planuri desenate de mana, schite simple sau layout-uri de referinta cu masuratori de baza sunt suficiente pentru a incepe.",
        },
        {
          title: "Imagini de Referinta",
          description:
            "Moodboard-uri, imagini de inspiratie sau exemple de stil care arata directia vizuala dorita.",
        },
        {
          title: "Specificatii de Materiale",
          description:
            "Informatii despre finisaje, culori, texturi si orice produse specifice care trebuie incluse.",
        },
        {
          title: "Unghiuri de Camera",
          description:
            "Planuri marcate sau descrieri ale cadrelor pe care vrei sa le vezi randate.",
        },
      ],
    },
    formSection: {
      title: "Cerere de Proiect",
      description:
        "Spune-mi cateva detalii despre proiect. Campurile marcate cu * sunt obligatorii.",
    },
    privacyNote:
      "Informatiile tale raman confidentiale si vor fi folosite doar pentru discutia despre proiect.",
  },
  formConfig: FORM_CONFIG,
  formFields: {
    ...FORM_FIELDS,
    name: {
      ...FORM_FIELDS.name,
      label: "Nume Complet",
      placeholder: "Numele tau",
    },
    email: {
      ...FORM_FIELDS.email,
      label: "Adresa de Email",
      placeholder: "nume@email.com",
    },
    phone: {
      ...FORM_FIELDS.phone,
      label: "Numar de Telefon",
      placeholder: "+40 700 000 000",
    },
    company: {
      ...FORM_FIELDS.company,
      label: "Companie / Studio",
      placeholder: "Numele companiei sau studioului",
    },
    projectType: {
      ...FORM_FIELDS.projectType,
      label: "Tip Proiect",
      placeholder: "Selecteaza tipul proiectului",
      options: [
        { value: "interior", label: "Vizualizare Interior" },
        { value: "exterior", label: "Vizualizare Exterior" },
        { value: "floorplan", label: "Planuri 3D" },
        { value: "mixed", label: "Mixt (Interior + Exterior)" },
        { value: "other", label: "Altul" },
      ],
    },
    buildingType: {
      ...FORM_FIELDS.buildingType,
      label: "Tip Constructie",
      placeholder: "Selecteaza tipul constructiei",
      options: [
        { value: "residential-single", label: "Locuinta Unifamiliala" },
        { value: "residential-multi", label: "Bloc / Apartamente" },
        { value: "commercial", label: "Comercial / Office" },
        { value: "retail", label: "Retail / Hospitality" },
        { value: "mixed-use", label: "Dezvoltare Mixta" },
        { value: "other", label: "Altul" },
      ],
    },
    numberOfImages: {
      ...FORM_FIELDS.numberOfImages,
      label: "Numar Estimativ de Imagini",
      placeholder: "Selecteaza intervalul",
      options: [
        { value: "1-3", label: "1-3 imagini" },
        { value: "4-6", label: "4-6 imagini" },
        { value: "7-10", label: "7-10 imagini" },
        { value: "10+", label: "10+ imagini" },
        { value: "unsure", label: "Inca nu sunt sigur" },
      ],
    },
    timeline: {
      ...FORM_FIELDS.timeline,
      label: "Termen Dorit",
      placeholder: "Selecteaza termenul",
      options: [
        { value: "1-2-weeks", label: "1-2 saptamani" },
        { value: "2-4-weeks", label: "2-4 saptamani" },
        { value: "1-2-months", label: "1-2 luni" },
        { value: "flexible", label: "Flexibil" },
      ],
    },
    budget: {
      ...FORM_FIELDS.budget,
      label: "Buget Estimativ",
      placeholder: "Selecteaza intervalul de buget",
      options: [
        { value: "under-1000", label: "Sub $1,000" },
        { value: "1000-2500", label: "$1,000 - $2,500" },
        { value: "2500-5000", label: "$2,500 - $5,000" },
        { value: "5000-10000", label: "$5,000 - $10,000" },
        { value: "10000+", label: "$10,000+" },
        { value: "discuss", label: "Prefer sa discutam" },
      ],
    },
    fileLinks: {
      ...FORM_FIELDS.fileLinks,
      label: "Link-uri Fisiere",
      placeholder:
        "Adauga link-uri catre fisierele tale (Google Drive, Dropbox, WeTransfer, board-uri Pinterest)",
      helpText:
        "Trimite link-uri catre fisiere CAD, imagini de referinta, moodboard-uri sau orice alte materiale relevante.",
    },
    description: {
      ...FORM_FIELDS.description,
      label: "Descrierea Proiectului",
      placeholder:
        "Spune-mi cateva detalii despre proiect. Include informatii despre design, cadrele dorite, materialele sau stilul preferat si orice alt aspect relevant.",
    },
    hasCAD: {
      ...FORM_FIELDS.hasCAD,
      label: "Am fisiere CAD / planuri pregatite",
    },
    hasReferences: {
      ...FORM_FIELDS.hasReferences,
      label: "Am imagini de referinta / moodboard-uri",
    },
    needsAnimation: {
      ...FORM_FIELDS.needsAnimation,
      label: "As putea avea nevoie si de animatie / video",
    },
  },
  formMessages: {
    submitButton: "Trimite Cererea",
    submitting: "Se trimite...",
    success: {
      title: "Multumesc pentru cerere!",
      message:
        "Am primit detaliile proiectului si voi reveni in 24-48 de ore cu o oferta si o estimare de termen.",
    },
    error: {
      title: "A aparut o problema",
      message:
        "A aparut o eroare la trimiterea cererii. Incearca din nou sau scrie-mi direct la bevel.graphics1@gmail.com",
    },
    missingConfig: {
      title: "Configurarea formularului este incompleta",
      message:
        "Formularul nu este configurat complet inca. Te rog sa ma contactezi direct la bevel.graphics1@gmail.com",
    },
    validation: {
      required: "Acest camp este obligatoriu",
      email: "Te rog introdu o adresa de email valida",
    },
  },
  formSections: {
    contact: {
      title: "Informatii de Contact",
      description: "Cum pot lua legatura cu tine?",
    },
    project: {
      title: "Detalii Proiect",
      description: "Spune-mi de ce ai nevoie",
    },
    files: {
      title: "Fisiere Proiect",
      description: "Trimite materialele proiectului",
    },
    additional: {
      title: "Informatii Suplimentare",
      description: "Orice altceva ar trebui sa stiu",
    },
  },
  faqHeading: "Intrebari Frecvente",
}

const dictionaries: Record<Locale, LocalizedDictionary> = {
  en: englishDictionary,
  ro: romanianDictionary,
}

export function getDictionary(locale: Locale): LocalizedDictionary {
  return dictionaries[locale]
}
