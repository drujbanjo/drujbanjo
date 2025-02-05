import { Header } from "@/components"
import { FC, ReactNode } from "react"

type Props = Readonly<{
	children: ReactNode
}>

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}

export default RootLayout
