"use client"

import { FC, useEffect, useState } from "react"
import { Button, Container } from "@/components"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { Markdown } from "@/lib"
import { usePostPost } from "@/hooks"
import "@/styles/post.scss"
import { PostTagsEnum } from "@/types"

const CreatePostPage: FC = () => {
	const { mutate: add } = usePostPost()
	const [md, setMd] = useState<string>("")
	useEffect(() => {
		fetch("/hook.md")
			.then(res => res.text()) // Читаем как текст
			.then(text => setMd(text)) // Сохраняем в state
	}, [])

	return (
		<section>
			<Container>
				<form
					action=""
					className="mb-12"
					onSubmit={e => {
						e.preventDefault()
						add({
							content: md,
							tag: PostTagsEnum.react,
							name: "3 самых популярных хуков в react",
							description: "В этой статье вы научитесь исползовать хуки: useState, useEffect и useRef."
						})
					}}
				>
					<textarea value={md} onChange={e => setMd(e.target.value)} className="border w-full h-96 "></textarea>
					<Button>submit</Button>
				</form>
				<div id="content">
					<Markdown>{md}</Markdown>
				</div>
			</Container>
		</section>
	)
}

export default CreatePostPage
