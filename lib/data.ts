// Portfolio Data - Update this file with your information from your CV

export const personalInfo = {
  name: "Tshepo",
  roles: ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"],
  bio: "Crafting digital experiences with cutting-edge technology and creative design. Building the future, one line of code at a time.",
  email: "your.email@example.com",
  phone: "+1 (234) 567-890",
  location: "Available Worldwide",
  resume: "/documents/TSHEPO.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
};

export const about = {
  title: "Who I Am",
  description: `I'm a passionate full-stack developer with a keen eye for design and
    a love for solving complex problems. My journey in tech started with
    curiosity and has evolved into a career focused on creating meaningful
    digital experiences.`,
  secondParagraph: `When I'm not coding, you'll find me exploring new technologies,
    contributing to open-source projects, or sharing knowledge with the
    developer community.`,
  whatIDo: [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "API Development",
    "Database Design",
    "DevOps",
  ],
  journey: [
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Began my journey into web development with HTML, CSS, and JavaScript",
    },
    {
      year: "2021",
      title: "Full Stack Learning",
      description: "Expanded skills to include React, Node.js, and modern frameworks",
    },
    {
      year: "2022",
      title: "UI/UX Focus",
      description: "Developed passion for creating beautiful and intuitive user experiences",
    },
    {
      year: "2023",
      title: "Professional Growth",
      description: "Built real-world projects and contributed to open-source communities",
    },
  ],
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML/CSS", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Express", level: 88 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    longDescription: "Built with Next.js and Node.js, this platform features real-time inventory management, secure payment processing with Stripe, and a comprehensive admin dashboard. Includes features like product search, filtering, wishlist, and order tracking.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    image: "/images/project1.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "This application allows teams to manage projects, assign tasks, and track progress in real-time. Built with React and Firebase, it includes features like drag-and-drop task organization, team chat, and progress analytics.",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    image: "/images/project2.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts and interactive maps.",
    longDescription: "A responsive weather application that provides detailed forecasts, weather maps, and location-based recommendations. Features include 7-day forecasts, hourly updates, and interactive weather visualizations.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    image: "/images/project3.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics platform for tracking social media performance and engagement metrics.",
    longDescription: "A comprehensive analytics dashboard that aggregates data from multiple social media platforms. Provides insights into engagement rates, follower growth, content performance, and optimal posting times.",
    technologies: ["Next.js", "Python", "PostgreSQL", "Chart.js", "AWS"],
    image: "/images/project4.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills.",
    longDescription: "This very portfolio website! Built with Next.js, Tailwind CSS, and Framer Motion, featuring glassmorphism effects, particle animations, and smooth transitions. Fully responsive and optimized for performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/project5.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 6,
    title: "API Gateway",
    description: "Microservices API gateway with authentication, rate limiting, and request routing.",
    longDescription: "A scalable API gateway solution that handles authentication, rate limiting, request routing, and load balancing. Built to support microservices architecture with monitoring and logging capabilities.",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    image: "/images/project6.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    role: "Senior Full Stack Developer",
    duration: "2023 - Present",
    location: "Remote",
    description: "Leading development of scalable web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Led development of microservices architecture serving 100K+ users",
      "Improved application performance by 40% through optimization",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "AWS", "Docker"],
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    role: "Full Stack Developer",
    duration: "2021 - 2023",
    location: "San Francisco, CA",
    description: "Developed and maintained multiple client projects, focusing on user experience and performance optimization.",
    achievements: [
      "Built 10+ production applications from scratch",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with designers to implement pixel-perfect UIs",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Git"],
  },
  {
    id: 3,
    company: "StartupXYZ",
    role: "Frontend Developer",
    duration: "2020 - 2021",
    location: "New York, NY",
    description: "Focused on building responsive and interactive user interfaces for web applications.",
    achievements: [
      "Developed reusable component library used across 5 projects",
      "Improved page load times by 50% through optimization",
      "Worked closely with UX team to implement design systems",
    ],
    technologies: ["React", "JavaScript", "CSS", "HTML", "Redux"],
  },
];

