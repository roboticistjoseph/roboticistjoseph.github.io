"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, FileText, BookOpen } from "lucide-react"
import type { ResearchPaper } from "@/types"

interface ProjectPapersProps {
  papers: ResearchPaper[]
}

export default function ProjectPapers({ papers }: ProjectPapersProps) {
  return (
    <div className="my-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6"
      >
        Papers
      </motion.h2>

      {papers.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <p>No research papers available for this project yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {papers.map((paper, index) => (
            <PaperCard key={index} paper={paper} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}

function PaperCard({ paper, index }: { paper: ResearchPaper; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-yellow-400 mb-2">{paper.title}</h3>

        <div className="mb-4 text-gray-300">
          <div className="mb-2">
            <span className="font-semibold">Authors:</span> {paper.authors.join(", ")}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Publication:</span> {paper.publication}, {paper.year}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          {paper.links.online && (
            <a
              href={paper.links.online}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md transition-colors duration-200"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Read Online
            </a>
          )}

          {paper.links.pdf && (
            <a
              href={paper.links.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md transition-colors duration-200"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download PDF
            </a>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
        >
          <span className="mr-2">Abstract</span>
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-gray-300 bg-gray-700/50 p-4 rounded-md"
          >
            {paper.abstract}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

