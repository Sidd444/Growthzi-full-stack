import React from 'react';
import { SERVER_URL } from '../serverUrl';

const ProductList = ({ products, fetchProducts, fetchCart, setShowModal }) => {
  const addToCart = async (id) => {
    const cartProducts = await fetch(`${SERVER_URL}/cart`).then((res) => res.json());
    if (cartProducts.some((product) => product.id === id)) {
      alert('Product already in cart!');
      return;
    }
    try {
      await fetch(`${SERVER_URL}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: id })
      });
      fetchCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const cartProducts = await fetch(`${SERVER_URL}/cart`).then((res) => res.json());
    if (cartProducts.some((product) => product.id === id)) {
      alert('Remove Product From Cart!');
      return;
    }
      await fetch(`${SERVER_URL}/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="bg-white text-black">
      <div className="flex justify-evenly"><h2 className='text-2xl font-bold'>My Products</h2>
        <button onClick={() => setShowModal(true)} className="bg-green-500 px-4 py-2 rounded-lg border border-transparent transition-all hover:border-white text-white hover:bg-white hover:text-green-500">
          Add Product
        </button></div>
      <div className="p-4 grid grid-cols-2 gap-4 overflow-y-scroll h-screen w-[80%] ml-18 custom-scrollbar">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white border border-black">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <div className="flex justify-between mt-2">
              <button onClick={() => addToCart(product.id)} className="bg-blue-500 text-white px-4 py-1 rounded-lg">Add to Cart</button>
              <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white px-4 py-1 rounded-lg">Delete</button>
            </div>
          </div>
        ))}
      </div></div>
  );
};

export default ProductList;