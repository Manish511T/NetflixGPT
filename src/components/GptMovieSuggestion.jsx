import React from "react";
import { useSelector } from "react-redux";
import GptMovieCardShimmer from "../shimmer/GptMovieCardShimmer";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames, isLoading, error } = useSelector(
    (store) => store.gpt,
  );

  // 🔄 Modern shimmer grid
  if (isLoading) {
    return (
      <div className="px-6 md:px-12 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <GptMovieCardShimmer key={index} />
          ))}
      </div>
    );
  }
  if (error) {
    return (
      <div className="px-6 md:px-12 mt-10">
        <div
          className="bg-red-500/10 border border-red-500/20 
                      text-red-400 px-6 py-5 rounded-2xl 
                      backdrop-blur-xl shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-2">AI Service Unavailable</h3>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!movieNames || movieNames.length === 0) return null;

  // Flatten only first best result of each GPT movie
  const movies = movieNames
    .map((_, index) => movieResults?.[index]?.[0])
    .filter(Boolean);

  return (
    <div className="px-6 md:px-12 mt-10 mb-10">
      <h2 className="text-2xl font-bold text-white mb-8">AI Recommendations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group bg-black/10 backdrop-blur-2xl border border-white/20 
             rounded-3xl overflow-hidden shadow-lg 
             hover:shadow-purple-500/30 hover:-translate-y-2 
             transition-all duration-500"
          >
            {/* Poster Section */}
            <div className="relative  h-95 w-full overflow-hidden rounded-3xl">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Soft gradient fade */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Info Section */}
            <div className="p-5 text-white space-y-2">
              <h3 className="text-lg font-semibold truncate">{movie.title}</h3>

              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>{movie.release_date?.slice(0, 4)}</span>

                <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-full text-xs font-semibold">
                  ⭐ {movie.vote_average?.toFixed(1)}
                </span>
              </div>

              <p className="text-xs uppercase text-gray-400 tracking-wide">
                {movie.original_language}
              </p>

              <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                {movie.overview || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
