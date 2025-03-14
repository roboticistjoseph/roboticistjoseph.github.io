"use client"

import type { ReactNode } from "react"
import { COLORS } from "@/constants/theme"

interface ChipProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "filled"
}

/**
 * Chip component for displaying tags, technologies, etc.
 *
 * @param children - Chip content
 * @param className - Additional CSS classes
 * @param variant - Visual style variant
 */
export default function Chip({ children, className = "", variant = "default" }: ChipProps) {
  const baseStyle = "px-3 py-1 text-sm rounded-full transition-colors duration-300"

  const variantStyles = {
    default: `bg-gray-800/50 ${COLORS.primary.cream} border border-gray-700/50 hover:border-yellow-500/50 hover:bg-gray-800`,
    outline: `bg-transparent border border-yellow-500/50 text-yellow-500 hover:border-yellow-500 hover:bg-yellow-500/10`,
    filled: `bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500/30`,
  }

  return <span className={`${baseStyle} ${variantStyles[variant]} ${className}`}>{children}</span>
}

