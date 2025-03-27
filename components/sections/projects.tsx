"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { COLORS } from "@/constants/theme"
import { SECTIONS } from "@/constants/theme"
import SectionHeading from "@/components/ui/section-heading"
import type { Project } from "@/types"
import { projectsData, projectCategories } from "@/data/sections/projects"

/**
 * Projects section component
 * Displays a filterable grid of projects
 * Optimized for performance by removing 3D background
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("robotics")
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  // Filter projects based on active category
  const filteredProjects = projectsData.projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory,
  )

  return (
    <section id={SECTIONS.projects} className="py-20 bg-black relative z-1">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="relative z-10">
          <SectionHeading title={projectsData.title} />

          {/* Project Categories */}
          <div className="categories-scroll mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium royal-glow"
                    : "bg-gray-900/80 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCardWrapper key={project.id} project={project} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>

          {/* Empty state when no projects match the filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 px-6 border border-yellow-500/20 rounded-xl bg-black/40 max-w-2xl mx-auto">
              <div className="golden-text-glow mb-4">
                <h3 className={`text-2xl font-semibold ${COLORS.primary.gold}`}>Projects in Development</h3>
              </div>
              <p className={`${COLORS.primary.cream} text-lg mb-6`}>
                Projects in the <span className="text-yellow-400 font-medium">{activeCategory}</span> category are
                currently being developed.
              </p>
              <p className={`${COLORS.primary.cream} text-md mb-8 italic`}>
                Please check back later for exciting new additions!
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-8 py-3 bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 text-black font-medium rounded-full transition-all duration-300 hover:from-yellow-500 hover:to-yellow-400 royal-glow"
              >
                View all projects
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Static gradient background instead of 3D canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2)_0,rgba(0,0,0,0)_70%)]"></div>
    </section>
  )
}

/**
 * Project card wrapper component
 * Wraps project card with animation
 *
 * @param project - Project data
 * @param index - Index for staggered animation
 * @param scrollYProgress - Scroll progress motion value
 */
function ProjectCardWrapper({
  project,
  index,
  scrollYProgress,
}: { project: Project; index: number; scrollYProgress: MotionValue<number> }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ProjectCard project={project} />
    </motion.div>
  )
}

// Update the ProjectCard component to safely access the year field
function ProjectCard({ project }: { project: Project }) {
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

  return (
    <div className="group bg-gray-900/70 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500/70 transition-all duration-300 h-full flex flex-col hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transform hover:-translate-y-2">
      {/* Project Image  transform hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <Image
          src={
            project.image.startsWith("/placeholder")
              ? `https://res.cloudinary.com/your-cloud-name/image/upload/w_600,h_400,c_fill/projects/${project.id}`
              : project.image
          }
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Year Tag - Less flashy */}
        {project.metadata?.year && (
          <div className="absolute top-4 right-4">
            <span className="bg-gray-800/80 border border-yellow-500/30 text-yellow-400 text-xs px-2 py-1 rounded-md">
              {project.metadata.year}
            </span>
          </div>
        )}

        {/* Status Badge - Flashy */}
        {project.metadata?.status && (
          <div className="absolute bottom-4 right-4">
            <span
              className={`${getStatusColor(project.metadata.status)} px-2 py-1 rounded-md text-xs font-medium shadow-lg animate-pulse`}
            >
              {project.metadata.status}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <Link href={`/projects/${project.id}`} className="block">
          <h3
            className={`text-xl font-semibold mb-2 ${COLORS.primary.gold} hover:text-yellow-400 transition-colors golden-text-glow`}
          >
            {project.title}
          </h3>
        </Link>
        <p className={`${COLORS.primary.cream} mb-4 text-sm flex-1`}>{project.description}</p>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3 mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {project.links.documentation ? (
            <a
              href={project.links.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`Documentation for ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Documentation</span>
            </a>
          ) : project.links.demo && project.links.demo.startsWith("/") ? (
            <Link
              href={project.links.demo}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`View details for ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">View Project</span>
            </Link>
          ) : project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

