import React, { useState, useEffect } from 'react';
import { SERVER_URL } from './serverUrl';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AddProductModal from './components/AddProductModal';
import './App.css';
import Face from './components/Face';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${SERVER_URL}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCart = async () => {
    try {
      const res = await fetch(`${SERVER_URL}/cart`);
      const data = await res.json();
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      <Navbar/>
      <Face/>
      <hr />
      <main className="flex-grow flex flex-row bg-white mt-10 border">
        <div className="flex-grow w-1/2">
          <ProductList products={products} fetchProducts={fetchProducts} fetchCart={fetchCart} setShowModal={setShowModal}/>
        </div>
        <div className='flex-grow w-1/2'>
          <Cart cart={cart} fetchCart={fetchCart} products={products} />
        </div>
      </main>
      <Footer />
      {showModal && <AddProductModal setShowModal={setShowModal} fetchProducts={fetchProducts} />}
    </div>
  );
};

export default App;