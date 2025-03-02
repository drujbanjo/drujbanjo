import * as React from "react"

import { cn } from "@/lib"
import { AnimatedContent } from "@/components"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, children, ...props }, ref) => (
		<AnimatedContent
			distance={100}
			direction="vertical"
			reverse={false}
			config={{ tension: 80, friction: 20 }}
			initialOpacity={0.0}
			animateOpacity
			scale={0.8}
			threshold={0.2}
		>
			<div
				ref={ref}
				className={cn(
					"rounded-xl border bg-card text-card-foreground shadow transition-transform hover:translate-y-2 hover:rotate-1",
					className
				)}
				{...props}
			>
				{children}
			</div>
		</AnimatedContent>
	)
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
	)
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<h5 ref={ref} className={cn("font-semibold leading-none tracking-tight mb-0", className)} {...props} />
	)
)
CardTitle.displayName = "CardTitle"

const CardSubTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<h6 ref={ref} className={cn("font-semibold leading-none tracking-tight mb-0", className)} {...props} />
	)
)

CardSubTitle.displayName = "CardSubTitle"

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={cn("text-base text-muted-foreground", className)} {...props} />
	)
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardSubTitle }
