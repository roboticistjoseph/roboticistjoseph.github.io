import type React from "react"
/**
 * Type definitions for the portfolio website
 * This file contains all shared types used across the application
 */

// Project type definition
export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: ProjectCategory
  links: {
    demo?: string
    github?: string
    documentation?: string
  }
  metadata?: {
    year?: string
    language?: string
    status?: "Published" | "Unpublished" | "Waiting Approval"
  }
}

// Project category type
export type ProjectCategory = "web" | "mobile" | "robotics" | "ai" | "research" | "other"

// Timeline item type definition
export type TimelineItem = {
  id: number
  title: string
  organization: string
  date: string
  description: string
  type: "education" | "experience"
  logo: string
  details?: {
    title: string
    description: string
    technologies?: string[]
    link?: string
  }[]
  gallery?: {
    title: string
    images: {
      src: string
      alt: string
    }[]
  }
}

// Skill type definition
export type Skill = {
  name: string
  items: string[]
  icon: React.ReactNode
}

// Interest type definition
export type Interest = {
  name: string
  iconName: string
}

// Social media link type
export type SocialLink = {
  name: string
  url: string
  icon: React.ReactNode
}

// TypewriterEffect props
export interface TypewriterEffectProps {
  name: string
  descriptions: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  nameColor?: string
  textColor?: string
  fontSize?: string
  fontWeight?: string
}

// Project gallery image type
export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

// Add the ResearchPaper type after the GalleryImage type
export interface ResearchPaper {
  title: string
  authors: string[]
  publication: string
  year: string
  abstract: string
  links: {
    online?: string
    pdf?: string
    doi?: string
  }
}

/**
 * Basic project info type for project pages
 * This contains only the essential information needed for a project page
 */
export type ProjectInfo = {
  // Basic project information
  id: number
  title: string
  description: string
  mainImage: string
  demoVideo?: string
  category: ProjectCategory // Added category field
  content?: string // Optional content field for projects without README

  // Flag to control whether to show project insights
  showInsights?: boolean

  // Project metadata
  metadata: {
    year: string // Month and year (e.g., "May 2021")
    language: string
    tags: string[]
    status?: "Published" | "Unpublished" | "Waiting Approval"
  }

  // Project links
  links: {
    github?: string
    demo?: string
    documentation?: string
  }

  // Project gallery
  gallery: GalleryImage[]

  // Project content sections
  sections?: {
    agenda: {
      title: string
      description: string
      bulletPoints: string[]
      image?: {
        src: string
        alt: string
        caption?: string
      }
    }

    technical: {
      title: string
      subsections: {
        title: string
        description?: string
        bulletPoints?: string[]
        image?: {
          src: string
          alt: string
        }
        cards?: {
          title: string
          description: string
        }[]
      }[]
      animation?: {
        description: string
      }
    }

    challenges: {
      title: string
      subsections: {
        title: string
        description?: string
        orderedList?: string[]
        bulletPoints?: string[]
        image?: {
          src: string
          alt: string
        }
        challenges?: {
          title: string
          challenge: string
          solution: string
        }[]
      }[]
      codeSnippet?: {
        title: string
        language: string
        code: string
      }
    }

    results: {
      title: string
      subsections: {
        title: string
        description?: string
        bulletPoints?: string[]
        metrics?: {
          label: string
          value: string
          description?: string
        }[]
        stats?: {
          label: string
          value: string
          description: string
        }[]
        image?: {
          src: string
          alt: string
        }
      }[]
    }
  }
}

/**
 * Detailed project type for project pages
 * This is a more comprehensive type that includes all the information needed for a project page
 * @deprecated Use ProjectInfo instead and load content from README.md
 */
export type ProjectDetails = ProjectInfo & {
  // Project sections content
  sections: {
    agenda: {
      title: string
      description: string
      bulletPoints: string[]
      image?: {
        src: string
        alt: string
        caption?: string
      }
    }

    technical: {
      title: string
      subsections: {
        title: string
        description?: string
        bulletPoints?: string[]
        image?: {
          src: string
          alt: string
        }
        cards?: {
          title: string
          description: string
        }[]
      }[]
      animation?: {
        description: string
      }
    }

    challenges: {
      title: string
      subsections: {
        title: string
        description?: string
        orderedList?: string[]
        bulletPoints?: string[]
        image?: {
          src: string
          alt: string
        }
        challenges?: {
          title: string
          challenge: string
          solution: string
        }[]
      }[]
      codeSnippet?: {
        title: string
        language: string
        code: string
      }
    }

    results: {
      title: string
      subsections: {
        title: string
        description?: string
        bulletPoints?: string[]
        metrics?: {
          label: string
          value: string
          description?: string
        }[]
        stats?: {
          label: string
          value: string
          description: string
        }[]
        image?: {
          src: string
          alt: string
        }
      }[]
    }
  }
}

