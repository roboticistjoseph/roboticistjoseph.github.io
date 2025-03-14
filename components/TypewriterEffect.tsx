"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  name: string
  descriptions: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  nameColor?: string
  textColor?: string
  fontSize?: string
  fontWeight?: string
}

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

    const typeWriter = () => {
      const currentDesc = descriptions[descIndex]

      if (isDeleting) {
        setText(currentDesc.substring(0, text.length - 1))
      } else {
        setText(currentDesc.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentDesc) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setDescIndex((prevIndex) => (prevIndex + 1) % descriptions.length)
      } else {
        timeout = setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed)
      }
    }

    timeout = setTimeout(typeWriter, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, descIndex, descriptions, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <div className="text-center">
      <motion.h1
        className={`${fontSize} ${fontWeight} ${nameColor} mb-4`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {name}
      </motion.h1>
      <motion.div
        className={`${fontSize} ${textColor} h-20 flex items-center justify-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {text}
        <span className="animate-blink">|</span>
      </motion.div>
    </div>
  )
}

export default TypewriterEffect

