import React from 'react';
import foodImage from '../../assets/aboutus/Food.png'; // Adjust the path as necessary

const Why = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-16 px-6 bg-amber-50">
      <img
        src={foodImage} // Use the imported image variable
        alt="Khmer Cuisine"
        className="w-full lg:w-1/2 rounded-lg shadow-lg"
      />
      <div className="lg:ml-10 mt-8 lg:mt-0 text-center lg:text-left">
        <h2 className="text-5xl font-bold items-center">Why?</h2>
        <p className="text-2xl mt-16">
        In Khmer, "Kroya" means "ingredient," representing the</p>
        <p className="mt-4 text-2xl">essence of every great dish. We believe that cooking</p>
        <p className="mt-4 text-2xl">connects us to our roots, our family, and our community.</p>
        <p className="mt-4 text-2xl">Through this platform, we aim to preserve these connections</p>
        <p className="mt-4 text-2xl">connections and pass them on to future generations.Join us in</p>
        <p className="mt-4 text-2xl">exploring the flavors of Cambodia, one dish at a time. Let Kroya</p>
        <p className="mt-4 text-2xl">inspire you to cook, share, and celebrate the beauty of Khmer cuisine.</p>
      </div>
    </div>
  );
};

export default Why;