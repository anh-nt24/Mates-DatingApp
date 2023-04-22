from flask_restful import Resource
from flask_restful import request
from flask import jsonify
from api import database

class Login(Resource):
    def post(self):
        connection = database.connect()
        user_collect = connection['user']
        data = request.json
        result = user_collect.find_one({
            'username': data['username'],
            'password': data['password']
        })
        if result:
            return {
                    'status': True,
                    'role': 'User'
                }, 200
        
        return {
            'status': False,
        }, 200