"use client"

import { queryClient } from "@/lib"
import { ProvidersProps } from "@/types"
import { QueryClientProvider } from "@tanstack/react-query"
import { FC } from "react"

export const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
