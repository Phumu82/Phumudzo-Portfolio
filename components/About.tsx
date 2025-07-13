import React from 'react';
import { Code2, Shield, Palette, Coffee } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code2, name: 'Java', level: 85 },
    { icon: Code2, name: 'JavaScript', level: 80 },
    { icon: Code2, name: 'C#', level: 75 },
    { icon: Code2, name: 'HTML/CSS', level: 90 },
    { icon: Shield, name: 'Cybersecurity', level: 70 },
    { icon: Palette, name: 'UI/UX Design', level: 65 }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Developer Journey</h3>
              
              <p className="text-gray-600 leading-relaxed">
                My journey into software development began with a fascination for how technology can solve real-world problems. 
                As a 2nd-year Software Development student at Rosebank College, I've discovered my passion lies at the 
                intersection of creative design and robust functionality.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                I believe that great software isn't just about clean code—it's about creating experiences that users love. 
                My approach combines technical precision with creative thinking, whether I'm building a cybersecurity chatbot 
                with intelligent conversation capabilities or designing an interactive fashion website with seamless animations.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                From developing learning management systems with intuitive GUIs to exploring the depths of cybersecurity, 
                I'm constantly pushing the boundaries of what I can create. Every project teaches me something new about 
                the delicate balance between form and function in software development.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <Coffee className="text-blue-600" size={24} />
                <span className="text-gray-600 italic">Fueled by coffee and curiosity</span>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon size={20} className="text-blue-600" />
                          <span className="font-medium text-gray-800">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">What Sets Me Apart</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I don't just write code—I craft digital experiences. My unique blend of technical skills and 
                  design sensibility allows me to create software that's not only functional but also intuitive and engaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;