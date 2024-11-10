import { inter } from "@/lib/fonts"
import "@/styles/variables.scss"
import "@/styles/globals.scss"

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html data-lt-installed="true" lang="ru">
			<body className={`${inter.className} dark antialiased`}>{children}</body>
		</html>
	)
}
