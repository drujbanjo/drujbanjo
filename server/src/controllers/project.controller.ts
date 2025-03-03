import { PostSchema } from "@/dto/project.dto.js"
import service from "@/services/project.service.js"
import { Request, Response } from "express"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

const getAll = async (req: Request, res: Response) => {
	try {
		const data = await service.getAll()
		res.status(200).json(data)
	} catch {
		res.status(500).json({ message: "Internal Server Error" })
	}
}

const getById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		if (!id) return res.status(400).json({ message: "ID is required" })

		const data = await service.getById(id)

		if (!data) return res.status(404).json({ message: "User not found" })
		res.json(data)
	} catch (error: unknown) {
		if (error instanceof PrismaClientKnownRequestError) {
			if (error.code === "P2025") {
				return res.status(404).json({ message: "Record not found" })
			}
		}

		if (error instanceof Error) {
			console.error(error)
			return res.status(500).json({ message: error.message })
		}

		console.error("Unexpected error", error)
		res.status(500).json({ message: "Internal Server Error" })
	}
}

const create = async (req: Request, res: Response) => {
	try {
		if (req.body !== PostSchema) return res.status(400).json({ message: "Invalid request body" })

		const user = await service.create(req.body)
		res.status(201).json(user)
	} catch {
		res.status(500).json({ message: "Internal Server Error" })
	}
}

const update = async (req: Request, res: Response) => {
	try {
		if (!req.body) return res.status(400).json({ message: "Invalid request body" })

		const { id } = req.params
		if (!id) return res.status(400).json({ message: "ID is required" })

		const user = await service.update(id, req.body)
		res.status(200).json(user)
	} catch {
		res.status(500).json({ message: "Internal Server Error" })
	}
}

const remove = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		if (!id) return res.status(400).json({ message: "ID is required" })

		const user = await service.remove(id)
		res.status(200).json(user)
	} catch {
		res.status(500).json({ message: "Internal Server Error" })
	}
}

export default { getAll, getById, create, update, remove }
