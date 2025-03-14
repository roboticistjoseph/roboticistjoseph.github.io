import { Code, BotIcon as Robot, Cpu, GitBranch, Monitor } from "lucide-react"
import type { Skill } from "@/types"

export const skillsData = {
  title: "Technical Skills",
  subtitle: "Here are some of my skills that I've been working on over the years",
  skills: [
    {
      name: "Programming",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      items: ["C", "C++", "Python", "ABB", "Shell", "MAKE file"],
    },
    {
      name: "Software",
      icon: <Monitor className="w-6 h-6 text-green-400" />,
      items: ["Linux", "Git", "Perforce", "VSCode", "Cursor", "Qt creator", "RobotStudio", "RobView"],
    },
    {
      name: "Robotics",
      icon: <Robot className="w-6 h-6 text-purple-400" />,
      items: [
        "ROS2",
        "Gazebo Sim",
        "RViz",
        "MoveIt",
        "Kinematics",
        "Dynamics",
        "Linear Algebra",
        "Computer Vision",
        "Path planning",
      ],
    },
    {
      name: "Hardware",
      icon: <Cpu className="w-6 h-6 text-red-400" />,
      items: ["Arduino", "Raspberry Pi", "Kilobots", "3D printing", "Autonomous Rovers"],
    },
    {
      name: "Development",
      icon: <GitBranch className="w-6 h-6 text-yellow-400" />,
      items: [
        "SDLC",
        "Agile Methodology",
        "JIRA",
        "Scrum Teams",
        "Unit Testing",
        "UML",
        "LaTeX Documentation",
        "Production level coding",
      ],
    },
  ] as Skill[],
}

