import firebase_admin
from firebase_admin import credentials, firestore


if not firebase_admin._apps:
    cred = credentials.Certificate("pizzabestellapp-c93b5-firebase-adminsdk-fbsvc-c6c715fabd.json")
    firebase_admin.initialize_app(cred)

db = firestore.client()

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import uvicorn

import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)



app = FastAPI()
restaurants = []




@app.get("/")
async def root():
    
    logger.info("Index wurde geladen")
    return FileResponse("public/index.html")


@app.get("/restaurants")
async def database_check():
    global restaurants
    docs = db.collection("restaurants").stream()

    
    for doc in docs:
        item = doc.to_dict()
        item["id"] = doc.id
        restaurants.append(item)

    print("Restaurants aus Firestore:")
    print(restaurants)
    return {"restaurants": restaurants}


app.mount("/", StaticFiles(directory="public"), name="static")



if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True,
        reload_delay=0.5,
        reload_includes=["*.py"],
        reload_excludes=["public/*"],
        log_level="debug",
        reload_dirs=["."],
    )
