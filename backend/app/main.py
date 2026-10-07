from fastapi import FastAPI

from app.core.database import engine
from app.api.routes.contact import router as contact_router

app = FastAPI(
    title = "IT Consulting API",
    version = "1.0.0",
)

app.include_router(contact_router)

@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "message": "IT Consulting API is running",
    }