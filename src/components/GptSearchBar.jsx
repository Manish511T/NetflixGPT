import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

const GptSearchBar = () => {
  return (
    <div className="w-full flex justify-center mt- px-4">
      <form
        className="
          w-full max-w-3xl
          flex items-center
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-2xl
          shadow-lg shadow-purple-900/30
          hover:shadow-purple-500/40
          transition-all duration-300
        "
      >
        {/* AI Icon */}
        <div className="pl-5 text-purple-400 text-xl">
          <BsStars />
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="
            flex-1
            bg-transparent
            px-4 py-4
            text-white
            placeholder-gray-300
            outline-none
            text-sm md:text-base
            rounded-l-2xl
          "
        />

        {/* Search Button */}
        <button
          className="
            flex items-center gap-2
            px-6 py-4
            rounded-r-2xl
            font-semibold
            text-white
            bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600
            hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500
            transition-all duration-300
          "
        >
          <FiSearch className="text-lg" />
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;