from pydantic import BaseModel, EmailStr

class User(BaseModel):
    full_name: str
    email: EmailStr
    password: str

class Login(BaseModel):
    email: EmailStr
    password: str
