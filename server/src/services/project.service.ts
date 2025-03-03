import { prisma } from "@/configs/db.js"
import { TProjectDto } from "@/dto/project.dto.js"

const getAll = async () => {
	return prisma.project.findMany()
}

const getById = async (id: TProjectDto["id"]) => {
	return prisma.project.findUnique({ where: { id } })
}

const create = async (dto: Omit<TProjectDto, "id">) => {
	return prisma.project.create({ data: dto })
}

const update = async (id: TProjectDto["id"], dto: Omit<TProjectDto, "id">) => {
	return prisma.project.update({ where: { id }, data: dto })
}

const remove = async (id: TProjectDto["id"]) => {
	return prisma.project.delete({ where: { id } })
}

export default { getAll, getById, create, update, remove }
