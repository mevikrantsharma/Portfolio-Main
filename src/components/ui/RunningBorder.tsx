import React from 'react';

interface RunningBorderProps {
  children: React.ReactNode;
  className?: string;
}

const RunningBorder: React.FC<RunningBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Top border */}
      <div className="absolute -inset-[1px] rounded-lg">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:animate-border-x" />
        {/* Right border */}
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent group-hover:animate-border-y" />
        {/* Bottom border */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:animate-border-x" />
        {/* Left border */}
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent group-hover:animate-border-y" />
      </div>
      {children}
    </div>
  );
}

export default RunningBorder;