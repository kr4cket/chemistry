import os
from fastapi import APIRouter

data_router = APIRouter()

@data_router.get("/")
async def get_db_link():
    db_url = os.getenv("MONGO_URI", "Mongo")
    return {"db_url": db_url}

