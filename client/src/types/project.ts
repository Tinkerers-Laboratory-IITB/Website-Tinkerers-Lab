/**
 * Project data types and interfaces
 */

export interface ProjectTeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface ProjectTimeline {
  id: number;
  date: string;
  milestone: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
}

export interface ProjectOutcome {
  metric: string;
  value: string;
  description: string;
}

export interface ProjectDocumentation {
  id: number;
  title: string;
  type: "image" | "video" | "pdf" | "document";
  url: string;
  description: string;
  thumbnail?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  status: "active" | "completed" | "upcoming";
  startDate: string;
  endDate?: string;
  teamSize: number;
  
  // Detailed sections
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  
  // Team and contributors
  teamMembers: ProjectTeamMember[];
  
  // Timeline
  timeline: ProjectTimeline[];
  
  // Outcomes and metrics
  outcomes: ProjectOutcome[];
  
  // Documentation and media
  documentation: ProjectDocumentation[];
  
  // Links and references
  githubRepo?: string;
  liveDemo?: string;
  website?: string;
  
  // Tags and categories
  tags: string[];
  technologies: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    slug: "ai-robotics-platform",
    title: "AI-Powered Robotics Platform",
    category: "Robotics & AI",
    shortDescription: "Building autonomous robots with machine learning capabilities",
    fullDescription: "A comprehensive robotics platform that combines hardware engineering with advanced machine learning algorithms to create autonomous robots capable of complex task execution.",
    image: "https://via.placeholder.com/1200x600?text=AI+Robotics",
    status: "active",
    startDate: "January 2024",
    endDate: "December 2024",
    teamSize: 8,
    
    overview: "The AI-Powered Robotics Platform is an ambitious project aimed at developing fully autonomous robots that can learn, adapt, and execute complex tasks in real-world environments. Our team combines expertise in mechanical engineering, software development, and machine learning to create a cutting-edge robotic system.",
    
    challenge: "The primary challenge was integrating multiple complex systems including computer vision, motion planning, and real-time decision making into a cohesive platform that could operate autonomously in unpredictable environments.",
    
    solution: "We developed a modular architecture that separates concerns between hardware control, perception, and decision-making layers. This allowed us to iterate quickly and test individual components independently before integration.",
    
    impact: "This project has potential applications in manufacturing, logistics, healthcare, and research. Early prototypes have demonstrated 95% task completion accuracy in controlled environments.",
    
    teamMembers: [
      {
        id: 1,
        name: "Dr. Rajesh Kumar",
        role: "Project Lead & AI Specialist",
        bio: "PhD in Computer Science with 8 years of robotics experience",
        image: "https://via.placeholder.com/200x200?text=Rajesh",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "rajesh@tinkerslab.com",
      },
      {
        id: 2,
        name: "Sarah Chen",
        role: "Mechanical Engineer",
        bio: "Expert in robot design and mechanical systems",
        image: "https://via.placeholder.com/200x200?text=Sarah",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "sarah@tinkerslab.com",
      },
      {
        id: 3,
        name: "Marcus Johnson",
        role: "Software Engineer",
        bio: "Full-stack developer specializing in robotics software",
        image: "https://via.placeholder.com/200x200?text=Marcus",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "marcus@tinkerslab.com",
      },
      {
        id: 4,
        name: "Priya Patel",
        role: "Machine Learning Engineer",
        bio: "Specialist in computer vision and neural networks",
        image: "https://via.placeholder.com/200x200?text=Priya",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "priya@tinkerslab.com",
      },
    ],
    
    timeline: [
      {
        id: 1,
        date: "January 2024",
        milestone: "Project Kickoff",
        description: "Team assembly and requirements gathering",
        status: "completed",
      },
      {
        id: 2,
        date: "February 2024",
        milestone: "Design Phase",
        description: "Hardware design and software architecture planning",
        status: "completed",
      },
      {
        id: 3,
        date: "April 2024",
        milestone: "Prototype V1",
        description: "First working prototype with basic autonomy",
        status: "completed",
      },
      {
        id: 4,
        date: "July 2024",
        milestone: "AI Integration",
        description: "Machine learning models integrated and trained",
        status: "completed",
      },
      {
        id: 5,
        date: "September 2024",
        milestone: "Field Testing",
        description: "Real-world environment testing and refinement",
        status: "in-progress",
      },
      {
        id: 6,
        date: "December 2024",
        milestone: "Final Release",
        description: "Production-ready version launch",
        status: "upcoming",
      },
    ],
    
    outcomes: [
      {
        metric: "Task Completion Rate",
        value: "95%",
        description: "Success rate in controlled environments",
      },
      {
        metric: "Processing Speed",
        value: "30 FPS",
        description: "Real-time vision processing capability",
      },
      {
        metric: "Autonomy Duration",
        value: "8 hours",
        description: "Continuous operation on single charge",
      },
      {
        metric: "Team Size",
        value: "8 members",
        description: "Multidisciplinary team collaboration",
      },
    ],
    
    documentation: [
      {
        id: 1,
        title: "System Architecture Diagram",
        type: "image",
        url: "https://via.placeholder.com/800x600?text=Architecture",
        description: "Complete system architecture and component relationships",
        thumbnail: "https://via.placeholder.com/200x150?text=Architecture",
      },
      {
        id: 2,
        title: "Prototype Photos",
        type: "image",
        url: "https://via.placeholder.com/800x600?text=Prototype",
        description: "High-resolution photos of the robot prototype",
        thumbnail: "https://via.placeholder.com/200x150?text=Prototype",
      },
      {
        id: 3,
        title: "Demo Video",
        type: "video",
        url: "https://via.placeholder.com/800x600?text=Demo+Video",
        description: "Live demonstration of robot capabilities",
        thumbnail: "https://via.placeholder.com/200x150?text=Video",
      },
      {
        id: 4,
        title: "Technical Documentation",
        type: "pdf",
        url: "https://via.placeholder.com/800x600?text=Documentation",
        description: "Complete technical specifications and API documentation",
        thumbnail: "https://via.placeholder.com/200x150?text=PDF",
      },
    ],
    
    githubRepo: "https://github.com/tinkerslab/ai-robotics-platform",
    liveDemo: "https://robotics-demo.tinkerslab.com",
    website: "https://robotics.tinkerslab.com",
    
    tags: ["robotics", "ai", "machine-learning", "automation"],
    technologies: ["Python", "TensorFlow", "ROS", "C++", "OpenCV"],
  },
  {
    id: 2,
    slug: "sustainable-energy-grid",
    title: "Sustainable Energy Solutions",
    category: "Energy & Sustainability",
    shortDescription: "Developing efficient solar panel prototypes and renewable energy systems",
    fullDescription: "An innovative project focused on creating next-generation solar panels and energy management systems for sustainable power generation.",
    image: "https://via.placeholder.com/1200x600?text=Solar+Energy",
    status: "active",
    startDate: "March 2024",
    endDate: "November 2024",
    teamSize: 6,
    
    overview: "The Sustainable Energy Solutions project aims to develop high-efficiency solar panels and smart energy management systems. Our goal is to make renewable energy more accessible and affordable for communities worldwide.",
    
    challenge: "Improving solar panel efficiency while reducing manufacturing costs and developing intelligent systems to optimize energy distribution and storage.",
    
    solution: "We've developed a novel multi-layer solar cell design combined with AI-powered energy management algorithms that maximize efficiency and minimize waste.",
    
    impact: "Potential to reduce energy costs by 40% and carbon emissions by 50% in pilot communities.",
    
    teamMembers: [
      {
        id: 1,
        name: "Dr. Emma Thompson",
        role: "Project Lead & Materials Scientist",
        bio: "Expert in photovoltaic materials and renewable energy",
        image: "https://via.placeholder.com/200x200?text=Emma",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "emma@tinkerslab.com",
      },
      {
        id: 2,
        name: "James Wilson",
        role: "Electrical Engineer",
        bio: "Specialist in power systems and grid integration",
        image: "https://via.placeholder.com/200x200?text=James",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "james@tinkerslab.com",
      },
      {
        id: 3,
        name: "Lisa Chen",
        role: "Software Developer",
        bio: "Developer of energy management software",
        image: "https://via.placeholder.com/200x200?text=Lisa",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "lisa@tinkerslab.com",
      },
    ],
    
    timeline: [
      {
        id: 1,
        date: "March 2024",
        milestone: "Research Phase",
        description: "Literature review and material selection",
        status: "completed",
      },
      {
        id: 2,
        date: "May 2024",
        milestone: "Prototype Development",
        description: "First solar cell prototype fabrication",
        status: "completed",
      },
      {
        id: 3,
        date: "August 2024",
        milestone: "Efficiency Testing",
        description: "Lab testing and performance validation",
        status: "in-progress",
      },
      {
        id: 4,
        date: "November 2024",
        milestone: "Field Deployment",
        description: "Installation in pilot communities",
        status: "upcoming",
      },
    ],
    
    outcomes: [
      {
        metric: "Panel Efficiency",
        value: "22%",
        description: "Improved from industry standard 18%",
      },
      {
        metric: "Cost Reduction",
        value: "35%",
        description: "Manufacturing cost per watt",
      },
      {
        metric: "Lifespan",
        value: "30+ years",
        description: "Expected operational lifespan",
      },
      {
        metric: "ROI Period",
        value: "6 years",
        description: "Return on investment timeline",
      },
    ],
    
    documentation: [
      {
        id: 1,
        title: "Solar Panel Specifications",
        type: "pdf",
        url: "https://via.placeholder.com/800x600?text=Specs",
        description: "Technical specifications and performance data",
        thumbnail: "https://via.placeholder.com/200x150?text=Specs",
      },
      {
        id: 2,
        title: "Installation Guide",
        type: "document",
        url: "https://via.placeholder.com/800x600?text=Guide",
        description: "Step-by-step installation instructions",
        thumbnail: "https://via.placeholder.com/200x150?text=Guide",
      },
    ],
    
    githubRepo: "https://github.com/tinkerslab/sustainable-energy",
    liveDemo: "https://energy-demo.tinkerslab.com",
    
    tags: ["energy", "sustainability", "solar", "renewable"],
    technologies: ["Python", "MATLAB", "Arduino", "IoT"],
  },
  {
    id: 3,
    slug: "smart-home-iot",
    title: "Smart Home IoT System",
    category: "IoT & Smart Systems",
    shortDescription: "Creating an integrated IoT platform for home automation",
    fullDescription: "A comprehensive IoT platform that connects and controls smart home devices through an intelligent central hub.",
    image: "https://via.placeholder.com/1200x600?text=Smart+Home",
    status: "completed",
    startDate: "January 2024",
    endDate: "September 2024",
    teamSize: 5,
    
    overview: "The Smart Home IoT System project delivers a complete home automation solution with voice control, automation rules, and energy optimization.",
    
    challenge: "Creating a unified platform that works with diverse IoT devices from different manufacturers while maintaining security and reliability.",
    
    solution: "Developed a middleware layer that standardizes communication protocols and provides a unified API for device control and automation.",
    
    impact: "Successfully deployed in 50+ homes with 99.5% uptime and 40% average energy savings.",
    
    teamMembers: [
      {
        id: 1,
        name: "Alex Rodriguez",
        role: "Project Lead & Full Stack Developer",
        bio: "Expert in IoT systems and cloud architecture",
        image: "https://via.placeholder.com/200x200?text=Alex",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "alex@tinkerslab.com",
      },
      {
        id: 2,
        name: "Sophia Lee",
        role: "Frontend Developer",
        bio: "Specialist in mobile and web interfaces",
        image: "https://via.placeholder.com/200x200?text=Sophia",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "sophia@tinkerslab.com",
      },
    ],
    
    timeline: [
      {
        id: 1,
        date: "January 2024",
        milestone: "Architecture Design",
        description: "System design and protocol selection",
        status: "completed",
      },
      {
        id: 2,
        date: "March 2024",
        milestone: "Core Development",
        description: "Hub firmware and API development",
        status: "completed",
      },
      {
        id: 3,
        date: "June 2024",
        milestone: "Beta Testing",
        description: "Testing with early adopters",
        status: "completed",
      },
      {
        id: 4,
        date: "September 2024",
        milestone: "Public Release",
        description: "Official product launch",
        status: "completed",
      },
    ],
    
    outcomes: [
      {
        metric: "Deployments",
        value: "50+",
        description: "Homes with active systems",
      },
      {
        metric: "Uptime",
        value: "99.5%",
        description: "System reliability",
      },
      {
        metric: "Energy Savings",
        value: "40%",
        description: "Average reduction in energy consumption",
      },
      {
        metric: "User Satisfaction",
        value: "4.8/5",
        description: "Average user rating",
      },
    ],
    
    documentation: [
      {
        id: 1,
        title: "User Manual",
        type: "pdf",
        url: "https://via.placeholder.com/800x600?text=Manual",
        description: "Complete user guide and troubleshooting",
        thumbnail: "https://via.placeholder.com/200x150?text=Manual",
      },
      {
        id: 2,
        title: "API Documentation",
        type: "document",
        url: "https://via.placeholder.com/800x600?text=API",
        description: "Developer API reference",
        thumbnail: "https://via.placeholder.com/200x150?text=API",
      },
    ],
    
    githubRepo: "https://github.com/tinkerslab/smart-home-iot",
    liveDemo: "https://smarthome-demo.tinkerslab.com",
    website: "https://smarthome.tinkerslab.com",
    
    tags: ["iot", "smart-home", "automation", "cloud"],
    technologies: ["Node.js", "React", "MQTT", "Docker", "AWS"],
  },
];
