/**
 * Project 9: Path Planning using A Star Algorithm
 *
 * This file contains the basic information for the Path Planning using A Star Algorithm project.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 9,
  title: "Path planning using A Star Algorithm",
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
export const project9Markdown = `
# Project Insights

## Agenda

This project focuses on implementing and optimizing the A* (A-Star) algorithm for robot path planning. The goal is to develop an efficient path planning system that can find optimal or near-optimal paths while exploring fewer nodes than uninformed search algorithms.

Key objectives include:
- Implementing an efficient A* algorithm with various heuristic functions
- Comparing performance with Dijkstra and other path planning approaches
- Developing adaptive heuristics for different environment types
- Creating visualization tools for algorithm analysis
- Testing in simulated and real-world environments

## Technical Discussion

### System Architecture

The A* path planning system consists of several integrated components:

- **Map Representation**: Grid-based and graph-based environment representations
- **A* Algorithm**: Core implementation with priority queue and various optimizations
- **Heuristic Functions**: Multiple distance metrics (Euclidean, Manhattan, Diagonal)
- **Path Smoothing**: Post-processing for natural robot motion
- **Visualization**: Real-time display of search progress and resulting paths

### Key Technologies

The project leverages several advanced technologies:

- **Heuristic Design**: Carefully crafted admissible heuristics for optimal performance
- **Priority Queue**: Optimized implementation for efficient node expansion
- **Incremental Search**: Techniques for efficiently updating paths when the environment changes
- **ROS Integration**: For seamless use with robot navigation stacks
- **Benchmarking Framework**: For systematic comparison with other algorithms

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. Implementation of basic A* algorithm with simple heuristics
2. Development and testing of advanced heuristics
3. Optimization for large-scale environments
4. Integration with ROS navigation stack
5. Comparative analysis with other path planning algorithms

### Key Challenges

#### Heuristic Selection
**Challenge**: Designing heuristics that are both admissible (never overestimate) and effective at reducing the search space.

**Solution**: Implemented and tested multiple heuristics, including environment-specific ones that leverage knowledge of the terrain while maintaining admissibility.

#### Computational Efficiency
**Challenge**: Making A* efficient enough for real-time planning in large or complex environments.

**Solution**: Developed optimized data structures, implemented tie-breaking strategies, and created hierarchical planning approaches for large maps.

#### Path Quality
**Challenge**: Generating paths that are not just optimal in length but also smooth and natural for robot execution.

**Solution**: Implemented post-processing techniques including path pruning, corner smoothing, and B-spline fitting while maintaining obstacle clearance.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| Planning time (100x100 grid) | <5ms |
| Planning time (1000x1000 grid) | <200ms |
| Nodes explored vs. Dijkstra | 75% reduction |
| Path optimality | 100% with admissible heuristics |
| Memory usage | 40% less than Dijkstra |

### Future Improvements

Future work will focus on:

- Implementation of variants like Weighted A* and Anytime A* for time-constrained scenarios
- Development of learning-based heuristics that adapt to environment characteristics
- Extension to dynamic environments with moving obstacles
- Integration with sampling-based planners for high-dimensional configuration spaces
- Implementation on embedded systems for resource-constrained platforms
`

