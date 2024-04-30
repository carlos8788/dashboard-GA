import dotenv from "dotenv";

dotenv.config()

export default {
    MONGO_DB_URI: process.env.MONGO_DB_URI || 'http://localhost:3006',
    PORT: process.env.PORT || 3001
}