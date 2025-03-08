import express, { Express, Request, Response } from "express"
import PostRoutes from "@/routes/post.routes.js"
import ProjectRoutes from "@/routes/project.routes.js"
import morganMiddleware from "@/configs/morgan.js"
import cors from "@/configs/cors.js"

const app: Express = express()

// configs
app.use(morganMiddleware)
app.use(cors)
app.use(express.json())

// routes
app.use("/posts", PostRoutes)
app.use("/projects", ProjectRoutes)

app.get("/", (req: Request, res: Response) => {
	res.send(["[posts]: {HOST}/posts/*", "[projects]: {HOST}/projects/*"])
})

export { app }
