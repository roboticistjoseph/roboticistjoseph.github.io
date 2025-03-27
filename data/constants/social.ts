import { Github, Linkedin, Mail } from "lucide-react"
import type { SocialLink } from "@/types"

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "jkatak73@terpmail.umd.edu",
    icon: <Mail className="w-8 h-8 text-yellow-500" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/roboticistjoseph",
    icon: <Github className="w-8 h-8 text-yellow-500" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/josephkatakam/",
    icon: <Linkedin className="w-8 h-8 text-yellow-500" />,
  },
]

