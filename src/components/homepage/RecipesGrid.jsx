import React from 'react';
import NomBanjokcurry from '../../assets/homepages/NomBanjokcurry.png';
import NomBanjokkhmer from '../../assets/homepages/NomBanjokkhmer.png';
import ChaSdeak from '../../assets/homepages/ChaSdeak.png';
import Chicken from '../../assets/homepages/Chicken.png';
import Redcurry from '../../assets/homepages/Redcurry.png';
import SomlorBrher from '../../assets/homepages/SomlorBrher.png';
import SackArng from '../../assets/homepages/SackArng.png';
import Koung from '../../assets/homepages/Koung.png';

const RecipesGrid = () => {
  const images = [
    NomBanjokcurry,
    NomBanjokkhmer,
    ChaSdeak,
    Chicken,
    Redcurry,
    SomlorBrher,
    SackArng,
    Koung,
  ];

  const titles = [
    'Nom Banjok Curry',
    'Nom Banjok Khmer',
    'Cha Sdeak',
    'Chicken',
    'Red Curry',
    'Somlor Brher',
    'SackArng',
    'Koung',
  ];

  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-red-800 font-bold text-center mb-12">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-red-800 shadow-xl rounded-lg overflow-hidden ">
              <img
                src={image}
                alt={`Recipe: ${titles[index]}`} // More descriptive alt text
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-lg text-yellow-300 font-medium flex items-center">
                  <span>★ 4.5</span>
                </p>
                <h3 className="text-xl text-white font-bold mt-2">{titles[index]}</h3> {/* Dynamic title */}
                <button className="mt-4 text-sm text-white hover:underline">View detail</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-red-800 text-white rounded hover:bg-red-800">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipesGrid;
