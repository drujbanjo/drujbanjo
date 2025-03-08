export type TPostDto = {
	id: string
	idInt: number
	tag: PostTagsEnum
	name: string
	description: string
	content: string
	createdAt: string & Date
	updatedAt: string & Date
}

export const enum PostTagsEnum {
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
