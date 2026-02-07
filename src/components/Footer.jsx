import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020C1B] border-t border-cyan-400/20 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">
              <span className="text-cyan-400">{'<'}</span>
              Rohit Prakash
              <span className="text-cyan-400">{' />'}</span>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors group">
                <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors group">
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href={`mailto:${personal.email}`} className="p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
            <p className="text-sm flex items-center gap-2">
              © {currentYear} Rohit Prakash. Crafted with <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" /> and code.
            </p>
            <p className="text-sm">
              Built with React, Tailwind CSS & shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;