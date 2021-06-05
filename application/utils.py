import json, hashlib
import os


def load_config(file=os.path.abspath("./config.json")):
    with open(file, "r") as f:
        return json.load(f)


def encrypt_password(password):
    return hashlib.sha512(password.encode()).hexdigest()


load_config()
