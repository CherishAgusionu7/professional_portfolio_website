import { Project, Experience, Education, Certification, Skill } from '../types';

export const personalInfo = {
  name: "Cherish Agusionu",
  title: "Full-Stack Developer & Business Information Systems Senior",
  tagline: "Building software applications, automating business processes, and crafting thoughtful digital experiences.",
  email: "caagusionu@outlook.com",
  phone: "346-446-7150",
  location: "Denton, TX 76209",
  linkedin: "https://linkedin.com/in/cherish-agusionu-0a05a9360",
  github: "https://github.com/CherishAgusionu7",
  bio: "Business Computer Information Systems senior graduating in December 2026 with hands-on experience developing software applications, automating business processes, troubleshooting technical issues, and supporting enterprise data operations. Proficient in Java, JavaScript, SQL, HTML/CSS, Git, and Excel automation.",
  aboutCards: [
    {
      title: "Who I Am",
      icon: "User",
      description: "I'm a Senior studying Business Computer Information Systems at the University of North Texas. I specialize in bridging the gap between business operations and engineering to build software that drives user and company value."
    },
    {
      title: "What I Love",
      icon: "Code",
      description: "Engineering interactive front-end applications, integrating AI APIs, building responsive layouts, and automating business workflows with clean code."
    },
    {
      title: "Outside of Coding",
      icon: "Sparkles",
      description: "Beyond software development, my Christian faith inspires me to serve others, lead with integrity, and pursue excellence in everything I do. I also enjoy volunteering, mentoring youth, and exploring new technologies."
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: "fetch-charity-water",
    title: "Fetch – Educational Browser Game",
    subtitle: "Interactive Charity: Water Game Prototype",
    description: "Engineered an interactive browser game featuring collision detection, state management, timers, score tracking, checkpoints, and win/loss logic using vanilla JavaScript. Includes score penalties for bad drops and reset mechanics.",
    tools: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    highlights: [
      "Engineered an interactive browser game featuring collision detection, state management, timers, score tracking, checkpoints, and win/loss logic using vanilla JavaScript",
      "Developed responsive layouts with HTML and CSS to support desktop and mobile gameplay",
      "Implemented local storage to persist player scores and progress across sessions",
      "Debugged and optimized game logic through iterative testing and user feedback"
    ],
    liveUrl: "https://cherishagusionu7.github.io/Fetch/",
    githubUrl: "https://github.com/CherishAgusionu7/Fetch",
    demoType: "charity_water",
    badge: "charity: water",
    accentColor: "#facc15"
  },
  {
    id: "loreal-routine-builder",
    title: "L'Oréal Product-Aware Routine Builder",
    subtitle: "AI-Powered Skincare Advisor Chatbot",
    description: "Developed an AI-powered web app using AI APIs to generate personalized skincare routines from real-world L'Oréal product data (CeraVe, Garnier, Lancôme, L'Oréal Paris). Features real-time search, category filters, secured worker requests, and RTL language support.",
    tools: ["JavaScript", "HTML/CSS", "OpenAI API", "Cloudflare Workers", "LocalStorage"],
    highlights: [
      "Developed an AI-powered web app using the OpenAI API to generate personalized recommendations from real-world product data",
      "Built dynamic JavaScript features for product search, filtering, selection, and real-time UI updates",
      "Secured API requests with Cloudflare Workers, protecting sensitive API keys and backend communication",
      "Implemented localStorage and conversational memory to preserve user data and support contextual AI interactions"
    ],
    liveUrl: "https://cherishagusionu7.github.io/09-prj-loreal-routine-builder/",
    githubUrl: "https://github.com/CherishAgusionu7/09-prj-loreal-routine-builder",
    demoType: "loreal_routine",
    badge: "L'Oréal AI",
    accentColor: "#ff003b"
  }
];

export const experienceData: Experience[] = [
  {
    id: "chinyere-lee-fashions",
    role: "Sales Manager",
    company: "Chinyere Lee Fashions",
    location: "Houston TX, 77036",
    period: "11/2022 – 05/2024",
    responsibilities: [
      "Implemented and managed a digital booking and customer tracking system, reducing scheduling processing time by 50%.",
      "Built Excel-based dashboards and automated workflows to improve operational efficiency and support decision-making.",
      "Designed and maintained structured customer databases, ensuring data accuracy and system reliability.",
      "Troubleshot and resolved data-entry and workflow issues, reducing operational errors.",
      "Managed sensitive customer and financial information while maintaining data integrity and confidentiality."
    ]
  },
  {
    id: "hines-real-estate",
    role: "Intern – Accounting & Finance Department",
    company: "Hines Real Estate Investment Manager",
    location: "Houston TX, 77002",
    period: "08/2022 – 10/2022",
    responsibilities: [
      "Analyzed and corrected data inconsistencies across enterprise systems to support accurate reporting and business operations.",
      "Investigated and resolved data integrity issues through systematic troubleshooting and validation techniques.",
      "Worked with structured datasets and business applications to support analytics and decision-making processes.",
      "Automated reporting workflows using Excel, reducing manual effort and improving operational efficiency.",
      "Collaborated with cross-functional teams to document processes and improve system reliability."
    ]
  }
];

export const educationData: Education = {
  degree: "Bachelor of Science in Business Computer Information Systems",
  university: "University of North Texas",
  location: "Denton, TX",
  graduationDate: "Dec 2026",
  relevantCourses: [
    "Enterprise Programming",
    "Object-Oriented Programming",
    "Information Security",
    "Web Information Technology"
  ]
};

export const certificationsData: Certification[] = [
  {
    title: "Microsoft Word 2019 Expert",
    issueDate: "May 2023"
  },
  {
    title: "Excel Associate (Microsoft 365 Apps)",
    issueDate: "Feb 2026"
  },
  {
    title: "Texas General Lines – Life, Accident, Health & HMO License",
    issueDate: "Active"
  }
];

export const skillsData: Skill[] = [
  { name: "Java", category: "Languages" },
  { name: "JavaScript (ES6+)", category: "Languages" },
  { name: "SQL (MySQL)", category: "Languages" },
  { name: "HTML5 / CSS3", category: "Languages" },
  { name: "Git & GitHub", category: "Tools & Frameworks" },
  { name: "IntelliJ IDEA", category: "Tools & Frameworks" },
  { name: "VS Code", category: "Tools & Frameworks" },
  { name: "Bootstrap", category: "Tools & Frameworks" },
  { name: "Cloudflare Workers", category: "Tools & Frameworks" },
  { name: "Excel Automation", category: "Tools & Frameworks" },
  { name: "Object-Oriented Programming", category: "Software Engineering" },
  { name: "DOM Manipulation", category: "Software Engineering" },
  { name: "Application Design", category: "Software Engineering" },
  { name: "UML Modeling", category: "Software Engineering" },
  { name: "Data Structures", category: "Software Engineering" },
  { name: "Front-End Development", category: "Software Engineering" },
  { name: "Attention to Detail", category: "Core Competencies" },
  { name: "Problem Solving", category: "Core Competencies" },
  { name: "Technical Troubleshooting", category: "Core Competencies" },
  { name: "Quick Learning & Adaptability", category: "Core Competencies" }
];
