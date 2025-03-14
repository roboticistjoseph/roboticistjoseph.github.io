"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Code, FileCode, Zap, ChevronDown, ChevronUp } from "lucide-react"

// Update the props interface to make sections optional
interface ProjectContentProps {
  sections?: any
  readmeContent?: any
}

/**
 * Project Content Component
 *
 * This component renders all the content sections of a project page,
 * including agenda, technical discussion, challenges, and results.
 * Each section is expandable/collapsible.
 *
 * @param sections - The content sections from the project data (fallback)
 * @param readmeContent - The content parsed from README.md
 */
export default function ProjectContent({ sections, readmeContent }: ProjectContentProps) {
  // Change the initial state to null so no section is expanded by default
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  // Use README content if available, otherwise fall back to the static content
  const content = readmeContent || sections

  // Function to process HTML content and standardize image sizes
  const processHtmlContent = (htmlContent: string): string => {
    // Replace img tags with standardized dimensions
    // This regex finds img tags and adds or replaces width and height attributes
    return htmlContent.replace(
      /<img([^>]*)>/g,
      '<img$1 style="max-width: 100%; height: auto; display: block; margin: 1.5rem auto; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">',
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        <span className="text-yellow-500">Project Insights</span>
      </h2>

      {/* Agenda Section */}
      <SectionContainer
        icon={<Lightbulb className="h-5 w-5 text-yellow-500 mr-3" />}
        title={content.agenda.title}
        isExpanded={expandedSection === "agenda"}
        toggleExpand={() => toggleSection("agenda")}
      >
        {readmeContent ? (
          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: processHtmlContent(content.agenda.content) }} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-100 mb-4">{content.agenda.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                {content.agenda.bulletPoints.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            {content.agenda.image && (
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={content.agenda.image.src || "/placeholder.svg"}
                  alt={content.agenda.image.alt}
                  width={700}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
                {content.agenda.image.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="p-4 text-sm text-white">{content.agenda.image.caption}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </SectionContainer>

      {/* Technical Discussion Section */}
      <SectionContainer
        icon={<Code className="h-5 w-5 text-yellow-500 mr-3" />}
        title={content.technical.title}
        isExpanded={expandedSection === "technical"}
        toggleExpand={() => toggleSection("technical")}
      >
        {readmeContent ? (
          <div className="space-y-6">
            {content.technical.subsections.map((subsection: any, index: number) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                {subsection.title && <h4 className="text-lg font-medium text-yellow-500 mb-3">{subsection.title}</h4>}
                <div className="prose prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: processHtmlContent(subsection.content) }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sections.technical.subsections.map((subsection, index) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                {subsection.title && <h4 className="text-lg font-medium text-yellow-500 mb-3">{subsection.title}</h4>}

                {subsection.description && <p className="text-gray-100 mb-4">{subsection.description}</p>}

                {subsection.bulletPoints && (
                  <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                    {subsection.bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {subsection.image && (
                  <div className="relative rounded-lg overflow-hidden mt-4">
                    <Image
                      src={subsection.image.src || "/placeholder.svg"}
                      alt={subsection.image.alt}
                      width={700}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                )}

                {subsection.cards && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {subsection.cards.map((card, i) => (
                      <div
                        key={i}
                        className="bg-gray-800/50 p-4 rounded-lg border border-yellow-700/50 hover:border-yellow-600"
                      >
                        <h5 className="font-medium mb-2 text-yellow-400">{card.title}</h5>
                        <p className="text-sm text-gray-200">{card.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {sections.technical.animation && (
              <div className="relative rounded-lg overflow-hidden mt-6">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">{sections.technical.animation.description}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </SectionContainer>

      {/* Building Code & Challenges Section */}
      <SectionContainer
        icon={<FileCode className="h-5 w-5 text-yellow-500 mr-3" />}
        title={content.challenges.title}
        isExpanded={expandedSection === "challenges"}
        toggleExpand={() => toggleSection("challenges")}
      >
        {readmeContent ? (
          <div className="space-y-6">
            {content.challenges.subsections.map((subsection: any, index: number) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                {subsection.title && <h4 className="text-lg font-medium text-yellow-500 mb-3">{subsection.title}</h4>}
                <div className="prose prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: processHtmlContent(subsection.content) }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sections.challenges.subsections.map((subsection, index) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                {subsection.title && <h4 className="text-lg font-medium text-yellow-500 mb-3">{subsection.title}</h4>}

                {subsection.description && <p className="text-gray-100 mb-4">{subsection.description}</p>}

                {subsection.orderedList && (
                  <ol className="list-decimal list-inside space-y-2 text-gray-200 ml-4">
                    {subsection.orderedList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                )}

                {subsection.bulletPoints && (
                  <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                    {subsection.bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {subsection.image && (
                  <div className="relative rounded-lg overflow-hidden mt-4">
                    <Image
                      src={subsection.image.src || "/placeholder.svg"}
                      alt={subsection.image.alt}
                      width={700}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                )}

                {subsection.challenges && (
                  <div className="space-y-4 mt-4">
                    {subsection.challenges.map((challenge, i) => (
                      <div
                        key={i}
                        className="bg-gray-800/50 p-4 rounded-lg border border-yellow-700/50 hover:border-yellow-600"
                      >
                        <h5 className="font-medium mb-2 flex items-center text-yellow-400">
                          <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                          {challenge.title}
                        </h5>
                        <p className="text-sm text-gray-200 ml-6">Challenge: {challenge.challenge}</p>
                        <p className="text-sm text-gray-200 ml-6 mt-2">Solution: {challenge.solution}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {sections.challenges.codeSnippet && (
              <div className="bg-gray-800/50 p-4 rounded-lg border border-yellow-700/50 mt-6">
                <h4 className="text-lg font-medium text-yellow-500 mb-3">
                  Code Snippet: {sections.challenges.codeSnippet.title}
                </h4>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm border border-yellow-900/30">
                  <code className="text-gray-200">{sections.challenges.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </SectionContainer>

      {/* Results & Outcomes Section */}
      <SectionContainer
        icon={<Zap className="h-5 w-5 text-yellow-500 mr-3" />}
        title={content.results.title}
        isExpanded={expandedSection === "results"}
        toggleExpand={() => toggleSection("results")}
      >
        {readmeContent ? (
          <div className="space-y-6">
            {content.results.subsections.map((subsection: any, index: number) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                {subsection.title && <h4 className="text-lg font-medium text-yellow-500 mb-3">{subsection.title}</h4>}
                <div className="prose prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: processHtmlContent(subsection.content) }} />
                </div>

                {/* Only show image if it exists */}
                {subsection.image && (
                  <div className="relative rounded-lg overflow-hidden mt-4 max-w-2xl mx-auto">
                    <Image
                      src={subsection.image.src || "/placeholder.svg"}
                      alt={subsection.image.alt}
                      width={700}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sections.results.subsections.map((subsection, index) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                {subsection.title && <h4 className="text-lg font-medium text-yellow-500 mb-3">{subsection.title}</h4>}

                {subsection.description && <p className="text-gray-100 mb-4">{subsection.description}</p>}

                {subsection.metrics && (
                  <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                    {subsection.metrics.map((metric, i) => (
                      <li key={i}>
                        {metric.label}: <span className="text-yellow-500">{metric.value}</span>
                        {metric.description && ` ${metric.description}`}
                      </li>
                    ))}
                  </ul>
                )}

                {subsection.stats && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {subsection.stats.map((stat, i) => (
                      <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h5 className="font-medium mb-2 text-center">{stat.label}</h5>
                        <div className="flex justify-center items-center">
                          <div className="relative w-32 h-32">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-2xl font-bold text-yellow-500">{stat.value}</span>
                            </div>
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="10" />
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#EAB308"
                                strokeWidth="10"
                                strokeDasharray="283"
                                strokeDashoffset={`${283 - (Number.parseInt(stat.value) / 100) * 283}`}
                                transform="rotate(-90 50 50)"
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 text-center mt-2">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {subsection.bulletPoints && (
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    {subsection.bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {subsection.image && (
                  <div className="relative rounded-lg overflow-hidden mt-4 max-w-2xl mx-auto">
                    <Image
                      src={subsection.image.src || "/placeholder.svg"}
                      alt={subsection.image.alt}
                      width={700}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </SectionContainer>
    </motion.div>
  )
}

interface SectionContainerProps {
  icon: React.ReactNode
  title: string
  isExpanded: boolean
  toggleExpand: () => void
  children: React.ReactNode
}

/**
 * Section Container Component
 *
 * This component provides the expandable/collapsible container for each section.
 *
 * @param icon - Section icon
 * @param title - Section title
 * @param isExpanded - Whether the section is expanded
 * @param toggleExpand - Function to toggle expansion
 * @param children - Section content
 */
function SectionContainer({ icon, title, isExpanded, toggleExpand, children }: SectionContainerProps) {
  return (
    <div className="mb-8 bg-gray-900/50 rounded-lg border border-yellow-700/50 hover:border-yellow-600/70 overflow-hidden">
      <button
        onClick={toggleExpand}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800/50 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center">
          {icon}
          <h3 className="text-xl font-semibold text-yellow-500">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-yellow-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-yellow-500" />
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 border-t border-gray-800"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

