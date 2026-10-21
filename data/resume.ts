type Social = {
  label: string;
  handle: string;
  href: string;
  icon: "github" | "linkedin" | "x";
};

type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  href?: string;
  highlights: string[];
};

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Dhruvrajsinh Zala",
  role: "Full Stack Developer · MERN",
  bio: "MERN stack developer with 3.5+ years of experience building full-stack web applications. I work across React, Next.js, and Node.js, and currently build POS, Web, and AI-powered product features at Odoo. I also have hands-on experience with generative AI and retrieval-augmented generation (RAG).",
  location: "India",
  email: "dnzala2414@gmail.com",
  avatar: "/profile.svg",
  socials: [
    {
      label: "GitHub",
      handle: "Dhruvrajsinh131",
      href: "https://github.com/Dhruvrajsinh131",
      icon: "github",
    },
    {
      label: "LinkedIn",
      handle: "dhruvrajsinh-zala",
      href: "https://in.linkedin.com/in/dhruvrajsinh-zala-368113214",
      icon: "linkedin",
    },
    {
      label: "X",
      handle: "@dhruvrajz29",
      href: "https://x.com/dhruvrajz29",
      icon: "x",
    },
  ] satisfies Social[],
};

export const experience: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Odoo",
    location: "Gandhinagar, Gujarat",
    period: "Jun 2025 - Present",
    highlights: [
      "Completed functional and technical training, building expertise in Odoo architecture, business processes, Python, SQL, and the Odoo development framework.",
      "Took on an R&D task assigned by the CTO to evaluate the feasibility of offline silent printing in POS. Without prior Electron.js experience, learned the technology and delivered a proof of concept within two days, which later became the basis for a real customer implementation.",
      "Implemented offline silent printing for an offshore customer, delivering functionality that was not available in standard Odoo.",
      "Joined the offshore team and delivered custom features, new modules, production fixes, and migrations from older Odoo versions to Odoo 18.0.",
      "Adapted offline silent printing for Odoo 19.0 and backported compatibility to Odoo 18.0, working with the CEO and POS Product Owner before handing the solution to the POS R&D team.",
      "Built an internal Chrome extension that inserts predefined replies into Odoo's email editor and supports automatic translation.",
      "Contributed merged pull requests across Odoo repositories, including POS, Odoo AI, Spreadsheet, Website, and Web.",
      "Fixed POS and Web bugs, improved navbar responsiveness from Odoo 18.0 to master, and worked across Odoo.sh and on-premise deployments on logs and performance profiling.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer (MERN)",
    company: "Squad Technologies Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    period: "Jan 2023 - Jun 2025",
    highlights: [
      "Built an email centralization app using the Nylas API, Next.js, and Node.js, including authentication, APIs, and business logic.",
      "Migrated the Nylas API from V2 to V3 and optimized MySQL for performance and scalability.",
      "Integrated APIs into the company's CMS product using React, SWR, and React Hook Form for efficient data fetching and form management.",
      "Built a dynamic form builder with standalone Next.js and embeddable JS plugin versions.",
      "Delivered AI-powered CRM enhancements, including CSV/XLSX upload analysis, AI-assisted CMS module creation, and a multilingual content generation plugin.",
      "Built a booking availability module with booking config, calendar, and audit tracking components using Next.js and React.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "NotebookLM Clone",
    subtitle: "AI Research Assistant · RAG",
    description:
      "A personal project that recreates NotebookLM-style document Q&A using a traditional retrieval-augmented generation pipeline.",
    tech: ["React", "Node.js", "MongoDB", "RAG"],
    highlights: [
      "Implemented a traditional RAG pipeline for document-based question answering.",
      "Built a notebook-style interface for uploading sources and chatting with them.",
    ],
  },
  {
    id: 2,
    title: "LeadGun",
    subtitle: "AI Lead Generation Tool",
    description:
      "An open-source developer lead generation tool that finds hiring intent across Reddit, LinkedIn, and X, scores prospects with AI, filters spam, and sends qualified leads to Discord.",
    tech: ["Node.js", "AI", "Web Scraping", "Discord"],
    href: "https://github.com/Dhruvrajsinh131/LeadGun",
    highlights: [
      "Scans Reddit, X, and LinkedIn for hiring-intent posts and filters out spam.",
      "Scores prospects with AI and delivers qualified leads to Discord.",
    ],
  },
  {
    id: 3,
    title: "Duolingo Clone",
    subtitle: "Language Learning App",
    description:
      "A language-learning app built with React Native, featuring interactive multiple-choice questions to keep users engaged.",
    tech: ["React Native"],
    highlights: [],
  },
  {
    id: 4,
    title: "News App",
    subtitle: "Real-time News Reader",
    description:
      "A real-time news application built with React and NewsAPI, with search, filters, and pagination for a smooth browsing experience.",
    tech: ["React", "NewsAPI"],
    highlights: [],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: "B.E. in Computer Science",
    institution: "LDRP Institute of Technology and Research",
    location: "Gandhinagar, Gujarat",
    period: "2019 - 2023",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "MERN Stack",
    items: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Next.js", "React Native", "SWR", "React Hook Form"],
  },
  {
    title: "Data & AI",
    items: ["MySQL", "Generative AI", "RAG", "OpenAI", "OpenCV"],
  },
  {
    title: "Odoo Expertise",
    items: ["POS", "Web", "Website", "Spreadsheet", "Odoo AI"],
  },
  {
    title: "Tools",
    items: ["Git", "Electron.js", "Odoo.sh"],
  },
];
