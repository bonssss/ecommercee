import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box sx={{ paddingTop: '64px' }}> {/* Adjust paddingTop to match Navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* Define other routes here */}
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
