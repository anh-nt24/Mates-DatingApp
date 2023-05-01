import subprocess

packages = [
    {'name': 'flask', 'version': '1.1.2'},
    {'name': 'Flask-RESTful', 'version': '0.3.8'},
    {'name': 'Flask-Cors', 'version': '3.0.10'},
    {'name': 'geocoder', 'version': '1.38.1'},
    {'name': 'Werkzeug', 'version': '1.0.1'},
    {'name': 'pymongo', 'version': '4.3.3'},
    {'name': 'numpy', 'version': '1.21.5'},
    {'name': 'opencv-python', 'version': '4.7.0.72'},
    {'name': 'torch', 'version': '1.13.1'},
    {'name': 'torchvision', 'version': '0.14.1'},
    {'name': 'Pillow', 'version': '9.0.1'},
]

try:
    for package in packages:
        if package['version']:
            subprocess.check_call(['pip3', 'install', package['name'] + '==' + package['version']])
        else:
            subprocess.check_call(['pip3', 'install', package['name']])
    print('ALL PACKAGES ARE INSTALLED')
except subprocess.CalledProcessError as e:
    print(f"Failed to install {package['name']} with version {package['version']}. \n Error: {e}")

try:
    # now try to import libraries
    from flask import Flask
    from flask_restful import Api
    from api import UserApi
    from api import ActivityApi
    from flask_cors import CORS
    import cv2
    import os
    import numpy as np
    import torch
    import torch.nn as nn
    from torchvision import models, transforms
    from torch.utils.data import Dataset
    import itertools
    from PIL import Image
    import pickle
    from flask_restful import Resource
    from flask_restful import request
    from flask import send_file, make_response, jsonify
    from api import database
    from bson.objectid import ObjectId
    import os
    from werkzeug.utils import secure_filename
    from pymongo import MongoClient
    print('ALL ARE DONE. YOU CAN NOW START YOUR SERVER')
except Exception as e:
    print(e)
