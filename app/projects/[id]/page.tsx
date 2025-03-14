"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ProjectLayout from "@/components/projects/project-layout"
import ProjectHeader from "@/components/projects/project-header"
import ProjectContent from "@/components/projects/project-content"
import ProjectGallery from "@/components/projects/project-gallery"
import LoadingState from "@/components/projects/loading-state"
import ErrorState from "@/components/projects/error-state"
import { getMarkdownFile, extractSections } from "@/utils/markdown"

// Import project data
import project1 from "@/data/projects/1"
import project2 from "@/data/projects/2"
import kinematicsdynamics from "@/data/projects/kinematics-dynamics"

// Map of all projects
const projectsMap = {
  "1": project1,
  "2": project2,
  "kinematics-dynamics": kinematicsdynamics,
}

// Map of README paths for each project
const readmePaths = {
  "1": "data/projects/readme/project1.md",
  "2": "data/projects/readme/project2.md",
  "3": "data/projects/readme/kinematics-dynamics.md",
}

// Default sections structure if README content is not available
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

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [readmeContent, setReadmeContent] = useState<any>(null)
  const router = useRouter()

  // Get the project data based on the ID
  const project = projectsMap[params.id as keyof typeof projectsMap]

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

        // Load README content if available
        const readmePath = readmePaths[params.id as keyof typeof readmePaths]
        if (readmePath) {
          try {
            const { contentHtml } = await getMarkdownFile(readmePath)
            const sections = extractSections(contentHtml)
            setReadmeContent(sections)
          } catch (err) {
            console.error("Error loading README content:", err)
            // If README fails to load, we'll use default sections
            setReadmeContent(defaultSections)
          }
        } else {
          // If no README path is defined, use default sections
          setReadmeContent(defaultSections)
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

  return (
    <ProjectLayout>
      {/* Project Header Section */}
      <ProjectHeader
        title={project.title}
        description={project.description}
        metadata={project.metadata}
        links={project.links}
        mainImage={project.mainImage}
        demoVideo={project.demoVideo}
      />

      {/* Project Gallery - Moved up from the bottom */}
      <ProjectGallery images={project.gallery} />

      {/* Project Content Sections */}
      <ProjectContent sections={readmeContent || defaultSections} readmeContent={readmeContent} />
    </ProjectLayout>
  )
}

