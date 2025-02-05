import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { ProjectsService } from "./projects.service"
import { CreateProjectsDto, TUpdateProjectsDto } from "./projects.dto"

@Controller("projects")
export class ProjectsController {
	constructor(private readonly projectsService: ProjectsService) {}

	@Get()
	async getAll() {
		return this.projectsService.getAll()
	}

	@Get(":id")
	async get(@Param("id") id: string) {
		return this.projectsService.get(id)
	}

	@Post()
	async create(@Body() dto: CreateProjectsDto) {
		return this.projectsService.create(dto)
	}

	@Put("/:id")
	async update(@Body() dto: TUpdateProjectsDto, @Param("id") id: string) {
		return this.projectsService.update(dto, id)
	}

	@Delete(":id")
	async remove(id: string) {
		return this.projectsService.remove(id)
	}
}
