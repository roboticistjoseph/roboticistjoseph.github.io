/**
 * Theme constants
 * Contains theme-related constants used throughout the application
 */

// Color scheme
export const COLORS = {
  primary: {
    gold: "text-yellow-500",
    goldGradient: "bg-gradient-to-r from-yellow-500 to-yellow-200",
    cream: "text-[#f5f5dc]",
    creamMuted: "text-[#f5f5dc]/70",
  },
  background: {
    dark: "bg-black",
    card: "bg-gray-900/70",
    cardHover: "bg-gray-800/70",
  },
  border: {
    normal: "border-gray-800",
    hover: "border-yellow-500/70",
    glow: "hover:shadow-[0_0_15px_rgba(234,179,8,0.1)]",
  },
}

// Animation durations
export const ANIMATION = {
  fast: "duration-300",
  medium: "duration-500",
  slow: "duration-700",
}

// Responsive breakpoints (for reference)
export const BREAKPOINTS = {
  sm: 640, // Small devices (phones)
  md: 768, // Medium devices (tablets)
  lg: 1024, // Large devices (laptops)
  xl: 1280, // Extra large devices (desktops)
}

// Section IDs for navigation
export const SECTIONS = {
  hero: "hero",
  about: "about",
  timeline: "timeline",
  projects: "projects",
  skills: "skills",
  contact: "contact",
}

