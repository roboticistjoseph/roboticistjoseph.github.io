/**
 * Project 7: Plan Path by Painting
 *
 * This file contains the basic information for the Plan Path by Painting project.
 */

import type { ProjectInfo, ProjectCategory } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 7,
  title: "Plan path by painting",
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
export const project7Markdown = `
# Project Insights

## Agenda

This project introduces an intuitive interface for robot path planning through a painting metaphor. Users can "paint" paths and areas on a map, which are then translated into navigation commands for robots.

Key objectives include:
- Developing an intuitive painting interface for non-expert users
- Creating algorithms to translate painted paths into optimal robot trajectories
- Implementing real-time feedback mechanisms during execution
- Testing the system with users of varying technical backgrounds

## Technical Discussion

### System Architecture

The Plan Path by Painting system consists of several integrated components:

- **User Interface**: Touch or mouse-based painting interface with map visualization
- **Path Processor**: Algorithms to convert painted strokes into waypoints and trajectories
- **Constraint Handler**: Ensures paths respect robot kinematic constraints and environment
- **Execution Monitor**: Provides feedback during robot navigation and handles deviations
- **Map Manager**: Maintains and updates environmental maps for planning

### Key Technologies

The project leverages several advanced technologies:

- **Path Smoothing**: B-spline and Bézier curves for natural trajectory generation
- **Obstacle Avoidance**: Dynamic replanning when obstacles are encountered
- **User Experience Design**: Intuitive interfaces with appropriate visual feedback
- **ROS Integration**: For communication with robot navigation systems
- **Map Representation**: Occupancy grid and costmap integration

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. User interface design and usability testing
2. Implementation of path processing algorithms
3. Integration with robot navigation stack
4. Development of feedback mechanisms
5. User testing and iterative refinement

### Key Challenges

#### Intuitive Path Specification
**Challenge**: Creating an interface that allows non-experts to specify complex paths easily.

**Solution**: Developed a multi-layer painting approach with different brush types for paths, areas to avoid, and areas to cover, with real-time visual feedback.

#### Path Optimization
**Challenge**: Converting rough painted paths into efficient robot trajectories.

**Solution**: Implemented a multi-stage processing pipeline that smooths paths, respects kinematic constraints, and optimizes for efficiency while maintaining user intent.

#### Real-time Adaptation
**Challenge**: Handling unexpected obstacles and changes during execution.

**Solution**: Developed a dynamic replanning system that modifies paths on-the-fly while preserving the overall intent of the painted route.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| User learning time | <5 minutes |
| Path creation time | 75% reduction vs. traditional methods |
| Path execution success | 94% |
| User satisfaction | 4.8/5 |
| Path optimality | 85% compared to expert-designed paths |

### Future Improvements

Future work will focus on:

- Integration with augmented reality for in-situ path painting
- Multi-robot coordination through painted task allocation
- Learning from demonstration to improve path processing
- Enhanced semantic understanding of user intent
- Extension to 3D environments for aerial and climbing robots
`

