from sqlalchemy.orm import Session

from app.models.contact import ContactInquiry
from app.schemas.contact import ContactCreate

def create_contact(
    db: Session,
    contact_data: ContactCreate,
) -> ContactInquiry:

    contact = ContactInquiry(
        name = contact_data.name,
        company = contact_data.company,
        email = contact_data.email,
        message = contact_data.message,
    )

    db.add(contact)
    db.commit()
    db.refresh(contact)

    return contact