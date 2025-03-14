"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"

export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: "robotics" | "ai" | "web" | "research" | "blockchain" | "mobile" | "game" | "cloud" | "security"
  links: {
    demo?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Autonomous Drone Navigation",
    description:
      "A system for autonomous drone navigation in GPS-denied environments using computer vision and SLAM algorithms.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Computer Vision", "ROS", "Python", "SLAM"],
    category: "robotics",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Emotion Recognition AI",
    description: "Deep learning model for real-time emotion recognition from facial expressions with 95% accuracy.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["TensorFlow", "Computer Vision", "Deep Learning"],
    category: "ai",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Smart Home Automation",
    description: "IoT-based smart home system with voice control and energy optimization algorithms.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["IoT", "Raspberry Pi", "Node.js", "MQTT"],
    category: "web",
    links: {
      github: "#",
    },
  },
  {
    id: 4,
    title: "Robotic Arm Control",
    description: "Inverse kinematics solution for a 6-DOF robotic arm with real-time trajectory planning.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["C++", "ROS", "Control Systems"],
    category: "robotics",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "Natural Language Processing API",
    description: "REST API for text analysis, sentiment detection, and language translation using transformer models.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["NLP", "FastAPI", "PyTorch", "Docker"],
    category: "ai",
    links: {
      github: "#",
    },
  },
  {
    id: 6,
    title: "Reinforcement Learning Research",
    description: "Novel approach to multi-agent reinforcement learning for collaborative robotic tasks.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Reinforcement Learning", "PyTorch", "Research"],
    category: "research",
    links: {
      demo: "#",
      github: "#",
    },
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "robotics", name: "Robotics" },
  { id: "ai", name: "AI & ML" },
  { id: "web", name: "Web & IoT" },
  { id: "research", name: "Research" },
  { id: "blockchain", name: "Blockchain" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "game", name: "Game Dev" },
  { id: "cloud", name: "Cloud" },
  { id: "security", name: "Security" },
  // Add more categories as needed
]

function ProjectModel() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="relative z-10">
          <motion.h2
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]) }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200">
              Featured Projects
            </span>
          </motion.h2>

          <div className="categories-scroll mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black royal-glow"
                    : "bg-gray-900/80 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCardWrapper key={project.id} project={project} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 -z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.2} />
          <ProjectModel />
          <Environment preset="city" />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2)_0,rgba(0,0,0,0)_70%)]"></div>
    </section>
  )
}

function ProjectCardWrapper({
  project,
  index,
  scrollYProgress,
}: { project: Project; index: number; scrollYProgress: MotionValue<number> }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ y: useTransform(scrollYProgress, [0, 1], [`0%`, `${(index % 3) * 5}%`]) }}
    >
      <ProjectCard project={project} />
    </motion.div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-gray-900/70 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500/70 transition-all duration-300 h-full flex flex-col hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <Link href={`/projects/${project.id}`} className="block">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500 hover:text-yellow-400 transition-colors golden-text-glow">
            {project.title}
          </h3>
        </Link>
        <p className="text-[#f5f5dc] mb-4 text-sm flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

