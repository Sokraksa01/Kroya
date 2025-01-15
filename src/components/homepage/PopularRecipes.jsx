import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Amok from '../../assets/homepages/Amok.png';
import LokLak from '../../assets/homepages/LoklLak.png'; // Corrected filename
import Nhearm from '../../assets/homepages/Nhearm.png';
import Crab from '../../assets/homepages/Crab.png';
import SamlorKorkor from '../../assets/homepages/SamlorKorkor.png'; // Added this image

const PopularRecipes = () => {
  const images = [Amok, LokLak, Nhearm, Crab, SamlorKorkor]; // Added SamlorKorkor image
  const recipeNames = ['Amok', 'Lok Lak', 'Nhearm', 'Crab', 'Samlor Korkor']; // Fixed spacing in name
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-800">Popular Recipes</h2>
        <div className="flex flex-wrap justify-center gap-8 overflow-x-auto"> {/* Added gap for spacing between items */}
          {images.map((image, index) => (
            <div key={index} className="text-center w-48"> {/* Set a fixed width for images */}
              <img
                src={image}
                alt={recipeNames[index]} // More descriptive alt text
                className="rounded-full w-full h-48 object-cover mx-auto shadow-xl"
                onError={(e) => { e.target.src = 'path/to/placeholder-image.png'; }} // Optional error handling
              />
              <p className="mt-2 text-xl font-semibold text-red-800 hover:text-black transition duration-200">
                {recipeNames[index]}
              </p> {/* Dynamic recipe name */}
            </div>
          ))}
          <button className="flex items-center mt-4 md:mt-0">
            <FaArrowRight className="ml-2 w-6 h-6 md:w-10 md:h-10" /> {/* Adjusted icon size */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
