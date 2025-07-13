import React from 'react';
import { ExternalLink, Github, Shield, Palette, GraduationCap, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cybersecurity Chatbot",
      description: "An intelligent C# chatbot with advanced memory capabilities, sentiment detection, and keyword awareness for cybersecurity assistance.",
      icon: Shield,
      tech: ["C#", ".NET", "Natural Language Processing", "Machine Learning"],
      gradient: "from-red-500 to-pink-500",
      features: ["Memory retention", "Sentiment analysis", "Keyword detection", "Security protocols"]
    },
    {
      title: "BLAREQ Morals",
      description: "A dynamic fashion website featuring stunning animations and integrated music, showcasing modern web design principles.",
      icon: Palette,
      tech: ["HTML/CSS", "JavaScript", "Web Animations", "Audio Integration"],
      gradient: "from-purple-500 to-indigo-500",
      features: ["Smooth animations", "Music integration", "Responsive design", "Modern UI/UX"]
    },
    {
      title: "LMS System",
      description: "A comprehensive Learning Management System built in Java with an intuitive GUI, voice greetings, and complete course management.",
      icon: GraduationCap,
      tech: ["Java", "Swing/JavaFX", "Database Integration", "Voice Synthesis"],
      gradient: "from-green-500 to-teal-500",
      features: ["Voice greetings", "Course management", "Student tracking", "Intuitive GUI"]
    },
    {
      title: "Number Guessing Game",
      description: "An engaging JavaScript game that challenges users with logical thinking and rewards correct guessing strategies.",
      icon: Gamepad2,
      tech: ["JavaScript", "HTML/CSS", "Game Logic", "DOM Manipulation"],
      gradient: "from-orange-500 to-yellow-500",
      features: ["Logic-based gameplay", "Score tracking", "Progressive difficulty", "Interactive feedback"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my journey through software development, from cybersecurity solutions to creative web experiences
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300">
                        <ExternalLink size={18} />
                        View Project
                      </button>
                      <button className="p-3 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              These projects represent my growth as a developer and my commitment to creating meaningful technology solutions.
            </p>
            <button className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;