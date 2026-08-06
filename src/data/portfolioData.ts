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
      description: "A Senior BCIS student at the University of North Texas (graduating Dec 2026). I bridge the gap between business operations and modern software engineering."
    },
    {
      title: "What I Love",
      icon: "Code",
      description: "Engineering interactive front-end applications, integrating AI APIs, building responsive layouts, and automating business workflows with clean code."
    },
    {
      title: "Sunlight Side",
      icon: "Sparkles",
      description: "Analytical problem-solver recognized for attention to detail, quick adaptability, systematic debugging, and a dedicated passion for continuous learning."
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: "fetch-charity-water",
    title: "Fetch – Educational Browser Game",
    subtitle: "Interactive Charity: Water Game Prototype",
    description: "Engineered an interactive browser game featuring collision detection, state management, timers, score tracking, checkpoints, and win/loss logic using vanilla JavaScript. Includes score penalties for bad drops, reset mechanics, and celebratory confetti animations.",
    tools: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Canvas API"],
    highlights: [
      "Engineered collision detection, timers, and state tracking in vanilla JS",
      "Persisted player scores and progress across sessions using LocalStorage",
      "Added score obstacles, game reset controls, and confetti celebrations",
      "Aligned layout with charity: water brand guidelines for desktop & mobile"
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
    tools: ["JavaScript", "HTML/CSS", "OpenAI API", "Cloudflare Workers", "LocalStorage", "RTL Layout"],
    highlights: [
      "Generated personalized routines using structured product JSON data and AI prompts",
      "Secured API communication and key credentials through Cloudflare Workers",
      "Implemented real-time product search, web search integration, and RTL support",
      "Maintained contextual chat history and user selection memory in LocalStorage"
    ],
    liveUrl: "https://cherishagusionu7.github.io/09-prj-loreal-routine-builder/",
    githubUrl: "https://github.com/CherishAgusionu7/09-prj-loreal-routine-builder",
    demoType: "loreal_routine",
    badge: "L'Oréal AI",
    accentColor: "#ff003b"
  },
  {
    id: "nasa-space-explorer",
    title: "NASA Space Explorer App",
    subtitle: "Real-Time Astronomy Gallery & Facts Engine",
    description: "Connects to NASA's public Astronomy Picture of the Day (APOD) API to showcase space photos and videos based on user-selected date ranges. Features enlarged media modal dialogs, APOD video entry handling, hover zoom effects, and random space facts.",
    tools: ["JavaScript", "NASA APOD API", "Responsive CSS", "Modal UI", "DevTools"],
    highlights: [
      "Connected to NASA APOD API with async/await fetch calls across custom date ranges",
      "Built custom modal views for full-res images, video embeds, and NASA explanations",
      "Handled YouTube video entries, hover zoom scaling, and 'Did You Know?' facts",
      "Applied official NASA branding colors and responsive gallery layout"
    ],
    liveUrl: "https://cherishagusionu7.github.io/07-nasa-space-explorer/",
    githubUrl: "https://github.com/CherishAgusionu7/07-nasa-space-explorer",
    demoType: "nasa_explorer",
    badge: "NASA API",
    accentColor: "#38bdf8"
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
