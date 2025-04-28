import React from 'react';
import SkillList from './skills/SkillList';
import SkillGrid from './skills/SkillGrid';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const sectionRef = useScrollReveal();
  const skillsRef = useScrollReveal({ delay: 200 });

  return (
    <section 
      id="about" 
      className="py-20 bg-black text-white section-hidden slide-right"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
            I am Vikrant Sharma from Muzaffarpur, Bihar. I am currently pursuing a Bachelor of Computer Applications at L. N. Mishra College of Business Management. I have a strong interest in programming and enjoy working with Python, JavaScript, HTML, CSS, Bootstrap and SQL. I am also proficient in development tools and IDEs such as VSCode and IDLE. Currently, I am enhancing my skills by learning Full Stack Python development from Naresh IT.</p>
            
            <div 
              className="space-y-4 section-hidden fade-in"
              ref={skillsRef}
            >
              <h3 className="text-xl font-semibold">My Skills</h3>
              <SkillList />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-lg p-6">
              <SkillGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;