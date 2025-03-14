/**
 * Project 2: AI-Powered Image Recognition
 *
 * This file contains the basic information for the AI-Powered Image Recognition project.
 * Detailed content is loaded from the README.md file.
 */

import type { ProjectInfo } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 3,
  title: "Kinematics and Dynamic",
  description:
    "A deep learning system for real-time image recognition and classification using convolutional neural networks.",
  mainImage: "/placeholder.svg?height=400&width=600",
  demoVideo: "/placeholder.svg?height=600&width=800", // URL to demo video (optional)
  category: "cv", // Added category field

  // Project metadata
  metadata: {
    timeToComplete: "2 Hours",
    difficulty: 3.5, // Out of 5
    language: "Python",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow", "CNN"],
  },

  // Project links
  links: {
    github: "https://github.com/yourusername/image-recognition",
    demo: "/projects/3", // Internal link to project page
    documentation: "https://docs.example.com/image-recognition", // Optional
  },

  // Project gallery
  gallery: [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Model architecture",
      caption: "The CNN architecture used for image classification",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Training process",
      caption: "Visualizing the training process and loss curves",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Test results",
      caption: "Results on the test dataset showing high accuracy",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Real-world testing",
      caption: "Testing the model on real-world images",
    },
  ],
}

export default project

