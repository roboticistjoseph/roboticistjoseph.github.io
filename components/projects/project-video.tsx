"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ProjectVideoProps {
  videoSrc: string
  title: string
}

export default function ProjectVideo({ videoSrc, title }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoaded = () => {
      setIsLoading(false)
    }

    const handleError = () => {
      setIsLoading(false)
      setHasError(true)
    }

    video.addEventListener("loadeddata", handleLoaded)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoaded)
      video.removeEventListener("error", handleError)
    }
  }, [videoSrc])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 mb-12 relative"
    >
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-yellow-700/30">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-yellow-700/20 to-yellow-900/20 rounded-xl -m-0.5"></div>

        {/* Video container with responsive sizing */}
        <div className="relative aspect-video w-full max-w-5xl mx-auto bg-gray-900 z-10">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
              <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 text-center p-4">
              <div>
                <p className="text-yellow-500 font-semibold mb-2">Video could not be loaded</p>
                <p className="text-gray-400 text-sm">Please check the video URL and try again</p>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay={false}
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
              poster="/placeholder.svg?height=720&width=1280"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>

      {/* Video title */}
      <div className="text-center mt-4">
        <h3 className="text-xl text-yellow-500 font-medium">{title}</h3>
      </div>
    </motion.div>
  )
}

