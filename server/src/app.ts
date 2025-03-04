import express, { Express, Request, Response } from "express"
import cors from "./configs/cors.js"
import PostRoutes from "@/routes/post.routes.js"
import ProjectRoutes from "@/routes/project.routes.js"
import morgan from "@/configs/morgan.js"

const app: Express = express()

// configs
app.use(morgan)
app.use(cors)
app.use(express.json())

// routes
app.use("/posts", PostRoutes)
app.use("/projects", ProjectRoutes)

app.get("/", (req: Request, res: Response) => {
	res.send(["[posts]: {HOST}/posts/*", "[projects]: {HOST}/projects/*"])
})

export { app }
