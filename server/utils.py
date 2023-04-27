import hashlib
import geocoder

def get_hashed_password(pwd):
    salt = "theanhdeptrailam"
    new_pwd = salt + pwd + salt
    h_pwd = hashlib.md5(new_pwd.encode())
    return h_pwd.hexdigest()

def get_lat_lng():
    g = geocoder.ip('me')
    return g.latlng



if __name__ == '__main__':
    print(get_hashed_password('123'))
