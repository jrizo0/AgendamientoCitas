from flask import Flask
from entry_point.DateController import date_controller
main_app = Flask(__name__)
main_app.register_blueprint(date_controller)

@main_app.after_request

def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response