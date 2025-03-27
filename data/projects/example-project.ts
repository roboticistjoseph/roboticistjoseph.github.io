import type { ProjectInfo } from "@/types"

const project: ProjectInfo = {
  id: 1,
  title: "Example Project",
  description: "This is an example project with inline content",
  mainImage: "/images/projects/example.jpg",
  category: "robotics",

  // Control whether to show project insights
  showInsights: true,

  // Project metadata
  metadata: {
    year: "2023",
    language: "Python, C++",
    tags: ["Robotics", "Computer Vision", "ROS"],
    status: "Published",
  },

  // Project links
  links: {
    github: "https://github.com/username/example-project",
    demo: "https://example.com/demo",
    documentation: "https://example.com/docs",
  },

  // Project gallery
  gallery: [
    {
      src: "/images/projects/example-1.jpg",
      alt: "Example image 1",
      caption: "This is an example image",
    },
    {
      src: "/images/projects/example-2.jpg",
      alt: "Example image 2",
      caption: "Another example image",
    },
  ],

  // Project content sections
  sections: {
    agenda: {
      title: "Agenda",
      description: "This project aims to develop a system for autonomous navigation.",
      bulletPoints: [
        "Implement real-time obstacle detection",
        "Develop robust localization system",
        "Create efficient path planning algorithm",
      ],
    },

    technical: {
      title: "Technical Discussion",
      subsections: [
        {
          title: "System Architecture",
          description: "The system is built on ROS with a modular architecture.",
          bulletPoints: [
            "Perception module using stereo cameras",
            "Localization module implementing SLAM",
            "Planning module with A* algorithm",
          ],
        },
        {
          title: "Key Technologies",
          description: "We used several cutting-edge technologies.",
          bulletPoints: [
            "Computer Vision: OpenCV for image processing",
            "SLAM: ORB-SLAM2 with custom modifications",
            "Path Planning: Hybrid approach combining global and local planning",
          ],
        },
      ],
    },

    challenges: {
      title: "Challenges & Solutions",
      subsections: [
        {
          title: "Development Process",
          description: "The project followed an iterative development approach.",
          orderedList: [
            "Initial prototype with basic navigation",
            "Integration of SLAM algorithms",
            "Development of obstacle avoidance",
          ],
        },
        {
          title: "Key Challenges",
          challenges: [
            {
              title: "Limited Computational Resources",
              challenge: "Running complex SLAM algorithms on embedded hardware.",
              solution: "Optimized algorithms for embedded systems and offloaded heavy computations.",
            },
            {
              title: "Dynamic Environment Handling",
              challenge: "Maintaining accurate localization in changing environments.",
              solution: "Implemented multi-layered mapping approach with temporal filtering.",
            },
          ],
        },
      ],
    },

    results: {
      title: "Results & Outcomes",
      subsections: [
        {
          title: "Performance Metrics",
          metrics: [
            { label: "Localization accuracy", value: "±5cm" },
            { label: "Obstacle detection range", value: "0.5-5m" },
            { label: "Path planning time", value: "<100ms" },
          ],
        },
        {
          title: "Future Improvements",
          bulletPoints: [
            "Integration with multi-drone swarm capabilities",
            "Enhanced semantic understanding of the environment",
            "Implementation of deep reinforcement learning",
          ],
        },
      ],
    },
  },
}

export default project

