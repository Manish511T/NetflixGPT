import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-35 transform transition-all duration-300 hover:scale-110 hover:z-40 cursor-pointer">
      
      <img
        className="shadow-2xl"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
      />

    </div>
  );
};

export default MovieCard;