import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  return (
    <div className={`min-h-screen transition-colors duration-200 font-sans selection:bg-[#3B82F6] selection:text-white ${
      darkMode ? 'dark bg-geo-dark text-[#F4F4F1]' : 'bg-geo-light text-[#1A1A1A]'
    }`}>
      {/* Header Bar */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setResumeOpen(true)}
        />

        <About darkMode={darkMode} />

        <Skills darkMode={darkMode} />

        <Projects darkMode={darkMode} />

        <Experience darkMode={darkMode} />

        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
