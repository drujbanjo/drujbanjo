import { queryClient } from "@/lib"
import { PostsService } from "@/services"
import { TPostDto } from "@/types"
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query"
import { create } from "zustand"

const KEYS = {
	getAll: "posts_get_query",
	get: "post_get_mutation",
	post: "post_post_mutation",
	put: "post_put_mutation",
	remove: "post_remove_mutation"
}

export const useGetPosts = (): UseQueryResult<TPostDto[], Error> => {
	const { getAll } = PostsService()

	return useQuery({
		queryKey: [KEYS.getAll],
		queryFn: getAll,
		enabled: true
	})
}

export const useGetPost = (id: TPostDto["id"]): UseQueryResult<TPostDto, Error> => {
	const { get } = PostsService()

	return useQuery({
		queryKey: [KEYS.get, id],
		queryFn: () => get(`${id}`),
		enabled: true
	})
}

export const usePostPost = () => {
	const { post } = PostsService()

	return useMutation({
		mutationKey: [KEYS.post],
		mutationFn: post,
		onSuccess: newPost => {
			queryClient.setQueryData([KEYS.get], (prev: TPostDto[]) => [...prev, newPost])
		}
	})
}

export const usePutPost = () => {
	const { put } = PostsService()

	return useMutation({
		mutationKey: [KEYS.put],
		mutationFn: put,
		onSuccess: (res, variables: { id: TPostDto["id"]; payload: Omit<TPostDto, "id"> }) => {
			queryClient.setQueryData([KEYS.get], (prev: TPostDto[]) =>
				prev.map(item => (item.id === variables.id ? res : item))
			)
		}
	})
}

export const useRemovePost = () => {
	const { remove } = PostsService()

	return useMutation({
		mutationKey: [KEYS.remove],
		mutationFn: remove,
		onSuccess: (_, variables: TPostDto["id"]) => {
			queryClient.setQueryData([KEYS.get], (prev: TPostDto[]) => prev.filter(item => item.id !== variables))
		}
	})
}

type TUseSortPosts = {
	name: string
	tag: string
	setTag: (tag: string) => void
	setName: (name: string) => void
}

export const useSortPosts = create<TUseSortPosts>(set => ({
	name: "",
	tag: "",
	setTag: (tag: string) => set(() => ({ tag })),
	setName: (name: string) => set(() => ({ name }))
}))
