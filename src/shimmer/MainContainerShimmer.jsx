import React from "react";

const MainContainerShimmer = () => {
  return (
    <div className="relative w-full 
                    h-[60vh] sm:h-[75vh] md:h-screen 
                    bg-black overflow-hidden">

      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gray-800 shimmer"></div>

      {/* Content shimmer */}
      <div className="
        absolute inset-0
        flex flex-col justify-center
        px-5 sm:px-10 md:px-20
      ">

        <div className="max-w-full sm:max-w-lg md:max-w-2xl space-y-4 sm:space-y-6">

          {/* Title shimmer */}
          <div className="
            h-8 sm:h-10 md:h-14
            w-3/4 sm:w-2/3
            bg-gray-700 rounded shimmer
          "></div>

          {/* Overview shimmer lines */}
          <div className="
            h-4 sm:h-5
            w-full sm:w-5/6
            bg-gray-700 rounded shimmer
          "></div>

          <div className="
            h-4 sm:h-5
            w-4/5 sm:w-3/4
            bg-gray-700 rounded shimmer
          "></div>

          {/* Buttons shimmer */}
          <div className="flex gap-3 sm:gap-4 mt-6">

            <div className="
              h-9 sm:h-11
              w-24 sm:w-32
              bg-gray-700 rounded shimmer
            "></div>

            <div className="
              h-9 sm:h-11
              w-28 sm:w-40
              bg-gray-700 rounded shimmer
            "></div>

          </div>

        </div>
      </div>

      {/* Bottom cinematic fade */}
      <div className="absolute bottom-0 w-full h-32 sm:h-48 bg-linear-to-t from-black to-transparent"></div>
    </div>
  );
};

export default MainContainerShimmer;