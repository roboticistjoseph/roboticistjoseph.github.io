"use client"

import type { ReactNode } from "react"
import { MotionConfig } from "framer-motion"

export default function ParallaxProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

