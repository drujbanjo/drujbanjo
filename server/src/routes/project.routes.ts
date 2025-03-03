import { Router } from "express"
import controller from "@/controllers/project.controller.js"

const router = Router()

router.get("/", controller.getAll)
router.get("/:id", (req, res) => {
	controller.getById(req, res)
})
router.post("/", (req, res) => {
	controller.create(req, res)
})
router.put("/:id", (req, res) => {
	controller.update(req, res)
})
router.delete("/:id", (req, res) => {
	controller.remove(req, res)
})

export default router
