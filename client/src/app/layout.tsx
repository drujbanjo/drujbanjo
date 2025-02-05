import type { Metadata } from "next"
import { FC, ReactNode } from "react"
import "@/styles/main.scss"
import { Providers } from "@/providers"
import { inter } from "@/lib"

type Props = Readonly<{
	children: ReactNode
}>

export const metadata: Metadata = {
	title: "drujbanjo projects",
	description: "projects for drujbanjo"
}

const AppLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="ru" data-lt-installed="true">
			<body className={`${inter.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

export default AppLayout
