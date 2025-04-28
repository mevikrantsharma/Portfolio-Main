import React from 'react';
import { mainSkills } from './skillsData';

const SkillList = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {mainSkills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2">
          <skill.icon size={20} className={skill.color} />
          <span>{skill.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillList;