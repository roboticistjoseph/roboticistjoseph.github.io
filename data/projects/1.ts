/**
 * Project 1: Autonomous Drone Navigation
 *
 * This file contains the basic information for the Autonomous Drone Navigation project.
 * Detailed content is loaded from the README.md file.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 1,
  title: "Autonomous Drone Navigation",
  description:
    "A system for autonomous drone navigation in GPS-denied environments using computer vision and SLAM algorithms.",
  mainImage: "/placeholder.svg?height=400&width=600",
  demoVideo: "https://www.youtube.com/watch?v=w_pKglDH2DU", // URL to demo video (optional)
  category: "robotics" as ProjectCategory, // Added category field

  // Project metadata
  metadata: {
    timeToComplete: "3 Hours",
    difficulty: 4.5, // Out of 5
    language: "Python",
    tags: ["Computer Vision", "ROS", "Python", "SLAM"],
  },

  // Project links
  links: {
    github: "https://github.com/yourusername/drone-navigation",
    demo: "/projects/1", // Internal link to project page
    documentation: "https://docs.example.com/drone-navigation", // Optional
  },

  // Project gallery
  gallery: [
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
  ],
}

export default project

