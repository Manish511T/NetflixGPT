import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Animated Background */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.pinimg.com/1200x/8b/0f/be/8b0fbe82c3f5bb73eca9f557e8a9879c.jpg"
        alt="hero"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 text-white max-w-2xl">
        
        {/* Heading Animation */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          Unlimited Movies, TV Shows & More
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          Watch anywhere. Cancel anytime. Experience entertainment like never before.
        </motion.p>

        {/* Buttons Animation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4"
        >
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg text-lg font-semibold shadow-lg cursor-pointer">
            Play
          </button>

          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md transition px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer">
            More Info
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
