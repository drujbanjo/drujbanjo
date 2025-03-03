import cors, { CorsOptions } from "cors"

export const corsOptions: CorsOptions = {
	origin: ["http://localhost:3000", "https://drujbanjo.vercel.app"],
	methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"],
	credentials: true
}

export default cors(corsOptions)
