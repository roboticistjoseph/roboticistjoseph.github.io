"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Environment, PresentationControls } from "@react-three/drei"
import TypewriterEffect from "@/components/shared/typewriter-effect"
import { COLORS } from "@/constants/theme"
import { SECTIONS } from "@/constants/theme"
import { heroData } from "@/data/sections/hero"
import Image from "next/image"

/**
 * Hero Section Component
 *
 * This component displays the first section of the portfolio with an animated robot
 * and typewriter effect.
 */
export default function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true)
    }, heroData.animation.duration)

    const fallbackTimer = setTimeout(() => {
      if (!animationComplete) {
        console.log("Fallback timer triggered for hero section")
        setAnimationComplete(true)
      }
    }, heroData.animation.duration + 500)

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(fallbackTimer)
    }
  }, [animationComplete])

  useEffect(() => {
    const preloadResources = async () => {
      setTimeout(() => {
        if (!animationComplete) {
          setAnimationComplete(true)
        }
      }, 1500)
    }

    preloadResources()
  }, [])

  return (
    <section
      id={SECTIONS.hero}
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zYhqRKCS4GlDHotQGbd0Vn91UJLVGh.png"
          alt="Robot background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/65 to-black"></div>
      </div>

      {/* 3D Background */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        frameloop={animationComplete ? "demand" : "always"}
        className="!absolute inset-0 z-10"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={3} />
        {animationComplete && (
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          ></PresentationControls>
        )}
        <Environment preset="city" />
      </Canvas>

      {/* Content */}
      {!animationComplete ? (
        <>
          <RobotAnimation setAnimationComplete={setAnimationComplete} />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-fadeIn delay-4000">
            <div className="text-center z-10 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 golden-text-glow mb-4">{heroData.name}</h1>
              <p className="text-xl text-[#f5f5dc]">{heroData.descriptions[0]}</p>
            </div>
          </div>
        </>
      ) : (
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
            transition={{ delay: 0.6, duration: 0.8 }}
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
      )}

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

function RobotAnimation({ setAnimationComplete }: { setAnimationComplete: (value: boolean) => void }) {
  return (
    <div className="w-full h-full flex items-center justify-center z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} // Reduced from 1s to 0.5s
        className="relative w-64 h-64"
      >
        {/* Robot Head */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }} // Reduced delays
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-2xl border-2 border-gray-600"
        >
          {/* Robot Eyes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, boxShadow: "0 0 15px #38bdf8" }}
            transition={{ delay: 0.5, duration: 0.3 }} // Reduced delays
            className="absolute top-8 left-6 w-4 h-4 bg-blue-400 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, boxShadow: "0 0 15px #38bdf8" }}
            transition={{ delay: 0.5, duration: 0.3 }} // Reduced delays
            className="absolute top-8 right-6 w-4 h-4 bg-blue-400 rounded-full"
          />

          {/* Robot Mouth */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.6, duration: 0.3 }} // Reduced delays
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 h-1 bg-gray-400 rounded"
          />
        </motion.div>

        {/* Robot Body */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }} // Reduced delays
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg border-2 border-gray-600"
        >
          {/* Robot Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }} // Reduced delays
            className="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-col gap-3"
          >
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }} // Reduced delays
          onAnimationComplete={() => {
            setTimeout(() => setAnimationComplete(true), 500) // Reduced from 1000ms to 500ms
          }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-gray-400 text-sm">System Initializing...</p>
          <div className="mt-2 w-40 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 0.8 }} // Reduced delays
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

