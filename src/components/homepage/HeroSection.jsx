import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import Amoks from '../../assets/homepages/Amoks.png';

const HeroSection = () => {
  return (
    <section className="bg-red-800 text-white py-16 text-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left section */}
        <div className="max-w-xl mx-auto md:max-w-lg md:w-1/2">
          {/* Search bar with icon */}
          <div className="relative max-w-md mx-auto mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full border focus:outline-none text-black placeholder-black pr-10" // Added pr-10 for padding-right
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Kroya!</h1>
          <p className="mb-12 text-base sm:text-xl font-medium">
            Welcome to Kroya, a place where you can discover and explore the rich and flavorful world of Khmer cuisine.
            Our website is dedicated to bringing you traditional Khmer food recipes, passed down through generations.
          </p>
        </div>

        {/* UI on the right */}
        <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
          <img
            src={Amoks} // Use the imported image here
            alt="Khmer Cuisine"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
