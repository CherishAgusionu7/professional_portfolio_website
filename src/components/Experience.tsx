import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin, Calendar, CheckCircle, BookOpen } from 'lucide-react';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-left border-b-2 pb-4 border-[#1A1A1A] dark:border-[#3d3d3d] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
              // SECTION 04 //
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
            }`}>
              Experience & Education
            </h2>
          </div>
          <p className={`max-w-xl text-xs sm:text-sm font-mono ${
            darkMode ? 'text-[#a0a0a0]' : 'text-[#555555]'
          }`}>
            Professional work history in enterprise data operations, process automation, and computer information systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Professional Experience Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-[#1A1A1A] text-white dark:bg-[#3B82F6] dark:text-white border border-[#1A1A1A]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className={`font-serif text-xl font-bold ${
                darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
              }`}>
                Work Experience
              </h3>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#3B82F6]">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-6 top-1.5 w-5 h-5 border-2 border-[#1A1A1A] dark:border-[#3B82F6] bg-[#3B82F6] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                  </div>

                  <div className={`p-6 border-2 transition-all ${
                    darkMode ? 'geo-shadow-dark' : 'geo-shadow-light'
                  }`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className={`font-serif text-lg font-bold ${
                          darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
                        }`}>
                          {exp.role}
                        </h4>
                        <p className="text-xs font-mono font-bold text-[#3B82F6]">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-right text-xs space-y-0.5 font-mono">
                        <div className="inline-flex items-center gap-1 text-[11px] font-bold">
                          <Calendar className="w-3 h-3 text-[#3B82F6]" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] opacity-70">
                          <MapPin className="w-3 h-3 text-[#3B82F6]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4 text-xs">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#3B82F6] font-bold mt-0.5">•</span>
                          <span className={darkMode ? 'text-[#c8c8c8]' : 'text-[#333333]'}>
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Card */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-[#1A1A1A] text-white dark:bg-[#3B82F6] dark:text-white border border-[#1A1A1A]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className={`font-serif text-xl font-bold ${
                  darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
                }`}>
                  Education
                </h3>
              </div>

              <div className={`p-6 border-2 transition-all ${
                darkMode ? 'geo-shadow-dark' : 'geo-shadow-light'
              }`}>
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#3B82F6] font-bold">
                      Graduation: {educationData.graduationDate}
                    </span>
                    <h4 className={`font-serif text-base font-bold mt-1 ${
                      darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
                    }`}>
                      {educationData.degree}
                    </h4>
                    <p className="text-xs font-mono font-bold text-[#3B82F6] mt-0.5">
                      {educationData.university} • {educationData.location}
                    </p>
                  </div>

                  <div className="pt-3 border-t-2 border-[#1A1A1A]/20 dark:border-[#3d3d3d]">
                    <p className="text-xs font-mono font-bold mb-2 flex items-center gap-1.5 text-[#3B82F6]">
                      <BookOpen className="w-3.5 h-3.5" />
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {educationData.relevantCourses.map((course, i) => (
                        <span
                          key={i}
                          className={`text-[10px] px-2 py-0.5 font-mono font-bold border ${
                            darkMode
                              ? 'bg-[#121212] border-[#3d3d3d] text-[#60A5FA]'
                              : 'bg-[#F4F4F1] border-[#1A1A1A] text-[#1A1A1A]'
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Licences Card */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-[#1A1A1A] text-white dark:bg-[#3B82F6] dark:text-white border border-[#1A1A1A]">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className={`font-serif text-xl font-bold ${
                  darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
                }`}>
                  Certifications & Licenses
                </h3>
              </div>

              <div className={`p-6 border-2 space-y-3 ${
                darkMode ? 'geo-shadow-dark' : 'geo-shadow-light'
              }`}>
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`p-3 border-2 flex items-center justify-between gap-3 ${
                      darkMode ? 'bg-[#121212] border-[#3d3d3d]' : 'bg-[#F4F4F1] border-[#1A1A1A]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                      <span className={`text-xs font-mono font-bold ${
                        darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
                      }`}>
                        {cert.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#3B82F6] text-white">
                      {cert.issueDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
