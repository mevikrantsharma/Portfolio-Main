import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid cubes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-900/10 rounded-lg transform rotate-45 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-800/10 rounded-lg transform -rotate-12 animate-float-slower"></div>
      
      {/* Wireframe cubes */}
      <div className="absolute top-1/3 right-1/3 w-48 h-48 border border-blue-500/10 rounded-lg transform rotate-12 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 border border-blue-400/10 rounded-lg transform -rotate-45 animate-float-slow"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black"></div>
    </div>
  );
};

export default GeometricBackground;