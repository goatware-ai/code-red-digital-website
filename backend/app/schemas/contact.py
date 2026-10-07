from pydantic import BaseModel, EmailStr, ConfigDict

class ContactCreate(BaseModel):
    name: str
    company: str | None = None
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    id: int
    name: str
    company: str | None
    email: str
    message: str

    model_config = ConfigDict(from_attributes = True)