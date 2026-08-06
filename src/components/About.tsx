import React from 'react';
import { User, Heart, Sparkles, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-left border-b-2 pb-4 border-[#1A1A1A] dark:border-[#3d3d3d] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
              // SECTION 01 //
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
            }`}>
              About Me
            </h2>
          </div>
          <p className={`max-w-xl text-xs sm:text-sm font-mono ${
            darkMode ? 'text-[#a0a0a0]' : 'text-[#555555]'
          }`}>
            Combining technical computer information systems expertise with an eye for clean UI design and process automation.
          </p>
        </div>

        {/* 3 About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalInfo.aboutCards.map((card, idx) => {
            const icons = [<User className="w-4 h-4" />, <Code2 className="w-4 h-4" />, <Sparkles className="w-4 h-4" />];
            return (
              <div
                key={idx}
                className={`p-6 border-2 transition-all duration-200 text-left flex flex-col justify-between ${
                  darkMode ? 'geo-shadow-dark' : 'geo-shadow-light'
                }`}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase px-2 py-0.5 bg-[#1A1A1A] text-white dark:bg-[#3B82F6] dark:text-white">
                    {icons[idx % icons.length]}
                    <span>{card.title}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    darkMode ? 'text-[#d8d8d8]' : 'text-[#333333]'
                  }`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
