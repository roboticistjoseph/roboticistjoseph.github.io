"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])

  return (
    <section id="contact" className="py-32 bg-black relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0,rgba(0,0,0,0)_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} style={{ opacity }} className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200 golden-text-glow">
              Get in Touch
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#f5f5dc] mb-16"
          >
            Let's create something amazing together
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-8 md:gap-16"
          >
            <Link href="mailto:contact@example.com" className="group relative">
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg group-hover:bg-yellow-500/30 transition-all duration-300"></div>
              <div className="relative w-20 h-20 rounded-full bg-black border-2 border-yellow-500/50 flex items-center justify-center group-hover:border-yellow-500 transition-all duration-300">
                <Mail className="w-8 h-8 text-yellow-500" />
              </div>
            </Link>

            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg group-hover:bg-yellow-500/30 transition-all duration-300"></div>
              <div className="relative w-20 h-20 rounded-full bg-black border-2 border-yellow-500/50 flex items-center justify-center group-hover:border-yellow-500 transition-all duration-300">
                <Github className="w-8 h-8 text-yellow-500" />
              </div>
            </Link>

            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg group-hover:bg-yellow-500/30 transition-all duration-300"></div>
              <div className="relative w-20 h-20 rounded-full bg-black border-2 border-yellow-500/50 flex items-center justify-center group-hover:border-yellow-500 transition-all duration-300">
                <Linkedin className="w-8 h-8 text-yellow-500" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
    </section>
  )
}

