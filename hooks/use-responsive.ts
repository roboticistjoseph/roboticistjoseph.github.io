"use client"

import { useState, useEffect } from "react"
import { BREAKPOINTS } from "@/constants/theme"

/**
 * Custom hook for responsive design
 * Returns boolean values indicating the current viewport size
 *
 * @returns Object with boolean values for different screen sizes
 */
export function useResponsive() {
  // Initialize with desktop values to prevent hydration mismatch
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Function to update state based on window width
    const updateSize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.sm)
      setIsTablet(window.innerWidth >= BREAKPOINTS.sm && window.innerWidth < BREAKPOINTS.lg)
      setIsDesktop(window.innerWidth >= BREAKPOINTS.lg)
    }

    // Set initial values
    updateSize()

    // Add event listener
    window.addEventListener("resize", updateSize)

    // Clean up
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return { isMobile, isTablet, isDesktop }
}

