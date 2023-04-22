from pymongo import MongoClient

def connect():
   CONNECTION_STRING = "localhost:27017"
   client = MongoClient(CONNECTION_STRING)
   return client['mates']

if __name__ == "__main__":
   dbname = connect()