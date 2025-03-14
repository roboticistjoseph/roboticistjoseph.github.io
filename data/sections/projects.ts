import { getAllProjects } from "@/utils/project-loader"

// Project categories for filtering
export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "robotics", name: "Robotics" },
  { id: "ai", name: "AI & ML" },
  { id: "web", name: "Web & IoT" },
  { id: "research", name: "Research" },
  { id: "blockchain", name: "Blockchain" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "game", name: "Game Dev" },
  { id: "cloud", name: "Cloud" },
  { id: "security", name: "Security" },
]

// Get all projects from the data/projects directory
const allProjects = getAllProjects()

// Projects data
export const projectsData = {
  title: "Projects",
  projects: allProjects,
}

