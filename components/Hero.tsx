import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            PM
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Phumudzo Oasis Munyai
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Creative Technologist | Future Software Developer
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital space! I'm a passionate 2nd-year Software Development student at Rosebank College, 
            dedicated to crafting innovative solutions that bridge the gap between creative design and cutting-edge technology. 
            Every line of code I write is driven by curiosity and a desire to make a meaningful impact in the tech world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:phumudzo@example.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Mail size={20} />
              Contact Me
            </a>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:border-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;