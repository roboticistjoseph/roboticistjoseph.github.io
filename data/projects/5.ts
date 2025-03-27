/**
 * Project 5: Rehab Robotics
 *
 * This file contains the basic information for the Rehab Robotics project.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 5,
  title: "Rehab Robotics",
  description:
    "A system for autonomous drone navigation in GPS-denied environments using computer vision and SLAM algorithms.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035615/hero_backdrop_aymxo7.png",
  //demoVideo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742059079/about_r3wkqw.jpg", // URL to demo video (optional)
  category: "controls" as ProjectCategory, // Added category field

  // Control whether to show project insights
  showInsights: true,

  // Project metadata
  metadata: {
    year: "June 2022",
    language: "Python",
    tags: ["Computer Vision", "ROS", "Python", "SLAM"],
    status: "Published", // Optional status field
  },

  // Project links
  links: {
    github: "https://github.com/yourusername/drone-navigation",
    documentation: "https://docs.example.com/drone-navigation", // Changed from demo to documentation
  },

  // Project gallery
  gallery: [
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/drone-prototype",
      alt: "Initial prototype testing",
      caption: "Testing the drone's navigation capabilities in a controlled environment",
    },
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/slam-visualization",
      alt: "SLAM implementation",
      caption: "Visualizing the SLAM algorithm mapping an indoor space in real-time",
    },
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/obstacle-course",
      alt: "Obstacle course setup",
      caption: "Complex obstacle course used for validating avoidance algorithms",
    },
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/hardware-assembly",
      alt: "Hardware assembly",
      caption: "Assembling the custom sensor package for improved environmental awareness",
    },
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/software-development",
      alt: "Software development",
      caption: "Developing the control software with ROS integration",
    },
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/field-testing",
      alt: "Field testing",
      caption: "Field testing in a warehouse environment with dynamic obstacles",
    },
  ],
}

export default project

// Export markdown content for project insights
export const project5Markdown = `
# Project Insights

## Agenda

This project focuses on developing robotic systems for rehabilitation applications. The goal is to create assistive devices that can help patients recover from injuries or manage chronic conditions through guided physical therapy.

Key objectives include:
- Designing ergonomic and safe robotic interfaces for patient interaction
- Implementing adaptive control strategies for personalized therapy
- Developing intuitive user interfaces for therapists and patients
- Validating the system through clinical testing and feedback

## Technical Discussion

### System Architecture

The rehabilitation robotics system consists of several integrated components:

- **Mechanical Design**: Ergonomic and safe physical interface with adjustable parameters
- **Sensing System**: Force/torque sensors and motion tracking for patient monitoring
- **Control System**: Adaptive controllers for assistance and resistance
- **User Interface**: Intuitive interfaces for therapists to configure and monitor sessions
- **Patient Feedback**: Visual and haptic feedback mechanisms for patient guidance

### Key Technologies

The project leverages several advanced technologies:

- **Impedance Control**: For safe and compliant human-robot interaction
- **Adaptive Control**: To adjust assistance levels based on patient performance
- **Biomechanical Modeling**: For understanding and optimizing therapeutic movements
- **Machine Learning**: For personalization and progress tracking
- **Gamification**: To increase patient engagement and motivation

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. Requirements gathering with physical therapists and patients
2. Mechanical design and prototyping of the rehabilitation device
3. Implementation of control algorithms and safety features
4. Development of user interfaces and therapy protocols
5. Clinical testing and iterative refinement

### Key Challenges

#### Safety Considerations
**Challenge**: Ensuring absolute safety during human-robot interaction in a therapeutic context.

**Solution**: Implemented multi-layered safety systems including mechanical compliance, force limiting, velocity monitoring, and emergency stop mechanisms.

#### Personalized Therapy
**Challenge**: Adapting the system to individual patient needs and capabilities.

**Solution**: Developed an adaptive control framework that adjusts assistance levels based on real-time performance metrics and learning algorithms that track progress over time.

#### User Acceptance
**Challenge**: Creating a system that is accepted by both therapists and patients.

**Solution**: Conducted extensive user studies throughout the development process and incorporated feedback into the design, resulting in intuitive interfaces and comfortable interaction.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| Range of motion accuracy | <1° |
| Force control precision | ±0.5N |
| Setup time | <5 minutes |
| Patient satisfaction | 4.7/5 |
| Therapist adoption rate | 85% |

### Future Improvements

Future work will focus on:

- Integration with telerehabilitation capabilities for remote therapy
- Development of more advanced adaptive algorithms based on patient progress
- Expansion to additional therapy protocols and body regions
- Implementation of more engaging feedback mechanisms and gamification
- Miniaturization and cost reduction for home use
`

