from flask_restful import Api
from api import UserApi
from api import ActivityApi
from flask_cors import CORS
from config import *



CORS(app)

api = Api(app)
api.add_resource(UserApi.Login, '/login')
api.add_resource(UserApi.SignUp, '/signup')
api.add_resource(UserApi.GetUserInfo, '/getinfo')
api.add_resource(UserApi.GetUserImage, '/upload/<string:owner>/<string:img_url>')
api.add_resource(ActivityApi.GetNearest, '/getnearst')
api.add_resource(ActivityApi.GetSimilar, '/getsimilar')
if __name__ == '__main__':
    app.run(debug = True)