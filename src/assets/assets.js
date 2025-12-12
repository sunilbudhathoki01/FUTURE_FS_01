import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaLightbulb,
  FaMobileAlt,
  FaNodeJs,
  FaPaintBrush,
  FaReact,
  FaServer,
  FaStripe,
  FaTools,
} from "react-icons/fa";
import profileImg from "../assets/Images/profileImg.png";
import profileImg2 from "../assets/Images/profileImg2.jpg";
import profileImg3 from "../assets/Images/profileImg3.jpg";
import image from "../assets/Images/image.png";

export const assests = {
  profileImg,
};
export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solution to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything i create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean code",
    description:
      "I write maintainable,efficient code following best pratices and modern patterns.",
    color: "text-purple",
  },
];
export const skills = [
  {
    icon: FaReact,
    title: "frontend development",
    description:
      "Building responsive and interactive user interfacevwith modern frameworks",
    tags: ["react", "vue.js", "Angular", "Typescript"],
  },
  {
    icon: FaNodeJs,
    title: "Backend Development",
    description:
      "Creating powerful, scalable server-side applications and REST APIs.",
    tags: ["Node.js", "Express.js", "Django", "Laravel", "NestJS"],
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description:
      "Designing optimized and secure databases for application needs.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Mongoose"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications with modern technologies.",
    tags: ["React Native", "Flutter", "Android", "iOS"],
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and maintaining applications with best DevOps practices.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify"],
  },
  {
    icon: FaTools,
    title: "Tools & Technologies",
    description:
      "Using modern tools to enhance productivity and collaboration.",
    tags: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export const projects = [
  {
    title: "E-book store",
    description:
      "A modern, full-stack e-book store platform built using the MERN stack (MongoDB, Express, React, Node.js). Features include secure authentication, dynamic catalog browsing, and efficient state management for a seamless user experience.",
    image: profileImg,
    tech: ["react", "node", "mongodb", "express"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Gym App",
    description:
      "An intuitive fitness companion that takes the guesswork out of training. The app allows users to create custom routines, track sets, reps, and weight, and visualize their journey toward specific fitness goals. It's the perfect tool for consistent, data-driven personal training.",
    image: profileImg2,
    tech: ["react", "node", "mongodb", "stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "MegaMartX",
    description:
      "A robust e-commerce application built on the MERN stack, designed for high scalability. Features include: secure JWT-based user authentication, dynamic product filtering, integrated shopping cart management, and a streamlined multi-step checkout process.",
    image: profileImg3,
    tech: ["react", "node", "mongodb", "stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },

  {
    title: "shopNexa",
    description:
      "Developed a large-scale e-commerce solution engineered for high concurrency and zero downtime. Features a microservices-inspired architecture to ensure robust performance and flexibility, alongside advanced Redis caching and database optimization for rapid product retrieval under massive load.",
    image: image,
    tech: ["react", "node", "mongodb", "stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: " backend developer",
    company: "TechCorp Inc",
    duration: "2024-2025",
    description:
      "junior backend development for enterprise clients,implementing modern frameworks.",
    color: "purple",
  },
];
