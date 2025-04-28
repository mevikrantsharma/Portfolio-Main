import React from 'react';
import { ArrowRight } from 'lucide-react';
import CubeBackground from './background/CubeBackground';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-blue">
      {/* 3D Cubes Background */}
      <CubeBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fadeIn">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Vikrant Sharma
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 animate-fadeIn animation-delay-200">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center space-x-4 animate-fadeIn animation-delay-400">
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm transition-all duration-300 text-base sm:text-lg"
          >
            View My Work
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scrollMouse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;