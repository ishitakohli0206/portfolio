// All content here is sourced directly from Ishita Kohli's resume.
// Nothing invented — if it isn't in the resume, it isn't here.

export const profile = {
  name: "Ishita Kohli",
  role: "Full-Stack Engineer",
  positioning: "Full-stack engineer building fast, reliable web systems.",
  intro:
    "I'm a full-stack engineer focused on React and Node.js, with two production internships behind me building web applications and REST APIs used by real people. I like the backend as much as the interface — query optimization, auth, and the parts that keep an app fast under load.",
  location: "New Delhi, India",
  phone: "+91 9717612075",
  email: "ishitakohli0206@gmail.com",
  github: "https://github.com/ishitakohli0206",
  githubLabel: "github.com/ishitakohli0206",
  linkedin: "https://linkedin.com/in/ishitakohli2006",
  linkedinLabel: "linkedin.com/in/ishitakohli2006",
  resumeFile: "/Ishita_Kohli_Resume.pdf",
  availability: "Open to internship opportunities",
};

export const stats = [
  { value: "2", label: "Production internships" },
  { value: "15+", label: "REST APIs shipped" },
  { value: "500+", label: "Users served" },
  { value: "3rd", label: "NSUT Hackathon, 200+ teams" },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design", "SEO Optimization"],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Microservices",
      "MySQL",
      "Redis",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub Actions", "Docker", "VS Code", "Postman"],
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOPS",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
      "System Design",
      "Linux",
      "CI/CD",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "B2World (BTOW Pvt. Ltd.)",
    role: "Full Stack Web Developer Intern",
    duration: "January 2026 – April 2026",
    bullets: [
      "Engineered a School ERP (React / Node / MySQL) serving 500+ students, with modules for attendance, fees, quizzes, and assignments.",
      "Architected 15+ REST APIs with JWT auth and RBAC, cutting average response time by 35% via query optimization and indexing.",
      "Automated CI/CD via GitHub Actions, cutting deployment effort by 60%.",
    ],
  },
  {
    company: "Intact Market Research India Pvt. Ltd.",
    role: "Web Developer Intern",
    duration: "June 2025 – August 2025",
    bullets: [
      "Boosted Lighthouse performance score by 35% via lazy loading, code splitting, and image optimization across a production React app.",
      "Improved search visibility by 25% through semantic HTML, meta structuring, and Core Web Vitals optimization.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  tech: string[];
  description: string[];
  github?: string;
  live?: string;
  accent: "blue" | "violet";
};

export const projects: Project[] = [
  {
    name: "School ERP",
    tagline: "Role-based school management system for 500+ students",
    tech: ["React", "Node.js", "Express", "MySQL"],
    description: [
      "Built at B2World (BTOW Pvt. Ltd.) to replace manual attendance and fee tracking with a role-based web platform.",
      "Designed an RBAC system with 4 roles — admin, teacher, student, parent — including a dedicated parent portal for real-time attendance and fee tracking.",
      "Built an optimized SQL query and indexing strategy supporting 500+ concurrent users with sub-200ms response times.",
    ],
    github: "https://github.com/ishitakohli0206/school-erp",
    accent: "blue",
  },
  {
    name: "BimaFy",
    tagline: "AI-powered insurance advisor and recommendation chatbot",
    tech: ["React", "Python", "NLP", "scikit-learn"],
    description: [
      "An AI insurance advisor combining an NLP recommendation engine with a conversational chatbot.",
      "Built a recommendation engine reaching ~85% accuracy, paired with a chatbot handling 10+ query intents.",
      "Awarded 3rd place among 200+ teams at NSUT Fintechstico 2025.",
    ],
    live: "https://bimafyaiinsuranceadvisor.netlify.app",
    accent: "violet",
  },
];

export const achievement = {
  place: "3rd",
  label: "Place",
  event: "NSUT Fintechstico 2025",
  detail: "out of 200+ teams",
  project: "BimaFy — AI Insurance Advisor",
};

export const education = {
  degree: "B.Tech, Computer Science Engineering (Data Science)",
  school: "Bhagwan Parshuram Institute of Technology (GGSIPU)",
  grad: "Expected 2027",
  cgpa: "8.8 CGPA",
};

export type LeadershipItem = {
  role: string;
  org: string;
  duration: string;
  detail: string;
};

export const leadership: LeadershipItem[] = [
  {
    role: "Secretary",
    org: "Rotaract Club of Delhi Rohini Saanjh",
    duration: "October 2025 – May 2026",
    detail: "Spearheaded 80+ events and directed a 70-member volunteer team.",
  },
  {
    role: "Content Writing Intern",
    org: "NDTV",
    duration: "March 2026 – May 2026",
    detail: "Produced tech & culture pieces for a national digital platform.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
