"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

interface ProjectLayoutProps {
  children: ReactNode
}

/**
 * Project Layout Component
 *
 * This component provides the overall layout structure for project detail pages.
 * It includes the back button and wraps all content in appropriate containers.
 *
 * @param children - The content to display within the layout
 */
export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button - Enhanced visibility */}
        <Link
          href="/#projects"
          className="inline-flex items-center px-4 py-2 mb-8 border border-gray-700 
                    rounded-md bg-gray-900 text-gray-200 hover:bg-gray-800 
                    hover:text-white transition-colors duration-300 shadow-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>

        {/* Main Content */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      </div>
    </main>
  )
}

