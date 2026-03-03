import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import {
  addGptMovieResult,
  setGptLoading,
  setGptError,
} from "../utils/gptSlice";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);
  const isLoading = useSelector((store) => store.gpt.isLoading);

  /**
   * Fetch movie data from TMDB API
   */
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie.trim(),
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await response.json();
    return json.results;
  };

  /**
   * Handles AI-based movie search
   */
  const handleGptSearchClick = async () => {
    const userQuery = searchText.current?.value.trim();

    // Prevent empty search or multiple clicks
    if (!userQuery || isLoading) return;

    dispatch(setGptLoading(true));

    const prompt = `
You are a strict movie search engine.

Analyze the user's input carefully.

Rules:

- If the input exactly matches a real movie title, return ONLY that movie.
- If the input is likely a movie title (short, proper noun, single name), return ONLY that movie.
- If the input describes a movie (story, scene, dialogue), identify the best matching movie and return ONLY that one.
- If the input is about mood, genre, language, country, or theme, recommend exactly 5 movies.

Very Important:
- Never recommend similar movies when an exact title is given.
- Never explain.
- Never add extra text.
- Return plain movie names separated by commas.

User input: "${userQuery}"
`;

    try {
      // Generate movie recommendations using Gemini
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      // Clean and convert AI response into array
      const movies = text
        .replace(/\.$/, "")
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);

      // Fetch TMDB details for each movie
      const movieResults = await Promise.all(
        movies.map((movie) => searchMovieTMDB(movie)),
      );

      // Store results in Redux
      dispatch(
        addGptMovieResult({
          movieNames: movies,
          movieResults,
        }),
      );
    } catch (error) {
      console.error("Gemini Error:", error);

      if (
        error?.message?.includes("quota") ||
        error?.message?.includes("limit") ||
        error?.message?.includes("429")
      ) {
        dispatch(
          setGptError(
            "🚫 Daily AI request limit reached. Please try again tomorrow.",
          ),
        );
      } else {
        dispatch(
          setGptError("⚠️ Something went wrong while fetching AI results."),
        );
      }
    }
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 mt-6 sm:mt-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }}
        className="
        w-full 
        max-w-4xl
        flex items-center
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-xl sm:rounded-2xl
        shadow-lg shadow-purple-900/30
        transition-all duration-300
        overflow-hidden
      "
      >
        {/* AI Icon */}
        <div className="pl-3 sm:pl-5 text-purple-400 text-lg sm:text-xl">
          <BsStars />
        </div>

        {/* Search Input */}
        <input
          ref={searchText}
          type="text"
          disabled={isLoading}
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="
          flex-1
          bg-transparent
          px-3 sm:px-4
          py-3 sm:py-4
          text-white
          placeholder-gray-300
          outline-none
          text-sm sm:text-base
        "
        />

        {/* Search Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`
    flex items-center justify-center
    gap-2
    px-4 sm:px-6
    py-2.5 sm:py-3
    m-1 sm:m-2
    rounded-lg sm:rounded-xl
    text-sm sm:text-base
    font-semibold
    text-white
    transition-all duration-300
    ${
      isLoading
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500"
    }
  `}
        >
          {isLoading ? (
            <span className="animate-pulse">Searching...</span>
          ) : (
            <>
              <FiSearch className="text-base sm:text-lg" />
              <span className="hidden sm:inline">{lang[langKey].search}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
