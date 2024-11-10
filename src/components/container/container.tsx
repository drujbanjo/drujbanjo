import { FC } from "react"
import styles from "./container.module.scss"
import { cn } from "@/lib"
import { ContainerProps } from "./container.props"

export const Container: FC<ContainerProps> = ({
	children,
	large,
	className,
}) => {
	return (
		<div className={cn(className, styles.container, large && styles.large)}>
			{children}
		</div>
	)
}
