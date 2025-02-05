import { FC, ReactNode } from "react"
import styles from "./container.module.scss"
import { cn } from "@/lib"

type Props = {
	className?: string
	children?: ReactNode
	large?: boolean
}

export const Container: FC<Props> = ({ children, className, large }) => {
	return <div className={cn(styles.container, large && styles.large, className)}>{children}</div>
}
