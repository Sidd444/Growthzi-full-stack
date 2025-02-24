# Growthzi - E-commerce

This is a **Single Page Application (SPA)** e-commerce platform built with **Vite + React** for the frontend and **Flask** for the backend. It allows users to browse products, manage their cart, and perform CRUD operations on products.

---

## 📽️ Video Demo

## [video Url](https://drive.google.com/file/d/1ekNFTf7_-4vf61QfFXAtg-C7SOkrIjyS/view?usp=drivesdk)

---

## ⚙️ Tech Stack

**Frontend:**
- Vite
- React
- Tailwind CSS
- Font-Awesome

**Backend:**
- Python 3.14
- Flask
- Flask-CORS
- Flask-SQLAlchemy

**Database:**
- SQLite 

---

## 📁 Features

- View all available products.
- Add new products.
- Delete existing products.
- Add products to cart.
- View cart items.
- Remove items from cart.

---

## 📂 Project Structure

growthzi/ ├── backend/ │   ├── app.py │   ├── models.py │   ├── api/ │   │   └── routes.py │   └── requirements.txt │ ├── frontend/ │   ├── src/ │   │   ├── components/ │   │   ├── pages/ │   │   └── App.jsx │   └── vite.config.js │ └── README.md

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- Python 3
- Node.js & npm
- pip (Python package manager)

---

### 📦 Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd server

2. Create a virtual environment:

python -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate


3. Install dependencies:

pip install -r requirements.txt


4. Run the Flask server:

python app.py

The backend will run on: http://localhost:5000




---

🎨 Frontend Setup

1. Navigate to the frontend directory:

cd client


2. Install dependencies:

npm install


3. Run the React app:

npm run dev

The frontend will run on: http://localhost:5173




---

🛎️ API Endpoints

📦 Products

GET /products → Get all products

POST /products → Add a new product
Body Example:

{
  "name": "Product Name",
  "price": 100,
  "image": "image_url"
}

DELETE /products/<product_id> → Delete a product



---

🛒 Cart

GET /cart → Get all cart items

POST /cart → Add item to cart
Body Example:

{
  "product_id": 1
}

DELETE /cart/<cart_id> → Remove item from cart



---

💡 Future Enhancements

User authentication (Login/Signup)

Product categories & filters

Payment gateway integration

Enhanced UI/UX

