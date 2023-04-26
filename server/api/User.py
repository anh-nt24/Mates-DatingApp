from flask_restful import Resource
from flask_restful import request
from flask import jsonify
from api import database
from werkzeug.utils import secure_filename
from bson.json_util import dumps, loads

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

class SignUp(Resource):
    def get(self):
        connection = database.connect()
        user_collect = connection['user']
        cursor = user_collect.find({}, { 
            "username": 1,
            "phone": 1,
            '_id': 0})
        phone = []
        username = []
        for i in cursor:
            phone.append(i['phone'])
            username.append(i['username'])
        data = {
            'phone': phone,
            'username': username
        }
        return {
            'response': data
        }

    def post(self):
        connection = database.connect()
        data = request.json
        user_collect = connection['user']
        try:
            query = user_collect.insert_one({
                'username': data['username'],
                'password': data['password'],
                'name': data['firstname'],
                'phone': data['phone'],
                'DoB': f"{data['dob_M']}/{data['dob_D']}/{data['dob_Y']}",
                'gender': data['gender'],
                'gender_interest': data['gendered_interest'],
                'image': [],
                'friend': [],
                'bio': data['about']
            })
            id = str(query.inserted_id)
            return {
                'status': True,
                'id': id
            }, 200
        except:
            return {
                'status': False,
            }, 403
