import type { TimelineItem } from "@/types"

export const timelineData = {
  title: "My Journey",
  education: [
    {
      id: 1,
      title: "Master's in Robotics",
      organization: "University of Maryland, College Park",
      date: "2021 - 2023",
      description:
        "Specialized in core fundamentals of robotics and honed good software practises for developing robotic applications using C++ and Python",
      type: "education",
      logo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035615/1_masters_logo_umd_fjhazn.png",
      details: [
        {
          title: "Building Manufacturing Robot Software System",
          description: "Developed a software system using C++ and Python for the ARIAC competition, simulating advanced kit building and assembly in a virtual warehouse environment.",
        },
        {
          title: "Software Development for Robotics",
          description: "Mastered industry-standard software development practices through a series of challenging C++ projects, mirroring real-world robotics industry workflows.",
        },
        {
          title: "Perception for Autonomous Robots",
          description: "Delved into the intricacies of computer vision, exploring advanced image processing techniques crucial for developing perceptive autonomous systems.",
        },
        {
          title: "Robot Modelling (Kinematics & Dynamics)",
          description: "Leveraged linear algebra concepts to build robotic arm control systems from the ground up, gaining deep insights into the principles of kinematics and dynamics.",
        },
        {
          title: "Planning for Autonomous Robots",
          description: "Implemented and analyzed various path planning algorithms including DFS, BFS, Dijkstra, A*, and RRT, evaluating their performance in diverse simulated scenarios.",
        },
        {
          title: "Controls for Robotic Systems",
          description: "Explored the foundations of control theory, including advanced filtering techniques and controllers like PID and LQR. Gained expertise in state space estimation and system controllability.",
        },
        {
          title: "Independent Research Study- Swarm Robotics",
          description: "Conducted innovative research on swarm algorithms, comparing the efficiency of single and paired kilobots in forming concentric circles. Findings were compiled into a comprehensive academic paper.",
        },
      ],
    },
    {
      id: 2,
      title: "Bachelor's in Electronics",
      organization: "Sathyabama University",
      date: "2016 - 2020",
      description: "Focused on algorithms, data structures, and machine learning fundamentals. Graduated with honors.",
      type: "education",
      logo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035616/2_bachelors_logo_sat_hpnoeo.png",
      details: [
        {
          title: "Programming in MATLAB",
          description: "Acquired foundational skills in MATLAB, focusing on its application in signal processing analysis.",
        },
        {
          title: "Digital Logic Circuits",
          description: "Explored the construction of Digital Logic Circuits using logic gates, with an introduction to PLC programming concepts.",
        },
        {
          title: "Micro-controllers and Micro-processors",
          description: "Gained experience in programming 8085 and 8086 microcontrollers using assembly language. Introduced to modern microcontroller architectures like Cortex ARM M5 for basic applications.",
        },
        {
          title: "Engineering Mathematics",
          description: "Studied essential mathematical concepts including Laplace and Fourier transforms, Calculus, Linear Algebra, and Trigonometry, forming a solid foundation for engineering applications.",
        },
        {
          title: "Programming in C & C++",
          description: "Developed a strong foundation in C and C++ programming languages, with additional exposure to modern C++ concepts and parallel programming techniques.",
        },
        {
          title: "Embedded systems",
          description: "Explored the theory and architecture of embedded systems, understanding the importance of low-level programming in managing memory constraints for various applications.",
        },
      ],
    },
  ] as TimelineItem[],
  experience: [
    {
      id: 4,
      title: "Automation Engineer",
      organization: "Rivian",
      date: "2023 - Present",
      description:
        "Leading the development of autonomous robotic systems for industrial applications. Implementing machine learning algorithms for improved robot perception and decision-making.",
      type: "experience",
      logo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/1_riv_logo_pxqnlo.jpg",
      details: [
        {
          title: "Production Line",
          description:
            "Active part of the installation, maintenance, and troubleshooting of ABB robots; Ensured high-quality painted units and minimized downtime by proactively managing production processes.",
        },
        {
          title: "Cost Savings Projects",
          description: "Developed RAPID programming scripts for ABB robots using RobotStudio; Automated calculations for units-vs-vision fails and material consumption, while monitoring robot health to prevent issues.",
        },
        {
          title: "Maintenance and Efficiency Work",
          description: "Created calibration routines for resolver offsets and assisted in improving workflows and rebuilding equipment as needed.",
        },
      ],
      gallery: {
        title: "Manufacturing Robotics",
        images: [
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/2_paint_ukd4pp.jpg", alt: "Paint Robots" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/3_abb_sim_tpryj6.png", alt: "ABB Simulation" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/1_IRB5500_nilgqv.jpg", alt: "IRB5500" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/4_IRB4400_wkalte.jpg", alt: "IRB4400" },
        ],
      },
    },
    {
      id: 5,
      title: "Software Eng. Intern",
      organization: "Stryker",
      date: "May 2022 - Aug 2022",
      description:
        "Developed and deployed machine learning models for computer vision applications. Collaborated with cross-functional teams to integrate AI solutions into existing products.",
      type: "experience",
      logo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035616/1_stryker_logo_pca6fh.jpg",
      details: [
        {
          title: "Component Testing",
          description:
            "Developed efficient and optimized component-level test cases using advanced C++ concepts, making a significant contribution to the development of production-level code.",
        },
        {
          title: "Registration",
          description: "Ensured the properfunctioning of bone registration algorithms, known for their challenging tech stacks, by covering approximately 20 percent of the workflow.",
        },
        {
          title: "Shared Point Lessons",
          description: "Created easily understandable diagrams and crafted flowcharts for Software Design Description (SDD) to document my learning and presented them to the company; These resources were retained by the company to streamline code comprehension, accelerate the learning of future interns, and improve productivity.",
        },
        {
          title: "Onboaridng",
          description: "Identified hindrances in the new hire onboarding process and developed a report to address them,resulting in a reduction of setup time, increased productivity, and ensured a smooth transition for new employees.",
        },
        {
          title: "Work Demo",
          description: "Demonstrated a quick understanding of the complexities of bone registration and applied my knowledge to create effective test cases, presenting my work to the entire company at the end of summer; Received high praise for my contributions.",
        },
        {
          title: "Development Tools",
          description: "Utilized various development tools such as Perforce, Qt, Docker, Jira, and SDLC to streamline the development process and contribute to the overall success of the team and the company.",
        },
      ],
      gallery: {
        title: "Surgical Robotics",
        images: [
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/1_intern_qnv2tg.jpg", alt: "Internship" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/2_mako_pwbbgb.jpg", alt: "MAKO 3.5" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/3_knee_brsvru.jpg", alt: "Knee Replacement" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035617/4_reg_gsthpb.png", alt: "Registration" },
        ],
      },
    },
    {
      id: 6,
      title: "Research Assistant",
      organization: "University of Maryland, CP",
      date: "Jan 2023 - May 2023",
      description: "Conducted research on Concentric circle formation algorithms for swarm Kilobots",
      type: "experience",
      logo: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035616/1_research_logo_umd_ie6pd9.png",
      details: [
        {
          title: "Swarm Algorithm Experiments",
          description:
            "Conducted a series of captivating experiments to investigate and compare the performance of kilobots when operating individually versus in pairs, or DUOs, to dynamically observe how they form various shape formations; Analyzed and interpreted the results to gain insights into their behavior and capabilities.",
        },
        {
          title: "Embedded C coding",
          description:
            "Modified and organized the codebase, correcting errors,removing redundant code, and providing clear explanations using flowcharts and README documentation;Thoroughly documented forfuture maintenance support. Assisted with the triangulation method of concentric circle formation in DUO's",
        },
        {
          title: "Modelling",
          description:
            "Designed and developed physical chassis for kilobots with collision avoidance mechanisms to prevent attachments during operation, significantly improving their overall performance and durability, and contributing to the success of project",
        },
      ],
      gallery: {
        title: "Kilobots",
        images: [
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035616/1_kilobots_rgyfhj.jpg", alt: "Kilobots" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035616/4_kilo_prgm_gw35tu.jpg", alt: "Deploying Code" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035616/2_single_ytwqaq.jpg", alt: "Single's Circle" },
          { src: "https://res.cloudinary.com/dzujcleva/image/upload/v1742035616/3_duo_dbqyjb.jpg", alt: "Duo's Circle" },
        ],
      },
    },
  ] as TimelineItem[],
}

