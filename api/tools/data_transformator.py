import csv
from csv import DictReader
from pymongo import MongoClient

class DataTransformator:
    @classmethod
    def transform(cls):
        reader = cls.get_csv_reader()
        mongo_db = cls.create_mongo_connection()
        mydb = mongo_db["data"]
        mycol = mydb["segment"]
        headers = reader.fieldnames
        for each in reader:
            row = {}
            for field in headers:
                row[field] = each[field]

            mycol.insert_one(row)

    @classmethod
    def get_csv_reader(cls) -> DictReader:
        file = open('assets/db.csv', 'r')
        reader = csv.DictReader(file)
        return reader

    @classmethod
    def create_mongo_connection(cls) -> MongoClient:
        mongo_client = MongoClient(username='user',
                     password='user',)
        db = mongo_client.october_mug_talk
        db.segment.drop()
        return db

