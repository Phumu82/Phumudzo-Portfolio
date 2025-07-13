import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you and explore how we can create something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="font-medium">Email</p>
                  <a href="mailto:phumudzo@example.com" className="text-blue-300 hover:text-blue-200">
                    phumudzo@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="font-medium">Location</p>
                  <p className="text-blue-200">Johannesburg, South Africa</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
                <div className="p-3 bg-teal-500 rounded-lg">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="font-medium">Status</p>
                  <p className="text-green-300">Available for opportunities</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                    <Github size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">GitHub</p>
                    <p className="text-blue-200">View my repositories</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-blue-200">Professional network</p>
                  </div>
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-6">
                <h4 className="font-semibold mb-2">Looking For</h4>
                <ul className="text-sm text-blue-200 space-y-1">
                  <li>• Internship opportunities</li>
                  <li>• Collaborative projects</li>
                  <li>• Mentorship connections</li>
                  <li>• Tech community involvement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:phumudzo@example.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Send size={20} />
              Send Me a Message
            </a>
            <p className="text-blue-200 mt-4 text-sm">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;