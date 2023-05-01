import hashlib
import geocoder
import math
import datetime
import jwt
from config import *

def get_hashed_password(pwd):
    salt = app.config.get('SALT')
    new_pwd = salt + pwd + salt
    h_pwd = hashlib.md5(new_pwd.encode())
    return h_pwd.hexdigest()

def get_lat_lng():
    g = geocoder.ip('me')
    return g.latlng


def calculate_distances(target, locations):
    R = 12742
    f = math.pi/180
    distances = {}
    target_lat = target[0]
    target_lon = target[1]

    for id, (lat, lon) in locations:
        # Calculate differences between latitudes and longitudes
        d_lat = lat - target_lat
        d_lon = lon - target_lon

        # Apply Haversine formula to calculate distance
        # haversine = math.sin(d_lat*f/2)**2 \
        #             + math.cos(target_lat*f)*math.cos(lat*f)*math.sin(d_lon*f/2)**2
        # c = 2*math.atan2(math.sqrt(haversine), math.sqrt(1-haversine))
        # distance = haversine*R

        haversine = 0.5 - math.cos(d_lat*f)/2 \
              + math.cos(target_lat*f)*math.cos(lat*f) \
                * (1-math.cos(d_lon*f))/2
        distance = R*math.sin(math.sqrt(haversine))

        # distances[id] = f'{round(distance, 2)} km' if distance > 5 else f'{round(distance*1000, 1)} m'
        distances[id] = distance

    return distances

def get_closest_users(target, locations):
    distances = calculate_distances(target, locations)
    
    sorted_list = sorted(distances.items(), key=lambda d: d[1])
    
    # distances = {key: f'{round(value, 1)} km' if value > 1 \
    #              else f'{round(value*1000, 2)} m' \
    #                 for key, value in sorted_list}
    distances = []
    for i in sorted_list:
        distances.append({
            'username': i[0],
            'distance': f'{round(i[1], 1)} km' if i[1] > 1 \
                        else f'{round(i[1]*1000, 2)} m'
        })
    return distances

def get_age(dob):
    dob = datetime.datetime.strptime(dob, '%m/%d/%Y')
    today = datetime.datetime.today()
    age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))
    return age

def create_jwt_token(id):
    try:
        payload = {
            'expires': (datetime.datetime.utcnow() + datetime.timedelta(days=3)).strftime('%Y-%m-%dT%H:%M:%S.%fZ'),
            'created': datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S.%fZ'),
            'id': id
        }
        return jwt.encode(
            payload,
            app.config.get('SECRET_KEY'),
            algorithm="HS256"
        )
    except Exception as e:
        return e

def decode_jwt_token(token):
    try:
        payload = jwt.decode(token, app.config.get('SECRET_KEY'), algorithms=['HS256'])
        return payload.get('id')
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except Exception as e:
        return e

if __name__ == '__main__':
    # testcases
    # print(get_hashed_password('123'))
    # target =  [10.1017, 106.3999]
    # locations = [
    #     ('haanh1909', 21.024770946312223, 105.82994305580645),
    #     ('minhtu012', 9.891362638025731, 105.74208572051654),
    #     ('vhau', 10.2415, 106.3758),
    #     ('huyq0102', 9.960263252472762, 106.4307696969806)
    # ]
    # ds = get_closest_users(target, locations)
    # print(ds)

    # print(get_age('05/01/2003'))
    token = encode_jwt_token('12')
    print(token)
    id = decode_jwt_token(token)
    print(id)


