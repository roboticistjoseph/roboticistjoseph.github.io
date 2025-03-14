"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SECTIONS } from "@/constants/theme"
import SocialButton from "@/components/ui/social-button"
import { contactData } from "@/data/sections/contact"

/**
 * Contact section component
 * Displays contact information and social media links
 */
export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  // Remove this line as y is not used

  return (
    <section id={SECTIONS.contact} className="py-32 bg-black relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0,rgba(0,0,0,0)_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} style={{ opacity }} className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200 golden-text-glow">
              {contactData.title}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#f5f5dc] mb-16"
          >
            {contactData.subtitle}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-8 md:gap-16"
          >
            {contactData.socialLinks.map((link) => (
              <SocialButton
                key={link.name}
                href={link.url}
                icon={link.icon}
                ariaLabel={`Connect with me on ${link.name}`}
              />
            ))}
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

