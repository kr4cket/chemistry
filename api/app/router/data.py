import os
from typing import Annotated
from api.app.services.data_service import get_data_service
from bson.json_util import dumps

from fastapi import APIRouter, Depends, Query

data_router = APIRouter()


@data_router.get("/")
async def get_db_link():
    db_url = os.getenv("MONGO_DATABASE_URI", "MONGO_DATABASE_URI")
    return {"db_url": db_url}


@data_router.get("/data")
async def get_data_by_columns(service: Annotated[get_data_service, Depends()], columns: str = Query(None, description="Columns: {column_name_1|column_name_2}", )):
    if columns:
        columns = columns.split("|")
    else:
        columns = []
    data = service.get_data(columns)
    return {"data": dumps(data)}


@data_router.get("/process")
async def process_data(service: Annotated[get_data_service, Depends()]):
    service.init_processing_data()
    return {"success": True}
