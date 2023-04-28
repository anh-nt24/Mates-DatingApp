from flask_restful import Resource
from flask_restful import request
from flask import send_file, make_response, jsonify
from api import database
from werkzeug.utils import secure_filename
import json
import os
from bson.objectid import ObjectId

from utils import *

class GetNearest(Resource):
    def get(self):
        arg = request.args
        id = arg['id']

        connection = database.connect()
        user_collect = connection['user']
        data = user_collect.find_one({'_id': ObjectId(id)})
        my_lat_lng = get_lat_lng()
        if my_lat_lng != data['latlng']:
            query = {'latlng' : data['latlng']}
            value = {'$set': {
                'latlng': my_lat_lng
            }}
            user_collect.update_one(query, value)
            data['latlng'] = my_lat_lng
        my_gender = data['gender']
        gendered_interest = data['gender_interest']

        other_people = user_collect.find()

        # if data:
        #     img_path = "http://localhost:5000/" + data['image'][0]
        #     data['image'] = img_path
        #     return {
        #         'status': 200,
        #         'response': data,
        #     }

        # return {
        #     'status': 404,
        #     'message': 'Data not found'
        # }