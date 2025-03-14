"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"

type TimelineItem = {
  id: number
  title: string
  organization: string
  date: string
  description: string
  type: "education" | "experience"
  logo: string
}

const educationData: TimelineItem[] = [
  {
    id: 1,
    title: "Master's in Robotics",
    organization: "Tech University",
    date: "2017 - 2019",
    description:
      "Specialized in autonomous systems and artificial intelligence. Thesis on 'Deep Reinforcement Learning for Robotic Manipulation Tasks'.",
    type: "education",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    title: "Bachelor's in Computer Science",
    organization: "State University",
    date: "2013 - 2017",
    description: "Focused on algorithms, data structures, and machine learning fundamentals. Graduated with honors.",
    type: "education",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    title: "Certification in AI",
    organization: "Online Academy",
    date: "2016",
    description: "Comprehensive training in artificial intelligence fundamentals and applications.",
    type: "education",
    logo: "/placeholder.svg?height=50&width=50",
  },
]

const experienceData: TimelineItem[] = [
  {
    id: 4,
    title: "Robotics Engineer",
    organization: "Tech Innovations Inc.",
    date: "2021 - Present",
    description:
      "Leading the development of autonomous robotic systems for industrial applications. Implementing machine learning algorithms for improved robot perception and decision-making.",
    type: "experience",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 5,
    title: "AI Developer",
    organization: "Future AI Labs",
    date: "2019 - 2021",
    description:
      "Developed and deployed machine learning models for computer vision applications. Collaborated with cross-functional teams to integrate AI solutions into existing products.",
    type: "experience",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 6,
    title: "Research Assistant",
    organization: "Tech University",
    date: "2017 - 2019",
    description: "Conducted research on reinforcement learning algorithms for robotic control systems.",
    type: "experience",
    logo: "/placeholder.svg?height=50&width=50",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scaleEducation = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  const scaleExperience = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1])

  return (
    <section id="timeline" className="py-20 bg-black/95 relative">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="max-w-6xl mx-auto">
          <motion.h2
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]) }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200 hover:bg-gradient-to-l transition-all duration-300 golden-text-glow">
              Education & Experience
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Education Column */}
            <motion.div style={{ scale: scaleEducation }}>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 text-white mr-3" />
                <h3 className="text-2xl font-semibold text-yellow-500 golden-text-glow">Education</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/50 via-white/30 to-white/10"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {educationData.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Column */}
            <motion.div style={{ scale: scaleExperience }}>
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 text-white mr-3" />
                <h3 className="text-2xl font-semibold text-yellow-500 golden-text-glow">Experience</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/50 via-white/30 to-white/10"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {experienceData.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2)_0,rgba(0,0,0,0)_70%)]"></div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: item.type === "education" ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.type === "education" ? -50 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white/10 border-2 border-white/50 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>

      <div className="bg-gray-900/70 p-6 rounded-lg border border-gray-800 hover:border-yellow-500/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.1)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Image
              src={item.logo || "/placeholder.svg"}
              alt={item.organization}
              width={48}
              height={48}
              className="rounded-lg mr-4"
            />
            <div>
              <h4 className="text-xl font-semibold text-yellow-500">{item.title}</h4>
              <p className="text-yellow-500/80">{item.organization}</p>
            </div>
          </div>
          <span className="text-sm text-[#f5f5dc] bg-gray-800/80 px-3 py-1.5 rounded-full">{item.date}</span>
        </div>
        <p className="text-[#f5f5dc] text-sm">{item.description}</p>
      </div>
    </motion.div>
  )
}

