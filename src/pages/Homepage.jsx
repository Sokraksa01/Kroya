import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/homepage/HeroSection.jsx';
import PopularRecipes from '../components/homepage/PopularRecipes.jsx';
import RecipesGrid from '../components/homepage/RecipesGrid.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PopularRecipes />
      <RecipesGrid />
      <Footer />
    </div>
  );
};

export default Home;
