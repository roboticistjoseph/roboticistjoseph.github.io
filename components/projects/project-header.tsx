"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, FileText } from "lucide-react"
import type { ProjectDetails } from "@/types"
import ProjectVideoPlayer from "./project-video-player"

interface ProjectHeaderProps {
  title: string
  description: string
  metadata: ProjectDetails["metadata"]
  links: ProjectDetails["links"]
  mainImage: string
  demoVideo?: string
  category?: string // Add category prop
}

/**
 * Project Header Component
 *
 * This component displays the main project information at the top of the project page,
 * including title, description, metadata, links, and main image/video.
 *
 * @param title - Project title
 * @param description - Project description
 * @param metadata - Project metadata (year, language, tags, status)
 * @param links - Project links (github, documentation, etc.)
 * @param mainImage - Main project image
 * @param demoVideo - Optional demo video URL
 * @param category - Project category
 */
export default function ProjectHeader({
  title,
  description,
  metadata,
  links,
  mainImage,
  demoVideo,
  category, // Add category to props
}: ProjectHeaderProps) {
  // Function to get status badge color
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Published":
        return "bg-green-500 text-black"
      case "Unpublished":
        return "bg-yellow-500 text-black"
      case "Waiting Approval":
        return "bg-blue-500 text-black"
      default:
        return ""
    }
  }

  // Check if this is a research project
  const isResearchProject = category === "research"

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
      {/* Left Column - Project Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500">{title}</h1>

        <p className="text-gray-100 text-lg">{description}</p>

        <div className="space-y-4">
          {metadata.year && (
            <div className="flex items-center gap-4">
              <div className="text-gray-200">Year:</div>
              <div className="px-3 py-1 bg-gray-800 border border-yellow-500/30 text-yellow-400 rounded-md text-sm">
                {metadata.year}
              </div>
            </div>
          )}

          {metadata.status && (
            <div className="flex items-center gap-4">
              <div className="text-gray-200">Status:</div>
              <div
                className={`px-3 py-1 ${getStatusColor(metadata.status)} rounded-md text-sm font-medium shadow-md animate-pulse`}
              >
                {metadata.status}
              </div>
            </div>
          )}

          {metadata.language && (
            <div className="flex items-center gap-4">
              <div className="text-gray-200">Language:</div>
              <div className="px-3 py-1 bg-yellow-600/20 text-yellow-500 rounded-full text-sm">{metadata.language}</div>
            </div>
          )}

          {metadata.tags && metadata.tags.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="text-gray-200">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                {metadata.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-yellow-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Only show project links for non-research projects */}
        {!isResearchProject && (
          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">Project Links</h2>
            <div className="flex flex-wrap gap-4">
              {links.github && (
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-yellow-600/50 hover:border-yellow-500 text-gray-100 rounded-lg transition-all duration-300"
                >
                  <Github className="h-5 w-5 mr-2 text-yellow-500" />
                  View on GitHub
                </Link>
              )}
              {links.documentation && (
                <Link
                  href={links.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-yellow-600 text-black hover:bg-yellow-500 rounded-lg transition-all duration-300"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Documentation
                </Link>
              )}
            </div>
          </div>
        )}
      </motion.div>

      {/* Right Column - Project Image or Video */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
      >
        {demoVideo ? (
          <ProjectVideoPlayer videoSrc={demoVideo} />
        ) : (
          <Image
            src={
              mainImage.startsWith("/placeholder")
                ? `https://res.cloudinary.com/your-cloud-name/image/upload/w_1920,h_1080,c_fill/projects/${mainImage.split("=")[2]}`
                : mainImage
            }
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
    </div>
  )
}

