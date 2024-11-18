import { BrowserSearch, BrowserTags, Button, Container } from "@/components"
import styles from "./page.module.scss"
import { FC } from "react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Drugban Browser",
}

const BrowserPage: FC = () => {
	return (
		<div className={styles.wrap}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<BrowserSearch />
					<BrowserTags />
				</div>
			</Container>
			<Button asChild variant={"ghost"} className={styles.button_to_home}>
				<Link href={"/"}>To home</Link>
			</Button>
		</div>
	)
}

export default BrowserPage
