// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
  
      <HeroSection />
      <ProductList />
    </div>
  );
};

export default Home;
