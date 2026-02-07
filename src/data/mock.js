export const portfolioData = {
  personal: {
    name: "Rohit Prakash",
    title: "Senior Software Engineer",
    tagline: "Building scalable systems & crafting exceptional user experiences",
    location: "Gorakhpur, India",
    email: "rohit47018@gmail.com",
    phone: "+91-9451096864",
    linkedin: "https://www.linkedin.com/in/rohit-prakash-7a07491a0/",
    github: "https://github.com/47018rohit",
    resumeUrl: "/resume.pdf",
    bio: "Senior Software Engineer with 4+ years of experience architecting high-performance systems. Specialized in event-driven architecture, real-time data processing, and building scalable microservices. Led teams in migrating legacy systems to modern tech stacks, improving performance by 40% and reducing database load by 60%."
  },

  experience: [
    {
      id: 1,
      company: "Celcius Logistics Solutions",
      role: "Senior Software Engineer",
      period: "Nov 2023 – Present",
      location: "Ahmedabad, India",
      description: "Leading full-stack development and system architecture for logistics operations.",
      achievements: [
        "Architected Kafka-based data pipeline processing 1M+ daily events with sub-second latency",
        "Led migration of legacy PHP WMS to React/TypeScript, reducing defects by 40%",
        "Integrated Redis caching layers, reducing database load by 60%",
        "Established UI component standards, accelerating feature delivery by 30%"
      ],
      technologies: ["React", "TypeScript", "Apache Kafka", "Redis", "Node.js", "Redux Toolkit"]
    },
    {
      id: 2,
      company: "EagleView India",
      role: "Senior Tech – Operations",
      period: "Apr 2021 – Nov 2023",
      location: "Bengaluru, Karnataka, India",
      description: "Optimized distributed services and led high-performance engineering initiatives.",
      achievements: [
        "Refactored core Node.js services, increasing API throughput by 30%",
        "Engineered image processing suite in React, reducing TAT by 50%",
        "Implemented OAuth2/JWT authentication across distributed services",
        "Managed cross-functional team operations and technical guidance"
      ],
      technologies: ["Node.js", "React", "OAuth2", "JWT", "PostgreSQL", "Docker"]
    },
    {
      id: 3,
      company: "Solar Secure Solutions",
      role: "Frontend Developer - Intern",
      period: "Feb 2021 – Apr 2021",
      location: "Bengaluru, Karnataka, India",
      description: "Developed responsive UI components and gained production development experience.",
      achievements: [
        "Developed responsive UI components following modern design principles",
        "Gained hands-on experience with agile development and code reviews"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3"]
    }
  ],

  projects: [
    {
      id: 1,
      name: "Fleet Tracking Microservice",
      year: "2024",
      description: "High-throughput service handling real-time GPS coordinates with zero-data loss during peak ingestion. Implemented consumer-group strategy in Kafka for fault-tolerant event processing.",
      impact: "Supports 1M+ daily events with sub-second latency",
      technologies: ["Node.js", "KafkaJS", "Redis", "PostgreSQL", "Docker"],
      highlights: [
        "Zero-data loss architecture",
        "Sub-second latency at scale",
        "Fault-tolerant processing"
      ]
    },
    {
      id: 2,
      name: "Enterprise Warehouse Dashboard",
      year: "2024",
      description: "Built live monitoring tool with real-time status updates via WebSockets for warehouse operations. Reduced management response time by 20% through intuitive visualization.",
      impact: "20% faster bottleneck resolution",
      technologies: ["React", "TypeScript", "WebSockets", "Redux Toolkit"],
      highlights: [
        "Real-time WebSocket updates",
        "Optimized rendering performance",
        "Intuitive data visualization"
      ]
    }
  ],

  skills: {
    languages: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "HTML5/CSS3", level: 85 },
      { name: "SQL", level: 80 }
    ],
    frameworks: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Redux Toolkit", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Tailwind CSS", level: 90 }
    ],
    tools: [
      { name: "Apache Kafka", level: 85 },
      { name: "Redis", level: 82 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "WebSockets", level: 85 }
    ],
    databases: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 78 }
    ],
    specialized: [
      "System Design",
      "Event-Driven Architecture",
      "Microservices",
      "Performance Tuning",
      "CI/CD",
      "API Design"
    ]
  },

  education: {
    institution: "Greater Noida Institute of Technology (GNIOT)",
    degree: "Bachelor of Technology in Automobile Engineering",
    period: "Aug 2014 – May 2018",
    location: "Greater Noida, India"
  }
};