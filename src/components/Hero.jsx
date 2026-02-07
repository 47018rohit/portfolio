import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020C1B] via-[#0A192F] to-[#112240]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fadeInUp">
            <div className="inline-block">
              <span className="text-cyan-400 font-mono text-sm tracking-wider">Hi, my name is</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight typewriter">
              {personal.name}
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-400">
              {personal.title}
            </h2>
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
              {personal.tagline}
            </p>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="group">
                <Button variant="outline" size="icon" className="border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
                  <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                <Button variant="outline" size="icon" className="border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a href={`mailto:${personal.email}`} className="group">
                <Button variant="outline" size="icon" className="border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
                  <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href={personal.resumeUrl} download>
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right content - Geometric illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-cyan-400/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-4 border-blue-400/30 rounded-lg -rotate-12 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-cyan-500/20 backdrop-blur-sm rounded-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;