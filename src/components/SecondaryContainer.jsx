import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import MovieListShimmer from "../shimmer/MovieListShimmer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);


  if (!movies?.nowPlayingMovies) {
    return (
      <div className="relative z-20 bg-black pt-[100vh] pb-16">
        <MovieListShimmer/>
        <MovieListShimmer/>
        <MovieListShimmer/>
      </div>
    );
  }

  return (
    <div className="relative z-20  -mt-40 pt-10 pb-16 px-3">

      <div className="px-10  space-y-12">
        <MovieList
          title="Now Playing"
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title="Popular"
          movies={movies.popularMovies}
        />

        <MovieList
          title="Top Rated"
          movies={movies.topRatedMovies}
        />
      </div>

    </div>
  );
};

export default SecondaryContainer;