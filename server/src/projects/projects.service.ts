import { Injectable } from "@nestjs/common"
import { Project } from "@prisma/client"
import { PrismaService } from "src/prisma.service"
import { CreateProjectsDto, TUpdateProjectsDto } from "./projects.dto"

@Injectable()
export class ProjectsService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll(): Promise<Project[]> {
		return this.prisma.project.findMany()
	}

	async get(id: string): Promise<Project> {
		return this.prisma.project.findUnique({ where: { id } })
	}

	async create(dto: CreateProjectsDto): Promise<Project> {
		return this.prisma.project.create({ data: dto })
	}

	async update(dto: TUpdateProjectsDto, id: string): Promise<Project> {
		return this.prisma.project.update({ where: { id }, data: dto })
	}

	async remove(id: string): Promise<Project> {
		return this.prisma.project.delete({ where: { id } })
	}
}
