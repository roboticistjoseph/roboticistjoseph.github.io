// This file contains pre-loaded markdown content for static generation
// It's generated during the build process by the generate-content.js script

export const markdownContent: Record<string, string> = {
  "data/projects/readme/project2.md": `---
title: "Autonomous Done Navigation"
description: "A system for autonomous drone navigation in GPS-denied environments using computer vision and SLAM algorithms."
---

## Agenda

This project aims to develop an autonomous drone navigation system capable of operating in GPS-denied environments using computer vision and SLAM algorithms. The key objectives include:

- Implementing real-time obstacle detection and avoidance
- Developing a robust localization system using visual markers
- Creating an efficient path planning algorithm for indoor navigation
- Building a user-friendly interface for mission planning and monitoring
- Optimizing for low power consumption and extended flight time

## Technical Discussion

### System Architecture

The system is built on ROS (Robot Operating System) with a modular architecture consisting of:

- Perception module using stereo cameras and depth sensors
- Localization module implementing ORB-SLAM2 algorithm
- $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$
- Planning module with A* and RRT* path planning
- Control module for precise flight dynamics
- Interface module with web-based dashboard

### Key Technologies

- **Computer Vision**: OpenCV for image processing, feature detection, and object tracking with optimized algorithms for embedded systems.
- **SLAM**: Simultaneous Localization and Mapping using ORB-SLAM2 with custom modifications for improved performance on drones.
- **Path Planning**: Hybrid approach combining global planning (A*) with local obstacle avoidance (Dynamic Window Approach).

## Challenges & Solutions

### Development Process

The project followed an iterative development approach with continuous integration and testing:

1. Initial prototype with basic navigation capabilities
2. Integration of SLAM algorithms and performance optimization
3. Development of obstacle avoidance system
4. Implementation of mission planning interface
5. Extensive testing in various indoor environments
6. Deployment and field validation

### Key Challenges

#### Limited Computational Resources

**Challenge**: Running complex SLAM algorithms on embedded hardware with limited processing power.

**Solution**: Optimized algorithms for embedded systems, implemented efficient feature extraction, and offloaded heavy computations to a ground station when possible.

#### Dynamic Environment Handling

**Challenge**: Maintaining accurate localization in environments with moving objects and changing conditions.

**Solution**: Implemented a multi-layered mapping approach that separates static and dynamic elements, with a temporal filtering mechanism to update the environment model.

## Results & Outcomes

### Performance Metrics

- Localization accuracy: ±5cm in typical indoor environments
- Obstacle detection range: 0.5-5m with 95% accuracy
- Path planning time: <100ms for environments up to 100m²
- Battery life: 15-20 minutes of continuous operation
- Computational load: 60-80% of available resources
![Performance Results](https://res.cloudinary.com/dzujcleva/image/upload/v1742035615/hero_backdrop_aymxo7.png)
![Performance Results](https://res.cloudinary.com/dzujcleva/image/upload/v1742035614/2_gal_kfwct8.jpg)
### Key Statistics

- Success Rate: 92% mission completion rate in test environments
- Navigation Speed: 0.8 m/s average navigation speed in complex environments
- Power Efficiency: +35% improved flight time compared to baseline

### Future Improvements

- Integration with multi-drone swarm capabilities
- Enhanced semantic understanding of the environment
- Implementation of deep reinforcement learning for adaptive navigation
- Development of a more intuitive user interface with AR capabilities
- Optimization for outdoor environments with limited GPS reliability`,

  "data/projects/readme/kinematics-dynamics.md": `---
title: "Kinematics and Dynamics"
description: "A comprehensive study of robot kinematics and dynamics with implementation in MATLAB and Python."
---

## Agenda

This project focuses on the mathematical modeling and simulation of robot kinematics and dynamics. The key objectives include:

- Developing forward and inverse kinematics models for various robot configurations
- Implementing dynamics models using Lagrangian and Newton-Euler formulations
- Creating simulation environments for testing control algorithms
- Validating models with real-world robot data
- Optimizing computational efficiency for real-time applications

## Technical Discussion

### Mathematical Foundations

The project is built on rigorous mathematical foundations including:

- Homogeneous transformation matrices for representing position and orientation
- Denavit-Hartenberg parameters for systematic kinematic modeling
- Lagrangian mechanics for deriving equations of motion
- Numerical integration methods for simulation

### Implementation Details

- **MATLAB Implementation**: Comprehensive toolbox for kinematic and dynamic analysis with visualization capabilities
- **Python Implementation**: Efficient implementation using NumPy and SciPy with ROS integration
- **Validation**: Comparison with analytical solutions and experimental data from physical robots
- **Optimization**: Symbolic computation for deriving optimized code and parallel computing for simulation acceleration

## Challenges & Solutions

### Development Process

The project followed a systematic approach to ensure accuracy and efficiency:

1. Mathematical derivation and verification of models
2. Implementation in MATLAB for algorithm development and testing
3. Python implementation for integration with robotics frameworks
4. Validation with simulated and real robot data
5. Optimization for computational efficiency
6. Documentation and educational material creation

### Key Challenges

#### Numerical Stability

**Challenge**: Ensuring numerical stability in inverse kinematics and dynamics computations, especially near singularities.

**Solution**: Implemented regularization techniques, singularity-robust inverse methods, and adaptive time-stepping for numerical integration.

#### Computational Efficiency

**Challenge**: Achieving real-time performance for complex robot models with many degrees of freedom.

**Solution**: Developed optimized algorithms using symbolic computation for code generation, parallel computing for simulation, and efficient data structures for state representation.

## Results & Outcomes

### Performance Metrics

- Kinematic computation time: <1ms for 6-DOF manipulators
- Dynamic simulation: Real-time performance for robots with up to 12 DOF
- Inverse kinematics accuracy: <0.1mm position error, <0.01° orientation error
- Dynamics accuracy: <2% torque prediction error compared to experimental data

### Educational Impact

- Developed comprehensive educational materials for robotics courses
- Created interactive visualizations for intuitive understanding of complex concepts
- Published open-source libraries used in multiple universities
- Conducted workshops and tutorials at robotics conferences

### Future Directions

- Extension to flexible-link robots and soft robotics
- Integration with machine learning for model identification and adaptive control
- Development of real-time capable implementations for embedded systems
- Creation of a web-based platform for robotics education`,
}

