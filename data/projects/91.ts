import type { ProjectInfo, ResearchPaper } from "@/types"

// Define research papers directly in the project file
export const project91Papers: ResearchPaper[] = [
  {
    title: "A Survey of Laplace Transform Applications in various fields of Science and Engineering",
    authors: ["Joseph Pranadeer Reddy Katakam", "Vaithyasubramanian. S"],
    publication: "International Journal of Pure and Applied Mathematics",
    year: "2018",
    abstract:
      "The Concept of Laplace Transformation plays a crucial role in solving various problems in a range of fields. A study on diverse application of Laplace Transformation in various field is discussed in this paper. Sixteen Research Articles have been studied and the study about how the transformation techniques has been used by researchers are presented in this paper. The problems worked on, theory, applications and procedure of various Laplace transformations Applications have been summarized in this paper.",
    links: {
      online: "https://acadpubl.eu/jsi/2018-119-7/articles/7a/80.pdf",
      pdf: "https://drive.google.com/file/d/1PSpJhw6E9UesUottsy_L18HsVeCimef_/view?usp=sharing",
      doi: "ISSN: 1311-8080",
    },
  },
  {
    title: "STUDY ON APPLICATIONS OF LAPLACE TRANSFORMATION: A REVIEW ",
    authors: ["K. Joseph Pranadeer Reddy", "Vaithyasubramanian S", "K. Vinil Kumar"],
    publication: "IIOAB JOURNAL: A JOURNAL OF MULTIDISCIPLINARY SCIENCE AND TECHNOLOGY.",
    year: "2017",
    abstract:
      "One of the important tools applied in numerous areas such as Circuit Analysis, Control Systems, Communication System, Signal Processing, Mechanics, Hydrodynamics, Heat Conduction, Beam Problems, Networks and Space Theory is Laplace Transformation. In this paper, the applications of Laplace Transformations are reviewed. This review paper summarizes the existing theory, Problems worked on, the procedure, how and where Laplace Transform used in various applications.",
    links: {
      online:
        "https://www.researchgate.net/publication/323218108_A_review_on_applications_of_laplace_transformations_in_various_fields",
      pdf: "https://drive.google.com/file/d/1vBhWG2SSIa3lsdpG5bLowKt_cGiYf8Xl/view?usp=sharing",
      doi: "ISSN: 0976-3104",
    },
  },
]

// Define markdown content for project insights
export const project91Markdown = `

## Agenda

This research explores the diverse applications of Laplace Transformation across various fields of science and engineering. The Laplace transform is a powerful mathematical tool that converts complex differential equations into simpler algebraic equations, making it invaluable for solving problems in numerous domains.

## Technical Discussion

### Electrical Engineering

Laplace transforms are extensively used in:

- Circuit analysis and design
- Control systems and feedback loops
- Signal processing and filter design
- Power systems and electrical networks
- Transient response analysis

### Mechanical Engineering

Applications in mechanical systems include:

- Vibration analysis and damping
- Heat transfer and thermal systems
- Fluid dynamics and flow modeling
- Structural mechanics and stress analysis
- System dynamics and control

![Kilobot Experiment Results](https://res.cloudinary.com/dzujcleva/image/upload/v1742918653/Laplace_cover_gdhahh.jpg)

### Other Scientific Fields

The transform finds applications in diverse areas:

- Quantum mechanics and wave equations
- Diffusion processes and mass transfer
- Population dynamics and biological systems
- Economic modeling and financial mathematics
- Image processing and computer vision

## Challenges & Solutions

Our research methodology involved:

1. Comprehensive literature review of 16 research articles
2. Classification of applications by field and problem type
3. Analysis of solution techniques and implementation approaches
4. Comparison of computational efficiency and accuracy
5. Identification of emerging trends and future directions

## Results & Outcomes

The research highlights:

- The universal applicability of Laplace transforms across disciplines
- Common mathematical patterns that emerge in seemingly unrelated problems
- Computational advantages over direct differential equation solving
- Pedagogical approaches for teaching Laplace transforms effectively
- Emerging applications in modern engineering challenges

### Future Directions

Future work will focus on:

- Applications in emerging fields like quantum computing
- Integration with machine learning for complex system modeling
- Development of more efficient numerical algorithms
- Educational tools for visualizing transform concepts
- Extending applications to nonlinear and fractional-order systems
`

const project: ProjectInfo = {
  id: 91,
  title: "Laplace Transform Applications in Science & Engineering",
  description:
    "Unraveling the magic of Laplace transforms across scientific frontiers: from theory to real-world engineering marvels.",
  mainImage: "https://res.cloudinary.com/dzujcleva/image/upload/v1742918653/Laplace_cover_gdhahh.jpg",
  category: "research",

  // Show project insights for this research project
  showInsights: true,

  metadata: {
    year: "2017",
    language: "Research Paper",
    tags: ["Laplace Transform", "Engineering", "Science", "review"],
    status: "Published",
  },

  links: {
    github: "https://github.com/yourusername/advanced-robotics",
    demo: "/projects/91",
    documentation: "https://example.com/robotics-research91",
  },

  // Empty gallery since we're using papers instead
  gallery: [],
}

export default project

