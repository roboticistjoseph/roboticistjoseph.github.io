"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function BackgroundAnimation() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.div ref={ref} style={{ y }} className="fixed inset-0 z-0 pointer-events-none">
      {/* Reduced number of stars for better performance */}
      <div className="stars"></div>
      <div className="stars3"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
    </motion.div>
  )
}

