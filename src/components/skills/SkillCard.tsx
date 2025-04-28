import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  iconColor: string;
}

const SkillCard = ({ title, items, icon: Icon, iconColor }: SkillCardProps) => {
  return (
    <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <Icon size={20} className={iconColor} />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-gray-400">{items.join(', ')}</p>
    </div>
  );
};

export default SkillCard;