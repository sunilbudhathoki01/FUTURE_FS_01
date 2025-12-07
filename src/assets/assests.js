import {
  FaDatabase,
  FaLightbulb,
  FaNodeJs,
  FaPaintBrush,
  FaReact,
  FaServer,
  FaStripe,
} from "react-icons/fa";

export const assests = {
  profileImg,
};
export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description: "I love creating unique solution to complex problems",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description: "Beautiful design and user experience",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean code",
    description: "clean and tidy code",
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
    icon: FaServer,
    title: "Backend development",
    description: "creating robust server side application and RESTful APIs",
    tags: ["Node", "Django", "Express", "laravel"],
  },
  {
    icon: FaServer,
    title: "database management",
    description: "building database store for managing data ",
    tags: ["postgresssql", "sql", "mongoose", "mongodb"],
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
