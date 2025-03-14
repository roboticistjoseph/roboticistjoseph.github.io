"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { Environment, Float, PresentationControls } from "@react-three/drei"
import TypewriterEffect from "./TypewriterEffect"

function RobotModel({ scale = 1.5 }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export default function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const descriptions = [
    "Robotic Software Engineer",
    "Automation Engineer",
    "Building cute robots",
    "AI and Technology",
    "Humanoid Robots",
  ]

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          {animationComplete && (
            <PresentationControls
              global
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <RobotModel />
            </PresentationControls>
          )}
          <Environment preset="city" />
        </Canvas>
      </div>

      {!animationComplete ? (
        <RobotAnimation setAnimationComplete={setAnimationComplete} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <TypewriterEffect
            name="John Doe"
            descriptions={descriptions}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={2000}
            nameColor="text-yellow-500 golden-text-glow"
            textColor="text-[#f5f5dc]"
            fontSize="text-2xl md:text-3xl lg:text-4xl"
            fontWeight="font-bold"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="#about"
              className="inline-block px-8 py-3 mt-8 border border-yellow-500/30 rounded-full text-[#f5f5dc] hover:bg-white/10 hover:border-yellow-500/70 transition-all duration-300 hover:golden-glow"
            >
              Discover My Work
            </Link>
          </motion.div>
        </motion.div>
      )}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Link href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-white/50" />
        </Link>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black to-black z-0"></div>
    </section>
  )
}

function RobotAnimation({ setAnimationComplete }: { setAnimationComplete: (value: boolean) => void }) {
  return (
    <div className="w-full h-full flex items-center justify-center z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-64 h-64"
      >
        {/* Robot Head */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-2xl border-2 border-gray-600"
        >
          {/* Robot Eyes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, boxShadow: "0 0 15px #38bdf8" }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute top-8 left-6 w-4 h-4 bg-blue-400 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, boxShadow: "0 0 15px #38bdf8" }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute top-8 right-6 w-4 h-4 bg-blue-400 rounded-full"
          />

          {/* Robot Mouth */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 h-1 bg-gray-400 rounded"
          />
        </motion.div>

        {/* Robot Body */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg border-2 border-gray-600"
        >
          {/* Robot Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
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
          transition={{ delay: 2, duration: 0.8 }}
          onAnimationComplete={() => {
            setTimeout(() => setAnimationComplete(true), 1000)
          }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-gray-400 text-sm">System Initializing...</p>
          <div className="mt-2 w-40 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.2, duration: 1.5 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

