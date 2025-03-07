from fastapi import FastAPI, HTTPException
from service import read_profit_and_loss_data
from config import config
from typing import List
import uvicorn
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from frontend (React app)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/quickbooks/profit-and-loss")
async def read_profit_and_loss():
    file_path = config.data_file_path
    try:
        result = read_profit_and_loss_data(file_path)
        return result
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Error reading JSON data")
 
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
