import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-8">
      <div className="container mx-auto px-4 text-center sm:text-left space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
        <div>
          <p>© 2024 Kroya, All rights reserved</p>
          <p>Support by nhesokraksa2345@gmail.com</p>
        </div>

        {/* About Q&A Section */}
        <div>
          <a href="#about-q-and-a" className="hover:underline text-lg font-medium">
            About Q&A
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
