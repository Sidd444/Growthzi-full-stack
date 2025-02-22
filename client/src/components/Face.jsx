import React from 'react';

const EcommerceContent = () => (
  <div className="p-4">
    <div className="mb-6">
      <img src="https://cdn.vectorstock.com/i/preview-1x/09/80/online-shopping-banner-vector-17230980.jpg" alt="E-commerce Banner" className="w-full h-60 object-cover rounded-md" />
    </div>
    <h1 className="text-2xl font-bold mb-4">Welcome to Our Online Store!</h1>
    <p className="mb-4">Discover a wide range of products, from the latest electronics to fashionable clothing and essential home items. Enjoy unbeatable prices and fast shipping!</p>
    <h2 className="text-xl font-bold mb-2">Featured Products</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Smartphone X Pro - Cutting-edge technology at your fingertips.</li>
      <li>Fashionista Dress - Step out in style for any occasion.</li>
      <li>Home Comfort Sofa - Perfect blend of comfort and elegance.</li>
    </ul>
    <h2 className="text-xl font-bold mb-2">Why Shop With Us?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Wide Selection</li>
      <li>Competitive Prices</li>
      <li>Fast & Reliable Shipping</li>
      <li>Excellent Customer Support</li>
    </ul>
    <h2 className="text-xl font-bold mb-2">Customer Testimonials</h2>
    <p className="italic">"Absolutely love the variety of products and fast delivery. Highly recommend!" – Jane D.</p>
    <p className="italic mb-4">"Quality products at amazing prices. Never disappointed!" – Emily R.</p>
    <h2 className="text-xl font-bold mb-2">Connect with Us</h2>
    <p>Follow us on social media for the latest updates and exclusive deals. Subscribe to our newsletter for special offers straight to your inbox.</p>
  </div>
);

export default EcommerceContent;
