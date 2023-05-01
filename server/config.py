from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'theanhdeptrai'
app.config['CONNECTION_STRING'] = "localhost:27017"
app.config['SALT'] = "theanhdeptrailam"