from functools import wraps
from flask import Flask, session, redirect, request, url_for, render_template, Blueprint
from . import mysql

admin = Blueprint("admin", __name__, url_prefix="/admin")

def admin_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        try:
            db_connection = mysql.connect()
            cursor = db_connection.cursor()
            # fetch user from database
            cursor.execute("SELECT * FROM users WHERE id=%s", (session["user"]["id"]))
            user = cursor.fetchone()
            # If user is admin , return response
            if user["is_admin"] == 1:
                return f(*args, **kwargs)
        except Exception as e:
            print(e)
            # If user is not admin, redirect to home
            return redirect(url_for("main.index"))
        # If the http verb is safe, return response
    return decorated

@admin.route("/login/", methods=["GET"])
def admin_login():
    return render_template("admin/loginDash.html")

@admin.route("/", methods=["GET"])
@admin_required
def index_dashboard():
    return render_template("admin/index.html")

@admin.route("/aidr/", methods=["GET"])
@admin_required
def aidr_dashboard():
    return render_template("admin/aidrDash.html")

@admin.route("/artists/", methods=["GET"])
@admin_required
def artists_dashboard():
    return render_template("admin/artistsDash.html")

@admin.route("/donors/", methods=["GET"])
@admin_required
def donors_dashboard():
    return render_template("admin/donorsDash.html")

@admin.route("/financial/", methods=["GET"])
@admin_required
def financial_dashboard():
    return render_template("admin/financialDash.html")

@admin.route("/forums/", methods=["GET"])
@admin_required
def forums_dashboard():
    return render_template("admin/forumsDash.html")

@admin.route("/mission/", methods=["GET"])
@admin_required
def mission_dashboard():
    return render_template("admin/missionDash.html")

@admin.route("/partners/", methods=["GET"])
@admin_required
def partners_dashboard():
    return render_template("admin/partnersDash.html")

@admin.route("/signIn/", methods=["GET"])
def login_Dashboard():
    return render_template("admin/loginDash.html")