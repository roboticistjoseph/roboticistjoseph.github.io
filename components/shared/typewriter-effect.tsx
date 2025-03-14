"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import type { TypewriterEffectProps } from "@/types"

/**
 * Typewriter effect component
 * Creates a typing animation effect for text
 *
 * @param name - Name to display above the typewriter effect
 * @param descriptions - Array of descriptions to cycle through
 * @param typingSpeed - Speed of typing in milliseconds
 * @param deletingSpeed - Speed of deleting in milliseconds
 * @param pauseDuration - Duration to pause after typing in milliseconds
 * @param nameColor - CSS class for name color
 * @param textColor - CSS class for text color
 * @param fontSize - CSS class for font size
 * @param fontWeight - CSS class for font weight
 */
const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  name,
  descriptions,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  nameColor = "text-yellow-500",
  textColor = "text-white",
  fontSize = "text-2xl md:text-3xl lg:text-4xl",
  fontWeight = "font-bold",
}) => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [descIndex, setDescIndex] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let isActive = true // Flag to prevent state updates after unmount

    const typeWriter = () => {
      if (!isActive) return

      const currentDesc = descriptions[descIndex]

      if (isDeleting) {
        setText(currentDesc.substring(0, text.length - 1))
      } else {
        setText(currentDesc.substring(0, text.length + 1))
      }

      // Determine the next timeout duration with slight randomness for natural effect
      let nextTimeout = isDeleting ? deletingSpeed : typingSpeed
      // Add slight randomness to typing speed for more natural effect
      nextTimeout = nextTimeout * (0.9 + Math.random() * 0.2)

      if (!isDeleting && text === currentDesc) {
        timeout = setTimeout(() => {
          if (isActive) setIsDeleting(true)
        }, pauseDuration)
      } else if (isDeleting && text === "") {
        if (isActive) {
          setIsDeleting(false)
          setDescIndex((prevIndex) => (prevIndex + 1) % descriptions.length)
        }
      } else {
        timeout = setTimeout(typeWriter, nextTimeout)
      }
    }

    timeout = setTimeout(typeWriter, typingSpeed)

    return () => {
      isActive = false
      clearTimeout(timeout)
    }
  }, [text, isDeleting, descIndex, descriptions, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <div className="text-center">
      <motion.h1
        className={`${fontSize} ${fontWeight} ${nameColor} mb-4`}
        initial={{ opacity: 0, y: -10 }} // Reduced y offset
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }} // Faster animation
      >
        {name}
      </motion.h1>
      <motion.div
        className={`${fontSize} ${textColor} h-20 flex items-center justify-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
      >
        {text}
        <span className="animate-blink">|</span>
      </motion.div>
    </div>
  )
}

export default TypewriterEffect

