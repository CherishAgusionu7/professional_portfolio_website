import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, FileText, Sparkles, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResume }) => {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="max-w-4xl flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs font-bold border-2 ${
              darkMode 
                ? 'bg-[#1A1A1A] border-[#3B82F6] text-[#60A5FA] shadow-[3px_3px_0px_#3B82F6]' 
                : 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-[3px_3px_0px_#3B82F6]'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
              <GraduationCap className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span className="uppercase">BCIS Senior @ UNT • Graduating Dec 2026</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${
                darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
              }`}>
                Hi there, I'm <span className="underline decoration-[#3B82F6] decoration-4 underline-offset-4">Cherish Agusionu</span>
              </h1>
              <p className={`text-base sm:text-lg font-normal leading-relaxed max-w-2xl ${
                darkMode ? 'text-[#c8c8c8]' : 'text-[#333333]'
              }`}>
                {personalInfo.title} specializing in building scalable full-stack web applications, AI integrations, automated cloud pipelines, and data-driven solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="btn-geo-primary inline-flex items-center gap-2 px-6 py-3 text-xs"
              >
                <span>Check Out Some of My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-geo-secondary inline-flex items-center gap-2 px-5 py-3 text-xs"
              >
                <FileText className="w-4 h-4 text-[#3B82F6]" />
                <span>View Full Resume</span>
              </button>
            </div>

            {/* Contact Info Pills */}
            <div className={`pt-6 border-t-2 w-full flex flex-wrap items-center gap-4 text-xs font-mono font-semibold ${
              darkMode ? 'border-[#3d3d3d] text-[#b8b8b8]' : 'border-[#1A1A1A] text-[#2c2c2c]'
            }`}>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-1.5 hover:text-[#3B82F6] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>{personalInfo.location}</span>
              </div>

              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#3B82F6] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>GitHub</span>
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#3B82F6] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
