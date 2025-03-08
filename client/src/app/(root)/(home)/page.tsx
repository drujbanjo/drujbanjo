"use client"

import {
	Button,
	Container,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	ShinyText,
	Magnet,
	Squares,
	FadeContent
} from "@/components"
import { FC } from "react"
import styles from "./page.module.scss"
import Link from "next/link"
import { BookMarked, Notebook } from "lucide-react"
import { stringToDate } from "@/utility"
import { useGetPosts, useGetProjects } from "@/hooks"

const HomePage: FC = () => {
	return (
		<div className={styles.wrap}>
			<Squares />
			<FadeContent>
				<Masthead />
				<Projects />
				<Posts />
			</FadeContent>
		</div>
	)
}

export default HomePage

const Masthead: FC = () => {
	return (
		<section className={styles.masthead}>
			<Container>
				<h5 className={styles.masthead_subtitle}>
					<ShinyText text="Не теряй время в поисках информации" speed={2} />
				</h5>
				<h1 className={styles.masthead_title}>
					Повседневные <b>инструменты</b>, <b>Документации</b> и <b>Ресурсы</b> вы можете найти здесь
				</h1>
				<p className={styles.description}>
					Ищите документацию связанную с новейшими технологиями по типу <b>Next.js</b>, <b>React</b>. Используйте{" "}
					<Link href={"notebook"}>
						<b>блокнот</b>
					</Link>{" "}
					чтобы ничего на забывать. Все это вы можете использовать здесь
				</p>
				<div className={styles.buttons_group}>
					<Button size={"xl"} asChild>
						<Link href={"blog"}>
							<BookMarked />
							<span>Мой блог</span>
						</Link>
					</Button>
					<Button size={"xl"} variant={"outline"} asChild>
						<Link href={"notebook"}>
							<Notebook />
							<span>Блокнот</span>
						</Link>
					</Button>
				</div>
			</Container>
		</section>
	)
}

const Projects: FC = () => {
	const { data: projects } = useGetProjects()

	return (
		<section>
			<Container>
				<h2>Проекты</h2>
				<ul className={styles.projects_list}>
					{projects?.map(
						project =>
							project.idInt <= 3 && (
								<li key={project.idInt}>
									<Card id={project.id}>
										<Link href={project.url} className={styles.project_link}>
											<div>
												<CardHeader>
													<CardTitle>{project.name}</CardTitle>
												</CardHeader>
												<CardContent>
													<CardDescription>{project.description}</CardDescription>
												</CardContent>
											</div>
											<CardFooter>
												<CardDescription>{stringToDate(project.createdAt)}</CardDescription>
											</CardFooter>
										</Link>
									</Card>
								</li>
							)
					)}
				</ul>
				<Magnet>
					<Button size={"lg"} asChild variant={"accent"} className={styles.projects_button}>
						<Link href={"projects"}>Все проекты</Link>
					</Button>
				</Magnet>
			</Container>
		</section>
	)
}

const Posts: FC = () => {
	const { data: posts } = useGetPosts()
	return (
		<section>
			<Container>
				<h2>Посты</h2>
				<ul className={styles.posts_list}>
					{posts?.map(
						post =>
							post.idInt <= 3 && (
								<li key={post.idInt}>
									<Card id={post.id}>
										<Link href={`posts/${post.id}`} className={styles.post_link}>
											<div>
												<CardHeader>
													<CardTitle>{post.name}</CardTitle>
												</CardHeader>
												<CardContent>
													<CardDescription>{post.description}</CardDescription>
												</CardContent>
											</div>
											<CardFooter>
												<CardDescription>{stringToDate(post.createdAt)}</CardDescription>
											</CardFooter>
										</Link>
									</Card>
								</li>
							)
					)}
				</ul>
				<Magnet>
					<Button size={"lg"} asChild variant={"accent"} className={styles.posts_button}>
						<Link href={"blog"}>Все посты</Link>
					</Button>
				</Magnet>
			</Container>
		</section>
	)
}
