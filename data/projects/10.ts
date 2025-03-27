/**
 * Project 10: Human Detection and PID Control in Soft Development
 *
 * This file contains the basic information for the Human Detection project.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 10,
  title: "Human Detection and PID control in SOft Development",
  description:
    "A system for autonomous drone navigation in GPS-denied environments using computer vision and SLAM algorithms.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035615/hero_backdrop_aymxo7.png",
  //demoVideo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742059079/about_r3wkqw.jpg", // URL to demo video (optional)
  category: "nav" as ProjectCategory, // Added category field

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
export const project10Markdown = `
# Project Insights

## Agenda

This project focuses on developing a system for human detection and tracking with PID control in soft robotics applications. The goal is to create a responsive and adaptive control system that can safely interact with humans while maintaining precise control.

Key objectives include:
- Implementing robust human detection and tracking algorithms
- Developing PID control systems for soft robotic actuators
- Creating safety mechanisms for human-robot interaction
- Testing the system in various environmental conditions
- Evaluating performance metrics for detection accuracy and control precision

## Technical Discussion

### System Architecture

The system consists of several integrated components:

- **Perception System**: Computer vision algorithms for human detection and tracking
- **Control System**: PID controllers for soft actuators with adaptive parameters
- **Safety Monitoring**: Real-time assessment of interaction safety
- **User Interface**: Visualization and configuration tools
- **Data Logging**: Recording and analysis of system performance

### Key Technologies

The project leverages several advanced technologies:

- **Deep Learning**: Convolutional neural networks for human detection and pose estimation
- **PID Control**: Proportional-Integral-Derivative control with gain scheduling
- **Soft Robotics**: Pneumatic or hydraulic soft actuators with compliant behavior
- **ROS Integration**: For modular system architecture and component communication
- **Real-time Processing**: Optimized algorithms for low-latency response

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. Implementation of human detection and tracking algorithms
2. Development of PID control systems for soft actuators
3. Integration of perception and control components
4. Implementation of safety mechanisms
5. Testing and performance evaluation

### Key Challenges

#### Robust Human Detection
**Challenge**: Reliably detecting and tracking humans in varying lighting conditions and partial occlusions.

**Solution**: Implemented a multi-stage detection pipeline combining deep learning models with temporal filtering and implemented data augmentation techniques to improve robustness.

#### Control of Soft Actuators
**Challenge**: Achieving precise control of inherently compliant and nonlinear soft actuators.

**Solution**: Developed adaptive PID controllers with gain scheduling based on actuator state and implemented model-based compensation for nonlinear behavior.

#### Real-time Performance
**Challenge**: Ensuring the entire system operates with low latency for responsive human interaction.

**Solution**: Optimized the perception pipeline using model compression techniques and implemented parallel processing for detection and control tasks.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| Human detection accuracy | 96% |
| Detection frame rate | 30 FPS |
| Control response time | <50ms |
| Position control accuracy | ±2mm |
| Safety incident rate | 0% |

### Future Improvements

Future work will focus on:

- Integration of more advanced human intention prediction
- Development of learning-based controllers for improved adaptation
- Extension to multi-human scenarios with prioritization
- Implementation of more sophisticated safety mechanisms
- Miniaturization of the system for portable applications
`

