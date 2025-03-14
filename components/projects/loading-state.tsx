"use client"

import { motion } from "framer-motion"

/**
 * Loading State Component
 *
 * This component displays a loading animation while project data is being fetched.
 */
export default function LoadingState() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-16 h-16 border-4 border-gray-700 border-t-yellow-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-300">Loading project details...</p>
      </motion.div>
    </div>
  )
}

