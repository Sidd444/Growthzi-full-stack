import React from 'react';

const Navbar = (props) => (
  <nav className="bg-blue-600 text-white p-4 flex items-center justify-between relative fullwidth">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <img src="./public/logo-growthzi.png" alt="Logo" className="w-8 h-8" />
      </div>
      <h1 className="text-xl font-bold">Product Cart App</h1>
    </div>
    <div className="flex space-x-4">
      <a href="/" className="hover:text-gray-300">Home</a>
      <a href="/products" className="hover:text-gray-300">Products</a>
      <a href="/about" className="hover:text-gray-300">About Us</a>
      <a href="/contact" className="hover:text-gray-300">Contact</a>
    </div>
    {/* Moving border animation */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-moving-border"></div>
  </nav>
);

export default Navbar;
