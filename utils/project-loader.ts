import type { Project, ProjectInfo } from "@/types"

// Importing Robotics Projects
import project6, { project6Markdown } from "@/data/projects/6"

// Importing ROS2 Projects
import project1, { project1Markdown } from "@/data/projects/1"

// Importing Robot Modelling Projects
import kinematicsdynamics, { kinematicsDynamicsMarkdown } from "@/data/projects/kinematics-dynamics"
import project2, { project2Markdown } from "@/data/projects/2"
import project3, { project3Markdown } from "@/data/projects/3"

// Importing Computer Vision Projects
import project10, { project10Markdown } from "@/data/projects/10"

// Importing Robot Navigation Projects
import project7, { project7Markdown } from "@/data/projects/7"
import project8, { project8Markdown } from "@/data/projects/8"
import project9, { project9Markdown } from "@/data/projects/9"

// Importing Control Systems Projects
import project4, { project4Markdown } from "@/data/projects/4"
import project5, { project5Markdown } from "@/data/projects/5"

// Importing Research Papers
import project11, { project11Papers, project11Markdown } from "@/data/projects/11"
import project91, { project91Papers, project91Markdown } from "@/data/projects/91"
import project92, { project92Papers, project92Markdown } from "@/data/projects/92"
import project93, { project93Papers, project93Markdown } from "@/data/projects/93"
import project94, { project94Papers, project94Markdown } from "@/data/projects/94"

// Collection of all project info objects
const projectInfos: ProjectInfo[] = [
  // Adding Robotics Projects
  project6,

  // Adding ROS2 Projects
  project1,

  // Adding Robot Modelling Projects
  kinematicsdynamics,
  project2,
  project3,

  // Adding Computer Vision Projects
  project10,

  // Adding Robot Navigation Projects
  project7,
  project8,
  project9,

  // Adding Control Systems Projects
  project4,
  project5,

  // Adding Research Papers
  project11,
  project91,
  project92,
  project93,
  project94,
]

// Map of projects by ID for quick lookup
const projectsMap: Record<string, ProjectInfo> = {}
projectInfos.forEach((project) => {
  projectsMap[project.id.toString()] = project
})

// Convert ProjectInfo to Project type for main page display
export function convertToMainPageProject(projectInfo: ProjectInfo): Project {
  return {
    id: projectInfo.id,
    title: projectInfo.title,
    description: projectInfo.description,
    image: projectInfo.mainImage,
    tags: projectInfo.metadata.tags,
    category: projectInfo.category,
    links: {
      demo: projectInfo.links.demo || undefined,
      github: projectInfo.links.github || undefined,
      documentation: projectInfo.links.documentation || undefined,
    },
    metadata: {
      year: projectInfo.metadata.year,
      language: projectInfo.metadata.language,
      status: projectInfo.metadata.status,
    },
  }
}

// Get all projects for the main page
export function getAllProjects(): Project[] {
  // Convert to main page project format
  return projectInfos.map(convertToMainPageProject)
}

// Get a specific project by ID
export function getProjectById(id: string | number): ProjectInfo | undefined {
  const stringId = id.toString()
  return projectsMap[stringId]
}

// Get all project IDs
export function getAllProjectIds(): string[] {
  return projectInfos.map((project) => project.id.toString())
}

// Map of research papers for each research project
export const researchPapersMap: Record<string, any> = {
  "11": project11Papers,
  "91": project91Papers,
  "92": project92Papers,
  "93": project93Papers,
  "94": project94Papers,
}

// Map of markdown content for each research project
export const markdownContentMap: Record<string, string> = {
  "1": project1Markdown,
  "2": project2Markdown,
  "3": project3Markdown,
  "4": project4Markdown,
  "5": project5Markdown,
  "6": project6Markdown,
  "7": project7Markdown,
  "8": project8Markdown,
  "9": project9Markdown,
  "10": project10Markdown,
  "11": project11Markdown,
  "91": project91Markdown,
  "92": project92Markdown,
  "93": project93Markdown,
  "94": project94Markdown,
  "kinematics-dynamics": kinematicsDynamicsMarkdown,
}

