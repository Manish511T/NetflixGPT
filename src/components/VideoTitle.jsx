import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute top-0 left-0 h-screen text-white">
      
      {/* Gradient Overlay */}
      <div className="w-full h-full bg-linear-to-r from-black via-black/70 to-transparent px-16 pt-48">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          {title}
        </h1>

        {/* Overview */}
        <p className="mt-6 text-lg w-1/3 leading-relaxed text-gray-200 line-clamp-3">
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          
          <button className="flex items-center gap-2 bg-white hover:bg-white/70 text-black px-6 py-3 rounded-md font-semibold hover:bg-opacity-80 transition duration-300">
            <FaPlay /> Play
          </button>

          <button className="flex items-center gap-2 bg-gray-700/80 hover:bg-gray-700/60  px-6 py-3 rounded-md font-semibold hover:bg-opacity-50 transition duration-300">
            <IoInformationCircleOutline size={22} />
            More Info
          </button>

        </div>

      </div>
    </div>
  );
};

export default VideoTitle;
