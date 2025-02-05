"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ComponentProps, FC, useEffect, useState } from "react"

type Props = ComponentProps<typeof NextThemesProvider>

export const ThemeProvider: FC<Props> = ({ children, ...props }) => {
	const [mounted, setMounted] = useState<boolean>(false)
	useEffect(() => setMounted(true), [])
	if (!mounted) {
		return <>{children}</>
	}

	return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
