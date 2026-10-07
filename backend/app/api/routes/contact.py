from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.contact import ContactCreate, ContactResponse
from app.services.contact_service import create_contact

router = APIRouter(
    prefix = "/api/contact",
    tags = ["Contact"],
)

@router.post(
    "",
    response_model = ContactResponse,
    status_code = status.HTTP_201_CREATED,
)
def submit_contact(
    contact: ContactCreate,
    db: Session = Depends(get_db),
):
    return create_contact(db, contact)