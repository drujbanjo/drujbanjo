"use client"

import { Button, Container, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components"
import { FC } from "react"
import styles from "./page.module.scss"
import Link from "next/link"
import { BookMarked, Notebook } from "lucide-react"
import { stringToDate } from "@/utility"
import { useGetProjects } from "@/hooks/useProjects"
const HomePage: FC = () => {
	return (
		<div className={styles.home}>
			<Masthead />
			<Projects />
		</div>
	)
}

export default HomePage

const Masthead: FC = () => {
	return (
		<section className={styles.masthead}>
			<Container>
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
	const { data } = useGetProjects()

	return (
		<section>
			<Container>
				<h2>Проекты</h2>
				<div className={styles.projects_list}>
					{data?.map(
						project =>
							project.idInt < 7 && (
								<Card key={project.id} id={`${project.idInt}`}>
									<Link href={project.url}>
										<CardHeader>
											<CardTitle>{project.name}</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription>{project.description}</CardDescription>
										</CardContent>
										<CardFooter>
											<CardDescription>{stringToDate(project.createdAt)}</CardDescription>
										</CardFooter>
									</Link>
								</Card>
							)
					)}
				</div>
				<Button size={"lg"} asChild variant={"accent"} className={styles.projects_button}>
					<Link href={"projects"}>Все проекты</Link>
				</Button>
			</Container>
		</section>
	)
}
