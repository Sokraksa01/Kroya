import React from "react";
import Boklhong from "../assets/infodetail/Boklhong.png";


const Infodetail = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Image Section */}
      <div
        className="lg:w-1/2 h-1/2 lg:h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Boklhong})` }}
      >
        {/* Back Button */}
        <button className="absolute top-4 left-4 bg-red-400 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 bg-orange-400 text-white p-12 lg:p-16 space-y-14">
        {/* Introduction */}
        <div>
          <h2 className="text-5xl font-bold mb-8">Introduction</h2>
          <p className="text-xl">
            Food is one of the basic necessities of life. Food contains
            nutrients—substances essential for the growth, repair, and
            maintenance of body tissues and for the regulation of vital
            processes. Nutrients provide the energy our bodies need to
            function. The energy in food is measured in units called calories.
          </p>
        </div>

        {/* Ingredient */}
        <div>
          <h2 className="text-5xl font-bold mb-6">Ingredient</h2>
          <p className="text-xl">
            Food is one of the basic necessities of life. Food contains
            nutrients—substances essential for the growth, repair, and
            maintenance of body tissues and for the regulation of vital
            processes. Nutrients provide the energy our bodies need to
            function. The energy in food is measured in units called calories.
          </p>
        </div>

        {/* How to Make */}
        <div>
          <h2 className="text-5xl font-bold mb-6">How to make</h2>
          <p className="text-xl">
            Food is one of the basic necessities of life. Food contains
            nutrients—substances essential for the growth, repair, and
            maintenance of body tissues and for the regulation of vital
            processes. Nutrients provide the energy our bodies need to
            function. The energy in food is measured in units called calories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infodetail;
