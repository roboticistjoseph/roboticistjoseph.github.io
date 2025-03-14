import type { Project, ProjectInfo } from "@/types"

// Import all project files
import project1 from "@/data/projects/1"
import project2 from "@/data/projects/2"
import kinematicsdynamics from "@/data/projects/kinematics-dynamics"

const placeholderProject: ProjectInfo = {
  id: 4,
  title: "Coming Soon: Advanced Robotics",
  description: "This exciting project is currently under construction.",
  mainImage: "/placeholder.svg?height=400&width=600",
  category: "robotics",
  metadata: {
    timeToComplete: "TBD",
    difficulty: 0,
    language: "Multiple",
    tags: ["Coming Soon", "Under Construction"],
  },
  links: {
    demo: "/projects/3", // This will lead to the error state
    github: "",
  },
  // Other required fields...
}

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
    },
  }
}

// Get all projects for the main page
export function getAllProjects(): Project[] {
  // Collect all project info objects
  const projectInfos: ProjectInfo[] = [project1, project2, kinematicsdynamics, placeholderProject]

  // Convert to main page project format
  return projectInfos.map(convertToMainPageProject)
}

