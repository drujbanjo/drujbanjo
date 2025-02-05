"use client"

import { queryClient } from "@/lib"
import { QueryClientProvider } from "@tanstack/react-query"
import { FC, ReactNode } from "react"
import { ThemeProvider } from "./theme"

type Props = {
	children: ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	)
}
