import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { ProjectPageClient } from "@/components/project/project-page-client"
import { SITE_CONFIG } from "@/lib/content"
import { getRequestLocale } from "@/lib/i18n"
import {
  PROJECTS,
  getProjectById,
  getProjectBySlug,
  getLocalizedProject,
  getProjectMetadata,
} from "@/lib/projects"
import {
  getAbsoluteUrl,
  getOpenGraphLocale,
  getProjectJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const locale = await getRequestLocale()
  const project = getProjectBySlug(slug) ?? getProjectById(slug)

  if (!project) {
    return {
      title:
        locale === "ro"
          ? `Proiect Negasit | ${SITE_CONFIG.name}`
          : `Project Not Found | ${SITE_CONFIG.name}`,
      description:
        locale === "ro"
          ? "Proiectul de portofoliu solicitat nu a putut fi gasit."
          : "The requested portfolio project could not be found.",
    }
  }

  const localizedProject = getLocalizedProject(project, locale)
  const metadata = getProjectMetadata(project, locale)

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/project/${project.slug}`,
    },
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      title: metadata.title,
      description: metadata.description,
      url: getAbsoluteUrl(`/project/${project.slug}`),
      images: [
        {
          url: project.previewImage,
          alt: localizedProject.imageAlt ?? localizedProject.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [project.previewImage],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const locale = await getRequestLocale()
  const projectBySlug = getProjectBySlug(slug)

  if (projectBySlug) {
    const moreProjects = PROJECTS.filter(
      (candidate) => candidate.slug !== projectBySlug.slug,
    )
      .slice(0, 3)
      .map((candidate) => getLocalizedProject(candidate, locale))
    const localizedProject = getLocalizedProject(projectBySlug, locale)
    const projectJsonLd = getProjectJsonLd(projectBySlug, locale)
    const breadcrumbJsonLd = getBreadcrumbJsonLd([
      { name: locale === "ro" ? "Acasa" : "Home", path: "/" },
      { name: locale === "ro" ? "Portofoliu" : "Portfolio", path: "/" },
      { name: localizedProject.title, path: `/project/${projectBySlug.slug}` },
    ])

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <ProjectPageClient
          project={localizedProject}
          moreProjects={moreProjects}
        />
      </>
    )
  }

  const legacyProject = getProjectById(slug)

  if (legacyProject) {
    redirect(`/project/${legacyProject.slug}`)
  }

  notFound()
}
