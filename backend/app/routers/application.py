from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from uuid import UUID
from typing import List

from app.db.database import get_async_session
from app.schemas.application import ApplicationCreate, ApplicationOut
from app.crud import application as crud

router = APIRouter(prefix="/applications", tags=["Applications"])

@router.post("/", response_model=ApplicationOut, status_code=status.HTTP_201_CREATED)
async def create_application_route(data: ApplicationCreate, db: AsyncSession = Depends(get_async_session)):
    return await crud.create_application(db, data)

@router.get("/", response_model=List[ApplicationOut])
async def get_all_applications_route(db: AsyncSession = Depends(get_async_session)):
    return await crud.get_all_applications(db)

@router.get("/{app_id}", response_model=ApplicationOut)
async def get_application_by_id_route(app_id: UUID, db: AsyncSession = Depends(get_async_session)):
    app = await crud.get_application_by_id(db, app_id)
    if not app:
        raise HTTPException(status_code=404, detail="Application not found")
    return app

@router.get("/user/{user_id}", response_model=List[ApplicationOut])
async def get_applications_by_user(user_id: UUID, db: AsyncSession = Depends(get_async_session)):
    return await crud.get_applications_by_user(db, user_id)

@router.get("/offer/{offer_id}", response_model=List[ApplicationOut])
async def get_applications_by_offer(offer_id: UUID, db: AsyncSession = Depends(get_async_session)):
    return await crud.get_applications_by_offer(db, offer_id)

@router.delete("/{app_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_application_route(app_id: UUID, db: AsyncSession = Depends(get_async_session)):
    success = await crud.delete_application(db, app_id)
    if not success:
        raise HTTPException(status_code=404, detail="Application not found")
