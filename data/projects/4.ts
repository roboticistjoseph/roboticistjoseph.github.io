/**
 * Project 4: State Space Estimation for Inverted Pendulum
 *
 * This file contains the basic information for the State Space Estimation project.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 4,
  title: "State space Estimation for Inverted Pendulum",
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
export const project4Markdown = `
# Project Insights

## Agenda

This project focuses on developing state space estimation techniques for an inverted pendulum system. The goal is to accurately estimate the full state of the system in real-time to enable robust control.

Key objectives include:
- Implementing various state estimation algorithms (Kalman Filter, Extended Kalman Filter, Particle Filter)
- Comparing performance across different estimation techniques
- Developing a robust sensor fusion approach
- Testing the estimators in both simulation and hardware implementation

## Technical Discussion

### System Architecture

The state estimation system consists of several components:

- **Sensor Interface**: Processes raw sensor data from encoders, IMUs, and cameras
- **State Estimators**: Implements various filtering algorithms
- **System Model**: Mathematical representation of the inverted pendulum dynamics
- **Visualization**: Real-time display of estimated states and uncertainties

### Key Technologies

The project leverages several advanced technologies:

- **Kalman Filtering**: For optimal state estimation under Gaussian noise assumptions
- **Extended Kalman Filter**: For handling nonlinear system dynamics
- **Particle Filter**: For non-Gaussian noise and highly nonlinear systems
- **Sensor Fusion**: Combining multiple sensor inputs for improved estimation
- **Real-time Implementation**: Optimized algorithms for high-frequency execution

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. Mathematical modeling of the inverted pendulum system
2. Implementation of various state estimation algorithms
3. Simulation testing and parameter tuning
4. Hardware integration and real-time implementation
5. Comparative analysis and performance evaluation

### Key Challenges

#### Nonlinear Dynamics
**Challenge**: Accurately modeling and estimating states for the highly nonlinear inverted pendulum system.

**Solution**: Implemented advanced nonlinear estimation techniques (EKF, UKF, and particle filters) and carefully tuned process and measurement noise parameters.

#### Sensor Noise and Bias
**Challenge**: Dealing with noisy sensor measurements and sensor bias.

**Solution**: Developed comprehensive sensor models including noise characteristics and implemented bias estimation as part of the state vector.

#### Real-time Performance
**Challenge**: Ensuring estimation algorithms run in real-time at sufficient frequency.

**Solution**: Optimized implementation using efficient matrix operations and algorithm simplifications where appropriate without sacrificing accuracy.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| State estimation accuracy | <1° angle, <2mm position |
| Update frequency | 200Hz |
| Convergence time | <0.5 seconds |
| Robustness to disturbances | High |
| CPU utilization | <15% on embedded platform |

### Future Improvements

Future work will focus on:

- Implementation of more advanced estimation techniques (Unscented Kalman Filter, Moving Horizon Estimation)
- Extension to more complex systems (double pendulum, flexible pendulum)
- Integration with learning-based approaches for improved performance
- Development of adaptive estimation techniques for changing system parameters
- Implementation on low-cost microcontrollers for educational applications
`

