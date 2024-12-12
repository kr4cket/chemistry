from fastapi import FastAPI
from app.router.data import data_router

class Application:
    def __init__(self):
        self.app = FastAPI()
        self.setup_routes()

    def setup_routes(self):
        self.app.include_router(data_router, prefix="/api")
