import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Code2, Wrench, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Languages', icon: Code2, items: skills.languages, color: 'cyan' },
    { title: 'Frameworks & Libraries', icon: Layers, items: skills.frameworks, color: 'blue' },
    { title: 'Tools & Technologies', icon: Wrench, items: skills.tools, color: 'cyan' },
    { title: 'Databases', icon: Database, items: skills.databases, color: 'blue' }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#020C1B] via-[#0A192F] to-[#112240] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable, high-performance applications
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <Card key={catIndex} className="bg-[#112240] border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300 font-medium group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                          <span className="text-cyan-400 font-semibold text-sm">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-slate-700">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </Progress>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Specialized skills */}
          <Card className="bg-[#112240] border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Specialized Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.specialized.map((skill, index) => (
                <Badge key={index} className="bg-cyan-500/20 text-cyan-400 border-cyan-400/50 px-4 py-2 text-base hover:bg-cyan-500/30 transition-colors cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;