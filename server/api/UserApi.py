from flask_restful import Resource
from flask_restful import request
from flask import send_file, make_response, jsonify
from api import database
from werkzeug.utils import secure_filename
import json
import os
from bson.objectid import ObjectId

from utils import *


class Login(Resource):
    def post(self):
        connection = database.connect()
        user_collect = connection['user']
        data = request.json
        result = user_collect.find_one({
            'username': data['username'],
            'password': data['password']
        }, {'_id': 1})
        if result:
            return {
                    'status': 200,
                    'id': str(result['_id'])
                }
        
        return {
            'status': 404,
            'id': None,
            'message': 'Information not found'
        }

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
            'status': 200,
            'response': data
        }

    def post(self):
        connection = database.connect()

        if 'files[]' not in request.files:
            return {
                'status': 400,
                'message': "No such a file uploaded"
            }

        req = request.files
        data = json.loads(request.form['data'])
        images = req.getlist('files[]')
        UPLOAD_FOLDER = './images/'

        if os.path.exists(UPLOAD_FOLDER + data['username']):
            return {
                'status': 409,
                'message': "Data conflict"
            }
        
        user_path = UPLOAD_FOLDER + data['username']
        os.mkdir(user_path)

        avt = []
        for file in images:
            if file:
                filename = secure_filename(file.filename)
                filepath = os.path.join(user_path, filename)
                file.save(filepath)
                avt.append(filepath[2:])
            else:
                return {
                    'status': 400,
                    'message': 'Bad request'
                }
        
        user_collect = connection['user']
        try:
            query = user_collect.insert_one({
                'username': data['username'],
                'password': get_hashed_password(data['password']),
                'name': data['firstname'],
                'phone': data['phone'],
                'DoB': f"{data['dob_M']}/{data['dob_D']}/{data['dob_Y']}",
                'gender': data['gender'],
                'gender_interest': data['gendered_interest'],
                'image': avt,
                'friend': [],
                'bio': data['about'],
                'latlng': get_lat_lng()
            })
            id = str(query.inserted_id)
            return {
                'status': 200,
                'id': id
            }
        except:
            return {
                'status': 500,
                'message': 'Something went wrong'
            }

class GetUserInfo(Resource):
    def get(self):
        arg = request.args
        id = arg['id']

        connection = database.connect()
        user_collect = connection['user']
        data = user_collect.find_one({'_id': ObjectId(id)}, {'image': 1, 'name': 1, '_id': 0})
        if data:
            img_path = "http://localhost:5000/" + data['image'][0]
            data['image'] = img_path
            return {
                'status': 200,
                'response': data,
            }

        return {
            'status': 404,
            'message': 'Data not found'
        }

class GetUserImage(Resource):
    def get(self, owner, img_url):
        filepath = f'./images/{owner}/{img_url}'
        if not os.path.exists(filepath):
            return {
                'status': 404,
                'message': 'Data not found'
            }
        try:
            return send_file(filepath, mimetype='image/png')
        except Exception as e:
            return {
                'status': 500,
                'message': e
            }