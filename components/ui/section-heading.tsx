"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { COLORS } from "@/constants/theme"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

/**
 * Reusable section heading component with animation
 *
 * @param title - The main heading text
 * @param subtitle - Optional subtitle text
 * @param className - Additional CSS classes
 */
export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yTitle = {
    y: scrollYProgress ? ["-30%", "30%"] : ["0%", "0%"],
  }

  const ySubtitle = {
    y: scrollYProgress ? ["-20%", "20%"] : ["0%", "0%"],
  }

  return (
    <div className={`text-center mb-12 ${className}`}>
      <motion.h2
        ref={ref}
        style={{ y: scrollYProgress ? yTitle.y : 0 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        <span
          className={`bg-clip-text text-transparent ${COLORS.primary.goldGradient} hover:bg-gradient-to-l transition-all duration-300 golden-text-glow`}
        >
          {title}
        </span>
      </motion.h2>

      {subtitle && (
        <motion.p
          style={{ y: scrollYProgress ? ySubtitle.y : 0 }}
          className={`${COLORS.primary.cream} max-w-2xl mx-auto`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

