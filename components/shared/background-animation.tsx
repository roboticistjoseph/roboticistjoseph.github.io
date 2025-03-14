"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Background animation component
 * Creates animated stars background with parallax effect
 */
export default function BackgroundAnimation() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    // Use a more efficient approach for mouse movement
    let rafId: number | null = null
    let moveX = 0
    let moveY = 0
    const offset = 15 // Reduced sensitivity for smoother movement
    const element = ref.current as HTMLElement | null

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      moveX = (clientX - window.innerWidth / 2) / offset
      moveY = (clientY - window.innerHeight / 2) / offset

      // Use requestAnimationFrame for smoother updates
      if (!rafId && element) {
        rafId = requestAnimationFrame(() => {
          element.style.transform = `translate(${moveX}px, ${moveY}px)`
          rafId = null
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <motion.div ref={ref} style={{ y }} className="fixed inset-0 z-0 pointer-events-none will-change-transform">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
    </motion.div>
  )
}

