# app/routers/cv.py

from fastapi import APIRouter, UploadFile, File, HTTPException
from app.db.database import mongo_db
from datetime import datetime
from bson.objectid import ObjectId
from typing import List

from fastapi.responses import StreamingResponse
from io import BytesIO

router = APIRouter(prefix="/cvs", tags=["CVs"])

from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from datetime import datetime
from bson import ObjectId
from app.db.database import mongo_db
from app.core.security import get_current_user
from app.schemas.user import UserOut  # or your UserOut

router = APIRouter(prefix="/cv", tags=["CVs"])

@router.post("/upload")
async def upload_cv(
    file: UploadFile = File(...),
    current_user: UserOut = Depends(get_current_user),
):
    if not file.content_type or "pdf" not in file.content_type:
        raise HTTPException(status_code=400, detail="Only PDF files allowed.")

    contents = await file.read()

    cv_data = {
        "filename": file.filename,
        "content": contents,
        "upload_date": datetime.utcnow(),
        "user_id": str(current_user.id),
    }

    result = await mongo_db["cvs"].insert_one(cv_data)

    return {"cv_id": str(result.inserted_id), "message": "CV uploaded successfully."}




@router.get("/", response_model=List[dict])
async def list_cvs():
    cvs_cursor = mongo_db["cvs"].find({}, {"content": 0})  # Exclude the binary content
    cvs = []
    async for cv in cvs_cursor:
        cv["_id"] = str(cv["_id"])
        cvs.append(cv)
    return cvs



@router.get("/download/{cv_id}")
async def download_cv(cv_id: str):
    cv = await mongo_db["cvs"].find_one({"_id": ObjectId(cv_id)})
    if not cv:
        raise HTTPException(status_code=404, detail="CV not found")

    file_like = BytesIO(cv["content"])
    return StreamingResponse(file_like, media_type="application/pdf", headers={
        "Content-Disposition": f"attachment; filename={cv['filename']}"
    })