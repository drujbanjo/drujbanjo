import { FC } from "react"
import styles from "./page.module.scss"
import { PostsService } from "@/services"
import { Container } from "@/components"
import { Toc } from "@/components"
import { Markdown } from "@/lib"
import "@/styles/post.scss"

type Props = {
	params: Promise<{ id: string }>
}

const PostPage: FC<Props> = async ({ params }) => {
	const post = await PostsService().get((await params).id)

	return (
		<section>
			<Container>
				<div className={styles.wrap}>
					<div className={styles.content} id="content">
						<h1 className={styles.title}>{post.name}</h1>
						<p className={styles.description}>{post.description}</p>
						<hr />
						<Markdown>{post.content}</Markdown>
					</div>
					<Toc markdown={post.content} />
				</div>
			</Container>
		</section>
	)
}

export default PostPage
