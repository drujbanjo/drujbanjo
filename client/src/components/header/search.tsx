"use client"

import { FC } from "react"
import { Search } from "lucide-react"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandShortcut,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
	Button
} from "@/components"
import styles from "./header.module.scss"
import { useGetPosts, useGetProjects } from "@/hooks"

export const HeaderSearch: FC = () => {
	const { data: projects } = useGetProjects()
	const { data: posts } = useGetPosts()
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"outline"} className={styles.search_button}>
					<Search className="h-4 w-4" />
					Искать...
					<CommandShortcut className={styles.search_button_shortcut}>⌘+K</CommandShortcut>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Искать</DialogTitle>
				<Command>
					<CommandInput placeholder="Искать..." />
					<CommandList>
						<CommandEmpty>Ничего не найдено</CommandEmpty>
						<CommandGroup>
							<h5>Проекты</h5>
							{projects?.map(project => <CommandItem key={project.id}>{project.name}</CommandItem>)}
						</CommandGroup>
						<CommandGroup>
							<h5>Посты</h5>
							{posts?.map(post => <CommandItem key={post.id}>{post.name}</CommandItem>)}</CommandGroup>
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	)
}
