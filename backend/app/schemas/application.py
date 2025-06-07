from pydantic import BaseModel
from uuid import UUID
from datetime import datetime

class ApplicationCreate(BaseModel):
    user_id: UUID
    offer_id: UUID
    cover_letter: str
    matching_score: float

class ApplicationOut(BaseModel):
    id: UUID
    user_id: UUID
    offer_id: UUID
    cover_letter: str
    matching_score: float
    created_at: datetime

    class Config:
        orm_mode = True
