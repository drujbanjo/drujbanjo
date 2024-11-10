import type { Metadata } from "next"
import { Header } from "@/components"

export const metadata: Metadata = {
	title: "Drugbans Projects",
	description: "All projects of Drugban",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
