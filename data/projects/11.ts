import type { ProjectInfo, ResearchPaper } from "@/types"

// Define research papers directly in the project file
export const project11Papers: ResearchPaper[] = [
  {
    title: "Advanced Control Systems for Robotic Manipulators",
    authors: ["Your Name", "Collaborator One", "Collaborator Two"],
    publication: "IEEE Transactions on Robotics",
    year: "2023",
    abstract:
      "This paper presents a novel approach to control systems for robotic manipulators, focusing on real-time adaptation to dynamic environments. We introduce a hybrid control architecture that combines model predictive control with reinforcement learning to achieve superior performance in unstructured environments. Experimental results demonstrate a 40% improvement in task completion time and a 25% reduction in energy consumption compared to traditional control methods.",
    links: {
      online: "https://ieeexplore.ieee.org/example",
      pdf: "https://example.com/papers/advanced-control-systems.pdf",
      doi: "10.1109/TRO.2023.12345",
    },
  },
  {
    title: "Sensor Fusion Techniques for Autonomous Navigation",
    authors: ["Your Name", "Researcher A", "Professor B"],
    publication: "International Conference on Robotics and Automation (ICRA)",
    year: "2022",
    abstract:
      "Reliable perception is crucial for autonomous navigation in complex environments. This paper explores novel sensor fusion techniques that integrate data from LiDAR, cameras, and IMU sensors to create robust environmental representations. Our approach addresses challenges such as sensor noise, occlusion, and varying lighting conditions. We validate our methods through extensive testing in urban, off-road, and indoor scenarios, demonstrating significant improvements in localization accuracy and obstacle detection.",
    links: {
      online: "https://ieeexplore.ieee.org/example2",
      pdf: "https://example.com/papers/sensor-fusion.pdf",
      doi: "10.1109/ICRA.2022.54321",
    },
  },
]

// Define markdown content for project insights
export const project11Markdown = `

## Research Overview

This research focuses on developing advanced control systems and sensor fusion techniques for next-generation robotic platforms. The work spans multiple areas including:

- Real-time adaptation to dynamic environments
- Integration of model predictive control with reinforcement learning
- Novel sensor fusion techniques for robust environmental perception
- Performance optimization for resource-constrained robotic systems

## Methodology

### Control Systems Development

Our approach to control systems combines traditional model-based methods with modern learning-based techniques:

- Hybrid architecture integrating model predictive control (MPC) with reinforcement learning
- Adaptive parameter tuning based on environmental conditions
- Real-time performance optimization for embedded systems
- Robust handling of uncertainties and disturbances

### Sensor Fusion Implementation

The sensor fusion research focuses on creating reliable environmental representations:

- Multi-modal fusion of LiDAR, camera, and IMU data
- Temporal alignment and calibration techniques
- Filtering algorithms for noise reduction
- Feature extraction and tracking across sensor modalities

## Results & Impact

### Performance Improvements

Our research has demonstrated significant improvements over traditional methods:

- 40% improvement in task completion time
- 25% reduction in energy consumption
- Enhanced robustness in unstructured environments
- Improved localization accuracy in challenging conditions

### Applications

The developed technologies have applications in various domains:

- Industrial automation and manufacturing
- Search and rescue operations
- Autonomous navigation in GPS-denied environments
- Human-robot collaboration scenarios

## Future Directions

Future work will focus on:

- Extending the approach to multi-robot systems
- Incorporating semantic understanding for context-aware control
- Developing more efficient learning algorithms for faster adaptation
- Implementing the system on diverse robotic platforms
`

const project: ProjectInfo = {
  id: 11,
  title: "Advanced Robotics Research",
  description: "Research in advanced control systems and sensor fusion for next-generation robotic platforms.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742032520/samples/landscapes/nature-mountains.jpg",
  demoVideo: "https://res.cloudinary.com/dzujcleva/video/upload/v1742032513/samples/sea-turtle.mp4",
  category: "research",

  // Show project insights for this research project
  showInsights: false,

  metadata: {
    year: "2022-2023",
    language: "Python, C++, ROS",
    tags: ["Robotics", "Control Systems", "Sensor Fusion", "Machine Learning"],
    status: "Published",
  },

  links: {
    github: "https://github.com/yourusername/advanced-robotics",
    demo: "/projects/11",
    documentation: "https://example.com/robotics-research",
  },

  // Empty gallery since we're using papers instead
  gallery: [],
}

export default project

