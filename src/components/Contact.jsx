import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Contact = () => {
  const { personal } = portfolioData;

  const contactMethods = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: 'cyan' },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, color: 'blue' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/rohitprakash', href: personal.linkedin, color: 'cyan' },
    { icon: Github, label: 'GitHub', value: 'github.com/47018rohit', href: personal.github, color: 'blue' }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0A192F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a key={index} href={method.href} target={method.label === 'LinkedIn' || method.label === 'GitHub' ? '_blank' : undefined} rel="noopener noreferrer" className="group">
                  <Card className="bg-[#112240] border-cyan-400/20 p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-400 text-sm mb-1">{method.label}</p>
                        <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors break-all">{method.value}</p>
                      </div>
                      <Send className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Location */}
          <Card className="bg-[#112240] border-cyan-400/20 p-8 text-center hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-cyan-500/10 rounded-full">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400 mb-2">Currently Located In</p>
                <p className="text-white text-xl font-semibold">{personal.location}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;