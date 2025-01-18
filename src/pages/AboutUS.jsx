import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/aboutus/Header.jsx';
import Team from '../components/aboutus/Team.jsx';
import OurMission from '../components/aboutus/OurMission.jsx';
import Why from '../components/aAboutUs/Why.jsx';
const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Header />
      <Why />
      <OurMission />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
