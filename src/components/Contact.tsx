import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Send, Sparkles, CheckCircle2, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please complete all form fields.');
      return;
    }
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-left border-b-2 pb-4 border-[#1A1A1A] dark:border-[#3d3d3d] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
              // SECTION 05 //
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
            }`}>
              Get In Touch
            </h2>
          </div>
          <p className={`max-w-xl text-xs sm:text-sm font-mono ${
            darkMode ? 'text-[#a0a0a0]' : 'text-[#555555]'
          }`}>
            Drop a message to discuss full-stack opportunities, software engineering roles, or project inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className={`p-6 border-2 space-y-6 ${
              darkMode ? 'geo-shadow-dark' : 'geo-shadow-light'
            }`}>
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#3B82F6]">
                  <Sparkles className="w-4 h-4" />
                  <span>Contact Info</span>
                </div>
                <h3 className={`font-serif text-2xl font-bold ${
                  darkMode ? 'text-[#F4F4F1]' : 'text-[#1A1A1A]'
                }`}>
                  Cherish Agusionu
                </h3>
                <p className={`text-xs ${darkMode ? 'text-[#c8c8c8]' : 'text-[#444444]'}`}>
                  Please feel free to reach out if you have any questions or opportunities!
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t-2 border-[#1A1A1A]/20 dark:border-[#3d3d3d] text-xs">
                
                {/* Email */}
                <div className="flex items-center justify-between gap-2 p-3 border-2 border-[#1A1A1A] dark:border-[#3d3d3d] bg-[#1A1A1A] dark:bg-[#121212]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#3B82F6]" />
                    <div>
                      <p className="text-[10px] uppercase font-mono font-bold text-[#3B82F6]">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="font-mono font-bold hover:underline">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 border border-[#1A1A1A] dark:border-[#3d3d3d] hover:bg-[#3B82F6] hover:text-white"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3 border-2 border-[#1A1A1A] dark:border-[#3d3d3d] bg-[#1A1A1A] dark:bg-[#121212]">
                  <Phone className="w-4 h-4 text-[#3B82F6]" />
                  <div>
                    <p className="text-[10px] uppercase font-mono font-bold text-[#3B82F6]">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="font-mono font-bold hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 border-2 border-[#1A1A1A] dark:border-[#3d3d3d] bg-[#1A1A1A] dark:bg-[#121212]">
                  <MapPin className="w-4 h-4 text-[#3B82F6]" />
                  <div>
                    <p className="text-[10px] uppercase font-mono font-bold text-[#3B82F6]">Location</p>
                    <p className="font-mono font-bold">{personalInfo.location}</p>
                  </div>
                </div>

              </div>

              {/* Social Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-geo-secondary flex-1 py-2 text-xs flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4 text-[#3B82F6]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-geo-secondary flex-1 py-2 text-xs flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#3B82F6]" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 border-2 ${
              darkMode ? 'geo-shadow-dark' : 'geo-shadow-light'
            }`}>
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 font-mono">
                  <div className="w-12 h-12 border-2 border-[#1A1A1A] dark:border-[#3B82F6] bg-[#3B82F6] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold">Message Delivered!</h4>
                  <p className={`text-xs max-w-md mx-auto ${darkMode ? 'text-[#c8c8c8]' : 'text-[#444444]'}`}>
                    Thank you for reaching out, {formData.name}! Cherish has received your message and will get back to you at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="btn-geo-primary px-6 py-2 text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3 py-2.5 font-mono text-xs border-2 transition-all focus:outline-none focus:border-[#3B82F6] ${
                          darkMode ? 'bg-[#121212] border-[#3d3d3d] text-white placeholder-[#666666]' : 'bg-white border-[#1A1A1A] text-[#1A1A1A] placeholder-[#888888]'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 py-2.5 font-mono text-xs border-2 transition-all focus:outline-none focus:border-[#3B82F6] ${
                          darkMode ? 'bg-[#121212] border-[#3d3d3d] text-white placeholder-[#666666]' : 'bg-white border-[#1A1A1A] text-[#1A1A1A] placeholder-[#888888]'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1">Your Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3 py-2.5 font-mono text-xs border-2 transition-all focus:outline-none focus:border-[#3B82F6] ${
                        darkMode ? 'bg-[#121212] border-[#3d3d3d] text-white placeholder-[#666666]' : 'bg-white border-[#1A1A1A] text-[#1A1A1A] placeholder-[#888888]'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-geo-primary w-full py-3 text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
