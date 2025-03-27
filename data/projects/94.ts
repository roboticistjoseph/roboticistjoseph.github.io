import type { ProjectInfo, ResearchPaper } from "@/types"

// Define research papers directly in the project file
export const project94Papers: ResearchPaper[] = [
  {
    title: "Path Planning by drawing path on Map in Static Environment",
    authors: ["Joseph Pranadeer Reddy Katakam", "Dr. E. Logashanmugam"],
    publication: "-",
    year: "2021",
    abstract:
      "This approach allows the desired path following by a mobile robot to be in user's control. The system uses computer vision techniques to detect and interpret paths drawn on a map, translating them into navigation instructions for the robot. This intuitive interface enables non-technical users to easily program complex robot movements without requiring specialized knowledge of robotics or programming.",
    links: {
      online: "-",
      pdf: "https://drive.google.com/file/d/1Qef97rakqfDpWffeVN9nHrox1LhCgs57/view?usp=sharing",
      doi: "-",
    },
  },
]

// Define markdown content for project insights
export const project94Markdown = `---
title: "Path Planning by drawing a Map"
description: "This approach allows the desired path following by a mobile robot to be in user's control."
---

## Research Overview

This project introduces an intuitive approach to robot path planning that allows users to simply draw the desired path on a map. By leveraging computer vision techniques, the system interprets hand-drawn paths and translates them into navigation instructions for mobile robots, making robot programming accessible to non-technical users.

## Methodology

### System Architecture

The system consists of several integrated components:

- **Input Interface**: Physical map with drawing capability or digital touchscreen
- **Vision System**: Camera for capturing the drawn path
- **Image Processing Pipeline**: Algorithms for path extraction and processing
- **Path Conversion**: Translation of visual path to robot coordinates
- **Navigation Controller**: Robot control system for following the extracted path

### Image Processing Workflow

The image processing pipeline follows these steps:

1. **Image Acquisition**: Capturing the map with the drawn path
2. **Preprocessing**: Noise reduction, contrast enhancement, and perspective correction
3. **Path Extraction**: Edge detection and contour analysis to identify the drawn line
4. **Path Simplification**: Reducing the path to essential waypoints
5. **Coordinate Transformation**: Converting image coordinates to robot's coordinate system

## Key Features

### User-Friendly Interface

The system prioritizes ease of use:

- No programming knowledge required
- Intuitive drawing interface
- Real-time visual feedback
- Ability to modify paths by redrawing
- Support for multiple path segments and waypoints

### Robust Path Extraction

The path extraction algorithm handles various drawing styles:

- Works with different pen colors and thicknesses
- Tolerant to hand tremors and imprecise drawing
- Capable of identifying intersections and decision points
- Handles various map scales and orientations
- Filters out unintentional marks and artifacts

### Path Optimization

The system optimizes the extracted path for robot navigation:

- Smoothing sharp corners for natural robot movement
- Ensuring appropriate clearance from obstacles
- Optimizing velocity profiles for efficient traversal
- Generating acceleration-limited trajectories
- Incorporating robot kinematic constraints

## Experimental Results

The system was evaluated through a series of experiments:

- **Accuracy Tests**: Measuring deviation between intended and executed paths
- **User Studies**: Assessing ease of use across different user groups
- **Robustness Tests**: Evaluating performance under varying lighting and drawing conditions
- **Comparison**: Benchmarking against traditional programming approaches
- **Field Trials**: Testing in realistic application scenarios

## Applications

This approach has potential applications in:

- Educational robotics for teaching motion planning concepts
- Rapid prototyping of robot behaviors
- Field robotics where paths need frequent adjustment
- Assistive robotics where non-technical caregivers need to program routes
- Entertainment and interactive exhibits

## Future Directions

Future work will focus on:

- Extending to dynamic environments with moving obstacles
- Supporting 3D path planning for drones and manipulators
- Incorporating semantic information (speed zones, wait points)
- Developing collaborative multi-user path planning
- Integrating with augmented reality for enhanced visualization
`

const project: ProjectInfo = {
  id: 94,
  title: "Path Planning by drawing a Map",
  description: "This approach allows the desired path following by a mobile robot to be in user's control.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742918704/path_zz7ofg.webp",
  category: "research",

  // Show project insights for this research project
  showInsights: true,

  metadata: {
    year: "2021",
    language: "Python",
    tags: ["Path Planning", "Navigation", "Color Detection", "Computer Vision"],
    status: "Unpublished",
  },

  links: {
    github: "https://github.com/yourusername/advanced-robotics",
    demo: "/projects/94",
    documentation: "https://example.com/robotics-research91",
  },

  // Empty gallery since we're using papers instead
  gallery: [],
}

export default project

