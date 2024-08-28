import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Profile Map App</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/admin" className="text-white hover:text-gray-300">Admin</Link>
          <Link to="/map" className="text-white hover:text-gray-300">Map</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
