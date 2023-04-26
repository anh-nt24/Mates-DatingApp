from flask import Flask
from flask_restful import Api
from api import User
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'theanhdeptrai'


api = Api(app)
api.add_resource(User.Login, '/login')
api.add_resource(User.SignUp, '/signup')
if __name__ == '__main__':
    app.run(debug = True)