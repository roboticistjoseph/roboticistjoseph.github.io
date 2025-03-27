/**
 * Project 1: Autonomous Drone Navigation
 *
 * This file contains the basic information for the Autonomous Drone Navigation project.
 * Detailed content is loaded from the README.md file.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 1,
  title: "Swarm Formation",
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
export const project1Markdown = `
# Project Insights

## Agenda

This project aims to develop a swarm formation system for autonomous drone navigation in GPS-denied environments. The system leverages computer vision and SLAM algorithms to enable drones to navigate safely and efficiently.

Key objectives include:
- Implementing real-time obstacle detection and avoidance
- Developing robust localization in GPS-denied environments
- Creating efficient path planning algorithms for swarm coordination
- Testing and validating the system in various environmental conditions

## Technical Discussion

### System Architecture

The system is built on ROS (Robot Operating System) with a modular architecture that allows for easy integration of different components. The architecture consists of:

- **Perception Module**: Uses stereo cameras and depth sensors to perceive the environment
- **Localization Module**: Implements SLAM (Simultaneous Localization and Mapping) for position tracking
- **Planning Module**: Uses a combination of global and local planning algorithms
- **Control Module**: Translates high-level commands into low-level control signals

### Key Technologies

We utilized several cutting-edge technologies in this project:

- **Computer Vision**: OpenCV for image processing and feature detection
- **SLAM**: ORB-SLAM2 with custom modifications for improved performance
- **Path Planning**: Hybrid approach combining global (A*) and local (Dynamic Window) planning
- **Swarm Coordination**: Custom algorithms for formation control and task allocation

## Challenges & Solutions

### Development Process

The project followed an iterative development approach:

1. Initial prototype with basic navigation capabilities
2. Integration of SLAM algorithms for improved localization
3. Development of obstacle avoidance mechanisms
4. Implementation of swarm coordination algorithms
5. Extensive testing and refinement

### Key Challenges

#### Limited Computational Resources
**Challenge**: Running complex SLAM algorithms on embedded hardware with limited processing power.

**Solution**: Optimized algorithms specifically for embedded systems and offloaded heavy computations to a ground station when possible.

#### Dynamic Environment Handling
**Challenge**: Maintaining accurate localization in changing environments with moving obstacles.

**Solution**: Implemented a multi-layered mapping approach with temporal filtering to distinguish between static and dynamic elements.

#### Inter-Drone Communication
**Challenge**: Ensuring reliable communication between drones in the swarm with minimal latency.

**Solution**: Developed a mesh network protocol with prioritized message passing and redundancy mechanisms.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| Localization accuracy | ±5cm |
| Obstacle detection range | 0.5-5m |
| Path planning time | <100ms |
| Maximum swarm size | 8 drones |
| Communication latency | <50ms |

### Future Improvements

Future work on this project will focus on:

- Integration with multi-drone swarm capabilities for complex missions
- Enhanced semantic understanding of the environment
- Implementation of deep reinforcement learning for adaptive behavior
- Improved energy efficiency for extended flight time
- Development of fault-tolerance mechanisms for robust operation
`

