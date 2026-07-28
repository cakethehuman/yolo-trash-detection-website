import logging
from typing import Annotated, Literal, Optional

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings, SettingsConfigDict

# Config settings
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

app = FastAPI(
    title="Trash Image Object Detection API",
    description="Detect images of trash then count the amount of it and return the values",
    version="0.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        ],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

class Settings(BaseSettings):
    client_id : str 
    
ALLOWED_FILE_TYPE = [".jpg", ".jpeg", ".png"]

@app.get('/', tags="testing")
def test():
    logging.info("User has used / command to do testing")
    return {"message" : "hello world"}

@app.post("/predict")
def predict_image(file: UploadFile = File(...)):
    fn = file.filename.lower()
    if fn not in ALLOWED_FILE_TYPE:
        raise HTTPException(
            status_code=404,
            detail = "Insert a valid file type"
        )
    return {"Succesfully" : "Yes file uploded succesfully"}
    
    
    