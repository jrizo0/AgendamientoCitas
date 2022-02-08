from exceptions.InvalidUsage import  InvalidUsage
from .DateModel import DateModel
from dto.DtoDate import DtoDate
import datetime as dt
class DateMapper:
    
    def mapToModel(self,dtoDate):
        self.__dtoValidator(dtoDate)
        date = DateModel()
        date.id = dtoDate.id
        date.name = dtoDate.name
        date.lastName = dtoDate.lastName
        date.age = dtoDate.age
        date.date = dtoDate.date
        date.hour = dtoDate.hour
        return date

    def __dtoValidator(self,dtoDate):

        if not dtoDate.id.isdecimal():
            raise InvalidUsage("incorrect id")
        try:
            dt.datetime.strptime(dtoDate.date, '%Y-%m-%d')
        except ValueError:
            raise InvalidUsage("Incorrect date format, should be YYYY-MM-DD")
        
        try:
            dt.datetime.strptime(dtoDate.hour, '%H:%M')
        
        except ValueError:
            raise InvalidUsage("Incorrect hour format, should be HH/MM")
        
        

        
#dto =DtoDate("1","2","3","2022/03/01","13:20")
#dateMapper =DateMapper()
#ob =dateMapper.mapToModel(dto)
#print(ob.__dict__)