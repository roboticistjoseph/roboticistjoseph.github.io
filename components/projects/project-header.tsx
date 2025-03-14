"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star, StarHalf, Github } from "lucide-react"
import type { ProjectDetails } from "@/types"

interface ProjectHeaderProps {
  title: string
  description: string
  metadata: ProjectDetails["metadata"]
  links: ProjectDetails["links"]
  mainImage: string
  demoVideo?: string
}

/**
 * Project Header Component
 *
 * This component displays the main project information at the top of the project page,
 * including title, description, metadata, links, and main image/video.
 *
 * @param title - Project title
 * @param description - Project description
 * @param metadata - Project metadata (time, difficulty, language, tags)
 * @param links - Project links (github, demo, etc.)
 * @param mainImage - Main project image
 * @param demoVideo - Optional demo video URL
 */
export default function ProjectHeader({
  title,
  description,
  metadata,
  links,
  mainImage,
  demoVideo,
}: ProjectHeaderProps) {
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
          <div className="flex items-center gap-4">
            <div className="text-gray-200">Time To Complete:</div>
            <div className="text-gray-100">{metadata.timeToComplete}</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-gray-200">Beginner Friendly:</div>
            <div className="flex items-center">
              {/* Render difficulty stars (out of 5) */}
              {Array.from({ length: Math.floor(metadata.difficulty) }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
              ))}
              {metadata.difficulty % 1 !== 0 && <StarHalf className="h-5 w-5 text-yellow-500" />}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-gray-200">Language:</div>
            <div className="px-3 py-1 bg-yellow-600/20 text-yellow-500 rounded-full text-sm">{metadata.language}</div>
          </div>

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
        </div>

        <div className="pt-4">
          <h2 className="text-xl font-semibold mb-4 text-yellow-500">Project Links</h2>
          <div className="flex gap-4">
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
            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-black hover:bg-yellow-500 rounded-lg transition-all duration-300"
              >
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* Right Column - Project Demo */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
      >
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        {/* Video player would go here if demoVideo is provided */}
        {demoVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <p className="text-white text-lg">Project Demo Video</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

