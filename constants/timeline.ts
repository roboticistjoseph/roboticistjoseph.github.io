import type { TimelineItem } from "@/types"

/**
 * Education timeline data
 * Contains all education information displayed in the timeline section
 */
export const educationData: TimelineItem[] = [
  {
    id: 1,
    title: "Master's in Robotics",
    organization: "Tech University",
    date: "2017 - 2019",
    description:
      "Specialized in autonomous systems and artificial intelligence. Thesis on 'Deep Reinforcement Learning for Robotic Manipulation Tasks'.",
    type: "education",
    logo: "/placeholder.svg?height=50&width=50",
    details: [
      {
        title: "Master's Thesis",
        description:
          "Deep Reinforcement Learning for Robotic Manipulation Tasks. Developed novel algorithms for robotic grasping with 92% success rate.",
        technologies: ["Python", "PyTorch", "ROS", "Gazebo"],
        link: "#thesis-project",
      },
      {
        title: "Controls Course",
        description:
          "Advanced study of control systems for robotic applications, including PID controllers, state-space methods, and adaptive control.",
        technologies: ["MATLAB", "Control Theory", "Simulation"],
      },
      {
        title: "Computer Vision Course",
        description:
          "Comprehensive study of computer vision algorithms and applications in robotics, including object detection and tracking.",
        technologies: ["OpenCV", "Python", "Deep Learning"],
      },
      {
        title: "Rehab Robotics Course ENPM667",
        description:
          "Specialized course on rehabilitation robotics, focusing on assistive devices and human-robot interaction for therapeutic applications.",
        technologies: ["Biomechanics", "Sensor Integration", "Human Factors"],
      },
      {
        title: "Advanced Robotics Project",
        description:
          "Implemented a multi-agent collaborative robot system for warehouse automation using distributed reinforcement learning.",
        technologies: ["C++", "TensorFlow", "MATLAB"],
      },
      {
        title: "Computer Vision Research",
        description:
          "Researched 3D object recognition techniques for robotic pick-and-place tasks in cluttered environments.",
        technologies: ["OpenCV", "PCL", "Python"],
      },
    ],
  },
  {
    id: 2,
    title: "Bachelor's in Computer Science",
    organization: "State University",
    date: "2013 - 2017",
    description: "Focused on algorithms, data structures, and machine learning fundamentals. Graduated with honors.",
    type: "education",
    logo: "/placeholder.svg?height=50&width=50",
    details: [
      {
        title: "Senior Project",
        description:
          "Developed an intelligent tutoring system using natural language processing to provide personalized learning experiences.",
        technologies: ["Java", "NLP", "Machine Learning"],
        link: "#senior-project",
      },
      {
        title: "Database Management System",
        description:
          "Built a scalable database management system with transaction support and optimized query processing.",
        technologies: ["SQL", "C++", "Data Structures"],
      },
      {
        title: "Mobile Application Development",
        description:
          "Created a cross-platform mobile app for campus navigation and event notifications with over 5,000 downloads.",
        technologies: ["React Native", "Firebase", "JavaScript"],
      },
    ],
  },
  {
    id: 3,
    title: "Certification in AI",
    organization: "Online Academy",
    date: "2016",
    description: "Comprehensive training in artificial intelligence fundamentals and applications.",
    type: "education",
    logo: "/placeholder.svg?height=50&width=50",
    details: [
      {
        title: "Capstone Project",
        description:
          "Implemented a facial recognition system with emotion detection for enhanced human-computer interaction.",
        technologies: ["Python", "TensorFlow", "OpenCV"],
      },
      {
        title: "Machine Learning Models",
        description:
          "Developed and compared different machine learning models for predictive maintenance in industrial equipment.",
        technologies: ["Scikit-learn", "Pandas", "NumPy"],
      },
    ],
  },
]

/**
 * Experience timeline data
 * Contains all work experience information displayed in the timeline section
 */
export const experienceData: TimelineItem[] = [
  {
    id: 4,
    title: "Robotics Engineer",
    organization: "Tech Innovations Inc.",
    date: "2021 - Present",
    description:
      "Leading the development of autonomous robotic systems for industrial applications. Implementing machine learning algorithms for improved robot perception and decision-making.",
    type: "experience",
    logo: "/placeholder.svg?height=50&width=50",
    details: [
      {
        title: "Downtime Reduction Initiative",
        description:
          "Led a cross-functional team that reduced system downtime by 20% through predictive maintenance algorithms and improved error handling.",
        technologies: ["Predictive Analytics", "IoT", "System Monitoring"],
      },
      {
        title: "Efficiency Optimization",
        description:
          "Increased overall production efficiency by 5% by optimizing robot path planning and implementing dynamic task allocation.",
        technologies: ["Path Planning", "Optimization Algorithms", "Performance Analysis"],
      },
      {
        title: "Single Point Lessons (SPL) Program",
        description:
          "Created comprehensive SPL documentation for operators and maintenance staff, improving knowledge transfer and reducing training time.",
        technologies: ["Technical Documentation", "Training", "Knowledge Management"],
      },
      {
        title: "Autonomous Navigation System",
        description:
          "Developed a robust navigation system for warehouse robots that reduced collision incidents by 95% and improved efficiency by 30%.",
        technologies: ["ROS2", "C++", "SLAM", "TensorFlow"],
        link: "#navigation-project",
      },
      {
        title: "Machine Vision Pipeline",
        description:
          "Designed and implemented a real-time machine vision pipeline for detecting and classifying objects on assembly lines with 99.7% accuracy.",
        technologies: ["CUDA", "Python", "OpenCV", "PyTorch"],
      },
      {
        title: "Human-Robot Collaboration Framework",
        description:
          "Created a safety-first framework enabling robots to work alongside humans in manufacturing environments.",
        technologies: ["ROS", "C++", "Sensor Fusion", "Safety Protocols"],
      },
    ],
  },
  {
    id: 5,
    title: "AI Developer",
    organization: "Future AI Labs",
    date: "2019 - 2021",
    description:
      "Developed and deployed machine learning models for computer vision applications. Collaborated with cross-functional teams to integrate AI solutions into existing products.",
    type: "experience",
    logo: "/placeholder.svg?height=50&width=50",
    details: [
      {
        title: "Retail Analytics Platform",
        description:
          "Built an AI-powered retail analytics platform that provided insights on customer behavior and product placement effectiveness.",
        technologies: ["PyTorch", "Python", "AWS", "Computer Vision"],
        link: "#retail-analytics",
      },
      {
        title: "Natural Language Interface",
        description:
          "Developed a natural language interface for database querying that improved data accessibility for non-technical users.",
        technologies: ["NLP", "BERT", "Flask", "PostgreSQL"],
      },
      {
        title: "Predictive Maintenance System",
        description:
          "Implemented a predictive maintenance system for manufacturing equipment that reduced downtime by 45%.",
        technologies: ["Time Series Analysis", "Python", "TensorFlow", "IoT"],
      },
    ],
  },
  {
    id: 6,
    title: "Research Assistant",
    organization: "Tech University",
    date: "2017 - 2019",
    description: "Conducted research on reinforcement learning algorithms for robotic control systems.",
    type: "experience",
    logo: "/placeholder.svg?height=50&width=50",
    details: [
      {
        title: "Reinforcement Learning for Robotics",
        description:
          "Researched and implemented novel reinforcement learning approaches for complex robotic manipulation tasks.",
        technologies: ["Python", "TensorFlow", "ROS", "MATLAB"],
        link: "#rl-robotics",
      },
      {
        title: "Simulation Environment Development",
        description:
          "Developed high-fidelity simulation environments for training and testing robotic control algorithms.",
        technologies: ["Gazebo", "Unity", "C++", "Python"],
      },
    ],
  },
]

