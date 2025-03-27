/**
 * Project 8: Path Planning using Dijkstra Algorithm
 *
 * This file contains the basic information for the Path Planning using Dijkstra Algorithm project.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 8,
  title: "Path planning using Dijkstra Algorithm",
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
export const project8Markdown = `
# Project Insights

## Agenda

This project focuses on implementing and optimizing Dijkstra's algorithm for robot path planning in complex environments. The goal is to develop a reliable and efficient path planning system that can find optimal routes in various scenarios.

Key objectives include:
- Implementing an efficient version of Dijkstra's algorithm for grid-based maps
- Developing heuristics to improve performance in large environments
- Creating visualization tools for algorithm analysis and debugging
- Comparing performance with other path planning approaches
- Testing in simulated and real-world environments

## Technical Discussion

### System Architecture

The path planning system consists of several integrated components:

- **Map Representation**: Grid-based occupancy maps with configurable resolution
- **Dijkstra Algorithm**: Core implementation with priority queue optimization
- **Cost Function**: Configurable cost metrics for different terrain types
- **Path Smoothing**: Post-processing for natural robot motion
- **Visualization**: Real-time display of search progress and resulting paths

### Key Technologies

The project leverages several advanced technologies:

- **Priority Queue Implementation**: Optimized data structure for frontier management
- **Map Preprocessing**: Distance transforms and potential fields for improved performance
- **ROS Integration**: For seamless use with robot navigation stacks
- **Benchmarking Framework**: For systematic comparison with other algorithms
- **Visualization Tools**: For algorithm analysis and debugging

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. Implementation of basic Dijkstra algorithm
2. Optimization for large-scale environments
3. Integration with ROS navigation stack
4. Development of visualization and analysis tools
5. Benchmarking and comparison with other algorithms

### Key Challenges

#### Computational Efficiency
**Challenge**: Making Dijkstra's algorithm efficient enough for real-time planning in large environments.

**Solution**: Implemented an optimized priority queue and developed map preprocessing techniques to reduce the search space.

#### Handling Dynamic Obstacles
**Challenge**: Adapting paths when new obstacles are detected during execution.

**Solution**: Developed an incremental replanning approach that efficiently updates paths when changes are detected in the environment.

#### Path Quality
**Challenge**: Generating smooth, natural paths that robots can follow efficiently.

**Solution**: Implemented post-processing techniques including path pruning and B-spline smoothing to create more natural trajectories.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| Planning time (100x100 grid) | <10ms |
| Planning time (1000x1000 grid) | <500ms |
| Path optimality | 100% (guaranteed optimal) |
| Memory usage | Linear with map size |
| Success rate in cluttered environments | 100% |

### Future Improvements

Future work will focus on:

- Integration with hierarchical planning for very large environments
- Development of anytime variants for time-constrained scenarios
- Extension to 3D environments for aerial and underwater robots
- Implementation on embedded systems for standalone operation
- Incorporation of learning-based heuristics for improved performance
`

