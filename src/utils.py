import json, hashlib
import os

import boto3
from flask import current_app
from flask_mail import Message


def load_config(file=os.path.abspath("./config.json")):
    with open(file, "r") as f:
        return json.load(f)


def encrypt_password(password):
    return hashlib.sha512(password.encode()).hexdigest()


def upload_file_to_s3(file, folder: str, acl="public-read"):
    """
    This is a fuction that takes a byte like file object and uploads to aws
    Arguments
    file - byptes like file object
    folder - the folder for the file upload e.g profile_pictures/
    """
    bucket_name = "intalliance"  # current_app.config.get("FLASKS3_BUCKET_NAME")
    s3 = boto3.client(
        "s3",
        aws_access_key_id="AKIA3UYBQLHGWWSV6B6X",  # current_app.config.get("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key="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",  # current_app.config.get("AWS_SECRET_ACCESS_KEY"),
    )
    if not folder.endswith("/"):
        folder = folder + "/"
    try:

        s3.upload_fileobj(
            file,
            bucket_name,
            folder + file.filename,
            # ExtraArgs={"ContentType": file.content_type},
        )
        # https://skujy-logistics.s3.amazonaws.com/picture/this.jpg
        return "https://{}.s3.amazonaws.com/{}{}".format(
            bucket_name, folder, file.filename
        )

    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        return str(e)


def send_mail(mail, subject: str, message: str, recipient: list):
    msg = Message(message, recipient=recipient)
    mail.send(msg)


# file = open("config.json", "rb")
# upload_file_to_s3(file, "test/")
