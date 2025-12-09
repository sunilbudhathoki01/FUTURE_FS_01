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
import profileImg from "../assets/Images/sunilProfessional.jpg";
import projectImg1 from "../assets/Images/profileImg1.jpg";

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
    title: "Ecommerce-platform",
    description:
      "A full featured online store with shopping cart,user authentication and payment processing",
    image: projectImg1,
    tech: ["react", "node", "mongodb", "stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description:
      "A full featured online store with shopping cart,user authentication and payment processing",
    image: projectImg1,
    tech: ["react", "node", "mongodb", "stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Ecommerce-platform",
    description:
      "A full featured online store with shopping cart,user authentication and payment processing",
    image: projectImg1,
    tech: ["react", "node", "mongodb", "stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: "senior frontend developer",
    company: "TechCorp Inc",
    duration: "2020-present",
    description:
      "leading frontend development for enterprise clients,implementing modern frameworks,and mentoring junior developer",
    color: "purple",
  },
  {
    role: "web developer",
    company: "Digital solution LLC",
    duration: "2010-2020",
    description:
      "leading frontend development for enterprise clients,implementing modern frameworks,and mentoring junior developer",
    color: "purple",
  },
];
