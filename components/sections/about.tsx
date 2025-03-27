"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Download } from "lucide-react"
import Link from "next/link"
import { COLORS } from "@/constants/theme"
import { SECTIONS } from "@/constants/theme"
import SectionHeading from "@/components/ui/section-heading"
import { aboutData } from "@/data/sections/about"
import { BotIcon as Robot, Guitar, Camera, Palette, Plane, Dumbbell } from "lucide-react"

/**
 * About section component
 * Displays personal information, skills, and interests
 * Optimized for performance by removing 3D particles
 */
export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id={SECTIONS.about} className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="max-w-4xl mx-auto">
          <SectionHeading title={aboutData.title} />

          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Profile Image */}
            <motion.div className="md:w-1/3" style={{ x: useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]) }}>
              <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                {/* Golden glow effect */}
                <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
                <div
                  className="absolute -inset-2 bg-yellow-500/30 rounded-full blur-lg animate-pulse"
                  style={{ animationDelay: "300ms" }}
                ></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-800 to-gray-900 animate-pulse"></div>
                <Image
                  src="https://res.cloudinary.com/dzujcleva/image/upload/v1742059079/about_r3wkqw.jpg"
                  alt="Profile"
                  width={384}
                  height={384}
                  className="rounded-full p-1 relative z-10 responsive-image"
                />
                <div className="absolute inset-0 rounded-full border border-yellow-500/50 z-20"></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div className="md:w-2/3" style={{ x: useTransform(scrollYProgress, [0, 1], ["50%", "0%"]) }}>
              {aboutData.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className={`${COLORS.primary.cream} ${index < aboutData.bio.length - 1 ? "mb-6" : "mb-8"} leading-relaxed`}
                >
                  {paragraph}
                </p>
              ))}

              {/* Resume Button */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={aboutData.resumeButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg transition-all duration-500 relative overflow-hidden group z-10"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left pointer-events-none"></span>
                  <Download className="h-5 w-5 mr-2 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10">{aboutData.resumeButton.text}</span>
                  <span className="absolute bottom-0 left-0 h-1 w-full bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none"></span>
                </Link>
              </div>

              {/* Interests */}
              <h3 className={`text-xl font-semibold ${COLORS.primary.gold} golden-text-glow mb-4`}>
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {aboutData.interests.map((interest, index) => (
                  <InterestCard key={interest.name} interest={interest} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Static gradient background instead of 3D particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2)_0,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
    </section>
  )
}

/**
 * Interest card component
 * Displays a single interest with icon and name
 *
 * @param interest - Interest data object
 * @param index - Index for staggered animation
 */
function InterestCard({ interest, index }: { interest: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Render the appropriate icon based on iconName
  const renderIcon = () => {
    switch (interest.iconName) {
      case "Robot":
        return <Robot className="h-8 w-8 text-yellow-500" />
      case "Guitar":
        return <Guitar className="h-8 w-8 text-yellow-500" />
      case "Camera":
        return <Camera className="h-8 w-8 text-yellow-500" />
      case "Palette":
        return <Palette className="h-8 w-8 text-yellow-500" />
      case "Plane":
        return <Plane className="h-8 w-8 text-yellow-500" />
      case "Dumbbell":
        return <Dumbbell className="h-8 w-8 text-yellow-500" />
      default:
        return <div className="h-8 w-8 text-yellow-500"></div>
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-white/10 rounded-lg filter blur-sm transition-all duration-300 group-hover:blur-md"></div>
      <div className="relative flex flex-col items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-500/70 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm golden-border-glow">
        {renderIcon()}
        <span className={`text-sm ${COLORS.primary.cream} mt-2`}>{interest.name}</span>
      </div>
    </motion.div>
  )
}

