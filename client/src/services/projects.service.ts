import { TProjectDto } from "@/types"
import axios from "axios"

export const ProjectsService = () => {
	const client = axios.create({
		baseURL: "https://drujbanjo-server.vercel.app",
		withCredentials: false,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		}
	})

	const getAll = async () => {
		const data = client.get<TProjectDto[]>(`/projects`).then(res => res.data)
		return data
	}

	const get = async (id: TProjectDto["id"]) => {
		const data = client.get<TProjectDto>(`/projects/${id}`).then(res => res.data)
		return data
	}

	const post = async (dto: Omit<TProjectDto, "id">) => {
		const data = client.post<TProjectDto>(`/projects`, dto).then(res => res.data)
		return data
	}

	const put = async ({ id, payload }: { id: TProjectDto["id"]; payload: Omit<TProjectDto, "id"> }) => {
		const data = client.put<TProjectDto>(`/projects/${id}`, payload).then(res => res.data)
		return data
	}

	const remove = async (id: TProjectDto["id"]) => {
		const data = client.delete<void>(`/projects/${id}`).then(res => res.data)
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
