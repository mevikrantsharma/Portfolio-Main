import { Code, Globe, Palette, Terminal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Skill {
  icon: LucideIcon;
  title: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
  icon: LucideIcon;
  iconColor: string;
}

export const mainSkills: Skill[] = [
  {
    icon: Code,
    title: 'Frontend Development',
    color: 'text-blue-400'
  },
  {
    icon: Terminal,
    title: 'Programming Languages',
    color: 'text-green-400'
  },
  {
    icon: Globe,
    title: 'Backend Development',
    color: 'text-purple-400'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    color: 'text-pink-400'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS','Bootstrap'],
    icon: Code,
    iconColor: 'text-blue-400'
  },
  {
    title: 'Programming',
    items: ['Python','JavaScript'],
    icon: Terminal,
    iconColor: 'text-green-400'
  },
  {
    title: 'Backend',
    items: ['SQL'],
    icon: Globe,
    iconColor: 'text-purple-400'
  },
  // {
  //   title: 'Design',
  //   items: ['Figma', 'Adobe XD'],
  //   icon: Palette,
  //   iconColor: 'text-pink-400'
  // }
];