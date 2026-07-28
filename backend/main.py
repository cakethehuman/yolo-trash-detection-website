import logging
from typing import Optional

from fastapi import FastAPI

from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings, SettingsConfigDict

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

app = FastAPI(
    title="Trash Image Object Detection API",
    description="Detect images of trash then count the amount of it and return the values",
    version="0.0.0"
)

class Settings(BaseSettings):
    client_id : str 

@app.get('/', tags="testing")
def test():
    logging.info("User has used / command to do testing")
    return {"message" : "hello world"}