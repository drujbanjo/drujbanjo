import { IsEnum, IsString } from "class-validator"

enum PostTagEnum {
	HTML = "HTML",
	CSS = "CSS",
	JS = "JS",
	REACTJS = "REACTJS",
	NEXTJS = "NEXTJS",
	NODEJS = "NODEJS",
	NESTJS = "NESTJS",
	PRISMA = "PRISMA",
	GIT = "GIT"
}

export class CreatePostsDto {
	@IsEnum(PostTagEnum)
	tag: PostTagEnum
	@IsString({
		message: '"name" is not a string'
	})
	name: string
	@IsString({
		message: '"description" is not a string'
	})
	description: string
	@IsString({
		message: '"content" is not a string'
	})
	content: string
}

export type TUpdatePostsDto = Partial<CreatePostsDto>
