import { UseBrowserTagsStoreType } from "@/types"
import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export const useBrowserTagsStore = create<UseBrowserTagsStoreType>()(
	devtools(
		persist(
			immer(set => ({
				data: [],
				addTag: data =>
					set(state => ({
						data: [
							...state.data,
							{
								id: state.data.at(-1)
									? (state.data.at(-1)?.id as number) + 1
									: 0,
								label: data.label,
								url: data.url,
							},
						],
					})),
				deleteTag: (tagId: number) =>
					set((state: UseBrowserTagsStoreType) => {
						state.data.splice(tagId, 1)
						if (state.data.length === 0) return state
						state.data.map((tag, idx) => (tag.id = idx))

						return state
					}),
			})),
			{
				name: "browser-tags",
				storage: createJSONStorage(() => localStorage),
			},
		),
	),
)
