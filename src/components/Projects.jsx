import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Rocket, TrendingUp, Zap } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-[#0A192F] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400 hidden md:block"></div>

            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={project.id} className="relative flex gap-8">
                  {/* Timeline year marker */}
                  <div className="hidden md:flex flex-col items-center pt-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-400/50 z-10">
                      {project.year}
                    </div>
                  </div>

                  {/* Project card */}
                  <Card className="flex-1 bg-[#112240] border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 group">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <Rocket className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/50 mb-4">
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="flex items-center gap-3 mb-6 p-4 bg-cyan-500/5 rounded-lg border border-cyan-400/20">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-semibold">Impact:</span>
                      <span className="text-cyan-400">{project.impact}</span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-cyan-400" />
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
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

export default Projects;