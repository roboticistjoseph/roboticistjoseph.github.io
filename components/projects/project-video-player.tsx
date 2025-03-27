"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ProjectVideoPlayerProps {
  videoSrc: string
}

export default function ProjectVideoPlayer({ videoSrc }: ProjectVideoPlayerProps) {
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
      console.error("Video failed to load:", videoSrc)
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
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <div className="relative rounded-xl overflow-hidden shadow-2xl h-full">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 rounded-xl -m-0.5"></div>

        {/* Video container with responsive sizing */}
        <div className="relative aspect-video w-full bg-gray-900 z-10 h-full">
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
              autoPlay
              controlsList="nodownload"
              disablePictureInPicture={false}
              className="w-full h-full object-contain"
              poster="/placeholder.svg?height=720&width=1280"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </motion.div>
  )
}

