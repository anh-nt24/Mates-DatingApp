from flask_restful import Resource
from flask_restful import request
from flask import send_file, make_response, jsonify
from api import database
from bson.objectid import ObjectId

from utils import *

class GetNearest(Resource):
    def get(self):
        arg = request.args
        id = arg['id']

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