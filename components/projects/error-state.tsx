"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ErrorStateProps {
  message?: string
}

/**
 * Error State Component
 *
 * This component displays an error message when a project cannot be loaded.
 *
 * @param message - Optional error message to display
 */
export default function ErrorState({ message = "An error occurred" }: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg p-10 bg-black/80 border border-yellow-500/20 rounded-xl shadow-2xl"
      >
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4 animate-pulse">The Future is Being Built...</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Hang tight! This project is under construction, but trust me, it's going to be epic. Come back soon to witness the unveiling of something truly amazing!
          </p>
          <p className="text-gray-400 italic text-sm">
            {message !== "An error occurred" ? message : "We're working hard to bring you something extraordinary."}
          </p>
        </div>
        <Link
          href="/#projects"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-black border border-yellow-500/50 hover:border-yellow-400 text-gray-100 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>
      </motion.div>
    </div>
  )
}

