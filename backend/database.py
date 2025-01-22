from motor.motor_asyncio import AsyncIOMotorClient

# MongoDB Connection URI
MONGO_URI = "mongodb://localhost:27017"

# MongoDB Client
client = AsyncIOMotorClient(MONGO_URI)

# Database and Collection References
db = client["SecureGovtDB"]  # Your database name
users_collection = db["users"]  # Your users collection
