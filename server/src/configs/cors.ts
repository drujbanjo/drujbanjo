import cors, { CorsOptions } from "cors"

export const corsOptions: CorsOptions = {
	origin: ["http://localhost:3000", "https://drujbanjo.vercel.app"],
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
}

export default cors(corsOptions)
