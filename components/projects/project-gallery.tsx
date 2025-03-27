"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, X, ArrowLeft, ArrowRight } from "lucide-react"
import type { GalleryImage } from "@/types"

interface ProjectGalleryProps {
  images: GalleryImage[]
}

/**
 * Project Gallery Component
 *
 * This component displays a grid of project images that can be viewed in a lightbox.
 *
 * @param images - Array of gallery images with src, alt, and caption
 */
export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Open the lightbox
  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  // Close the lightbox
  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Navigate to the next image
  const nextImage = () => {
    if (selectedImage === null || !images) return
    setSelectedImage((selectedImage + 1) % images.length)
  }

  // Navigate to the previous image
  const prevImage = () => {
    if (selectedImage === null || !images) return
    setSelectedImage((selectedImage - 1 + images.length) % images.length)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return
    if (e.key === "Escape") closeModal()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-16 mb-20"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
        <Camera className="h-6 w-6 text-yellow-500 mr-3" />
        <span className="text-yellow-500">Project Gallery</span>
      </h2>

      <p className="text-gray-100 mb-8">
        Visual documentation of the project development process, from initial prototyping to final deployment.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative group cursor-pointer aspect-video bg-gray-900 rounded-lg overflow-hidden border border-yellow-700/30 hover:border-yellow-600/70"
            onClick={() => openModal(index)}
          >
            <Image
              src={
                image.src.startsWith("/placeholder")
                  ? `https://res.cloudinary.com/your-cloud-name/image/upload/w_800,h_600,c_fill/project-gallery/${index + 1}`
                  : image.src
              }
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-yellow-400 font-medium truncate">{image.alt}</h3>
              <p className="text-gray-200 text-sm line-clamp-2">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox/Modal for full-size image view */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white p-2 hover:text-yellow-500 transition-colors z-10"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative overflow-hidden rounded-lg bg-gray-900 flex-grow">
              <Image
                src={
                  images[selectedImage].src.startsWith("/placeholder")
                    ? `https://res.cloudinary.com/your-cloud-name/image/upload/w_1200,h_800,c_fill/project-gallery/${selectedImage + 1}`
                    : images[selectedImage].src
                }
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-yellow-500 p-2 rounded-full transition-colors border border-yellow-700/50"
                aria-label="Previous image"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-yellow-500 p-2 rounded-full transition-colors border border-yellow-700/50"
                aria-label="Next image"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 bg-gray-900 rounded-b-lg border-t border-yellow-700/50">
              <h3 className="font-medium text-yellow-500 text-lg">{images[selectedImage].alt}</h3>
              <p className="text-gray-200 mt-1">{images[selectedImage].caption}</p>
              <p className="text-gray-400 text-sm mt-2">
                Image {selectedImage + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

