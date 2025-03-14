import type { TimelineItem } from "@/types"

export const timelineData = {
  title: "My Journey",
  education: [
    {
      id: 1,
      title: "Master's in Robotics",
      organization: "University of Maryland, College Park",
      date: "2021 - 2023",
      description:
        "Specialized in autonomous systems and artificial intelligence. Thesis on 'Deep Reinforcement Learning for Robotic Manipulation Tasks'.",
      type: "education",
      logo: "/placeholder.svg?height=50&width=50",
      details: [
        {
          title: "Master's Thesis",
          description: "Deep Reinforcement Learning for Robotic Manipulation Tasks.",
        },
        {
          title: "Controls Course",
          description: "Advanced study of control systems for robotic applications.",
        },
        {
          title: "Computer Vision Course",
          description: "Comprehensive study of computer vision algorithms and applications in robotics.",
        },
        {
          title: "Rehab Robotics Course ENPM667",
          description: "Specialized course on rehabilitation robotics.",
        },
        {
          title: "Advanced Robotics Project",
          description: "Implemented a multi-agent collaborative robot system for warehouse automation.",
        },
        {
          title: "Computer Vision Research",
          description: "Researched 3D object recognition techniques for robotic pick-and-place tasks.",
        },
      ],
    },
    {
      id: 2,
      title: "Bachelor's in Electronics",
      organization: "Sathyabama University",
      date: "2016 - 2020",
      description: "Focused on algorithms, data structures, and machine learning fundamentals. Graduated with honors.",
      type: "education",
      logo: "/placeholder.svg?height=50&width=50",
      details: [
        {
          title: "Senior Project",
          description: "Developed an intelligent tutoring system using natural language processing.",
        },
        {
          title: "Database Management System",
          description: "Built a scalable database management system with transaction support.",
        },
        {
          title: "Mobile Application Development",
          description: "Created a cross-platform mobile app for campus navigation and event notifications.",
        },
      ],
    },
  ] as TimelineItem[],
  experience: [
    {
      id: 4,
      title: "Automation Engineer",
      organization: "Rivian",
      date: "2021 - Present",
      description:
        "Leading the development of autonomous robotic systems for industrial applications. Implementing machine learning algorithms for improved robot perception and decision-making.",
      type: "experience",
      logo: "/placeholder.svg?height=50&width=50",
      details: [
        {
          title: "Downtime Reduction Initiative",
          description:
            "Led a cross-functional team that reduced system downtime by 20% through predictive maintenance algorithms.",
        },
        {
          title: "Efficiency Optimization",
          description: "Increased overall production efficiency by 5% by optimizing robot path planning.",
        },
        {
          title: "Single Point Lessons (SPL) Program",
          description: "Created comprehensive SPL documentation for operators and maintenance staff.",
        },
        {
          title: "Autonomous Navigation System",
          description: "Developed a robust navigation system for warehouse robots.",
        },
        {
          title: "Machine Vision Pipeline",
          description:
            "Designed and implemented a real-time machine vision pipeline for detecting and classifying objects.",
        },
        {
          title: "Human-Robot Collaboration Framework",
          description:
            "Created a safety-first framework enabling robots to work alongside humans in manufacturing environments.",
        },
      ],
      gallery: {
        title: "Robotics Projects",
        images: [
          { src: "/placeholder.svg?height=200&width=300&text=Robot+Arm", alt: "Robot Arm Prototype" },
          { src: "/placeholder.svg?height=200&width=300&text=Navigation+System", alt: "Navigation System" },
          { src: "/placeholder.svg?height=200&width=300&text=Vision+System", alt: "Computer Vision System" },
          { src: "/placeholder.svg?height=200&width=300&text=Team+Collaboration", alt: "Team Collaboration" },
        ],
      },
    },
    {
      id: 5,
      title: "Software Eng. Intern",
      organization: "Stryker",
      date: "May 2022 - Aug 2022",
      description:
        "Developed and deployed machine learning models for computer vision applications. Collaborated with cross-functional teams to integrate AI solutions into existing products.",
      type: "experience",
      logo: "/placeholder.svg?height=50&width=50",
      details: [
        {
          title: "Retail Analytics Platform",
          description: "Built an AI-powered retail analytics platform.",
        },
        {
          title: "Natural Language Interface",
          description: "Developed a natural language interface for database querying.",
        },
        {
          title: "Predictive Maintenance System",
          description: "Implemented a predictive maintenance system for manufacturing equipment.",
        },
      ],
    },
    {
      id: 6,
      title: "Research Assistant",
      organization: "University of Maryland, CP",
      date: "Jan 2023 - May 2023",
      description: "Conducted research on reinforcement learning algorithms for robotic control systems.",
      type: "experience",
      logo: "/placeholder.svg?height=50&width=50",
      details: [
        {
          title: "Reinforcement Learning for Robotics",
          description:
            "Researched and implemented novel reinforcement learning approaches for complex robotic manipulation tasks.",
        },
        {
          title: "Simulation Environment Development",
          description:
            "Developed high-fidelity simulation environments for training and testing robotic control algorithms.",
        },
      ],
    },
  ] as TimelineItem[],
}

