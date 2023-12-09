// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/testing/" element={<Home />} />
        <Route path="/testing/about" element={<About />} />
        <Route path="/testing/services" element={<Services />} />
        <Route path="/testing/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

