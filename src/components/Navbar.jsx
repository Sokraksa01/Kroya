import React, { useState } from 'react';
import KroyaLogo from "../assets/KroyaLogo.png"; // Adjust the path based on where your logo is located

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the hamburger menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-amber-50 text-red-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src={KroyaLogo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl text-red-800 font-bold">Kroya</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-red-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroketWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <nav className={`lg:flex space-x-12 text-xl font-bold ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <a href="#home" className="hover:underline">Home</a>
          <a href="#recipes" className="hover:underline">Recipes</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#popular" className="hover:underline">Popular</a>
          <a href="#login" className="hover:underline">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
