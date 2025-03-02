"use client"

import { FC } from "react"
import styles from "./page.module.scss"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Container } from "@/components"
import Link from "next/link"
import { stringToDate } from "@/utility"
import { useGetProjects } from "@/hooks"

const ProjectsPage: FC = () => {
	const { data: projects } = useGetProjects()
	return (
		<section className={styles.wrap}>
			<Container>
				<h1>
					Все <b>проекты</b>
				</h1>
				<ul className={styles.list}>
					{projects?.map(project => (
						<li key={project.id} className={styles.item}>
							<Card id={`${project.id}`} className={styles.card}>
								<Link href={project.url} className={styles.link}>
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
					))}
				</ul>
			</Container>
		</section>
	)
}

export default ProjectsPage
