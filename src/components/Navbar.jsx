// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-bold">TestingR</Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About</Link>
            <Link to="/services" className="text-white">Services</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
