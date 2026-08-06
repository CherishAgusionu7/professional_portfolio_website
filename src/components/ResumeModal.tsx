import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo, experienceData, educationData, certificationsData, projectsData, skillsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto border-2 shadow-2xl ${
        darkMode ? 'bg-[#121212] border-[#3d3d3d] text-[#F4F4F1]' : 'bg-white border-[#1A1A1A] text-[#1A1A1A]'
      }`}>
        
        {/* Modal Controls Bar */}
        <div className={`sticky top-0 z-20 px-6 py-4 flex items-center justify-between border-b-2 backdrop-blur-md ${
          darkMode ? 'bg-[#121212]/95 border-[#3d3d3d]' : 'bg-white/95 border-[#1A1A1A]'
        }`}>
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-base uppercase">Cherish Agusionu — Full Resume</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn-geo-primary flex items-center gap-1.5 px-4 py-2 text-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className={`p-2 border-2 transition-colors ${
                darkMode ? 'bg-[#1A1A1A] border-[#3d3d3d] hover:border-[#3B82F6]' : 'bg-[#F4F4F1] border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-resume" className="p-8 sm:p-12 space-y-8 bg-white text-black font-sans text-sm">
          
          {/* Resume Title Header */}
          <div className="text-center border-b pb-6 border-gray-300">
            <h1 className="text-3xl font-bold font-serif tracking-tight text-gray-900">Cherish Agusionu</h1>
            <p className="text-xs text-gray-600 mt-1">
              346-446-7150 | caagusionu@outlook.com | Denton TX, 76209
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-blue-800 mt-2">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn: linkedin.com/in/cherish-agusionu-0a05a9360</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub: github.com/CherishAgusionu7</a>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-400 pb-1 mb-2">
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-xs leading-relaxed text-gray-700">
              {personalInfo.bio} Recognized for analytical problem-solving, attention to detail, and the ability to quickly learn new systems.
            </p>
          </div>

          {/* Technical Skills & Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-400 pb-1 mb-2">
              TECHNICAL SKILLS & COMPETENCIES
            </h2>
            <div className="text-xs space-y-1.5 text-gray-800">
              <p><span className="font-bold">Languages:</span> Java, JavaScript, SQL (MySQL), HTML/CSS</p>
              <p><span className="font-bold">Development Tools:</span> Git, GitHub, IntelliJ IDEA, VS Code, Bootstrap, Cloudflare Workers, Excel Automation</p>
              <p><span className="font-bold">Software Development:</span> Object-Oriented Programming, Application Design, Data Structures, UML Modeling, Front-End Development, DOM Manipulation</p>
              <p><span className="font-bold">Core Competencies:</span> Software Development, Attention to Detail, Problem Solving, Quick Learning & Adaptability, Technical Troubleshooting</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-400 pb-1 mb-2">
              EDUCATION
            </h2>
            <div className="flex justify-between text-xs font-bold text-gray-900">
              <span>{educationData.degree}</span>
              <span>Graduation Date: {educationData.graduationDate}</span>
            </div>
            <p className="text-xs text-gray-700 italic">{educationData.university}, {educationData.location}</p>
            <p className="text-xs text-gray-600 mt-1">
              <span className="font-semibold">Relevant Courses:</span> {educationData.relevantCourses.join(', ')}
            </p>
          </div>

          {/* Certifications & Licences */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-400 pb-1 mb-2">
              CERTIFICATIONS & LICENCES
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {certificationsData.map((c, i) => (
                <li key={i}>
                  <span className="font-medium text-gray-900">{c.title}</span> ({c.issueDate})
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-400 pb-1 mb-3">
              TECHNICAL PROJECTS
            </h2>
            <div className="space-y-4">
              {projectsData.map((p) => (
                <div key={p.id} className="text-xs space-y-1">
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>{p.title} | {p.tools.join(', ')}</span>
                    <span className="text-gray-600 font-normal">Summer 2026</span>
                  </div>
                  <p className="text-gray-700">{p.description}</p>
                  <ul className="list-disc list-inside text-gray-600 pl-2 space-y-0.5">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-400 pb-1 mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>{exp.company} — {exp.role}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-600 italic">{exp.location}</p>
                  <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
