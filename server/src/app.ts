import express, { Express, Request, Response } from "express"
import cors from "cors"
import PostRoutes from "@/routes/post.routes.js"
import ProjectRoutes from "@/routes/project.routes.js"
import morganMiddleware from "@/configs/morgan.js"

const app: Express = express()

// configs
console.log("morgan is running")
app.use(morganMiddleware)
app.use(cors())
app.use(express.json())

// routes
app.use("/posts", cors(), PostRoutes)
app.use("/projects", cors(), ProjectRoutes)

app.get("/", (req: Request, res: Response) => {
	res.send(["[posts]: {HOST}/posts/*", "[projects]: {HOST}/projects/*"])
})

export { app }
