import { TPostDto } from "@/types"
import axios from "axios"

export const PostsService = () => {
	const client = axios.create({
		baseURL: process.env.API_URL || "http://localhost:4200/posts"
	})

	const getAll = () => {
		const data = client.get<TPostDto[]>("").then(res => res.data)
		return data
	}

	const get = (id: TPostDto["id"]) => {
		const data = client.get<TPostDto>(`/${id}`).then(res => res.data)
		return data
	}

	const post = (dto: Omit<TPostDto, "id">) => {
		const data = client.post<TPostDto>("", dto).then(res => res.data)
		return data
	}

	const put = ({ id, payload }: { id: TPostDto["id"]; payload: Omit<TPostDto, "id"> }) => {
		const data = client.put<TPostDto>(`/${id}`, payload).then(res => res.data)
		return data
	}

	const remove = (id: TPostDto["id"]) => {
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
