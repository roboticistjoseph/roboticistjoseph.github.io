import { markdownContent } from "./markdown-content"

/**
 * Parse markdown content into HTML and extract frontmatter
 */
export async function parseMarkdown(content: string) {
  // Simple frontmatter extraction
  const frontMatterMatch = content.match(/---([\s\S]*?)---([\s\S]*)/)

  const frontMatter = {}
  let markdownContent = content

  if (frontMatterMatch) {
    try {
      // Extract frontmatter as key-value pairs
      const frontMatterText = frontMatterMatch[1]
      frontMatterText.split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":")
        if (key && valueParts.length) {
          const value = valueParts.join(":").trim()
          if (value.startsWith('"') && value.endsWith('"')) {
            frontMatter[key.trim()] = value.slice(1, -1)
          } else {
            frontMatter[key.trim()] = value
          }
        }
      })

      // Get content after frontmatter
      markdownContent = frontMatterMatch[2]
    } catch (e) {
      console.error("Error parsing frontmatter:", e)
    }
  }

  // Convert markdown to HTML (simplified version)
  // In a real app, you'd use a proper markdown parser
  const contentHtml = markdownToHtml(markdownContent)

  return {
    contentHtml,
    frontMatter,
  }
}

/**
 * Read a markdown file and parse its contents
 */
export async function getMarkdownFile(filePath: string) {
  try {
    // Get pre-loaded content instead of reading from filesystem
    const fileContents = markdownContent[filePath] || ""

    if (!fileContents) {
      console.warn(`No pre-loaded content found for: ${filePath}`)
      return {
        contentHtml: "",
        frontMatter: {},
      }
    }

    return await parseMarkdown(fileContents)
  } catch (error) {
    console.error(`Error processing markdown file: ${error}`)
    return {
      contentHtml: "",
      frontMatter: {},
    }
  }
}

/**
 * Extract sections from markdown HTML content
 */
export function extractSections(html: string) {
  // This is a simple implementation - you might want to use a proper HTML parser
  const sections: Record<string, any> = {
    agenda: { title: "Agenda", content: "", bulletPoints: [] },
    technical: {
      title: "Technical Discussion",
      subsections: [],
    },
    challenges: {
      title: "Challenges & Solutions",
      subsections: [],
    },
    results: {
      title: "Results & Outcomes",
      subsections: [],
      hasImages: false,
    },
  }

  // Simple regex-based extraction (this is a basic implementation)
  // In a real app, you'd want to use a proper HTML parser

  // Extract agenda section (assuming it's under a ## Agenda heading)
  const agendaMatch = html.match(/<h2[^>]*>Agenda<\/h2>([\s\S]*?)(?=<h2|$)/i)
  if (agendaMatch && agendaMatch[1]) {
    sections.agenda.content = agendaMatch[1].trim()

    // Extract bullet points
    const bulletPoints = agendaMatch[1].match(/<li>([\s\S]*?)<\/li>/g)
    if (bulletPoints) {
      sections.agenda.bulletPoints = bulletPoints.map((item) => item.replace(/<li>([\s\S]*?)<\/li>/i, "$1").trim())
    }
  }

  // Extract technical section
  const technicalMatch = html.match(/<h2[^>]*>Technical Discussion<\/h2>([\s\S]*?)(?=<h2|$)/i)
  if (technicalMatch && technicalMatch[1]) {
    // Extract subsections (assuming they're under h3 headings)
    const subsectionMatches = technicalMatch[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3|$)/g)
    if (subsectionMatches) {
      sections.technical.subsections = subsectionMatches.map((subsection) => {
        const titleMatch = subsection.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)
        const title = titleMatch ? titleMatch[1].trim() : ""
        const content = subsection.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, "").trim()

        return { title, content }
      })
    }
  }

  // Extract challenges section
  const challengesMatch = html.match(/<h2[^>]*>Challenges([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/i)
  if (challengesMatch && challengesMatch[2]) {
    // Extract subsections
    const subsectionMatches = challengesMatch[2].match(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3|$)/g)
    if (subsectionMatches) {
      sections.challenges.subsections = subsectionMatches.map((subsection) => {
        const titleMatch = subsection.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)
        const title = titleMatch ? titleMatch[1].trim() : ""
        const content = subsection.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, "").trim()

        return { title, content }
      })
    }
  }

  // Extract results section
  const resultsMatch = html.match(/<h2[^>]*>Results([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/i)
  if (resultsMatch && resultsMatch[2]) {
    // Check if there are images in the results section
    sections.results.hasImages = resultsMatch[2].includes("<img")

    // Extract subsections
    const subsectionMatches = resultsMatch[2].match(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3|$)/g)
    if (subsectionMatches) {
      sections.results.subsections = subsectionMatches.map((subsection) => {
        const titleMatch = subsection.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)
        const title = titleMatch ? titleMatch[1].trim() : ""
        const content = subsection.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, "").trim()

        // Check if this subsection has images
        const hasImage = content.includes("<img")

        // Extract image if it exists
        let image = null
        if (hasImage) {
          const imgMatch = content.match(/<img[^>]*src="([^"]*)"[^>]*>/i)
          if (imgMatch && imgMatch[1]) {
            image = {
              src: imgMatch[1],
              alt: "Result visualization",
            }
          }
        }

        return { title, content, image }
      })
    }
  }

  return sections
}

/**
 * Simple markdown to HTML converter
 * This is a very basic implementation - in a real app you'd use a proper markdown parser
 */
function markdownToHtml(markdown: string): string {
  let html = markdown

  // Convert headings
  html = html.replace(/^## (.*$)/gm, "<h2>$1</h2>")
  html = html.replace(/^### (.*$)/gm, "<h3>$1</h3>")

  // Convert lists
  html = html.replace(/^- (.*$)/gm, "<li>$1</li>")

  // Wrap lists in ul tags
  html = html.replace(/(<li>.*<\/li>)\n\n/gs, "<ul>$1</ul>\n\n")

  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

  // Convert paragraphs
  html = html.replace(/^([^<].*)\n\n/gm, "<p>$1</p>\n\n")

  // Convert images - updated to handle both markdown image formats
  html = html.replace(/!\[(.*?)\]$$(.*?)$$/g, '<img src="$2" alt="$1">')
  html = html.replace(/!\[(.*?)\]$$(.*?)$$/g, '<img src="$2" alt="$1">')

  return html
}

