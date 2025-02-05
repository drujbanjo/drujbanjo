import { IsString } from "class-validator"

export class CreateProjectsDto {
	@IsString({
		message: '"name" is not a string'
	})
	name: string

	@IsString({
		message: '"description" is not a string'
	})
	description: string

	@IsString({
		message: '"url" is not a string'
	})
	url: string
}

export type TUpdateProjectsDto = Partial<CreateProjectsDto>
