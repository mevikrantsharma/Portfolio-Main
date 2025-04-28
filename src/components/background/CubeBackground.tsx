import React from 'react';

const CubeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large cubes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-900/20 rounded-lg transform rotate-45 animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-800/20 rounded-lg transform -rotate-12 animate-float-slower"></div>
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-blue-900/20 rounded-lg transform rotate-12 animate-float"></div>
      
      {/* Wireframe cubes */}
      <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-blue-500/20 rounded-lg transform rotate-45 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-blue-400/20 rounded-lg transform -rotate-12 animate-float-slower"></div>
      
      {/* Small floating cubes */}
      <div className="absolute top-1/4 right-1/2 w-16 h-16 border border-blue-600/20 rounded-lg transform rotate-45 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-blue-500/20 rounded-lg transform -rotate-12 animate-float-slow"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
    </div>
  );
};

export default CubeBackground;