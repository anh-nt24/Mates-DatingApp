from pymongo import MongoClient
from config import *

def connect():
   connection_string = app.config.get('CONNECTION_STRING')
   client = MongoClient(connection_string)
   return client['mates']

if __name__ == "__main__":
   dbname = connect()