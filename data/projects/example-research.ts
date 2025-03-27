import type { ProjectInfo, ResearchPaper } from "@/types"

// Define research papers directly in the project file
const papers: ResearchPaper[] = [
  {
    title: "Novel Approach to Autonomous Navigation",
    authors: ["John Doe", "Jane Smith"],
    publication: "IEEE Robotics and Automation Letters",
    year: "2023",
    abstract: "This paper presents a novel approach to autonomous navigation...",
    links: {
      online: "https://example.com/paper",
      pdf: "https://example.com/paper.pdf",
      doi: "10.1109/LRA.2023.1234567",
    },
  },
  // More papers...
]

const project: ProjectInfo = {
  id: 11,
  title: "Research on Autonomous Navigation",
  description: "A collection of research papers on autonomous navigation",
  mainImage: "/images/projects/research.jpg",
  category: "research",

  // Don't show project insights for research projects
  showInsights: false,

  // Project metadata
  metadata: {
    year: "2021-2023",
    language: "N/A",
    tags: ["Research", "Robotics", "Navigation"],
    status: "Published",
  },

  // Project links (minimal for research)
  links: {},

  // Project gallery (can be empty for research)
  gallery: [],

  // Optional: include sections if you want to show insights
  sections: {
    // Same structure as regular projects
  },
}

// Export both the project and papers
export default project
export const exampleResearchPapers = papers

