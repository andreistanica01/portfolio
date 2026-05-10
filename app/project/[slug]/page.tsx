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
  const project = getProjectBySlug(slug) ?? getProjectById(slug)

  if (!project) {
    return {
      title: `Project Not Found | ${SITE_CONFIG.name}`,
      description: "The requested portfolio project could not be found.",
    }
  }

  const metadata = getProjectMetadata(project)

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/project/${project.slug}`,
    },
    openGraph: {
      type: "website",
      title: metadata.title,
      description: metadata.description,
      url: getAbsoluteUrl(`/project/${project.slug}`),
      images: [
        {
          url: project.previewImage,
          alt: project.imageAlt ?? project.title,
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
    const projectJsonLd = getProjectJsonLd(projectBySlug)
    const breadcrumbJsonLd = getBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/" },
      { name: projectBySlug.title, path: `/project/${projectBySlug.slug}` },
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
