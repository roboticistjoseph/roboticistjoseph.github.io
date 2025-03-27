/**
 * Cloudinary utility functions
 * Provides helper functions for working with Cloudinary images
 */

// Your Cloudinary cloud name
const CLOUD_NAME = "your-cloud-name"

/**
 * Get a Cloudinary URL for an image
 * @param publicId - The public ID of the image in Cloudinary
 * @param options - Optional transformation options
 * @returns The full Cloudinary URL
 */
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: "auto" | "webp" | "jpg" | "png"
    crop?: "fill" | "scale" | "fit" | "thumb"
    aspectRatio?: string
  } = {},
) {
  // Start building the URL
  let url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`

  // Add transformations if provided
  const transformations: string[] = []

  if (options.width) transformations.push(`w_${options.width}`)
  if (options.height) transformations.push(`h_${options.height}`)
  if (options.quality) transformations.push(`q_${options.quality}`)
  if (options.format) transformations.push(`f_${options.format}`)
  if (options.crop) transformations.push(`c_${options.crop}`)
  if (options.aspectRatio) transformations.push(`ar_${options.aspectRatio}`)

  // Add transformations to URL if any exist
  if (transformations.length > 0) {
    url += `/${transformations.join(",")}`
  }

  // Add the public ID
  url += `/${publicId}`

  return url
}

/**
 * Get a Cloudinary placeholder image URL
 * @param width - Width of the placeholder
 * @param height - Height of the placeholder
 * @param text - Optional text to display on the placeholder
 * @returns The Cloudinary placeholder URL
 */
export function getPlaceholderUrl(width: number, height: number, text?: string) {
  let url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},h_${height},c_fill,g_center,e_colorize:50,co_rgb:333333`

  if (text) {
    // Add text overlay
    url += `,l_text:Arial_24:${encodeURIComponent(text)},co_white`
  }

  // Use a generic background image or a specific one for placeholders
  url += "/placeholder"

  return url
}

/**
 * Get a Cloudinary video URL
 * @param publicId - The public ID of the video in Cloudinary
 * @param options - Optional transformation options
 * @returns The full Cloudinary URL for the video
 */
export function getCloudinaryVideoUrl(
  publicId: string,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: "auto" | "mp4" | "webm"
  } = {},
) {
  // Start building the URL
  let url = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`

  // Add transformations if provided
  const transformations: string[] = []

  if (options.width) transformations.push(`w_${options.width}`)
  if (options.height) transformations.push(`h_${options.height}`)
  if (options.quality) transformations.push(`q_${options.quality}`)
  if (options.format) transformations.push(`f_${options.format}`)

  // Add transformations to URL if any exist
  if (transformations.length > 0) {
    url += `/${transformations.join(",")}`
  }

  // Add the public ID
  url += `/${publicId}`

  return url
}

