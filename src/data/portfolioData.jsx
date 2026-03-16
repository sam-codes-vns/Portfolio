import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiPostman
} from "react-icons/si";

export const personalInfo = {
  name: "Samriddhi Jaiswal",
  title: "Full Stack Developer",
  email: "samriddhijaiswal59@gmail.com",
  linkedin: "https://www.linkedin.com/in/samriddhi-jaiswal-a17029j/",
  github: "https://github.com/sam-codes-vns",
  resumeLink: "/AditiAryaResume.pdf",
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. With a strong foundation in Computer Science and hands-on experience in modern web technologies, I thrive in collaborative environments and love tackling new challenges.",
  shortBio: "I build things for the web.",
};

export const education = [
  {
    institution: "NIMS University",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "Sep 2022 – Present",
    score: "CGPA: 8.56/10",
  },
  {
    institution: "Happy Model School",
    degree: "Class 12th CBSE",
    duration: "April 2021 - June 2022",
    score: "90.0%",
  },
  {
    institution: "Happy Model School",
    degree: "Class 10th CBSE",
    duration: "April 2019 - March 2020",
    score: "93.33%",
  },
];

export const projects = [
  {
    title: "DevLink",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description: [
      <>
        Designed and developed a{" "}
        <span className="text-text-primary font-medium">
          full-stack developer community platform
        </span>{" "}
        enabling users to create profiles, share projects, and collaborate.
      </>,
      <>
        Owned the system end-to-end by implementing{" "}
        <span className="text-text-primary font-medium">
          frontend architecture
        </span>
        , <span className="text-text-primary font-medium">backend APIs</span>,
        and{" "}
        <span className="text-text-primary font-medium">
          secure authentication
        </span>
        .
      </>,
    ],
    date: "June 2025 – July 2025",
    githubLink: "https://github.com/aditiarya37",
    liveLink: "https://devlink-umber.vercel.app",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
    image: "/DevLink.png",
  },
  {
    title: "MaViK-39",
    tech: ["RAG", "IoT", "React.js", "TensorFlow", "Cloud"],
    description: [
      <>
        <span className="text-accent-1 font-semibold">
          National Finalist SIH 2025
        </span>
        .
      </>,
      <>
        Delivered an{" "}
        <span className="text-text-primary font-medium">
          IoT-enabled lab management
        </span>{" "}
        web application, decreasing equipment downtime by{" "}
        <span className="text-accent-1 font-semibold">25%</span>.
      </>,
      <>
        Integrated{" "}
        <span className="text-text-primary font-medium">
          biometric authentication
        </span>
        , voice interface, and{" "}
        <span className="text-text-primary font-medium">
          RAG-powered AI chatbot
        </span>
        , improving operational efficiency by{" "}
        <span className="text-accent-1 font-semibold">40%</span>.
      </>,
    ],
    date: "Nov 2025 – Dec 2025",
    githubLink: "https://github.com/aditiarya37",
    liveLink: "https://mavik-39.vercel.app", // Added Live Link
    category: "IoT & AI",
    icon: <FaCode size={24} className="text-accent-1" />,
    image: "/MaViK-39.jpeg",
  },
  {
    title: "AyurTrace",
    tech: ["Hyperledger Fabric", "IoT", "React.js", "Smart Contracts"],
    description: [
      <>
        <span className="text-accent-1 font-semibold">
          1st Place Winner SIH 2025 Round 1
        </span>
        .
      </>,
      <>
        Directed a{" "}
        <span className="text-text-primary font-medium">
          blockchain-based supply chain
        </span>{" "}
        web application for Ayurvedic herb traceability.
      </>,
      <>
        Implemented{" "}
        <span className="text-text-primary font-medium">
          immutable on-chain tracking
        </span>{" "}
        with QR verification, ensuring{" "}
        <span className="text-accent-1 font-semibold">
          100% supply chain transparency
        </span>
        .
      </>,
    ],
    date: "Aug 2025 – Sep 2025",
    githubLink: "https://github.com/aditiarya37",
    liveLink: "https://ayurtrace-sepia.vercel.app", // Added Live Link
    category: "Blockchain",
    icon: <FaDatabase size={24} className="text-accent-1" />,
    image: "/AyurTrace.png",
  },
];

export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "AWS Cloud", icon: <SiGooglecloud /> },
  ],
  coreCompetencies: [
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies",
    "Problem Solving",
  ],
  relatedCoursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Web Development",
    "Database Management Systems",
    "Software Engineering Principles",
    "Cloud Computing Fundamentals",
  ],
};

export const experience = [
  {
    role: "Web Development Intern",
    organization: "Eduexpose pvt ltd (Remote)",
    duration: "Incoming 2026",
    points: [
      "Selected as a Product Intern at Eduexpose pvt ltd.",
      "Excited to contribute to world-class digital experiences and web innovation.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    organization: "Uptoskills Tech Foundation (Remote)",
    duration: "May 2025 – July 2025",
    points: [
      "Developed key components for the Redknot platform, simplifying the global immigration process.",
      "Collaborated with engineering and design on front-end (React, UI/UX) and back-end services.",
      "Practiced agile methodologies and maintained high code quality through debugging, testing, and documentation.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};
