"use client"

import { FC, useEffect, useRef } from "react"
import styles from "./page.module.scss"
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardSubTitle,
	CardTitle,
	Container,
	Input,
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList
} from "@/components"
import Link from "next/link"
import { stringToDate } from "@/utility"
import { useGetPosts, useSortPosts } from "@/hooks"
import { TPostDto } from "@/types"
import { PostTags } from "@/constants"

const BlogPage: FC = () => {
	const { data: posts } = useGetPosts()
	const searchRef = useRef<HTMLInputElement>(null)
	const { name, tag, setTag, setName } = useSortPosts()
	useEffect(() => {
		if (!searchRef.current || !searchRef) return
		const func = (e: Event) => {
			const value = (e.target as HTMLInputElement).value
			setName(value)
		}

		searchRef.current.addEventListener("input", e => func(e))
		return searchRef.current.removeEventListener("input", func)
	}, [setName])
	return (
		<section className={styles.wrap}>
			<Container>
				<h1>
					Мой <b>Блог</b>
				</h1>
				<div className={styles.bar}>
					<NavigationMenu className={styles.nav}>
						<NavigationMenuList className={styles.nav_list}>
							{PostTags.map(tag => (
								<NavigationMenuItem key={tag}>
									<Button onClick={() => setTag(tag)} className={styles.nav_button} variant={"ghost"} size={"lg"}>
										{tag}
									</Button>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<Input
						type="text"
						ref={searchRef}
						placeholder="Поиск"
						value={name}
						onChange={e => setName(e.target.value)}
						className={styles.search}
					/>
				</div>
				<ul className={styles.list}>
					{posts?.map(post =>
						!name ? (
							!tag || post.tag === tag ? (
								<li key={post.id} className={styles.item}>
									<PostCard post={post} />
								</li>
							) : null
						) : (
							post.name.toLowerCase().includes(name.toLowerCase()) && (
								<li key={post.id} className={styles.item}>
									<PostCard post={post} />
								</li>
							)
						)
					)}
				</ul>
			</Container>
		</section>
	)
}

export default BlogPage

const PostCard: FC<{ post: TPostDto }> = ({ post, ...props }) => {
	return (
		<Card className={styles.card} {...props}>
			<Link href={`posts/${post.id}`} className={styles.link}>
				<div>
					<CardHeader>
						<CardSubTitle>
							<b>{post.tag}</b>
						</CardSubTitle>
						<CardTitle>{post.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>{post.description}</CardDescription>
					</CardContent>
				</div>
				<CardFooter>
					<CardDescription>{stringToDate(post.createdAt!)}</CardDescription>
				</CardFooter>
			</Link>
		</Card>
	)
}
