import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo?.key) return null;

  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10 overflow-hidden">
      

      <iframe
        className="w-full h-full scale-150 pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&vq=hd720&modestbranding=1&showinfo=0`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media"
      ></iframe>

    </div>
  );
};

export default VideoBackground;
