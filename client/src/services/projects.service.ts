import { TProjectDto } from "@/types"
import axios from "axios"

export const ProjectsService = () => {
	const client = axios.create({
		baseURL: 'http://localhost:4200/projects',
	})

	const getAll = () => {
		const data = client.get<TProjectDto[]>("").then(res => res.data)
		return data
	}

	const get = (id: TProjectDto["id"]) => {
		const data = client.get<TProjectDto>(`/${id}`).then(res => res.data)
		return data
	}

	const post = (dto: Omit<TProjectDto, "id">) => {
		const data = client.post<TProjectDto>("", dto).then(res => res.data)
		return data
	}

	const put = ({ id, payload }: { id: TProjectDto["id"]; payload: Omit<TProjectDto, "id"> }) => {
		const data = client.put<TProjectDto>(`/${id}`, payload).then(res => res.data)
		return data
	}

	const remove = (id: TProjectDto["id"]) => {
		const data = client.delete<void>(`/${id}`).then(res => res.data)
		return data
	}

	return {
		getAll,
		get,
		post,
		put,
		remove
	}
}
