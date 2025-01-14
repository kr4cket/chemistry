import os
import uvicorn
from app.app import Application
from tools.data_transformator import DataTransformator


def main():
    transformator = DataTransformator()
    transformator.transform()
    application = Application()
    uvicorn.run(application.app, host=os.getenv("API_HOST", "localhost"), port=os.getenv("API_PORT", 8000))

if __name__ == '__main__':
    main()
