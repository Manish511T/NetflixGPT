import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 text-white z-20">

      {/* Cinematic Overlay */}
      <div className="
        w-full h-full
        bg-linear-to-r from-black via-black/80 to-transparent
        flex flex-col justify-center
        px-5 sm:px-10 md:px-20
      ">

        <div className="max-w-full sm:max-w-lg md:max-w-2xl animate-fadeIn">

          {/* Title */}
          <h1 className="
            text-3xl sm:text-4xl md:text-6xl lg:text-7xl
            font-extrabold
            leading-tight
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
          ">
            {title}
          </h1>

          {/* Overview */}
          <p className="
            mt-4 sm:mt-6
            text-sm sm:text-base md:text-lg
            text-gray-200
            leading-relaxed
            line-clamp-3 sm:line-clamp-4
            drop-shadow-md
          ">
            {overview}
          </p>

          {/* Buttons */}
          <div className="
            flex flex-wrap
            gap-3 sm:gap-4
            mt-6 sm:mt-8
          ">

            {/* Play Button */}
            <button className="
              flex items-center gap-2
              bg-white text-black
              px-5 sm:px-7
              py-2.5 sm:py-3
              text-sm sm:text-base
              rounded-md
              font-semibold
              backdrop-blur-md
              hover:scale-105
              hover:bg-white/90
              transition-all duration-300
              shadow-lg
            ">
              <FaPlay />
              Play
            </button>

            {/* More Info Button */}
            <button className="
              flex items-center gap-2
              bg-white/20
              backdrop-blur-md
              px-5 sm:px-7
              py-2.5 sm:py-3
              text-sm sm:text-base
              rounded-md
              font-semibold
              hover:scale-105
              hover:bg-white/30
              transition-all duration-300
              shadow-lg
            ">
              <IoInformationCircleOutline size={22} />
              More Info
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoTitle;