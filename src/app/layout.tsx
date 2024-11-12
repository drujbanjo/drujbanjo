import { inter } from "@/lib/fonts"
import "@/styles/variables.scss"
import "@/styles/globals.scss"
import { Providers } from "@/providers"

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html data-lt-installed="true" lang="ru">
			<body className={`${inter.className} dark antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
