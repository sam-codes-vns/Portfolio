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
  SiFigma,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiRender,
  SiVercel
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
    degree: "Bachelor of Technology in Computer Science Engineering",
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
    title: "Ship365",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description: [
      <>
       Developed comprehensive  {" "}
        <span className="text-text-primary font-medium">
          order tracking system
        </span>{" "}
        with customer, agent, and admin dashboards featuring real-time GPS
        tracking, order status updates, and performance analytics.
      </>,
      <>
      Implemented secure authentication with {" "}
        <span className="text-text-primary font-medium">
          2-step OTP verification,
        </span>
        , <span className="text-text-primary font-medium">JWT-based authorization,</span>,
        and{" "}
        <span className="text-text-primary font-medium">
          role-based access control
        </span>
        for three user types (Customer, Agent, Admin).
      </>,
    ],
    date: "January 2026 – March 2026",
    githubLink: "https://github.com/sam-codes-vns/order-tracking-system",
    liveLink: "https://order-tracking-system-8q3l1y9k0-samriddhis-projects-6847250d.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
    image: "/Ship365.png",
  },
  {
    title: "CoinFlux",
    tech: ["React.js", "Coingecko API", "Html/CSS", "JavaScript"],
    description: [
      <>
        <span className="text-accent-1 font-semibold">
          National Finalist SIH 2025
        </span>
        .
      </>,
      <>
        Built a responsive {" "}
        <span className="text-text-primary font-medium">
          crypto dashboard
        </span>{" "}
        by translating{" "}
        <span className="text-accent-1 font-semibold">Figma designs</span>into production-ready UI screens.
      </>,
      <>
        Integrated   {" "}
        <span className="text-text-primary font-medium">
          live market APIs and Chart.js
        </span>
        visualizations to automate price tracking for{" "}
        <span className="text-accent-1 font-semibold">50+ cryptocurrencies</span>.
      </>,
    ],
    date: "Nov 2025 – Dec 2025",
    githubLink: "https://github.com/sam-codes-vns/Coin-Flux",
    //liveLink: "https://mavik-39.vercel.app", // Added Live Link
    category: "IoT & AI",
    icon: <FaCode size={24} className="text-accent-1" />,
    image: "/CoinFlux.png",
  },
  {
    title: "HR Management System",
    tech: ["Html/CSS", "JavaScript", "React.js", "Tailwind CSS"],
    description: [
      <>
        <span className="text-accent-1 font-semibold">
          Engineered a scalable HR dashboard supporting 50+ candidates and multiple HR users with clean component architecture.
        </span>
        
      </>,
      <>
        Deployed on{" "}
        <span className="text-text-primary font-medium">
          Vercel with responsive layouts
        </span>{" "}
        and consistent uptime across devices.
      </>,
      
    ],
    date: "Aug 2025 – Sep 2025",
    githubLink: "https://github.com/sam-codes-vns/HR_Management_System",
    liveLink: "https://hr-management-system-gules.vercel.app/", // Added Live Link
    category: "Frontend API integration",
    icon: <FaDatabase size={24} className="text-accent-1" />,
    image: "/HR_Management.png",
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
    { name: "Vercel", icon: <SiVercel /> },
    {name: "Figma", icon: <SiFigma /> },
    {name: "VS Code", icon: <FaCode /> },
    {name: "Render", icon: <SiRender /> },
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
    organization: "Eduexpose (Remote)",
    duration: "Feb 2026 - Present",
    points: [
      "Selected as a Product Intern at Eduexpose.",
      "Excited to contribute to world-class digital experiences and web innovation.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    organization: "Uptoskills Tech Foundation (Remote)",
    duration: "May 2025 – July 2025",
    points: [
      "Translated business requirements and Figma designs into responsive, scalable UI components using React & TailwindCSS.",
      "Developed reusable and modular components, improving maintainability and reducing development effort.",
      "Conducted Git-based code reviews and refactoring, improving code quality and reducing UI/UX defects.",
      " Collaborated with designers & backend developers in Agile sprints to ensure seamless feature integration and timely delivery.",
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
