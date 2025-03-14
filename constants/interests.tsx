import { BotIcon as Robot, Guitar, Camera, Palette, Plane, Dumbbell } from "lucide-react"
import type { Interest } from "@/types"

/**
 * Interests data
 * Contains all interests information displayed in the about section
 */
export const interests: Interest[] = [
  { name: "Building Robots", icon: <Robot className="h-8 w-8 text-yellow-500" /> },
  { name: "Guitar", icon: <Guitar className="h-8 w-8 text-yellow-500" /> },
  { name: "Photography", icon: <Camera className="h-8 w-8 text-yellow-500" /> },
  { name: "Art", icon: <Palette className="h-8 w-8 text-yellow-500" /> },
  { name: "Travelling", icon: <Plane className="h-8 w-8 text-yellow-500" /> },
  { name: "Gym", icon: <Dumbbell className="h-8 w-8 text-yellow-500" /> },
]

