import React from 'react';
import SkillCard from './SkillCard';
import { skillCategories } from './skillsData';

const SkillGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skillCategories.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
};

export default SkillGrid;