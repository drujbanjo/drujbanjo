import { Button } from "@/components"
import Link from "next/link"
import { FC } from "react"

const NotFound: FC = () => {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="text-9xl font-black mb-2">404</h1>
			<h2 className="text-xl font-semibold mb-4">Страница не найдена</h2>
			<Button asChild variant={"ghost"}>
				<Link href={"/"}>К главной странице</Link>
			</Button>
		</div>
	)
}

export default NotFound
