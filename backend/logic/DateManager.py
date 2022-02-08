from infrastructure.DateMapper import DateMapper
from infrastructure.DateRetrieve import DateRetrieve
from infrastructure.DateModel import DateModel
from flask import jsonify
from exceptions.InvalidUsage import  InvalidUsage
from dto.DtoDate import DtoDate
class DateManager():

    dateRetrieve = DateRetrieve()
    def addDate(self,dtoDate):
        mapper = DateMapper()
        date = mapper.mapToModel(dtoDate)
        self.dateRetrieve.saveFile(date)

    def getDatesByDate(self,date):
        fileNames = self.dateRetrieve.getListOfIdFromDate(date)
        dates = []
        for fileName in fileNames:
            document = fileName.replace(".json","")
            dates.append(self.dateRetrieve.getDate(fileName, date))
        return jsonify(dates)



