import React from "react";

const GptMovieCardShimmer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-black/70 p-6 rounded-xl backdrop-blur-md shadow-lg animate-pulse">
      {/* Poster shimmer */}
      <div className="w-40 md:w-52 h-60 bg-gray-700 rounded-lg"></div>

      {/* Details shimmer */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="h-6 w-2/3 bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-1/3 bg-gray-700 rounded mb-3"></div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-gray-700 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
            <div className="h-3 w-4/6 bg-gray-700 rounded"></div>
          </div>
        </div>

        <div className="h-8 w-28 bg-gray-700 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default GptMovieCardShimmer;