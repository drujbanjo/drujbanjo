import React, { FC } from "react"
import styles from "./header.module.scss"
import { Container, DocSearch } from "@/components"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { headerMenu } from "@/constants"
import { githubConfig } from "@/configs"
import { cn } from "@/lib"
import Image from "next/image"
import { HeaderProps } from "./header.props"
import { pagesConfig } from "@/configs"

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn(styles.header, className)} aria-label="header">
			<h2 className="sr-only">Header</h2>
			<Container large className={styles.container}>
				<div className={styles.logo}>
					<Link href={pagesConfig.home} className={styles.logo_link}>
						<h3 className={styles.logo_label}>
							{githubConfig.githubUserName}&apos;s Projects
						</h3>
					</Link>
				</div>
				<nav className={styles.nav}>
					<NavigationMenu>
						<NavigationMenuList>
							{headerMenu.map(item => (
								<NavigationMenuItem key={item.id}>
									{item.dropdownItems ? (
										<>
											<NavigationMenuTrigger className={styles.nav_menu_link}>
												{item.label}
											</NavigationMenuTrigger>
											<NavigationMenuContent
												className={styles.nav_drop_menu_content}
											>
												{item.dropdownItems.map(navMenuItem => (
													<NavigationMenuLink
														className={styles.nav_drop_menu_link}
														key={navMenuItem.id}
														asChild
													>
														<Link href={navMenuItem.url}>
															{navMenuItem.icon && (
																<Image
																	src={navMenuItem.icon}
																	alt={navMenuItem.label}
																	width={18}
																	height={18}
																/>
															)}
															{navMenuItem.label}
														</Link>
													</NavigationMenuLink>
												))}
											</NavigationMenuContent>
										</>
									) : (
										<Link href={item.url} legacyBehavior passHref>
											<NavigationMenuLink
												className={cn(
													styles.nav_menu_link,
													navigationMenuTriggerStyle(),
												)}
											>
												{item.label}
											</NavigationMenuLink>
										</Link>
									)}
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<DocSearch />
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href={githubConfig.repositoryUrl} legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											styles.nav_menu_link,
											navigationMenuTriggerStyle(),
										)}
									>
										<GitHubLogoIcon width={24} height={24} />
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</nav>
			</Container>
		</header>
	)
}
