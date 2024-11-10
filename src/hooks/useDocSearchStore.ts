import { docSearch } from "@/constants"
import { DocSearchType } from "@/types"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

type UseDocSearchStoreProps = {
	isOpen: boolean
	value: string
	setIsOpen: (isOpen: boolean) => void
	data: DocSearchType[]
}

export const useDocSearchStore = create<UseDocSearchStoreProps>()(
	devtools(set => ({
		isOpen: false,
		setIsOpen: isOpen => set({ isOpen }),
		value: "",
		data: docSearch,
	})),
)
