"use client"

import { useState, useEffect } from "react"
import ProjectLayout from "@/components/projects/project-layout"
import ProjectHeader from "@/components/projects/project-header"
import ProjectContent from "@/components/projects/project-content"
import ProjectGallery from "@/components/projects/project-gallery"
import LoadingState from "@/components/projects/loading-state"
import ErrorState from "@/components/projects/error-state"
import { getProjectById, researchPapersMap, markdownContentMap } from "@/utils/project-loader"

// Import the ProjectPapers component
import ProjectPapers from "@/components/projects/project-papers"

// Default sections structure if content is not available
const defaultSections = {
  agenda: {
    title: "Agenda",
    description: "Project objectives and goals.",
    bulletPoints: ["No content available. Please check back later."],
  },
  technical: {
    title: "Technical Discussion",
    subsections: [
      {
        title: "Overview",
        description: "Technical details will be available soon.",
      },
    ],
  },
  challenges: {
    title: "Challenges & Solutions",
    subsections: [
      {
        title: "Development Process",
        description: "Information about challenges and solutions will be available soon.",
      },
    ],
  },
  results: {
    title: "Results & Outcomes",
    subsections: [
      {
        title: "Summary",
        description: "Results and outcomes will be available soon.",
      },
    ],
  },
}

export default function ProjectDetailsClient({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [markdownContent, setMarkdownContent] = useState<string | null>(null)

  // Get the project data based on the ID
  const project = getProjectById(params.id)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate loading for a smoother transition
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Handle case where project doesn't exist
        if (!project) {
          setError("Project not found")
          setLoading(false)
          return
        }

        // Get markdown content for this project if available
        const projectId = params.id
        if (markdownContentMap[projectId]) {
          setMarkdownContent(markdownContentMap[projectId])
        }

        setLoading(false)
      } catch (err) {
        console.error("Error loading project data:", err)
        setError("Failed to load project data")
        setLoading(false)
      }
    }

    loadData()
  }, [params.id, project])

  // Show loading state
  if (loading) {
    return <LoadingState />
  }

  // Show error state
  if (error || !project) {
    return <ErrorState message={error || "Project not found"} />
  }

  // Check if the demoVideo is a valid URL
  const videoUrl = project.demoVideo || ""

  // Get research papers for this project if it's a research project
  const papers = project.category === "research" ? researchPapersMap[params.id] || [] : []

  return (
    <ProjectLayout>
      {/* Project Header Section */}
      <ProjectHeader
        title={project.title}
        description={project.description}
        metadata={project.metadata}
        links={project.links}
        mainImage={project.mainImage}
        demoVideo={videoUrl}
        category={project.category}
      />

      {/* Project Gallery or Papers Section */}
      {project.category === "research" ? (
        <ProjectPapers papers={papers} />
      ) : (
        <ProjectGallery images={project.gallery} />
      )}

      {/* Project Content Sections - Only show if showInsights is not false */}
      {project.showInsights !== false && (
        <ProjectContent sections={project.sections || defaultSections} markdownContent={markdownContent} />
      )}
    </ProjectLayout>
  )
}

