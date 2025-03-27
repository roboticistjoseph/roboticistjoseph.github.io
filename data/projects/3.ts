/**
 * Project 3: Calibrating Robotic Arm using Computer Vision
 *
 * This file contains the basic information for the Calibrating Robotic Arm project.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 3,
  title: "Calibrating Robotic Arm using Computer Vision",
  description:
    "A system for autonomous drone navigation in GPS-denied environments using computer vision and SLAM algorithms.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035615/hero_backdrop_aymxo7.png",
  //demoVideo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742059079/about_r3wkqw.jpg", // URL to demo video (optional)
  category: "modelling" as ProjectCategory, // Added category field

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
export const project3Markdown = `
# Project Insights

## Agenda

This project focuses on developing an automated calibration system for robotic arms using computer vision techniques. The goal is to improve accuracy and reduce the time required for calibration compared to traditional methods.

Key objectives include:
- Implementing a vision-based system for detecting calibration targets
- Developing algorithms for estimating kinematic parameters
- Creating a user-friendly calibration workflow
- Validating the system on different robotic arm configurations

## Technical Discussion

### System Architecture

The calibration system consists of several integrated components:

- **Vision System**: Cameras and image processing algorithms for target detection
- **Calibration Algorithm**: Mathematical methods for parameter estimation
- **Robot Interface**: Communication with the robot controller
- **User Interface**: Guides the user through the calibration process

### Key Technologies

The project leverages several advanced technologies:

- **Computer Vision**: OpenCV for image processing and feature detection
- **Camera Calibration**: Zhang's method for intrinsic and extrinsic parameters
- **Kinematic Calibration**: Least squares optimization for parameter estimation
- **ROS Integration**: For communication with the robot and visualization

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. Design and fabrication of calibration targets
2. Implementation of vision algorithms for target detection
3. Development of kinematic parameter estimation methods
4. Integration with robot control system
5. Testing and validation on different robot configurations

### Key Challenges

#### Accurate Target Detection
**Challenge**: Reliably detecting calibration targets under varying lighting conditions.

**Solution**: Implemented robust detection algorithms with adaptive thresholding and implemented controlled lighting conditions for the calibration environment.

#### Parameter Convergence
**Challenge**: Ensuring convergence of the optimization algorithm to accurate parameter values.

**Solution**: Developed a multi-stage optimization approach with careful initialization and constraints based on physical limitations.

#### Validation Methodology
**Challenge**: Quantifying the improvement in accuracy after calibration.

**Solution**: Created a comprehensive validation protocol using high-precision measurement equipment and statistical analysis of repeatability.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| Calibration time | <30 minutes |
| Position accuracy improvement | 65% |
| Orientation accuracy improvement | 40% |
| Repeatability | ±0.2mm |
| Success rate | >95% |

### Future Improvements

Future work will focus on:

- Integration with online calibration for continuous parameter adjustment
- Extension to multi-arm systems and collaborative robots
- Development of more efficient algorithms for real-time calibration
- Implementation of self-calibration capabilities without external targets
- Creation of a more intuitive user interface for non-expert users
`

