/**
 * Client-safe markdown utilities
 * Pre-loaded content instead of reading from filesystem
 */

// Pre-loaded markdown content
const markdownContent: Record<string, string> = {
  "data/projects/readme/project1.md": `---
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
- $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$
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
![Performance Results](/placeholder.svg?height=300&width=500)
![Performance Results](/placeholder.svg?height=300&width=500)
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

  "data/projects/readme/project2.md": `---
title: "AI-Powered Image Recognition"
description: "A deep learning system for real-time image recognition and classification using convolutional neural networks."
---

## Agenda

This project aims to develop an AI-powered image recognition system capable of identifying and classifying objects in real-time. The key objectives include:

- Implementing a state-of-the-art convolutional neural network architecture
- Training the model on a diverse dataset of images
- Optimizing the model for real-time inference on resource-constrained devices
- Building a user-friendly interface for image upload and classification
- Evaluating the model's performance on various metrics

## Technical Discussion

### Model Architecture

The image recognition system is built using a deep learning approach with the following components:

- Convolutional Neural Network (CNN) with ResNet-50 backbone
- Feature pyramid for multi-scale object detection
- Transfer learning from pre-trained ImageNet weights
- Fine-tuning on custom dataset
- Data augmentation for improved generalization

### Implementation Details

- **Framework**: TensorFlow and Keras for model development and training
- **Dataset**: Combination of ImageNet and custom-labeled images
- **Training**: Trained on cloud GPUs with early stopping and learning rate scheduling
- **Optimization**: Model quantization and pruning for deployment on edge devices
- **Deployment**: Containerized with Docker for easy deployment

## Challenges & Solutions

### Data Collection and Preparation

The project required a large, diverse dataset for training an accurate model.

1. Initial data collection from public datasets
2. Data cleaning and preprocessing
3. Manual labeling of custom images
4. Implementation of data augmentation techniques
5. Dataset splitting into training, validation, and test sets

### Performance Optimization

**Challenge**: Running complex deep learning models on resource-constrained devices.

**Solution**: Implemented model quantization, pruning, and knowledge distillation to reduce model size while maintaining accuracy. Used TensorRT for optimized inference.

### Handling Edge Cases

**Challenge**: Ensuring the model performs well in various lighting conditions and with partially obscured objects.

**Solution**: Augmented the training data with various lighting conditions, occlusions, and viewpoints. Implemented ensemble methods to improve robustness.

## Results & Outcomes

### Performance Metrics

- Classification accuracy: 94.2% on test dataset
- Inference time: 50ms on NVIDIA Jetson Nano
- Model size: 12MB after optimization
- mAP (mean Average Precision): 0.89
- F1 Score: 0.92

![Performance Results](/placeholder.svg?height=300&width=500)

### Real-world Applications

- Integrated with security camera systems for object detection
- Deployed in retail environments for inventory management
- Used in manufacturing for quality control
- Implemented in mobile applications for real-time object recognition

### Future Improvements

- Exploration of more efficient architectures like EfficientNet and MobileNetV3
- Implementation of self-supervised learning for better feature extraction
- Development of explainable AI components to understand model decisions
- Extension to video analysis with temporal information
- Integration with augmented reality applications`,

  "data/projects/readme/kinematics-dynamics.md": `---
title: "K&D"
description: "A deep learning system for real-time image recognition and classification using convolutional neural networks."
---

## Agenda

This project aims to develop an AI-powered image recognition system capable of identifying and classifying objects in real-time. The key objectives include:

- Implementing a state-of-the-art convolutional neural network architecture
- Training the model on a diverse dataset of images
- Optimizing the model for real-time inference on resource-constrained devices
- Building a user-friendly interface for image upload and classification
- Evaluating the model's performance on various metrics

## Technical Discussion

### Model Architecture

The image recognition system is built using a deep learning approach with the following components:

- Convolutional Neural Network (CNN) with ResNet-50 backbone
- Feature pyramid for multi-scale object detection
- Transfer learning from pre-trained ImageNet weights
- Fine-tuning on custom dataset
- Data augmentation for improved generalization

### Implementation Details

- **Framework**: TensorFlow and Keras for model development and training
- **Dataset**: Combination of ImageNet and custom-labeled images
- **Training**: Trained on cloud GPUs with early stopping and learning rate scheduling
- **Optimization**: Model quantization and pruning for deployment on edge devices
- **Deployment**: Containerized with Docker for easy deployment

## Challenges & Solutions

### Data Collection and Preparation

The project required a large, diverse dataset for training an accurate model.

1. Initial data collection from public datasets
2. Data cleaning and preprocessing
3. Manual labeling of custom images
4. Implementation of data augmentation techniques
5. Dataset splitting into training, validation, and test sets

### Performance Optimization

**Challenge**: Running complex deep learning models on resource-constrained devices.

**Solution**: Implemented model quantization, pruning, and knowledge distillation to reduce model size while maintaining accuracy. Used TensorRT for optimized inference.

### Handling Edge Cases

**Challenge**: Ensuring the model performs well in various lighting conditions and with partially obscured objects.

**Solution**: Augmented the training data with various lighting conditions, occlusions, and viewpoints. Implemented ensemble methods to improve robustness.

## Results & Outcomes

### Performance Metrics

- Classification accuracy: 94.2% on test dataset
- Inference time: 50ms on NVIDIA Jetson Nano
- Model size: 12MB after optimization
- mAP (mean Average Precision): 0.89
- F1 Score: 0.92

![Performance Results](/placeholder.svg?height=300&width=500)

### Real-world Applications

- Integrated with security camera systems for object detection
- Deployed in retail environments for inventory management
- Used in manufacturing for quality control
- Implemented in mobile applications for real-time object recognition

### Future Improvements

- Exploration of more efficient architectures like EfficientNet and MobileNetV3
- Implementation of self-supervised learning for better feature extraction
- Development of explainable AI components to understand model decisions
- Extension to video analysis with temporal information
- Integration with augmented reality applications`,
}

/**
 * Parse markdown content into HTML and extract frontmatter
 */
export async function parseMarkdown(content: string) {
  // Simple frontmatter extraction
  const frontMatterMatch = content.match(/---\n([\s\S]*?)\n---\n([\s\S]*)/)

  const frontMatter = {}
  let markdownContent = content

  if (frontMatterMatch) {
    try {
      // Extract frontmatter as key-value pairs
      const frontMatterText = frontMatterMatch[1]
      frontMatterText.split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":")
        if (key && valueParts.length) {
          const value = valueParts.join(":").trim()
          if (value.startsWith('"') && value.endsWith('"')) {
            frontMatter[key.trim()] = value.slice(1, -1)
          } else {
            frontMatter[key.trim()] = value
          }
        }
      })

      // Get content after frontmatter
      markdownContent = frontMatterMatch[2]
    } catch (e) {
      console.error("Error parsing frontmatter:", e)
    }
  }

  // Convert markdown to HTML (simplified version)
  // In a real app, you'd use a proper markdown parser
  const contentHtml = markdownToHtml(markdownContent)

  return {
    contentHtml,
    frontMatter,
  }
}

/**
 * Read a markdown file and parse its contents
 */
export async function getMarkdownFile(filePath: string) {
  try {
    // Get pre-loaded content instead of reading from filesystem
    const fileContents = markdownContent[filePath] || ""

    if (!fileContents) {
      console.warn(`No pre-loaded content found for: ${filePath}`)
      return {
        contentHtml: "",
        frontMatter: {},
      }
    }

    return await parseMarkdown(fileContents)
  } catch (error) {
    console.error(`Error processing markdown file: ${error}`)
    return {
      contentHtml: "",
      frontMatter: {},
    }
  }
}

/**
 * Extract sections from markdown HTML content
 */
export function extractSections(html: string) {
  // This is a simple implementation - you might want to use a proper HTML parser
  const sections: Record<string, any> = {
    agenda: { title: "Agenda", content: "", bulletPoints: [] },
    technical: {
      title: "Technical Discussion",
      subsections: [],
    },
    challenges: {
      title: "Challenges & Solutions",
      subsections: [],
    },
    results: {
      title: "Results & Outcomes",
      subsections: [],
      hasImages: false,
    },
  }

  // Simple regex-based extraction (this is a basic implementation)
  // In a real app, you'd want to use a proper HTML parser

  // Extract agenda section (assuming it's under a ## Agenda heading)
  const agendaMatch = html.match(/<h2[^>]*>Agenda<\/h2>([\s\S]*?)(?=<h2|$)/i)
  if (agendaMatch && agendaMatch[1]) {
    sections.agenda.content = agendaMatch[1].trim()

    // Extract bullet points
    const bulletPoints = agendaMatch[1].match(/<li>([\s\S]*?)<\/li>/g)
    if (bulletPoints) {
      sections.agenda.bulletPoints = bulletPoints.map((item) => item.replace(/<li>([\s\S]*?)<\/li>/i, "$1").trim())
    }
  }

  // Extract technical section
  const technicalMatch = html.match(/<h2[^>]*>Technical Discussion<\/h2>([\s\S]*?)(?=<h2|$)/i)
  if (technicalMatch && technicalMatch[1]) {
    // Extract subsections (assuming they're under h3 headings)
    const subsectionMatches = technicalMatch[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3|$)/g)
    if (subsectionMatches) {
      sections.technical.subsections = subsectionMatches.map((subsection) => {
        const titleMatch = subsection.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)
        const title = titleMatch ? titleMatch[1].trim() : ""
        const content = subsection.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, "").trim()

        return { title, content }
      })
    }
  }

  // Extract challenges section
  const challengesMatch = html.match(/<h2[^>]*>Challenges([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/i)
  if (challengesMatch && challengesMatch[2]) {
    // Extract subsections
    const subsectionMatches = challengesMatch[2].match(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3|$)/g)
    if (subsectionMatches) {
      sections.challenges.subsections = subsectionMatches.map((subsection) => {
        const titleMatch = subsection.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)
        const title = titleMatch ? titleMatch[1].trim() : ""
        const content = subsection.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, "").trim()

        return { title, content }
      })
    }
  }

  // Extract results section
  const resultsMatch = html.match(/<h2[^>]*>Results([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/i)
  if (resultsMatch && resultsMatch[2]) {
    // Check if there are images in the results section
    sections.results.hasImages = resultsMatch[2].includes("<img")

    // Extract subsections
    const subsectionMatches = resultsMatch[2].match(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3|$)/g)
    if (subsectionMatches) {
      sections.results.subsections = subsectionMatches.map((subsection) => {
        const titleMatch = subsection.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)
        const title = titleMatch ? titleMatch[1].trim() : ""
        const content = subsection.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, "").trim()

        // Check if this subsection has images
        const hasImage = content.includes("<img")

        // Extract image if it exists
        let image = null
        if (hasImage) {
          const imgMatch = content.match(/<img[^>]*src="([^"]*)"[^>]*>/i)
          if (imgMatch && imgMatch[1]) {
            image = {
              src: imgMatch[1],
              alt: "Result visualization",
            }
          }
        }

        return { title, content, image }
      })
    }
  }

  return sections
}

/**
 * Simple markdown to HTML converter
 * This is a very basic implementation - in a real app you'd use a proper markdown parser
 */
function markdownToHtml(markdown: string): string {
  let html = markdown

  // Convert headings
  html = html.replace(/^## (.*$)/gm, "<h2>$1</h2>")
  html = html.replace(/^### (.*$)/gm, "<h3>$1</h3>")

  // Convert lists
  html = html.replace(/^- (.*$)/gm, "<li>$1</li>")

  // Wrap lists in ul tags
  html = html.replace(/(<li>.*<\/li>)\n\n/gs, "<ul>$1</ul>\n\n")

  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

  // Convert paragraphs
  html = html.replace(/^([^<].*)\n\n/gm, "<p>$1</p>\n\n")

  // Convert images
  html = html.replace(/!\[(.*?)\]$$(.*?)$$/g, '<img src="$2" alt="$1">')

  return html
}

