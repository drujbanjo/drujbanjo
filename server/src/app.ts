import express, { Express, Request, Response } from "express"
import cors from "./configs/cors.js"
import PostRoutes from "@/routes/post.routes.js"
import ProjectRoutes from "@/routes/project.routes.js"

const app: Express = express()

app.use(cors)
app.use(express.json())

app.use("/posts", PostRoutes)
app.use("/projects", ProjectRoutes)

app.get("/", (req: Request, res: Response) => {
	res.send(["[posts]: {HOST}/posts/*", "[projects]: {HOST}/projects/*"])
})

export default app
