import type { Project } from "@/types"

/**
 * Projects data
 * Contains all project information displayed in the portfolio
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Autonomous Drone Navigation",
    description:
      "A system for autonomous drone navigation in GPS-denied environments using computer vision and SLAM algorithms.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Computer Vision", "ROS", "Python", "SLAM"],
    category: "robotics",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Emotion Recognition AI",
    description: "Deep learning model for real-time emotion recognition from facial expressions with 95% accuracy.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["TensorFlow", "Computer Vision", "Deep Learning"],
    category: "ai",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Smart Home Automation",
    description: "IoT-based smart home system with voice control and energy optimization algorithms.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["IoT", "Raspberry Pi", "Node.js", "MQTT"],
    category: "web",
    links: {
      github: "#",
    },
  },
  {
    id: 4,
    title: "Robotic Arm Control",
    description: "Inverse kinematics solution for a 6-DOF robotic arm with real-time trajectory planning.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["C++", "ROS", "Control Systems"],
    category: "robotics",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "Natural Language Processing API",
    description: "REST API for text analysis, sentiment detection, and language translation using transformer models.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["NLP", "FastAPI", "PyTorch", "Docker"],
    category: "ai",
    links: {
      github: "#",
    },
  },
  {
    id: 6,
    title: "Reinforcement Learning Research",
    description: "Novel approach to multi-agent reinforcement learning for collaborative robotic tasks.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Reinforcement Learning", "PyTorch", "Research"],
    category: "research",
    links: {
      demo: "#",
      github: "#",
    },
  },
]

/**
 * Project categories
 * Used for filtering projects in the Projects section
 */
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

/**
 * Project gallery images
 * Used in the project details page
 */
export const projectGallery = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Initial prototype testing",
    caption: "Testing the drone's navigation capabilities in a controlled environment",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "SLAM implementation",
    caption: "Visualizing the SLAM algorithm mapping an indoor space in real-time",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Obstacle course setup",
    caption: "Complex obstacle course used for validating avoidance algorithms",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hardware assembly",
    caption: "Assembling the custom sensor package for improved environmental awareness",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Software development",
    caption: "Developing the control software with ROS integration",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Field testing",
    caption: "Field testing in a warehouse environment with dynamic obstacles",
  },
]

