import React, { useState } from 'react';
import { SERVER_URL } from '../serverUrl';

const AddProductModal = ({ setShowModal, fetchProducts }) => {
  const [formData, setFormData] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.image) return alert('All fields are required!');

    try {
      await fetch(`${SERVER_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      fetchProducts();
      setShowModal(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-blue bg-opacity-50 flex items-center justify-center text-white">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Product Name" className="w-full p-2 mb-2 border rounded" onChange={handleChange} />
          <input name="price" placeholder="Price" type="number" className="w-full p-2 mb-2 border rounded" onChange={handleChange} />
          <input name="image" placeholder="Image URL" className="w-full p-2 mb-2 border rounded" onChange={handleChange} />
          <div className="flex justify-between">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
            <button type="button" onClick={() => setShowModal(false)} className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;