"use client"

import type { ReactNode } from "react"
import { MotionConfig } from "framer-motion"

interface ParallaxProviderProps {
  children: ReactNode
}

/**
 * Parallax provider component
 * Wraps the application with motion configuration for parallax effects
 *
 * @param children - Child components
 */
export default function ParallaxProvider({ children }: ParallaxProviderProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

