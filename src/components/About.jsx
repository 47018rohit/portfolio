import React from 'react';
import { Card } from './ui/card';
import { MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-24 bg-[#0A192F] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <Card className="bg-[#112240] border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <p className="text-slate-300 text-lg leading-relaxed">
                  {personal.bio}
                </p>
              </Card>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-lg">{personal.location}</span>
              </div>
            </div>

            {/* Education & Quick stats */}
            <div className="space-y-6">
              <Card className="bg-[#112240] border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                    <p className="text-cyan-400 font-semibold mb-1">{education.degree}</p>
                    <p className="text-slate-300">{education.institution}</p>
                    <p className="text-slate-400 text-sm mt-2">{education.period}</p>
                  </div>
                </div>
              </Card>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#112240] border-cyan-400/20 p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">4+</p>
                  <p className="text-slate-300">Years Experience</p>
                </Card>
                <Card className="bg-[#112240] border-cyan-400/20 p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">1M+</p>
                  <p className="text-slate-300">Events/Day</p>
                </Card>
                <Card className="bg-[#112240] border-cyan-400/20 p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">40%</p>
                  <p className="text-slate-300">Defect Reduction</p>
                </Card>
                <Card className="bg-[#112240] border-cyan-400/20 p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">60%</p>
                  <p className="text-slate-300">DB Load Reduction</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;