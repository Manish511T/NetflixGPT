import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


  return (
    <div className="mb-8 md:mb-12">

      <h2 className="text-lg md:text-2xl font-semibold mb-4 px-4 md:px-10">
        {title}
      </h2>

      <div className="flex overflow-x-auto scrollbar-hide space-x-3 md:space-x-5 px-4 md:px-10 pb-4">
        {movies.map((movie) => (
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