export type UseBrowserTagsStoreProps = {
	id?: number
	label: string
	url: string
}

export type UseBrowserTagsStoreType = {
	data: UseBrowserTagsStoreProps[]
	addTag: (data: UseBrowserTagsStoreProps) => void
	deleteTag: (tagId: number) => void
}
