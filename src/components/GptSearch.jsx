import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover scale-110 -z-10"
        src={BG_URL}
        alt="background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 pt-32">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>

    </div>
  );
};

export default GptSearch;