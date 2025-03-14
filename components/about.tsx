"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { Download, BotIcon as Robot, Guitar, Camera, Palette, Plane, Dumbbell } from "lucide-react"
import Link from "next/link"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

type Interest = {
  name: string
  icon: React.ReactNode
}

const interests: Interest[] = [
  { name: "Building Robots", icon: <Robot className="h-8 w-8 text-yellow-500" /> },
  { name: "Guitar", icon: <Guitar className="h-8 w-8 text-yellow-500" /> },
  { name: "Photography", icon: <Camera className="h-8 w-8 text-yellow-500" /> },
  { name: "Art", icon: <Palette className="h-8 w-8 text-yellow-500" /> },
  { name: "Travelling", icon: <Plane className="h-8 w-8 text-yellow-500" /> },
  { name: "Gym", icon: <Dumbbell className="h-8 w-8 text-yellow-500" /> },
]

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
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="max-w-4xl mx-auto">
          <motion.h2
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]) }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200 hover:bg-gradient-to-l transition-all duration-300 golden-text-glow">
              About Me
            </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div className="md:w-1/3" style={{ x: useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]) }}>
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-800 to-gray-900 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="rounded-full p-1 relative z-10"
                />
                <div className="absolute inset-0 rounded-full border border-gray-700"></div>
              </div>
            </motion.div>

            <motion.div className="md:w-2/3" style={{ x: useTransform(scrollYProgress, [0, 1], ["50%", "0%"]) }}>
              <p className="text-[#f5f5dc] mb-6 leading-relaxed">
                I'm a passionate Robotics Engineer and AI Developer with over 5 years of experience building intelligent
                systems and solutions. My expertise spans across machine learning, computer vision, and robotic process
                automation.
              </p>
              <p className="text-[#f5f5dc] mb-8 leading-relaxed">
                With a background in both hardware and software development, I bring a unique perspective to solving
                complex problems. I'm dedicated to creating technology that enhances human capabilities and improves
                lives.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:from-yellow-400 hover:to-yellow-500"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Link>
              </div>

              <h3 className="text-xl font-semibold text-yellow-500 golden-text-glow mb-4">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <InterestCard key={interest.name} interest={interest} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3D Particles Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.2} />
          <Particles count={100} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2)_0,rgba(0,0,0,0)_70%)]"></div>
    </section>
  )
}

function InterestCard({ interest, index }: { interest: Interest; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
        {interest.icon}
        <span className="text-sm text-[#f5f5dc] mt-2">{interest.name}</span>
      </div>
    </motion.div>
  )
}

function Particles({ count = 100 }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = useRef(new THREE.Object3D())

  useEffect(() => {
    if (mesh.current) {
      for (let i = 0; i < count; i++) {
        dummy.current.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20)
        dummy.current.updateMatrix()
        mesh.current.setMatrixAt(i, dummy.current.matrix)
      }
      mesh.current.instanceMatrix.needsUpdate = true
    }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      for (let i = 0; i < count; i++) {
        mesh.current.getMatrixAt(i, dummy.current.matrix)
        dummy.current.position.y += 0.005 * Math.sin(state.clock.elapsedTime + i)
        dummy.current.updateMatrix()
        mesh.current.setMatrixAt(i, dummy.current.matrix)
      }
      mesh.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshStandardMaterial color="#ffffff" emissive="#333333" transparent opacity={0.6} />
    </instancedMesh>
  )
}

