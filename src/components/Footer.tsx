import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t-2 transition-colors ${
      darkMode ? 'bg-[#121212] border-[#3d3d3d]' : 'bg-[#F4F4F1] border-[#1A1A1A]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Geometric Footer Tag */}
        <div className={`px-4 py-2 border-2 text-xs font-mono font-bold flex items-center gap-2 ${
          darkMode 
            ? 'bg-[#1A1A1A] border-[#3d3d3d] text-[#F4F4F1] shadow-[2px_2px_0px_#3B82F6]' 
            : 'bg-white border-[#1A1A1A] text-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A]'
        }`}>
          <span className="w-2 h-2 bg-[#3B82F6]"></span>
          <span>PROFESSIONAL.PORTFOLIO // <strong>{personalInfo.name}</strong> • © 2026</span>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 border-2 transition-colors ${
              darkMode ? 'bg-[#1A1A1A] border-[#3d3d3d] text-[#F4F4F1] hover:border-[#3B82F6]' : 'bg-white border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 border-2 transition-colors ${
              darkMode ? 'bg-[#1A1A1A] border-[#3d3d3d] text-[#F4F4F1] hover:border-[#3B82F6]' : 'bg-white border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className={`p-2 border-2 transition-colors ${
              darkMode ? 'bg-[#1A1A1A] border-[#3d3d3d] text-[#F4F4F1] hover:border-[#3B82F6]' : 'bg-white border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="btn-geo-primary p-2 text-xs cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
