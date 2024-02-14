from fastapi import FastAPI
from endpoints import file_reader

app = FastAPI(title="File Reader API", description="API to read different file types", version="1.0.0")

app.include_router(file_reader.router, tags=["File Reader"])