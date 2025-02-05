import { Injectable } from "@nestjs/common"
import { Post } from "@prisma/client"
import { PrismaService } from "src/prisma.service"
import { CreatePostsDto, TUpdatePostsDto } from "./posts.dto"

@Injectable()
export class PostsService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll(): Promise<Post[]> {
		return this.prisma.post.findMany()
	}

	async get(id: string): Promise<Post> {
		return this.prisma.post.findUnique({ where: { id } })
	}

	async create(dto: CreatePostsDto): Promise<Post> {
		return this.prisma.post.create({ data: dto })
	}

	async update(dto: TUpdatePostsDto, id: string): Promise<Post> {
		return this.prisma.post.update({ where: { id }, data: dto })
	}

	async remove(id: string): Promise<Post> {
		return this.prisma.post.delete({ where: { id } })
	}
}
