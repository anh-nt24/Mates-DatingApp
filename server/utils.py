import hashlib

def get_hashed_password(pwd):
    salt = "theanhdeptrailam"
    new_pwd = salt + pwd + salt
    h_pwd = hashlib.md5(new_pwd.encode())
    return h_pwd.hexdigest()

import zlib
import base64


if __name__ == '__main__':
    print(get_hashed_password('123'))
