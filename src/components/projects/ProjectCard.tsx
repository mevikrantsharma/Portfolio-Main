import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaReact, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite, SiJson } from 'react-icons/si';
import RunningBorder from '../ui/RunningBorder';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  github,
  demo
}) => {
  // Updated getTechIcon function with new technology icons
  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return <FaReact className="text-blue-400" />;
      case 'typescript':
        return <SiTypescript className="text-blue-600" />;
      case 'tailwind':
        return <SiTailwindcss className="text-cyan-400" />;
      case 'vite':
        return <SiVite className="text-purple-500" />;
      case 'python':
        return <FaPython className="text-yellow-400" />;
      case 'json':
        return <SiJson className="text-green-400" />;
      case 'html':
        return <FaHtml5 className="text-orange-500" />;
      case 'css':
        return <FaCss3Alt className="text-blue-500" />;
      case 'bootstrap':
        return <FaBootstrap className="text-purple-600" />;
      default:
        return null;
    }
  };

  return (
    <RunningBorder>
      <div className="relative bg-white/5 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
        <div className="h-40 flex items-center justify-center bg-gradient-to-br from-black/80 to-black">
          <h2 className="text-xl font-bold text-white tracking-wider transform group-hover:scale-110 transition-transform duration-300">
            {title === 'Harmony' ? 'ዘar๓ony' : title}
          </h2>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="flex items-center gap-1 text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300"
              >
                {getTechIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              Code
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </RunningBorder>
  );
};

export default ProjectCard;