import React from "react";

const MainContainerShimmer = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gray-800 shimmer"></div>

      {/* Content shimmer */}
      <div className="absolute top-48 left-16 space-y-6">
        
        <div className="h-12 w-96 bg-gray-700 rounded shimmer"></div>
        
        <div className="h-6 w-125 bg-gray-700 rounded shimmer"></div>
        <div className="h-6 w-112.5 bg-gray-700 rounded shimmer"></div>

        <div className="flex gap-4 mt-6">
          <div className="h-12 w-32 bg-gray-700 rounded shimmer"></div>
          <div className="h-12 w-40 bg-gray-700 rounded shimmer"></div>
        </div>

      </div>
    </div>
  );
};

export default MainContainerShimmer;