import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Phumudzo Oasis Munyai
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Creative Technologist dedicated to crafting innovative solutions that bridge design and technology. 
              Currently pursuing Software Development at Rosebank College.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>and</span>
                <Code size={16} className="text-blue-500" />
                <span>by Phumudzo Munyai</span>
              </div>
              
              <div className="text-gray-400 text-sm">
                © 2024 Phumudzo Oasis Munyai. All rights reserved.
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              Built with React, TypeScript, and Tailwind CSS • Hosted on GitHub Pages
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;