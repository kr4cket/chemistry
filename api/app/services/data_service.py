import pandas as pd
from api.app.services.data_process_service import DataProcessor
from api.app.repository.mongo_repo import MongoRepo


class Singleton(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]


class DataService(metaclass=Singleton):
    def __init__(self):
        self.__repo = MongoRepo()

    def add_data(self):
        pass

    def init_processing_data(self):
        data = list(self.__repo.get())
        data_frame = pd.DataFrame(data)
        processed_dataframe = DataProcessor.start_process(data_frame)
        processed_dataframe.reset_index(inplace=True)
        self.__repo.add(processed_dataframe.to_dict('records'))

    def get_data(self, columns):
        query_cols = {}
        print(columns)
        for col in columns:
            query_cols[col] = True
        return list(self.__repo.get(query_cols))


def get_data_service():
    return DataService()
