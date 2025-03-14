"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { COLORS } from "@/constants/theme"

interface CardProps {
  children: ReactNode
  index?: number
  className?: string
  glowOnHover?: boolean
  translateOnHover?: boolean
}

/**
 * Reusable animated card component
 *
 * @param children - Card content
 * @param index - Index for staggered animations
 * @param className - Additional CSS classes
 * @param glowOnHover - Whether to add a glow effect on hover
 * @param translateOnHover - Whether to add a translation effect on hover
 */
export default function Card({
  children,
  index = 0,
  className = "",
  glowOnHover = true,
  translateOnHover = true,
}: CardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group ${className}`}
    >
      {/* Glow effect */}
      {glowOnHover && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>
      )}

      {/* Card content */}
      <div
        className={`
          relative flex flex-col h-full ${COLORS.background.card} backdrop-blur-xl rounded-lg 
          ${COLORS.border.normal} hover:${COLORS.border.hover} transition-all duration-300 p-6 overflow-hidden
          ${glowOnHover ? COLORS.border.glow : ""}
          ${translateOnHover ? "transform group-hover:-translate-y-1" : ""}
        `}
      >
        {children}
      </div>
    </motion.div>
  )
}

