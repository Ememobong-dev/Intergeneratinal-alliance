from flask import Flask, session, redirect, request, url_for, render_template, Blueprint

admin = Blueprint("admin", __name__, url_prefix="/admin")

@admin.route("/login", methods=["GET"])
def admin_login():
    return render("admin/loginDash.html")
    
@admin.route("/", methods=["GET"])
def index_dashboard():
    return render_template("admin/index.html")

@admin.route("/aidr", methods=["GET"])
def aidr_dashboard():
    return render_template("admin/aidrDash.html")

@admin.route("/artists", methods=["GET"])
def artists_dashboard():
    return render_template("admin/artistsDash.html")

@admin.route("/donors", methods=["GET"])
def donors_dashboard():
    return render_template("admin/donorsDash.html")

@admin.route("/financial", methods=["GET"])
def financial_dashboard():
    return render_template("admin/financialDash.html")

@admin.route("/forums", methods=["GET"])
def forums_dashboard():
    return render_template("admin/forumsDash.html")

    
@admin.route("/mission", methods=["GET"])
def mission_dashboard():
    return render_template("admin/missionDash.html")

@admin.route("/partners", methods=["GET"])
def partners_dashboard():
    return render_template("admin/partnersDash.html")

@admin.route("/signIn", methods=["GET"])
def login_Dashboard():
    return render_template("admin/loginDash.html")