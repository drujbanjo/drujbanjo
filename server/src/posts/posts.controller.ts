import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { PostsService } from "./posts.service"
import { CreatePostsDto, TUpdatePostsDto } from "./posts.dto"

@Controller("posts")
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Get()
	async getAll() {
		return this.postsService.getAll()
	}

	@Get(":id")
	async get(@Param("id") id: string) {
		return this.postsService.get(id)
	}

	@Post()
	async create(@Body() dto: CreatePostsDto) {
		return this.postsService.create(dto)
	}

	@Put("/:id")
	async update(@Body() dto: TUpdatePostsDto, @Param("id") id: string) {
		return this.postsService.update(dto, id)
	}

	@Delete(":id")
	async remove(@Param("id") id: string) {
		return this.postsService.remove(id)
	}
}
