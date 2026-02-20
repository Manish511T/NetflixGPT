import React from "react";
import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = () => {
  return (
    <div className="px-10 mb-12">
      
      <div className="h-8 w-48 bg-gray-700 rounded mb-6 shimmer"></div>

      <div className="flex gap-5 overflow-hidden">
        {Array(6).fill(0).map((_, index) => (
          <MovieCardShimmer key={index} />
        ))}
      </div>

    </div>
  );
};

export default MovieListShimmer;