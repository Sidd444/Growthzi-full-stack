import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../serverUrl';

const Cart = ({ cart, fetchCart, products }) => {
  const removeFromCart = async (id) => {
    try {
      await fetch(`${SERVER_URL}/cart/${id}`, { method: 'DELETE' });
      fetchCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = [];
    cart.forEach((item) => {
      products.forEach((product) => {
        if (item.id === product.id) {
          items.push(product);
        }
      });
    });
    setCartItems(items);
  }, [cart, products]);

  return (
    <div className="p-4 border-t mt-4 mr-2">
      <h2 className="text-xl font-bold">Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center mt-2">
            <img src={item.image} className="h-20 w-20" />
            <span>Product Name: {item.name}</span>
            <span>Price: ${item.price}</span>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;