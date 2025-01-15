import React from 'react';
import Bgheader from '../../assets/aboutus/Bgheader.jpg';

const Header = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-white py-16 px-6 h-screen"
      style={{ backgroundImage: `url(${Bgheader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darker transparent overlay */}
      <div className="relative z-10 text-center p-8 rounded-lg">
        <h1 className="text-6xl font-bold">Welcome to Kroya!</h1>
        <div className="text-3xl font-semibold mt-8">
          <p className="mt-4">At Kroya, we showcase the rich flavors of Khmer</p>
          <p className="mt-4">cuisine with authentic recipes from Cambodia. Our goal is to</p>
          <p className="mt-4">preserve and share traditional cooking techniques, ingredients, and</p>
          <p className="mt-4">cultural stories. Whether revisiting favorites or trying Khmer food for the first</p>
          <p className="mt-4">time, Kroya offers simple recipes to bring the magic of Khmer kitchens to your table.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;