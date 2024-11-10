"use client"
import { useDocSearchStore } from "@/hooks"
import { CommandIcon, SearchIcon } from "lucide-react"
import Link from "next/link"
import { FC, useEffect, useRef } from "react"
import { Button } from "../ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import styles from "./docSearch.module.scss"

export const DocSearch: FC = () => {
	const { isOpen, value, data, setIsOpen } = useDocSearchStore()
	const triggerRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (!triggerRef.current) return
		const keyDown = (e: KeyboardEvent) => {
			if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
				e.preventDefault()
				triggerRef.current?.click()
			}
		}
		window.addEventListener("keydown", keyDown)

		return () => {
			window.removeEventListener("keydown", keyDown)
		}
	}, [])

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					ref={triggerRef}
					role="combobox"
					aria-expanded={isOpen}
					className={styles.trigger}
				>
					<SearchIcon />
					{value ? data.find(item => item.label === value)?.label : "Искать..."}
					<kbd className={styles.keycode}>
						<CommandIcon />K
					</kbd>
				</Button>
			</PopoverTrigger>
			<PopoverContent className={styles.content}>
				<Command>
					<CommandInput placeholder="Искать..." className={styles.input} />
					<CommandList>
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup>
							{data.map(item => (
								<CommandItem
									key={item.id}
									value={item.label}
									onSelect={() => {
										setIsOpen(false)
									}}
								>
									<Link href={item.url} className={styles.link}>
										{item.label}
									</Link>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
