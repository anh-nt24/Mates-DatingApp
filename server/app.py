from flask import Flask
from flask_restful import Api
from api import UserApi
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'theanhdeptrai'


api = Api(app)
api.add_resource(UserApi.Login, '/login')
api.add_resource(UserApi.SignUp, '/signup')
api.add_resource(UserApi.GetUserInfo, '/activity')
if __name__ == '__main__':
    app.run(debug = True)