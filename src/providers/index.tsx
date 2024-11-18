"use client"

import { queryClient } from "@/lib"
import { ProvidersProps } from "@/types"
import { QueryClientProvider } from "@tanstack/react-query"
import { FC } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
