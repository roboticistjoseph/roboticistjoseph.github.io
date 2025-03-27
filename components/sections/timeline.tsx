"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, ImageIcon } from "lucide-react"
import Image from "next/image"
import { COLORS } from "@/constants/theme"
import { SECTIONS } from "@/constants/theme"
import SectionHeading from "@/components/ui/section-heading"
import type { TimelineItem as TimelineItemType } from "@/types"
import { timelineData } from "@/data/sections/timeline"

/**
 * Timeline section component
 * Displays education and work experience in a timeline format
 * with interactive dropdown functionality
 */
export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  // Remove this line as isMobile is not used

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scaleEducation = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  const scaleExperience = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  // Track expanded items
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [expandedGalleries, setExpandedGalleries] = useState<number[]>([])

  // Toggle expanded state for an item
  const toggleExpand = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  // Toggle expanded state for a gallery
  const toggleGallery = (id: number) => {
    setExpandedGalleries((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  return (
    <section id={SECTIONS.timeline} className="py-20 bg-black/95 relative">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="max-w-6xl mx-auto">
          <SectionHeading title={timelineData.title} />

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Education Column */}
            <motion.div style={{ scale: scaleEducation }}>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 text-white mr-3" />
                <h3 className={`text-2xl font-semibold ${COLORS.primary.gold} golden-text-glow`}>Education</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/50 via-white/30 to-white/10"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {timelineData.education.map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      index={index}
                      isExpanded={expandedItems.includes(item.id)}
                      isGalleryExpanded={expandedGalleries.includes(item.id)}
                      toggleExpand={() => toggleExpand(item.id)}
                      toggleGallery={() => toggleGallery(item.id)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Column */}
            <motion.div style={{ scale: scaleExperience }}>
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 text-white mr-3" />
                <h3 className={`text-2xl font-semibold ${COLORS.primary.gold} golden-text-glow`}>Experience</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/50 via-white/30 to-white/10"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {timelineData.experience.map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      index={index}
                      isExpanded={expandedItems.includes(item.id)}
                      isGalleryExpanded={expandedGalleries.includes(item.id)}
                      toggleExpand={() => toggleExpand(item.id)}
                      toggleGallery={() => toggleGallery(item.id)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2)_0,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
    </section>
  )
}

interface TimelineItemProps {
  item: TimelineItemType
  index: number
  isExpanded: boolean
  isGalleryExpanded: boolean
  toggleExpand: () => void
  toggleGallery: () => void
}

function TimelineItem({ item, index, isExpanded, isGalleryExpanded, toggleExpand, toggleGallery }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // For demonstration purposes, create placeholder gallery images if not provided
  const galleryImages =
    item.gallery?.images ||
    [
      { src: "/placeholder.svg?height=200&width=300", alt: "Work sample 1" },
      { src: "/placeholder.svg?height=200&width=300", alt: "Work sample 2" },
      { src: "/placeholder.svg?height=200&width=300", alt: "Work sample 3" },
      { src: "/placeholder.svg?height=200&width=300", alt: "Work sample 4" },
    ].slice(0, 4) // Limit to 4 images maximum

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

      <div
        className={`
          bg-gray-900/70 rounded-lg border 
          ${isExpanded || isGalleryExpanded ? "border-yellow-500/70 shadow-[0_0_15px_rgba(234,179,8,0.1)]" : "border-gray-800"}
          transition-all duration-300
        `}
      >
        {/* Card Header - Always visible */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3 flex-wrap">
            <div className="flex items-center">
              <Image
                src={
                  item.logo.startsWith("/placeholder")
                    ? `https://res.cloudinary.com/your-cloud-name/image/upload/w_48,h_48,c_fill/organizations/${item.organization.toLowerCase().replace(/\s+/g, "-")}`
                    : item.logo
                }
                alt={item.organization}
                width={48}
                height={48}
                className="rounded-lg mr-4"
              />
              <div>
                <h4 className={`text-xl font-semibold ${COLORS.primary.gold}`}>{item.title}</h4>
                <p className={`${COLORS.primary.cream}`}>{item.organization}</p>

                {/* GPA/CGPA Badge - Only for Education items */}
                {item.type === "education" && (
                  <div className="inline-flex items-center mt-1 px-2 py-0.5 bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 rounded-md border border-yellow-400/30">
                    <span className="text-xs font-medium text-black">
                      {item.id === 1 ? "GPA: 3.81/4" : item.id === 2 ? "CGPA: 9.33/10" : ""}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${COLORS.primary.cream} bg-gray-800/80 px-3 py-1.5 rounded-full mt-2 md:mt-0`}>
                {item.date}
              </span>
            </div>
          </div>
          <p className={`${COLORS.primary.cream} text-sm mb-4`}>{item.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Details Button */}
            {item.details && item.details.length > 0 && (
              <button
                type="button"
                onClick={toggleExpand}
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-yellow-500 hover:text-yellow-400 transition-colors text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                aria-expanded={isExpanded}
                aria-controls={`details-${item.id}`}
              >
                {item.type === "education"
                  ? isExpanded
                    ? "Hide courses"
                    : "Show courses"
                  : isExpanded
                    ? "Hide work"
                    : "Show work"}
                <span className={`ml-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </button>
            )}

            {/* Gallery Button - Only for Experience items */}
            {item.type === "experience" && (
              <button
                type="button"
                onClick={toggleGallery}
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-yellow-500 hover:text-yellow-400 transition-colors text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                aria-expanded={isGalleryExpanded}
                aria-controls={`gallery-${item.id}`}
              >
                {isGalleryExpanded ? "Hide gallery" : "Gallery"}
                <span className="ml-2">
                  <ImageIcon className="h-4 w-4" />
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Expandable Courses/Work Section */}
        {item.details && item.details.length > 0 && (
          <div
            id={`details-${item.id}`}
            className={`
              px-6 pb-6 border-t border-gray-800 pt-4 space-y-6
              transition-all duration-300 overflow-hidden
              ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 border-t-0 pt-0 pb-0 px-6"}
            `}
          >
            <h5 className={`text-lg font-medium ${COLORS.primary.gold}`}>
              {item.type === "education" ? "Courses Taken" : "Work Done"}
            </h5>

            <ul className="space-y-2 list-disc list-inside">
              {item.details.map((detail, idx) => (
                <li key={idx} className="text-gray-300">
                  <span className="font-medium text-yellow-400">{detail.title}</span>
                  {detail.description && (
                    <span className="text-sm text-gray-400 ml-2">- {detail.description.split(".")[0]}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expandable Gallery Section - Only for Experience items */}
        {item.type === "experience" && (
          <div
            id={`gallery-${item.id}`}
            className={`
              px-6 pb-6 border-t border-gray-800 pt-4 space-y-6
              transition-all duration-300 overflow-hidden
              ${isGalleryExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 border-t-0 pt-0 pb-0 px-6"}
            `}
          >
            <h5 className={`text-lg font-medium ${COLORS.primary.gold}`}>{item.gallery?.title || "Project Gallery"}</h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galleryImages.map((image, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-lg group">
                  <Image
                    src={
                      image.src.startsWith("/placeholder")
                        ? `https://res.cloudinary.com/your-cloud-name/image/upload/w_300,h_200,c_fill/gallery/${idx + 1}`
                        : image.src
                    }
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-3 text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

