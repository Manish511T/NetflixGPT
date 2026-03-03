import React from "react";
import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 mb-8 sm:mb-12">

      {/* Section Title Shimmer */}
      <div className="
        h-6 sm:h-7 md:h-8
        w-40 sm:w-48 md:w-56
        bg-gray-700
        rounded-md
        mb-4 sm:mb-6
        shimmer
      "></div>

      {/* Responsive Grid */}
      <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-3 sm:gap-4 md:gap-5
      ">
        {Array(10).fill(0).map((_, index) => (
          <MovieCardShimmer key={index} />
        ))}
      </div>

    </div>
  );
};

export default MovieListShimmer;