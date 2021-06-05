from flask import Flask, session, redirect, request, url_for, render_template, Blueprint

main = Blueprint("main", __name__)


@main.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@main.route("/aidr", methods=["GET"])
def aidr():
    return render_template("aidr.html")


@main.route("/aidrtwo", methods=["GET"])
def aidrtwo():
    return render_template("aidrtwo.html")


@main.route("/artists_profile", methods=["GET"])
def artists_profile():
    return render_template("artists_profile.html")


@main.route("/artists", methods=["GET"])
def artists():
    return render_template("artists.html")


@main.route("/contact", methods=["GET"])
def contact():
    return render_template("contact.html")


@main.route("/donors", methods=["GET"])
def donors():
    return render_template("donors.html")


@main.route("/financial", methods=["GET"])
def financial():
    return render_template("financial.html")


@main.route("/forum", methods=["GET"])
def forum():
    return render_template("forums.html")


@main.route("/gallery", methods=["GET"])
def gallery():
    return render_template("gallery.html")


@main.route("/join", methods=["GET"])
def join():
    return render_template("join.html")


@main.route("/mission", methods=["GET"])
def mission():
    return render_template("mission.html")


@main.route("/partner-beauty", methods=["GET"])
def partner_beauty():
    return render_template("partnerBeauty.html")


@main.route("/partners", methods=["GET"])
def partners():
    return render_template("partners.html")


@main.route("/portfolio", methods=["GET"])
def portfolio():
    return render_template("portfolio.html")
