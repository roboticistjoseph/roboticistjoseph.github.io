import type { Metadata } from "next"
import ProjectDetailsClient from "./ProjectDetailsClient"
import { getAllProjectIds, getProjectById } from "@/utils/project-loader"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  // Get all project IDs for static generation
  const projectIds = getAllProjectIds()

  return projectIds.map((id) => ({
    id: id.toString(),
  }))
}

export default function ProjectPage({ params }: Props) {
  return <ProjectDetailsClient params={params} />
}

