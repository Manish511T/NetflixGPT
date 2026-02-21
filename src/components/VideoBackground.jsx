import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      
      {/* Responsive Video Wrapper */}
      <div className="relative w-full h-full">

        <iframe
          className="
            absolute top-1/2 left-1/2
            min-w-full min-h-full
            w-auto h-auto
            -translate-x-1/2 -translate-y-1/2
            pointer-events-none
          "
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&vq=hd720&modestbranding=1&showinfo=0`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
        ></iframe>

        {/* Left Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

        {/* Bottom Fade Overlay */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

      </div>
    </div>
  );
};

export default VideoBackground;