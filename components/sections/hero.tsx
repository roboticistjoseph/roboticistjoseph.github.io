"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { COLORS } from "@/constants/theme"
import { SECTIONS } from "@/constants/theme"
import TypewriterEffect from "@/components/shared/typewriter-effect"
import { heroData } from "@/data/sections/hero"
import Image from "next/image"

/**
 * Hero Section Component
 *
 * This component displays the first section of the portfolio with a typewriter effect.
 * Animation has been removed for faster loading and smoother performance.
 */
export default function Hero() {
  const ref = useRef(null)

  return (
    <section
      id={SECTIONS.hero}
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dzujcleva/image/upload/v1742035615/hero_backdrop_aymxo7.png"
          alt="Robot background"
          layout="fill"
          objectFit="cover"
          quality={85} // Reduced quality for faster loading
          priority={true} // Prioritize this image loading
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/55 to-black"></div>
      </div>

      {/* Content - Immediately visible without animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 px-4"
      >
        <TypewriterEffect
          name={heroData.name}
          descriptions={heroData.descriptions}
          typingSpeed={heroData.animation.typewriter.typingSpeed}
          deletingSpeed={heroData.animation.typewriter.deletingSpeed}
          pauseDuration={heroData.animation.typewriter.pauseDuration}
          nameColor={`${COLORS.primary.gold} golden-text-glow`}
          textColor={COLORS.primary.cream}
          fontSize="text-2xl md:text-3xl lg:text-4xl"
          fontWeight="font-bold"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button
            onClick={() => {
              const projectsSection = document.getElementById(SECTIONS.projects)
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="inline-block px-8 py-3 mt-8 border border-yellow-500/30 rounded-full text-[#f5f5dc] hover:bg-white/10 hover:border-yellow-500/70 transition-all duration-300 hover:golden-glow"
          >
            {heroData.ctaButton.text}
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button
          onClick={() => {
            const aboutSection = document.getElementById(SECTIONS.about)
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
          aria-label="Scroll down"
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 focus:ring-offset-black rounded-full p-1"
        >
          <ChevronDown className="h-8 w-8 text-white/50 hover:text-white/80 transition-colors duration-300" />
        </button>
      </div>
    </section>
  )
}

