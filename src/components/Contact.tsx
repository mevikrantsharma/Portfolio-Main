import React from 'react';
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import GeometricBackground from './background/GeometricBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const sectionRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 200 });

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-black flex flex-col justify-between relative section-hidden slide-left"
      ref={sectionRef}
    >
      <GeometricBackground />
      
      <div 
        className="flex-1 flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8 section-hidden fade-in"
        ref={contentRef}
      >
        <div className="max-w-4xl w-full mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-text-shine">
            Let's Connect
          </h2>
          
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? I'm just a message away!
          </p>

          <a
            href="mailto:vikrantsharma.muz@gmail.com"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full transition-all duration-300 border border-blue-500/20 hover:border-purple-500/40 group"
          >
            <FaEnvelope className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </a>
        </div>
      </div>

      <footer className="border-t border-blue-500/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              {[
                { icon: FaLinkedin, href: 'https://linkedin.com/in/mevikrantsharma', label: 'LinkedIn' },
                { icon: FaGithub, href: 'https://github.com/mevikrantsharma', label: 'GitHub' },
                { icon: FaHackerrank, href: 'https://hackerrank.com/mevikrantsharma', label: 'HackerRank' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 p-2 hover:bg-white/5 rounded-full group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              © 2024 <span className="font-medium">Vikrant Sharma</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;