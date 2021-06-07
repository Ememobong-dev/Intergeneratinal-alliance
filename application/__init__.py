from flask import Flask
from flaskext.mysql import MySQL
from pymysql.cursors import DictCursor

from .utils import *

mysql = MySQL(cursorclass=DictCursor)


def create_app():
    app = Flask(__name__)

    config = load_config()
    app.config["SECRET_KEY"] = config["SECRET_KEY"]
    app.config["MYSQL_DATABASE_DB"] = config["DB"]["DATABASE"]
    app.config["MYSQL_DATABASE_USER"] = config["DB"]["USERNAME"]
    app.config["MYSQL_DATABASE_PASSWORD"] = config["DB"]["PASSWORD"]
    app.config["BUCKET_NAME"] = "intalliance"
    app.config["AWS_ACCESS_KEY_ID"] = "AKIA3UYBQLHGWWSV6B6X"
    app.config["AWS_SECRET_ACCESS_KEY"] = "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"

    mysql.init_app(app)
    # blueprint for auth routes in our app
    from .api import api
    from .main import main

    app.register_blueprint(api)
    app.register_blueprint(main)

    return app
