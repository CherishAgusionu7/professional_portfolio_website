import React, { useState } from 'react';
import { ExternalLink, Play, Sparkles, Github, Code2, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDemoModal } from './ProjectDemoModal';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-left border-b-2 pb-4 border-[#1A1A1A] dark:border-[#3d3d3d] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
              // SECTION 03 //
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
            }`}>
              Featured Projects
            </h2>
          </div>
          <p className={`max-w-xl text-xs sm:text-sm font-mono ${
            darkMode ? 'text-[#a0a0a0]' : 'text-[#555555]'
          }`}>
            Full-stack software applications, interactive browser applications, and live API integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`p-6 border-2 transition-all duration-200 flex flex-col justify-between group relative ${
                darkMode ? 'geo-shadow-dark' : 'geo-shadow-light'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="geo-tag font-mono text-[10px] flex items-center gap-1.5 border border-[#1A1A1A]">
                    <Sparkles className="w-3 h-3 text-[#3B82F6]" />
                    {project.badge}
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1 border border-[#1A1A1A] dark:border-[#3d3d3d] transition-colors ${
                        darkMode ? 'hover:bg-[#3B82F6] text-[#F4F4F1]' : 'hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A]'
                      }`}
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3 className={`font-serif text-xl font-bold mb-1 transition-colors ${
                  darkMode ? 'text-[#F4F4F1] group-hover:text-[#60A5FA]' : 'text-[#1A1A1A] group-hover:text-[#3B82F6]'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-xs font-mono font-bold mb-3 ${
                  darkMode ? 'text-[#3B82F6]' : 'text-[#2563EB]'
                }`}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className={`text-xs leading-relaxed mb-4 ${
                  darkMode ? 'text-[#c8c8c8]' : 'text-[#444444]'
                }`}>
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                      <span className={darkMode ? 'text-[#b0b0b0]' : 'text-[#444444]'}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tools Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className={`text-[10px] px-2 py-0.5 font-mono font-bold border ${
                        darkMode 
                          ? 'bg-[#121212] border-[#3d3d3d] text-[#60A5FA]' 
                          : 'bg-[#F4F4F1] border-[#1A1A1A] text-[#1A1A1A]'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t-2 border-[#1A1A1A]/20 dark:border-[#3d3d3d] flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveDemoProject(project)}
                  className="btn-geo-primary flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try Demo</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-geo-secondary flex items-center gap-1 px-3 py-2 text-xs"
                  title="Open live deployment"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3 text-[#3B82F6]" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Interactive Demo Modal */}
      <ProjectDemoModal
        project={activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
};
