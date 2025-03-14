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
  }
}

// Project category type
export type ProjectCategory =
  | "robotics"
  | "ai"
  | "web"
  | "research"
  | "blockchain"
  | "mobile"
  | "game"
  | "cloud"
  | "security"

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

  // Project metadata
  metadata: {
    timeToComplete: string
    difficulty: number // Out of 5
    language: string
    tags: string[]
  }

  // Project links
  links: {
    github?: string
    demo?: string
    documentation?: string
  }

  // Project gallery
  gallery: GalleryImage[]
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

