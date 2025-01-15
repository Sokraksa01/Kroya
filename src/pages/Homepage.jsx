import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/homepage/HeroSection';
import PopularRecipes from '../components/homepage/PopularRecipes';
import RecipesGrid from '../components/homepage/RecipesGrid';
import Footer from '../components/Footer';

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
