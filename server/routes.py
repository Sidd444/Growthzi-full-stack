from flask import Blueprint, request, jsonify
from models import db, Product, Cart
import logging

api_bp = Blueprint('api', __name__)

# Get all products
@api_bp.route('/products', methods=['GET'])
def get_products():
    try:
        products = Product.query.all()
        return jsonify([{'id': p.id, 'name': p.name, 'price': p.price, 'image': p.image} for p in products])
    except Exception as e:
        logging.error(f"Error getting products: {e}", exc_info=True)
        return jsonify({'error': 'Internal Server Error from code'}), 500

# Add a new product
@api_bp.route('/products', methods=['POST'])
def add_product():
    try:
        data = request.json
        logging.debug(f"Request data: {data}")
        new_product = Product(name=data['name'], price=data['price'], image=data['image'])
        db.session.add(new_product)
        db.session.commit()
        return jsonify({'message': 'Product added'}), 201
    except Exception as e:
        logging.error(f"Error adding product: {e}", exc_info=True)
        return jsonify({'error': 'Internal Server Error'}), 500

# Delete a product
@api_bp.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    try:
        product = Product.query.get(product_id)
        if product:
            db.session.delete(product)
            db.session.commit()
            return jsonify({'message': 'Product deleted'})
        return jsonify({'error': 'Product not found'}), 404
    except Exception as e:
        logging.error(f"Error deleting product: {e}", exc_info=True)
        return jsonify({'error': 'Internal Server Error'}), 500

# Cart Management
@api_bp.route('/cart', methods=['POST'])
def add_to_cart():
    try:
        data = request.json
        logging.debug(f"Request data: {data}")
        new_cart_item = Cart(product_id=data['product_id'])
        db.session.add(new_cart_item)
        db.session.commit()
        return jsonify({'message': 'Product added to cart'})
    except Exception as e:
        logging.error(f"Error adding to cart: {e}", exc_info=True)
        return jsonify({'error': 'Internal Server Error'}), 500

@api_bp.route('/cart', methods=['GET'])
def get_cart():
    try:
        cart_items = Cart.query.all()
        products = [{'id': item.product_id} for item in cart_items]
        return jsonify(products)
    except Exception as e:
        logging.error(f"Error getting cart: {e}", exc_info=True)
        return jsonify({'error': 'Internal Server Error from code'}), 500

@api_bp.route('/cart/<int:cart_id>', methods=['DELETE'])
def remove_from_cart(cart_id):
    try:
        cart_item = Cart.query.get(cart_id)
        if cart_item:
            db.session.delete(cart_item)
            db.session.commit()
            return jsonify({'message': 'Item removed from cart'})
        return jsonify({'error': 'Item not found'}), 404
    except Exception as e:
        logging.error(f"Error removing from cart: {e}", exc_info=True)
        return jsonify({'error': 'Internal Server Error'}), 500
