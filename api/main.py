import os
import uvicorn
from app.app import Application 

def main():
    application = Application()
    uvicorn.run(application.app, host="0.0.0.0", port=os.getenv("API_PORT", 8000))


if __name__ == '__main__':
    main()
