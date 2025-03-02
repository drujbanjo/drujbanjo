import { IsEnum, IsString } from "class-validator"

enum PostTagEnum {
	html = "html",
	css = "css",
	js = "js",
	react = "react",
	next = "next",
	node = "node",
	nest = "nest",
	prisma = "prisma",
	git = "git"
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
