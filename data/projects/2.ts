/**
 * Project 2: AI-Powered Image Recognition
 *
 * This file contains the basic information for the AI-Powered Image Recognition project.
 * Detailed content is loaded from the README.md file.
 */

import type { ProjectInfo } from "@/types"

const project: ProjectInfo = {
  // Basic project information
  id: 2,
  title: "Custom Kinematics & Dynamics",
  description:
    "A deep learning system for real-time image recognition and classification using convolutional neural networks.",
  mainImage: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/projects/ai-image-recognition",
  demoVideo: "/placeholder.svg?height=600&width=800", // URL to demo video (optional)
  category: "modelling", // Added category field

  // Control whether to show project insights
  showInsights: true,

  // Project metadata
  metadata: {
    year: "March 2023",
    language: "Python",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow", "CNN"],
  },

  // Project links
  links: {
    github: "https://github.com/yourusername/image-recognition",
    demo: "/projects/2", // Internal link to project page
    documentation: "https://docs.example.com/image-recognition", // Optional
  },

  // Project gallery
  gallery: [
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/model-architecture",
      alt: "Model architecture",
      caption: "The CNN architecture used for image classification",
    },
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/training-process",
      alt: "Training process",
      caption: "Visualizing the training process and loss curves",
    },
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/test-results",
      alt: "Test results",
      caption: "Results on the test dataset showing high accuracy",
    },
    {
      src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/project-gallery/real-world-testing",
      alt: "Real-world testing",
      caption: "Testing the model on real-world images",
    },
  ],
}

export default project

// Export markdown content for project insights
export const project2Markdown = `
# Project Insights

## Agenda

This project focuses on developing custom kinematics and dynamics models for robotic systems. The goal is to create accurate mathematical representations that can be used for simulation, control, and motion planning.

Key objectives include:
- Deriving precise kinematic equations for complex robotic mechanisms
- Developing dynamics models that account for inertial properties and external forces
- Implementing efficient computational methods for real-time applications
- Validating models through experimental testing and comparison

## Technical Discussion

### System Architecture

The custom kinematics and dynamics framework consists of several interconnected components:

- **Forward Kinematics**: Maps joint configurations to end-effector poses
- **Inverse Kinematics**: Determines joint configurations for desired end-effector poses
- **Dynamics Modeling**: Accounts for mass, inertia, and forces acting on the system
- **Numerical Solvers**: Efficiently computes solutions for complex equations

### Key Technologies

The project leverages several advanced mathematical and computational techniques:

- **Denavit-Hartenberg Parameters**: For systematic representation of kinematic chains
- **Lagrangian Mechanics**: For deriving equations of motion
- **Recursive Newton-Euler Algorithm**: For efficient dynamics computation
- **Optimization Methods**: For solving inverse kinematics problems
- **Numerical Integration**: For simulating system behavior over time

## Challenges & Solutions

### Development Process

The development followed a structured approach:

1. Mathematical formulation of kinematic relationships
2. Derivation of dynamic equations using Lagrangian mechanics
3. Implementation of computational algorithms in Python and C++
4. Validation through simulation and comparison with physical systems
5. Optimization for real-time performance

### Key Challenges

#### Complex Joint Configurations
**Challenge**: Handling robots with redundant degrees of freedom and complex joint arrangements.

**Solution**: Implemented advanced numerical methods for redundancy resolution and developed specialized algorithms for particular joint configurations.

#### Computational Efficiency
**Challenge**: Ensuring real-time performance for high-DOF systems with complex dynamics.

**Solution**: Developed optimized algorithms using symbolic computation for pre-derivation and code generation, combined with efficient numerical methods.

#### Model Accuracy
**Challenge**: Achieving high accuracy in the presence of modeling uncertainties and simplifications.

**Solution**: Implemented parameter identification techniques to calibrate models based on experimental data and developed adaptive methods to account for unmodeled dynamics.

## Results & Outcomes

### Performance Metrics

| Metric | Value |
|--------|-------|
| Forward kinematics computation time | <0.5ms |
| Inverse kinematics accuracy | <1mm, <0.1° |
| Dynamics simulation accuracy | >95% match with physical system |
| Maximum DOF handled efficiently | 12 joints |
| Real-time control rate | 1kHz |

### Future Improvements

Future work will focus on:

- Integration with machine learning for adaptive model refinement
- Extension to flexible-link and soft robotic systems
- Development of more efficient algorithms for highly redundant systems
- Implementation on embedded hardware for standalone operation
- Creation of a user-friendly interface for model generation and analysis
`

