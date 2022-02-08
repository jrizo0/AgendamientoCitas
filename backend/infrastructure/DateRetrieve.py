import json
from os import listdir, makedirs
from os.path import isfile, join, abspath, exists
class DateRetrieve:

    path=abspath(join('../', 'db'))+"/"

    def saveFile(self,date):
        path = self.path+date.date.replace("-","")
        self.__createPathIfNotExists(path)
        print("path:"+ path+"/"+date.id+".json")
        with open(path+"/"+date.id+".json", "w") as outFile:
            json.dump(date.__dict__, outFile)
    
    def getListOfIdFromDate(self,date):
        return[f for f in listdir(self.path + date.replace("-","")) if isfile(join(self.path + date.replace("-",""), f))]

    def getDate(self, file, date):
        path = self.path + date.replace("-","")
        with open(path + "/" + file, "r") as openFile:
            return json.load(openFile)

    def __createPathIfNotExists(self,path):
        isExist = exists(path)
        if not isExist:
            # Create a new directory because it does not exist 
            makedirs(path)





#date = DateModel("12351","2","3",'2022/03/01',"13:20")

#dateRetrieve = DateRetrieve()
#dateRetrieve.saveFile(date)
#print(dateRetrieve.getListOfIdFromDate("20220301"))
