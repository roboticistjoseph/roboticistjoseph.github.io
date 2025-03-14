"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { COLORS } from "@/constants/theme"
import { SECTIONS } from "@/constants/theme"
import SectionHeading from "@/components/ui/section-heading"
import Card from "@/components/ui/card"
import type { Skill } from "@/types"
import { skillsData } from "@/data/sections/skills"

/**
 * Skills section component
 * Displays technical skills in a grid of cards
 */
export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id={SECTIONS.skills} className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="max-w-6xl mx-auto">
          <SectionHeading title={skillsData.title} subtitle={skillsData.subtitle} />

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {skillsData.skills.map((skill, index) => (
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

/**
 * Skill card component
 * Displays a single skill with icon, name, and items
 *
 * @param skill - Skill data
 * @param index - Index for staggered animation
 */
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <Card index={index}>
      <div className="flex items-center gap-3 mb-4">
        {skill.icon}
        <h3 className={`text-xl font-semibold ${COLORS.primary.gold} golden-text-glow`}>{skill.name}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className={`px-3 py-1 text-sm bg-gray-800/50 ${COLORS.primary.cream} rounded-full border border-gray-700/50 hover:border-yellow-500/50 transition-colors duration-300 hover:bg-gray-800`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-purple-600/10 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-emerald-500/10 blur-2xl rounded-full transform -translate-x-10 translate-y-10 group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
    </Card>
  )
}

