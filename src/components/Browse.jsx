import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();

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