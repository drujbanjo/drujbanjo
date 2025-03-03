import { prisma } from "@/configs/db.js"
import { TPostDto } from "@/dto/post.dto.js"

const getAll = async () => {
	return prisma.post.findMany()
}

const getById = async (id: TPostDto["id"]) => {
	return prisma.post.findUnique({ where: { id } })
}

const create = async (dto: Omit<TPostDto, "id">) => {
	return prisma.post.create({ data: dto })
}

const update = async (id: TPostDto["id"], dto: Omit<TPostDto, "id">) => {
	return prisma.post.update({ where: { id }, data: dto })
}

const remove = async (id: TPostDto["id"]) => {
	return prisma.post.delete({ where: { id } })
}

export default { getAll, getById, create, update, remove }
