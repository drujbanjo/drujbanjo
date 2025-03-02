import { FC } from "react"
import Link from "next/link"
import styles from "./toc.module.scss"
import { Separator } from "@/components"

type Props = {
	markdown: string
	className?: string
}

type TocItem = {
	text: string
	id: string
	subItems: TocItem[]
}

export const Toc: FC<Props> = ({ markdown }) => {
	const headerMatches = markdown.match(/^#{2,3} .+/gm) || []

	const tocItems: TocItem[] = []
	let currentItem: TocItem | null = null

	headerMatches.forEach(header => {
		const level = header.match(/^#+/)?.[0].length || 2
		const text = header
			.replace(/^#+\s*/, "")
			.replace(/\*\*(.*?)\*\*/g, "$1")
			.replace(/\(.*?\)/g, "") // Удаление круглых скобок и их содержимого
			.replace(/\`/g, "") // Удаление ``
			.trim()
		const id = text.toLowerCase().replace(/\s+/g, "-").replace(/-$/, "")

		if (level === 2) {
			currentItem = { text, id, subItems: [] }
			tocItems.push(currentItem)
		} else if (level === 3) {
			if (currentItem) {
				currentItem.subItems.push({ text, id, subItems: [] })
			}
		}
	})

	return (
		<nav className={styles.toc}>
			<h4 className={styles.toc_title}>В этом посте</h4>
			<Separator />
			<ul className={styles.toc_list}>
				{tocItems.map((item, idx) => (
					<li className={styles.toc_item} key={idx}>
						<Link className={styles.toc_link} href={`#${item.id}`}>
							{item.text}
						</Link>
						{item.subItems.length > 0 && (
							<ul className={styles.toc_sublist}>
								{item.subItems.map((subItem, subIdx) => (
									<li className={styles.toc_subitem} key={subIdx}>
										<Link className={styles.toc_sublink} href={`#${subItem.id}`}>
											{subItem.text}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}
