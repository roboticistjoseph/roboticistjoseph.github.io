import type { ProjectInfo, ResearchPaper } from "@/types"

// Define research papers directly in the project file
export const project92Papers: ResearchPaper[] = [
  {
    title: "Distributed Circle Formation with Swarms of Modular Robot Duos in Hardware Testbeds",
    authors: [
      "Joseph Pranadeer Reddy Katakam",
      "Michael Otte",
      "Jack Mirenzi",
      "Zachary Friedman-Hill",
      "Anshuman Singh",
      "Chris Martinez",
      "Jared Allanigue",
    ],
    publication: "Industrial and Systems Engineering Review (ISER)",
    year: "2023",
    abstract:
      "We compare the functionality of a swarm of duos to a swarm of single robots on the task of distributed formation of concentric circles. We perform experiments in simulation and also on a hardware test bed involving a swarm of Kilobot robots and duos. This paper provides a proof of concept that such a swarm of pair-based modular robots can accomplish interesting tasks, and achieve both new capabilities and new vulnerabilities beyond those inherent to a swarm of single agents.",
    links: {
      online: "https://iser.sisengr.org/index.php/iser",
      pdf: "https://drive.google.com/file/d/1U5UGhS8QkzBOotOeDZ2d1p-Axmn8q7U2/view?usp=sharing",
      doi: "University of Maryland College Park",
    },
  },
]

// Define markdown content for project insights
export const project92Markdown = `---
title: "Experimenting Concentric Circles with Modular Robot Duos"
description: "Kilobots go round in circles... literally! Testing the algorithm efficiency of solo and paired robots in a spin cycle of concentric circle formations."
---

## Research Overview

This research investigates the capabilities and limitations of modular robot duos compared to single robots in distributed formation control. Specifically, we focus on the task of forming concentric circles, which is a fundamental spatial organization pattern in swarm robotics.

## Methodology

### Experimental Setup

Our experiments were conducted using:

- Kilobot robots: small, low-cost robots with limited sensing and communication capabilities
- Custom-designed physical connectors to create robot duos
- Overhead camera system for position tracking
- Simulation environment for preliminary testing and validation

### Algorithm Development

We developed distributed algorithms for:

- Local communication between robots
- Relative position estimation
- Concentric circle formation with varying radii
- Adaptive behavior based on robot configuration (single vs. duo)

## Key Findings

### Performance Comparison

Our experiments revealed several interesting differences between single robots and duos:

- **Formation Speed**: Duos achieved faster convergence to the target formation in certain scenarios
- **Precision**: Single robots demonstrated better precision in maintaining exact circular paths
- **Robustness**: Duos showed greater resilience to individual robot failures
- **Energy Efficiency**: Duos required more power but completed formations in less time

### Novel Capabilities

The duo configuration enabled new capabilities:

- Enhanced sensing through combined sensor inputs
- Improved obstacle navigation through coordinated movement
- More stable movement patterns in noisy environments
- Ability to form more complex geometric patterns

### Limitations and Challenges

We also identified several challenges with the duo approach:

- Increased mechanical complexity and failure points
- More complex coordination algorithms required
- Higher power consumption per functional unit
- Reduced maneuverability in confined spaces

## Applications and Impact

This research has implications for:

- Search and rescue operations using robot swarms
- Environmental monitoring with distributed sensing
- Self-assembling structures and modular robotics
- Collective transport and manipulation tasks

## Future Directions

Future work will explore:

- Scaling to larger numbers of connected robots (trios, quartets, etc.)
- Heterogeneous swarms with mixed single and multi-robot units
- More complex formation patterns and dynamic reconfiguration
- Theoretical analysis of the fundamental limits and capabilities of modular swarms
`

const project: ProjectInfo = {
  id: 92,
  title: "Experimenting Concentric Circles with Modular Robot Duos",
  description:
    "Kilobots go round in circles... literally! Testing the algorithm efficiency of solo and paired robots in a spin cycle of concentric circle formations.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742918704/Kilobots_cover_njvbcq.jpg",
  category: "research",

  // Show project insights for this research project
  showInsights: true,

  metadata: {
    year: "2023",
    language: "Embedded C",
    tags: ["Swarm Robotics", "Kilobots", "Spatial formation", "Formation Control", "Research"],
    status: "Waiting Approval",
  },

  links: {
    github: "https://github.com/yourusername/advanced-robotics",
    demo: "/projects/92",
    documentation: "https://example.com/robotics-research91",
  },

  // Empty gallery since we're using papers instead
  gallery: [],
}

export default project

