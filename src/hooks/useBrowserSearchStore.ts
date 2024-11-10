import { create } from "zustand"

type UseBrowserSearchStoreProps = {
	value: string
	setValue: (value: string) => void
}

export const useBrowserSearchStore = create<UseBrowserSearchStoreProps>(
	set => ({
		value: "",
		setValue: value => set({ value }),
	}),
)
