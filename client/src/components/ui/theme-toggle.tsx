"use client"

import { useTheme } from "next-themes"
import { FC } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib"

type Props = {
	className?: string
}

export const ThemeToggle: FC<Props> = ({ className }) => {
	const { setTheme } = useTheme()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className={cn("flex items-center justify-center group", className)}>
					<Sun className="group-hover:rotate-180 h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="group-hover:-rotate-90 absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
