"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface SocialButtonProps {
  href: string
  icon: ReactNode
  ariaLabel?: string
  external?: boolean
}

/**
 * Social media button component with hover effects
 *
 * @param href - URL to link to
 * @param icon - Icon component to display
 * @param ariaLabel - Accessibility label
 * @param external - Whether the link is external
 */
export default function SocialButton({ href, icon, ariaLabel, external = true }: SocialButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="group relative"
    >
      <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg group-hover:bg-yellow-500/30 transition-all duration-300"></div>
      <div className="relative w-20 h-20 rounded-full bg-black border-2 border-yellow-500/50 flex items-center justify-center group-hover:border-yellow-500 transition-all duration-300">
        {icon}
      </div>
    </Link>
  )
}

