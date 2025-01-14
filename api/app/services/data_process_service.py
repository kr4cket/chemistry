import numpy as np
from pandas.core.interchange.dataframe_protocol import DataFrame
from scipy.stats import ttest_ind
from os import path
import pandas as pd
from scipy import stats


class DataProcessor:
    delete_row_names = ['shape', 'Vmax, mM/s', 'Km, mM']
    delete_column_names = ['length, nm', 'width, nm', 'depth, nm']
    default_column_names = ['pol', 'Syngony', 'Ccat(mg/mL)', 'Mw(coat), g/mol']
    change_data_columns = ['C max, mM', 'C(const), mM']
    reaction_types = [["TMB + H2O2", "H2O2 + TMB"], ["H2O2 + OPD", "OPD + H2O2"]]
    emissions_columns = ['Mw(coat), g/mol', 'Km, mM', 'Vmax, mM/s', 'C min, mM', 'C max, mM', 'ph', 'temp, В°C']

    @classmethod
    def start_process(cls, data: DataFrame) -> DataFrame:
        data = cls.delete_empty_rows(data, cls.delete_row_names)
        data = cls.delete_columns(data, cls.delete_column_names)
        data = cls.set_default_values(data, cls.default_column_names)
        data = cls.set_cconst_average_values(data)
        data = cls.set_temp_average_values(data)
        data = cls.set_ph_average_values(data)
        data = cls.change_data_types(data, cls.change_data_columns)
        data = cls.swap_reaction_type_in_column(data, cls.reaction_types)

        data['formula'] = data['formula'].str.replace(" ", "")
        data = cls.delete_emissions_data(data, cls.emissions_columns)
        return data


    @classmethod
    def delete_empty_rows(cls, data, column_names) -> DataFrame:
        for name in column_names:
            if name == 'Vmax, mM/s' or 'Km, mM':
                data = data[data[name] != "no"]
                continue
            data = data[~data[name].isnull()]
        return data

    @classmethod
    def delete_columns(cls, data, column_names) -> DataFrame:
        new_data = data.drop(columns=column_names, axis=1)
        return new_data

    @classmethod
    def set_default_values(cls, data, column_names) -> DataFrame:
        for name in column_names:
            value = data[name].iloc[0]
            data[name] = data[name].fillna(value)
        return data

    @classmethod
    def set_cconst_average_values(cls, data, column_name='C(const), mM') -> DataFrame:
        new_data = data[~data[column_name].isnull()]
        new_data = new_data[data[column_name] != "?"]
        new_data = new_data[data[column_name] != "no"]
        new_data = new_data[data[column_name] != ""]
        new_data[column_name] = new_data[column_name].astype(str)
        new_data[column_name] = new_data[column_name].str.replace(',', '')
        new_data[column_name] = new_data[column_name].astype(float)
        mean = new_data[column_name].mean()
        data = data[data[column_name] != "?"]
        data = data[data[column_name] != "no"]
        data[column_name] = data[column_name].fillna(mean)
        return data

    @classmethod
    def set_temp_average_values(cls, data, column_name='temp, В°C'):
        new_data = data[~data[column_name].isnull()]
        new_data = new_data[data[column_name] != ""]
        new_data[column_name] = new_data[column_name].astype(float)
        mean = new_data[column_name].mean()
        data[column_name] = data[column_name].fillna(mean)
        data[column_name] = data[column_name].round(1)
        return data

    @classmethod
    def set_ph_average_values(cls, data, column_name='ph'):
        new_data = data[~data[column_name].isnull()]
        new_data = new_data[data[column_name] != ""]
        new_data[column_name] = new_data[column_name].astype(float)
        mean = new_data[column_name].mean()
        data[column_name] = data[column_name].fillna(mean)
        data[column_name] = data[column_name].round(1)
        return data

    @classmethod
    def change_data_types(cls, data, column_names):
        new_data = data
        for name in column_names:
            new_data[name] = new_data[name].astype(str)
            new_data[name] = new_data[name].str.replace(',', '')
            new_data = new_data[new_data[name] != ""]
            new_data[name] = new_data[name].astype(float)

        return new_data

    @classmethod
    def swap_reaction_type_in_column(cls, data, types):
        for tp in types:
            data['ReactionType'] = data['ReactionType'].str.replace(tp[0], tp[1])
        return data

    @classmethod
    def delete_emissions_data(cls, data, columns) -> DataFrame:
        for column_name in columns:
            data = data[data[column_name] != ""]
            data[column_name] = data[column_name].astype(float)
            Q1 = data[column_name].quantile(0.25)
            Q3 = data[column_name].quantile(0.75)
            IQR = Q3 - Q1
            new_data = data[(data[column_name] >= Q1 - 1.5 * IQR) & (data[column_name] <= Q3 + 1.5 * IQR)]
        return new_data
