import React, { useState } from 'react';
import { Search, Code, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Languages', 'Tools & Frameworks', 'Software Engineering', 'Core Competencies'];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-left border-b-2 pb-4 border-[#1A1A1A] dark:border-[#3d3d3d] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
              // SECTION 02 //
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
            }`}>
              Skills & Expertise
            </h2>
          </div>
          <p className={`max-w-xl text-xs sm:text-sm font-mono ${
            darkMode ? 'text-[#a0a0a0]' : 'text-[#555555]'
          }`}>
            My toolkit for crafting thoughtful, scalable, and enterprise-ready software systems.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 font-mono text-xs font-bold transition-all cursor-pointer border-2 ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0px_#3B82F6] dark:bg-[#3B82F6] dark:border-[#60A5FA]'
                    : darkMode
                    ? 'bg-[#1A1A1A] border-[#3d3d3d] text-[#b8b8b8] hover:border-[#3B82F6]'
                    : 'bg-white border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F4F4F1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${
              darkMode ? 'text-[#888888]' : 'text-[#666666]'
            }`} />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-1.5 font-mono text-xs border-2 transition-all focus:outline-none focus:border-[#3B82F6] ${
                darkMode
                  ? 'bg-[#1A1A1A] border-[#3d3d3d] text-[#F4F4F1] placeholder-[#666666]'
                  : 'bg-white border-[#1A1A1A] text-[#1A1A1A] placeholder-[#888888]'
              }`}
            />
          </div>
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-2.5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`px-3.5 py-1.5 font-mono text-xs font-bold border-2 transition-all duration-150 flex items-center gap-2 ${
                darkMode
                  ? 'bg-[#1A1A1A] border-[#3d3d3d] text-[#F4F4F1] hover:border-[#3B82F6] hover:shadow-[3px_3px_0px_#3B82F6]'
                  : 'bg-white border-[#1A1A1A] text-[#1A1A1A] hover:shadow-[3px_3px_0px_#1A1A1A]'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-[#3B82F6]"></span>
              <span>{skill.name}</span>
            </div>
          ))}
          {filteredSkills.length === 0 && (
            <p className={`text-xs font-mono py-8 ${darkMode ? 'text-[#888888]' : 'text-[#666666]'}`}>
              No skills found matching "{searchQuery}".
            </p>
          )}
        </div>

      </div>
    </section>
  );
};
