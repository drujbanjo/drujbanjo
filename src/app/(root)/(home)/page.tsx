import { FC } from "react"
import styles from "./page.module.scss"
import { Button, Container } from "@/components"
import { cn, jetbrains_mono } from "@/lib"
import Link from "next/link"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { projects } from "@/constants"

const HomePage: FC = () => {
	return (
		<main>
			<div className={styles.home}>
				<section className={styles.masthead}>
					<Container>
						<h1 className={styles.masthead_title}>
							База{" "}
							<code
								className={cn(
									jetbrains_mono.className,
									styles.masthead_title_code,
								)}
							>
								[инструментов, знаний]
							</code>{" "}
							для ежедневного{" "}
							<code
								className={cn(
									jetbrains_mono.className,
									styles.masthead_title_code,
								)}
							>
								[использования, изучения]
							</code>
						</h1>
						<p className={styles.masthead_description}>
							Здесь находятся инструменты которые вы можете использовать каждый
							день.{" "}
							<b className={styles.masthead_description_bold}>
								Страница браузера
							</b>
							, <b className={styles.masthead_description_bold}>блокнот</b> или
							же мои{" "}
							<b className={styles.masthead_description_bold}>библиотеки.</b>{" "}
						</p>
						<div className={styles.masthead_buttons_group}>
							<Button asChild size={"xl"}>
								<Link href={"/browser"}>Браузер</Link>
							</Button>
							<Button asChild size={"xl"} variant="outline">
								<Link href={"/projects"}>Все проекты</Link>
							</Button>
						</div>
					</Container>
				</section>
				<section className={styles.projects}>
					<Container>
						<div className={styles.projects_content}>
							<h1 className={styles.projects_title}>Проекты</h1>
							<div className={styles.projects_grid}>
								{projects.map(project => (
									<Card key={project.id}>
										<Link target={project.target} href={project.url}>
											<CardContent>
												<CardHeader>
													<CardTitle>{project.label}</CardTitle>
												</CardHeader>
												<CardContent>
													<CardDescription>
														{project.description}
													</CardDescription>
												</CardContent>
											</CardContent>
										</Link>
									</Card>
								))}
							</div>
							<Button asChild variant="secondary">
								<Link href={"/projects"}>Посмотреть все проекты</Link>
							</Button>
						</div>
					</Container>
				</section>
			</div>
		</main>
	)
}

export default HomePage
