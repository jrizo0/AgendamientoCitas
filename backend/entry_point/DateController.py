from dto.DtoDate import DtoDate
from collections import namedtuple
from exceptions.InvalidUsage import InvalidUsage
from logic.DateManager import  DateManager

from flask import Flask,request,Response, jsonify, Blueprint
import json

import logger

date_controller = Blueprint('date_controller',__name__)

dateManager =DateManager()

@date_controller.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

@date_controller.route('/date/getDates/<date>', methods = ['GET'])
def getDates(date):
    if request.method == 'GET':
        return dateManager.getDatesByDate(date)


@date_controller.route('/date/insertDate', methods = ['POST'])
def DateController():
    if request.method == 'POST':
        print(request.json)
        data = request.json # a multidict containing POST data
        date = DtoDate(**data)
        dateManager.addDate(date)
        return Response(status=200)
