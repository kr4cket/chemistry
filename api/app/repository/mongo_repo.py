from pymongo import MongoClient


class MongoRepo:

    def __init__(self):
        mongo_client = MongoClient(username='user', password='user')
        db = mongo_client.october_mug_talk
        db.segment.drop()
        self.__database = db["data"]
        self.__column = self.__database["segment"]
        self.__processed_column = self.__database["processed"]

    def add(self, new_data):
        self.__processed_column.insert_many(new_data)

    def get(self, columns=None):
        if columns is None:
            columns = {'_id': False}

        return self.__column.find({}, columns)
