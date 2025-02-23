import React from 'react';

const Navbar = (props) => (
  <header className="bg-white shadow fullwidth">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600"><img src="https://woocommerce.com/wp-content/uploads/2023/01/product-icon.png" alt="logo" className="w-8 h-8 mr-2 inline" />FreshCart</div>
          <div className="flex space-x-4">
            <div><i class="text-sky-700 mt-3 fa-solid fa-magnifying-glass"></i></div>
            <input type="text" placeholder="Search for products..." className="border border-gray-600 bg-white rounded px-2 py-1 w-64 text-black" />
            <button className="bg-green-600 text-white px-4 py-2 rounded"><i class="fa-solid fa-location-dot"></i> Location</button>
            <div><i class="text-sky-700 mt-1 fa-2x fa-solid fa-heart"></i></div>
            <div><i class="text-sky-700 mt-1 fa-2x fa-solid fa-user"></i></div>
            <div><i class="text-sky-700 mt-1 fa-2x fa-solid fa-bag-shopping"></i></div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-4">
            <button href="#" className="text-white bg-green-500">All Departments</button>
            <div className="text-black">Home  <i class="fa-solid mt-4 fa-angle-down"></i></div>
            <div className="text-black">Shop  <i class="fa-solid mt-4 fa-angle-down"></i></div>
            <div className="text-black">Stores  <i class="fa-solid mt-4 fa-angle-down"></i></div>
            <div className="text-black">MegaMenu  <i class="fa-solid mt-4 fa-angle-down"></i></div>
            <div className="text-black">Pages  <i class="fa-solid mt-4 fa-angle-down"></i></div>
            <div className="text-black">Account  <i class="fa-solid mt-4 fa-angle-down"></i></div>
            <div className="text-black">Docs  <i class="fa-solid mt-4 fa-angle-down"></i></div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600">Sign In</a>
            <a href="#" className="text-gray-600">Create Account</a>
          </div>
        </div>
      </header>
);

export default Navbar;
