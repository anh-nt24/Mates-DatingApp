from flask_restful import Resource
from flask_restful import request
from flask import send_file, make_response, jsonify
from api import database
from bson.objectid import ObjectId
import os
from werkzeug.utils import secure_filename
from retrieval.Retrieval import Retrieval

from utils import *

class GetNearest(Resource):
    def get(self):
        arg = request.args
        token = arg['id']
        id = decode_jwt_token(token)

        connection = database.connect()
        user_collect = connection['user']
        user_data = user_collect.find_one({'_id': ObjectId(id)})
        my_lat_lng = get_lat_lng()
        if my_lat_lng != user_data['latlng']:
            query = {'latlng' : user_data['latlng']}
            value = {'$set': {
                'latlng': my_lat_lng
            }}
            user_collect.update_one(query, value)
            user_data['latlng'] = my_lat_lng

        # not use now
        # my_gender = user_data['gender']
        # gendered_interest = user_data['gender_interest']

        other_users_data = user_collect.find({"_id" : { "$ne":  ObjectId(id)}})

        locations = []
        temp_data = []
        for dt in other_users_data:
            locations.append(
                (dt['username'], dt['latlng'])
            )
            temp_data.append({
                'username': dt['username'],
                'name': dt['name'],
                'age': get_age(dt['DoB']),
                'bio': dt['bio'],
                'gender': dt['gender'],
                'gendered_interest': dt['gender_interest'],
                'image': dt['image'],
            })

        closest_users = get_closest_users(my_lat_lng, locations)
        for i in closest_users:
            for j in temp_data:
                if j['username'] == i['username']:
                    i.update(j)
                    continue

        return {
            'status': 200,
            'response': closest_users
        }
    
class GetSimilar(Resource):
    def post(self):
        image = request.files['file']

        tmp_folder = './tmp_folder'

        if os.path.exists(tmp_folder):
            for f in os.listdir(tmp_folder):
                os.remove(os.path.join(tmp_folder, f))
            os.rmdir(tmp_folder)
        os.mkdir(tmp_folder)
        if image:
            filename = secure_filename(image.filename)
            filepath = os.path.join(tmp_folder, filename)
            image.save(filepath)
        else:
            return {
                'status': 400,
                'message': 'Bad request'
            }
        
        try:
            connection = database.connect()
            user_collect = connection['user']
            cbir = Retrieval()
            neighbors = cbir.query(filepath)
            users = {}
            for i in neighbors:
                uname = i.split('/')[1]
                if uname in users:
                    if users[uname][1] < neighbors[i]:
                        users[uname] = (i, neighbors[i])
                else:
                    users[uname] = (i, neighbors[i])
            data = []
            for i in users.keys():
                result = user_collect.find_one({
                    'username': i
                }, {'_id': 0, 'password': 0})
                result['similar'] = f'{round(100*max(users[i][1], 0),2)} %'
                try:
                    result['nearest'] = result['image'].index(users[i][0])
                except:
                    result['nearest'] = 0
                data.append(result)
            if result:
                return {
                        'status': 200,
                        'response': data
                    }
            return {
                'status': 404,
                'message': 'Information not found'
            }
        except Exception as e:
            return {
                'status': 500,
                'message': e
            }
