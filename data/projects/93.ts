import type { ProjectInfo, ResearchPaper } from "@/types"

// Define research papers directly in the project file
export const project93Papers: ResearchPaper[] = [
  {
    title: "Voice Controlled Autonomous Rover Interfaced with Robotic Arm having Soft Gripper",
    authors: ["Joseph Pranadeer Reddy Katakam", "Dr. E. Logashanmugam"],
    publication: "Unpublished",
    year: "2020",
    abstract:
      "This Project focuses on developing a voice-controlled autonomous rover with an integrated robotic arm featuring a soft gripper. The system combines voice recognition technology with autonomous navigation capabilities, allowing for hands-free operation in various environments. The soft gripper design enables gentle manipulation of delicate objects while maintaining sufficient grip strength for practical applications.",
    links: {
      online: "-",
      pdf: "https://drive.google.com/file/d/18_96mOzFYzMAlQXoS_WVaZB3Xm0HqPk3/view?usp=sharing",
      doi: "-",
    },
  },
]

// Define markdown content for project insights
export const project93Markdown = `---
title: "Rover with Soft Gripper Robotic Arm"
description: "Deployed a miniature rover with robotic arm having a soft gripper to be functional for various utilities."
---

## Research Overview

This project explores the integration of voice control technology with autonomous navigation and soft robotics to create a versatile mobile manipulation platform. The system consists of a rover equipped with a robotic arm featuring a soft gripper, capable of responding to voice commands for various tasks.

## System Architecture

### Hardware Components

The rover system integrates several key hardware components:

- **Mobile Base**: Custom-designed 4-wheel drive platform with differential steering
- **Robotic Arm**: 5-DOF manipulator with servo motors at each joint
- **Soft Gripper**: Pneumatically actuated gripper made from flexible silicone
- **Voice Recognition Module**: Microphone array with noise cancellation
- **Sensors**: Ultrasonic sensors, IMU, encoders, and camera
- **Control Unit**: Raspberry Pi for high-level control and Arduino for low-level motor control

### Software Architecture

The software architecture follows a modular design:

- **Voice Command Processing**: Speech-to-text conversion and command interpretation
- **Navigation System**: Path planning, obstacle avoidance, and localization
- **Arm Control**: Inverse kinematics solver for arm positioning
- **Gripper Control**: Pressure regulation for adaptive grasping
- **Task Coordination**: High-level state machine for coordinating system components

## Key Innovations

### Soft Gripper Design

The soft gripper represents a significant innovation in this project:

- Fabricated using silicone molding techniques
- Pneumatic actuation for gentle, adaptive grasping
- Capable of handling objects of various shapes and fragility
- Integrated pressure sensors for force feedback
- Modular design for easy replacement and maintenance

### Voice Control Interface

The voice control system offers intuitive human-robot interaction:

- Recognizes commands in noisy environments
- Supports a vocabulary of over 30 command phrases
- Provides verbal feedback for command confirmation
- Allows for continuous operation without manual intervention
- Includes emergency stop commands for safety

## Applications

This integrated system has potential applications in:

- Assistive technology for individuals with mobility limitations
- Remote inspection and manipulation in hazardous environments
- Educational platforms for robotics and AI learning
- Light-duty material handling in warehouse settings
- Research platforms for human-robot interaction studies

## Future Directions

Future work on this project will focus on:

- Expanding the manipulation capabilities with more sophisticated control algorithms
- Implementing machine learning for improved object recognition and grasping
- Enhancing the voice control system with natural language understanding
- Developing multi-robot coordination for collaborative tasks
- Miniaturizing components for increased mobility and dexterity
`

const project: ProjectInfo = {
  id: 93,
  title: "Rover with Soft Gripper Robotic Arm",
  description:
    "Deployed a miniature rover with robotic arm having a soft gripper to be functional for various utilities.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742918703/Aria_cover_zbsgph.webp",
  category: "research",

  // Show project insights for this research project
  showInsights: true,

  metadata: {
    year: "2020",
    language: "Python",
    tags: ["Rover", "Robotic Arm", "Rocker-Bogie Mech", "Object Detection", "Soft Gripper"],
    status: "Unpublished",
  },

  links: {
    github: "https://github.com/yourusername/advanced-robotics",
    demo: "/projects/93",
    documentation: "https://example.com/robotics-research91",
  },

  // Empty gallery since we're using papers instead
  gallery: [],
}

export default project

