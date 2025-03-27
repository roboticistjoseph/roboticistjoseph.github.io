import { getAllProjects } from "@/utils/project-loader"

// Project categories for filtering
export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "robotics", name: "Robotics" },
  { id: "ros2", name: "ROS 2" },
  { id: "modelling", name: "Robot Modelling" },
  { id: "cv", name: "Computer Vision" },
  { id: "nav", name: "Robot Navigation" },
  { id: "controls", name: "Control Systems" },
  { id: "ml", name: "Machine Learning" },
  { id: "research", name: "Research Papers" },
]

// Projects data - dynamically loaded from project files
export const projectsData = {
  title: "Featured Projects",
  projects: getAllProjects(),
}

