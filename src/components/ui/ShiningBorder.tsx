import React from 'react';

interface ShiningBorderProps {
  children: React.ReactNode;
  className?: string;
}

const ShiningBorder: React.FC<ShiningBorderProps> = ({ children, className = '' }) => {
  return (
    <div className="relative">
      {/* Animated border overlay */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full" />
      </div>
      
      {/* Main content */}
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default ShiningBorder;