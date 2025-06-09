from fastapi import FastAPI
from app.routers import user , job_offer , auth
from app.routers import application ,cv,match



app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Backend is alive!"}


app.include_router(auth.router)
app.include_router(user.router)
app.include_router(job_offer.router)
app.include_router(application.router)
app.include_router(cv.router)
app.include_router(match.router)
