/**
 * Project 6: ARIA
 *
 * This file contains the basic information for the ARIA project.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 6,
  title: "ARIA",
  description:
    "A system for autonomous drone navigation in GPS-denied environments using computer vision and SLAM algorithms.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035615/hero_backdrop_aymxo7.png",
  //demoVideo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742059079/about_r3wkqw.jpg", // URL to demo video (optional)
  category: "robotics" as ProjectCategory, // Added category field

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
export const project6Markdown = `
# Project Insights

## Agenda

ARIA (Autonomous Robotic Interactive Assistant) is a project focused on developing a versatile robotic platform for human-robot interaction in everyday environments. The system combines advanced perception, navigation, and interaction capabilities.

Key objectives include:
- Implementing robust perception systems for human and object recognition
- Developing natural language understanding and generation capabilities
- Creating intuitive interaction modalities for non-expert users
- Testing the system in real-world environments with diverse user groups

## Technical Discussion

### System Architecture

The ARIA system consists of several integrated components:

- **Perception System**: Computer vision and sensor fusion for environment understanding
- **Navigation System**: Path planning and obstacle avoidance for safe movement
- **Interaction System**: Speech recognition, natural language processing, and gesture recognition
- **Task Planning**: High-level reasoning and task execution
- **User Interface**: Multimodal interaction through speech, touch, and visual feedback

### Key Technologies

The project leverages several advanced technologies:

- **Computer Vision**: Deep learning-based object and person detection
- **SLAM**: Real-time mapping and localization for navigation
- **Natural Language Processing**: Intent recognition and contextual understanding
- **Reinforcement Learning**: For adaptive behavior in human interactions
- **ROS Integration**: For modular system architecture and component communication

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. Platform selection and hardware integration
2. Implementation of core perception and navigation capabilities
3. Development of interaction modalities and user interfaces
4. Integration of task planning and execution framework
5. User testing and iterative refinement

### Key Challenges

#### Robust Human Interaction
**Challenge**: Creating natural and intuitive interaction that works reliably in diverse environments.

**Solution**: Implemented multimodal interaction combining speech, vision, and touch interfaces with context-aware processing to handle ambiguity.

#### Navigation in Dynamic Environments
**Challenge**: Safely navigating in environments with moving people and changing obstacles.

**Solution**: Developed a predictive navigation system that anticipates human movement patterns and dynamically adjusts paths while maintaining social navigation norms.

#### System Integration
**Challenge**: Integrating multiple complex subsystems into a cohesive and responsive platform.

**Solution**: Adopted a modular architecture with well-defined interfaces and implemented a hierarchical control structure with appropriate fallback behaviors.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| Speech recognition accuracy | 92% |
| Object recognition accuracy | 95% |
| Navigation success rate | 98% |
| Task completion rate | 87% |
| User satisfaction | 4.5/5 |

### Future Improvements

Future work will focus on:

- Enhanced learning capabilities for personalization to individual users
- Improved emotional intelligence and social awareness
- More sophisticated task planning for complex multi-step activities
- Better handling of edge cases and unexpected situations
- Expanded domain knowledge for specialized applications
`

