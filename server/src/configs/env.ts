import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.resolve(__dirname, "../../.env") })

if (!process.env.DATABASE_URL) {
	throw new Error("❌ DATABASE_URL не задан в .env!")
}

export const ENV = {
	DB_URL: process.env.DATABASE_URL!,
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV
}
