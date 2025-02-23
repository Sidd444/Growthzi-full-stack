import React from 'react';

const GroceryPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <section className="bg-sky-200 p-8 rounded-lg flex items-center justify-between h-96">
          <div>
            <span className="bg-yellow-400 text-white px-2 py-1 rounded">Opening Sale Discount 50%</span>
            <h1 className="text-4xl font-bold mt-4 text-black">SuperMarket Daily Fresh Grocery</h1>
            <p className="mt-2 text-black">Introduced a new model for online grocery shopping and convenient home delivery.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">Shop Now</button>
          </div>
          <div className="relative">
            <img src="https://png.pngtree.com/png-clipart/20231116/original/pngtree-happy-woman-white-photo-png-image_13579974.png" alt="Person holding groceries" className="rounded-lg w-60 mr-4" />
          </div>
        </section>
        <section className="mt-8 text-black">
          <h2 className="text-2xl font-bold mb-4 text-black">Featured Categories</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <img src="https://th.bing.com/th/id/OIP.9lrHG9ez0JWCeOLeATUfcAHaK4?rs=1&pid=ImgDetMain" alt="Dairy, Bread & Eggs" className="w-full object-cover rounded" />
              <h3 className="mt-2 text-lg font-bold">Dairy, Bread & Eggs</h3>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://img.offers-cdn.net/assets/uploads/offers/au/751802/thins-samboy-french-fries-or-natural-chip-co-150-175g-large.jpeg" alt="Snack & Munchies" className="w-full object-cover rounded mt-20 mb-28" />
              <h3 className="mt-2 text-lg font-bold">Snack & Munchies</h3>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://th.bing.com/th/id/OIP.WVEj7T6AeCyfy0WNHwx2SgHaK4?rs=1&pid=ImgDetMain" alt="Bakery & Biscuits" className="w-full object-cover rounded" />
              <h3 className="mt-2 text-lg font-bold">Bakery & Biscuits</h3>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/Breakfast_Food_._QL30_.jpg" alt="Instant Food" className="w-fullobject-cover rounded mt-12 mb-20" />
              <h3 className="mt-2 text-lg font-bold">Instant Food</h3>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://th.bing.com/th/id/OIP.4mRKZOngB7WDb4taTDt1LAAAAA?rs=1&pid=ImgDetMain" alt="Tea, Coffee & Drinks" className="w-full object-cover rounded" />
              <h3 className="mt-2 text-lg font-bold">Tea, Coffee & Drinks</h3>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://www.silindhri.com/public/uploads/all/1spjZ9jFbkChwvjScm5YASbNRUAoJcCGqIISv6fx.png" alt="Atta, Rice & Dal" className="w-full object-cover rounded" />
              <h3 className="mt-2 text-lg font-bold">Atta, Rice & Dal</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GroceryPage;
