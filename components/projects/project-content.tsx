"use client"

import type React from "react"

import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ChevronDown, ChevronUp, LightbulbIcon, Code, FileWarning, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectContentProps {
  sections?: any
  markdownContent?: string | null
}

export default function ProjectContent({ sections, markdownContent }: ProjectContentProps) {
  // If we have markdown content, render it with the collapsible sections
  if (markdownContent) {
    return <MarkdownWithCollapsible content={markdownContent} />
  }

  // Otherwise, render the sections structure with collapsible sections
  return <SectionsWithCollapsible sections={sections} />
}

function MarkdownWithCollapsible({ content }: { content: string }) {
  // Split the markdown content into sections based on h2 headers
  const sections = splitMarkdownIntoSections(content)

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-yellow-500">Project Insights</h1>

      <div className="space-y-4">
        {sections.agenda && (
          <CollapsibleSection title="Agenda" icon={<LightbulbIcon className="w-5 h-5 mr-2 text-yellow-500" />}>
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{sections.agenda}</ReactMarkdown>
            </div>
          </CollapsibleSection>
        )}

        {sections.technical && (
          <CollapsibleSection title="Technical Discussion" icon={<Code className="w-5 h-5 mr-2 text-yellow-500" />}>
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{sections.technical}</ReactMarkdown>
            </div>
          </CollapsibleSection>
        )}

        {sections.challenges && (
          <CollapsibleSection
            title="Challenges & Solutions"
            icon={<FileWarning className="w-5 h-5 mr-2 text-yellow-500" />}
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{sections.challenges}</ReactMarkdown>
            </div>
          </CollapsibleSection>
        )}

        {sections.results && (
          <CollapsibleSection title="Results & Outcomes" icon={<Zap className="w-5 h-5 mr-2 text-yellow-500" />}>
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{sections.results}</ReactMarkdown>
            </div>
          </CollapsibleSection>
        )}
      </div>
    </div>
  )
}

function SectionsWithCollapsible({ sections }: { sections: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-yellow-500">Project Insights</h1>

      <div className="space-y-4">
        {sections?.agenda && (
          <CollapsibleSection title="Agenda" icon={<LightbulbIcon className="w-5 h-5 mr-2 text-yellow-500" />}>
            <div>
              <p className="text-lg mb-4">{sections.agenda.description}</p>
              {sections.agenda.bulletPoints && (
                <ul className="list-disc pl-6 space-y-2">
                  {sections.agenda.bulletPoints.map((point: string, index: number) => (
                    <li key={index} className="text-base">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </CollapsibleSection>
        )}

        {sections?.technical && (
          <CollapsibleSection title="Technical Discussion" icon={<Code className="w-5 h-5 mr-2 text-yellow-500" />}>
            <div>
              {sections.technical.subsections?.map((subsection: any, index: number) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">{subsection.title}</h3>
                  <p className="text-base mb-4">{subsection.description}</p>
                  {subsection.bulletPoints && (
                    <ul className="list-disc pl-6 space-y-2">
                      {subsection.bulletPoints.map((point: string, idx: number) => (
                        <li key={idx} className="text-base">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {sections?.challenges && (
          <CollapsibleSection
            title="Challenges & Solutions"
            icon={<FileWarning className="w-5 h-5 mr-2 text-yellow-500" />}
          >
            <div>
              {sections.challenges.subsections?.map((subsection: any, index: number) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">{subsection.title}</h3>
                  <p className="text-base mb-4">{subsection.description}</p>
                  {subsection.bulletPoints && (
                    <ul className="list-disc pl-6 space-y-2">
                      {subsection.bulletPoints.map((point: string, idx: number) => (
                        <li key={idx} className="text-base">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {sections?.results && (
          <CollapsibleSection title="Results & Outcomes" icon={<Zap className="w-5 h-5 mr-2 text-yellow-500" />}>
            <div>
              {sections.results.subsections?.map((subsection: any, index: number) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">{subsection.title}</h3>
                  <p className="text-base mb-4">{subsection.description}</p>
                  {subsection.bulletPoints && (
                    <ul className="list-disc pl-6 space-y-2">
                      {subsection.bulletPoints.map((point: string, idx: number) => (
                        <li key={idx} className="text-base">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}
      </div>
    </div>
  )
}

function CollapsibleSection({
  title,
  children,
  icon,
}: {
  title: string
  children: React.ReactNode
  icon?: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-yellow-500/30 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-900/80 text-left focus:outline-none"
      >
        <div className="flex items-center">
          {icon}
          <span className="text-xl font-semibold text-yellow-500">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-yellow-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-yellow-500" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-gray-800/50">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Helper function to split markdown content into sections
function splitMarkdownIntoSections(content: string) {
  const sections: Record<string, string> = {}

  // Define section markers
  const sectionMarkers = {
    agenda: ["## Agenda", "## Technical Discussion"],
    technical: ["## Technical Discussion", "## Challenges & Solutions"],
    challenges: ["## Challenges & Solutions", "## Results & Outcomes"],
    results: ["## Results & Outcomes", ""],
  }

  // Extract each section
  for (const [sectionName, [startMarker, endMarker]] of Object.entries(sectionMarkers)) {
    const startIndex = content.indexOf(startMarker)
    if (startIndex === -1) continue

    const endIndex = endMarker ? content.indexOf(endMarker, startIndex) : content.length
    if (endIndex === -1) continue

    // Extract section content (excluding the header)
    const sectionContent = content
      .substring(startIndex + startMarker.length, endMarker ? endIndex : content.length)
      .trim()

    sections[sectionName] = sectionContent
  }

  return sections
}

