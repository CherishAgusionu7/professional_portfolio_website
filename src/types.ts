export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl?: string;
  demoType: 'charity_water' | 'loreal_routine' | 'nasa_explorer';
  badge: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  university: string;
  location: string;
  graduationDate: string;
  relevantCourses: string[];
}

export interface Certification {
  title: string;
  issueDate: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Tools & Frameworks' | 'Software Engineering' | 'Core Competencies';
  level?: string;
  iconName?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
