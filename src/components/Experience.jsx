import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-[#020C1B] to-[#0A192F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent hidden md:block"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.id} className={`relative flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-start pt-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#0A192F] z-10 shadow-lg shadow-cyan-400/50"></div>
                  </div>

                  {/* Content card */}
                  <Card className="flex-1 bg-[#112240] border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                            <Building2 className="w-5 h-5" />
                            <span className="text-lg">{exp.company}</span>
                          </div>
                        </div>
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/50 px-3 py-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;