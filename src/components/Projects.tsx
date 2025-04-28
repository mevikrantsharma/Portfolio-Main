import React from 'react';
import ProjectCard from './projects/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const sectionRef = useScrollReveal();

  const projects = [
    {
      title: 'Harmony',
      description: 'A modern music web application where users can listen to their favorite tracks. Built with a focus on clean design and smooth user experience.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      github: 'https://github.com/mevikrantsharma',
      demo: 'https://harmonymusic.netlify.app/'
    },
    {
      title: 'Quiz App',
      description: 'A responsive Python Tkinter-based quiz application featuring a countdown timer, dynamic question loading from JSON, auto-next on timeout, and final score display with a clean, light-themed interface.',
      technologies: ['Python', 'Tkinter', 'JSON'],
      github: 'https://github.com/mevikrantsharma/Quiz-App',
      demo: 'https://github.com/mevikrantsharma/Quiz-App'
    },
    {
      title: 'Weather Forecast UI',
      description: 'A sleek and responsive weather forecast interface with modern design elements, featuring daily and weekly weather predictions with intuitive visualization.',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/mevikrantsharma/Weather-Forecast-UI',
      demo: 'https://weatherforecastvs.netlify.app/'
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-black section-hidden scale-up"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;