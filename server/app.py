from flask import Flask, jsonify
from flask_cors import CORS
from dbalchemy import db
from routes import api_bp
import logging
import os

app = Flask(__name__)
CORS(app)


db_path = os.path.join(os.path.dirname(__file__), 'instance', 'database.db')
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)  


app.register_blueprint(api_bp, url_prefix='/api')


logging.basicConfig(level=logging.DEBUG)


@app.errorhandler(Exception)
def handle_exception(e):
    logging.error(f"Exception: {e}", exc_info=True)
    response = {
        "error": str(e),
        "type": type(e).__name__
    }
    return jsonify(response), 500


if __name__ == '__main__':
    with app.app_context():
        #db.drop_all()
        db.create_all()  
    app.run(debug=True, use_reloader=False)