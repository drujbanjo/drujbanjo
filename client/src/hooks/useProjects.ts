import { queryClient } from "@/lib"
import { ProjectsService } from "@/services"
import { TProjectDto } from "@/types"
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query"

const KEYS = {
	getAll: "projects_get_query",
	get: "project_get_mutation",
	post: "project_post_mutation",
	put: "project_put_mutation",
	remove: "project_remove_mutation"
}

export const useGetProjects = (): UseQueryResult<TProjectDto[], Error> => {
	const { getAll } = ProjectsService()

	return useQuery({
		queryKey: [KEYS.getAll],
		queryFn: getAll,
		enabled: true
	})
}

export const useGetProject = (id: TProjectDto["id"]): UseQueryResult<TProjectDto, Error> => {
	const { get } = ProjectsService()

	return useQuery({
		queryKey: [KEYS.get, id],
		queryFn: () => get(`${id}`),
		enabled: true
	})
}

export const usePostProject = () => {
	const { post } = ProjectsService()

	return useMutation({
		mutationKey: [KEYS.post],
		mutationFn: post,
		onSuccess: newProject => {
			queryClient.setQueryData([KEYS.get], (prev: TProjectDto[]) => [...prev, newProject])
		}
	})
}

export const usePutProject = () => {
	const { put } = ProjectsService()

	return useMutation({
		mutationKey: [KEYS.put],
		mutationFn: put,
		onSuccess: (res, variables: { id: TProjectDto["id"]; payload: Omit<TProjectDto, "id"> }) => {
			queryClient.setQueryData([KEYS.get], (prev: TProjectDto[]) =>
				prev.map(item => (item.id === variables.id ? res : item))
			)
		}
	})
}

export const useRemoveProject = () => {
	const { remove } = ProjectsService()

	return useMutation({
		mutationKey: [KEYS.remove],
		mutationFn: remove,
		onSuccess: (_, variables: TProjectDto["id"]) => {
			queryClient.setQueryData([KEYS.get], (prev: TProjectDto[]) => prev.filter(item => item.id !== variables))
		}
	})
}
