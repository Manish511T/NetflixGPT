import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div className=" min-h-screen text-white overflow-x-hidden">
      
      {/* Header always on top */}
      <Header />

      {/* Hero Section */}
      <MainContainer />

      {/* Movie Rows */}
      <SecondaryContainer />

    </div>
  );
};

export default Browse;