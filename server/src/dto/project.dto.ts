import { z } from "zod"

export type TProjectDto = {
	id: string
	idInt: number
	name: string
	description: string
	url: string
	createdAt: string & Date
	updatedAt: string & Date
}

export const PostSchema = z.object({
	name: z.string(),
	description: z.string(),
	url: z.string()
})
