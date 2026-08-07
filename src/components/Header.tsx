import React, { useState } from 'react';
import { Sun, Moon, FileText, Menu, X, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 border-b-2 ${
      darkMode 
        ? 'bg-[#121212]/95 border-[#3d3d3d]' 
        : 'bg-[#F4F4F1]/95 border-[#1A1A1A]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 flex items-center justify-center border-2 border-[#1A1A1A] dark:border-[#60A5FA] font-mono font-bold text-lg shadow-[2px_2px_0px_#1A1A1A] dark:shadow-[2px_2px_0px_#3B82F6] ${
            darkMode 
              ? 'bg-[#3B82F6] text-white' 
              : 'bg-[#1A1A1A] text-white'
          }`}>
            CA
          </div>
          <div>
            <span className={`font-mono text-lg sm:text-xl font-bold tracking-tight block leading-none ${
              darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
            }`}>
              {personalInfo.name}
            </span>
            <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
              darkMode ? 'text-[#60A5FA]' : 'text-[#3B82F6]'
            }`}>
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-mono font-bold uppercase tracking-wider transition-all hover:text-[#3B82F6] ${
                darkMode ? 'text-[#d8d8d8]' : 'text-[#1A1A1A]'
              }`}
            >
              // {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 transition-all border-2 ${
              darkMode 
                ? 'bg-[#1A1A1A] border-[#3B82F6] text-[#60A5FA] shadow-[2px_2px_0px_#3B82F6] hover:bg-[#252525]' 
                : 'bg-white border-[#1A1A1A] text-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="btn-geo-primary flex items-center gap-2 px-4 py-2 text-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 border-2 ${
              darkMode 
                ? 'bg-[#1A1A1A] border-[#3B82F6] text-[#60A5FA]' 
                : 'bg-white border-[#1A1A1A] text-[#1A1A1A]'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 border-2 border-[#1A1A1A] dark:border-[#3B82F6] ${
              darkMode ? 'bg-[#1A1A1A] text-[#F4F4F1]' : 'bg-white text-[#1A1A1A]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-6 pt-4 pb-6 border-b-2 transition-all ${
          darkMode ? 'bg-[#1A1A1A] border-[#3d3d3d]' : 'bg-[#FFFFFF] border-[#1A1A1A]'
        }`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-mono font-bold uppercase py-1 ${
                  darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
                }`}
              >
                // {link.name}
              </a>
            ))}
            <div className="pt-2 border-t-2 border-[#1A1A1A]/20 dark:border-[#3d3d3d] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-geo-primary flex items-center gap-2 px-4 py-2.5 text-xs w-full justify-center"
              >
                <FileText className="w-4 h-4" />
                View Full Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
