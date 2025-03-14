import { Github, Linkedin, Mail } from "lucide-react"
import type { SocialLink } from "@/types"

/**
 * Social media links
 * Contains all social media information displayed in the contact section
 */
export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:contact@example.com",
    icon: <Mail className="w-8 h-8 text-yellow-500" />,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: <Github className="w-8 h-8 text-yellow-500" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <Linkedin className="w-8 h-8 text-yellow-500" />,
  },
]

