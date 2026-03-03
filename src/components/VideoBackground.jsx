import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Responsive Aspect Container */}
      <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-screen">

        {/* YouTube Video */}
        <iframe
          className="
            absolute top-1/2 left-1/2
            w-[120vw] h-[120vh]
            min-w-full min-h-full
            -translate-x-1/2 -translate-y-1/2
            object-cover
            pointer-events-none
            scale-110
          "
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&vq=hd1080&modestbranding=1&rel=0`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
        />

        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

        {/* Top Fade */}
        <div className="absolute top-0 w-full h-32 bg-linear-to-b from-black to-transparent"></div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 w-full h-48 bg-linear-to-t from-black to-transparent"></div>

      </div>
    </div>
  );
};

export default VideoBackground;