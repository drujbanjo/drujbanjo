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
import { useGetProjects } from "@/hooks/useProjects"

export const HeaderSearch: FC = () => {
	const { data } = useGetProjects()
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
						<CommandGroup>{data?.map(item => <CommandItem key={item.id}>{item.name}</CommandItem>)}</CommandGroup>
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	)
}
