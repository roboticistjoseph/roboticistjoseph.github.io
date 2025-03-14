"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, BotIcon as Robot, Cpu, GitBranch, Monitor } from "lucide-react"

type Skill = {
  name: string
  items: string[]
  icon: React.ReactNode
}

const skills: Skill[] = [
  {
    name: "Programming",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    items: ["C", "C++", "Python", "ABB", "Shell", "MAKE file"],
  },
  {
    name: "Software",
    icon: <Monitor className="w-6 h-6 text-green-400" />,
    items: ["Linux", "Git", "Perforce", "VSCode", "Cursor", "Qt creator", "RobotStudio", "RobView"],
  },
  {
    name: "Robotics",
    icon: <Robot className="w-6 h-6 text-purple-400" />,
    items: [
      "ROS2",
      "Gazebo Sim",
      "RViz",
      "MoveIt",
      "Kinematics",
      "Dynamics",
      "Linear Algebra",
      "Computer Vision",
      "Path planning",
    ],
  },
  {
    name: "Hardware",
    icon: <Cpu className="w-6 h-6 text-red-400" />,
    items: ["Arduino", "Raspberry Pi", "Kilobots", "3D printing", "Autonomous Rovers"],
  },
  {
    name: "Development",
    icon: <GitBranch className="w-6 h-6 text-yellow-400" />,
    items: [
      "SDLC",
      "Agile Methodology",
      "JIRA",
      "Scrum Teams",
      "Unit Testing",
      "UML",
      "LaTeX Documentation",
      "Production level coding",
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="max-w-6xl mx-auto">
          <motion.h2
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]) }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200">
              Technical Skills
            </span>
          </motion.h2>

          <motion.p
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) }}
            className="text-[#f5f5dc] text-center mb-12 max-w-2xl mx-auto"
          >
            Here are some of my skills that I've been working on over the years
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>

      {/* Card content */}
      <div className="relative flex flex-col h-full bg-gray-900/50 backdrop-blur-xl rounded-lg border border-gray-800 hover:border-yellow-500/70 transition-all duration-300 p-6 overflow-hidden group-hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transform group-hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-4">
          {skill.icon}
          <h3 className="text-xl font-semibold text-yellow-500 golden-text-glow">{skill.name}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skill.items.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-sm bg-gray-800/50 text-[#f5f5dc] rounded-full border border-gray-700/50 hover:border-yellow-500/50 transition-colors duration-300 hover:bg-gray-800"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-purple-600/10 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-emerald-500/10 blur-2xl rounded-full transform -translate-x-10 translate-y-10 group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
      </div>
    </motion.div>
  )
}

