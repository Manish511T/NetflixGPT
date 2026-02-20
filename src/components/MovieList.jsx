import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


  return (
    <div className="space-y-4">
      
      <h2 className="text-white text-2xl font-semibold">
        {title}
      </h2>

      <div className="flex overflow-x-scroll scrollbar-hide space-x-5 pb-4">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>

    </div>
  );
};

export default MovieList;