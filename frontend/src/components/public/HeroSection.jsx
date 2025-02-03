import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full pt-0 mt-0 relative flex justify-center items-center">
      <div className="flex justify-between items-center w-full gap-8 relative z-10">
        {/* Left Container - Search */}
        <div className="w-full md:w-1/2">
          <div className="px-10 py-20">
            {/* Hero Text with animation */}
            <motion.h2
              className="text-4xl text-white font-semibold leading-tight mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Find Your Dream Job Today
            </motion.h2>
            <motion.p
              className="text-xl text-white opacity-80 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
              Explore top job opportunities tailored to your skills and preferences.
            </motion.p>
            <div className="flex gap-4 justify-center md:justify-start">
              <input
                type="text"
                placeholder="Search for jobs..."
                className="p-3 text-lg w-64 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out opacity-0 animate__animated animate__fadeIn animate__delay-2s"
              />
              <button className="p-3 text-lg bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out opacity-0 animate__animated animate__fadeIn animate__delay-3s">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right Container - Hero Image Card */}
        <div className="w-full md:w-1/2 mr-10">
          <motion.div
            className="opacity-100 transform scale-100"
            animate={{ y: [0, -10, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="src/assets/hero-image.jpg" alt="Hero Image" className="w-full rounded-lg" />
          </motion.div>
        </div>
      </div>

      {/* Background Image with low opacity */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-75 z-[-1] bg-[url('https://www.europelanguagejobs.com/uploads/posts/idiom.png')]"></div>
    </section>
  );
};

export default HeroSection;
