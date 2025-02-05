import { FC } from "react"
import styles from "./header.module.scss"
import { cn } from "@/lib"
import Image from "next/image"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	Container,
	Separator,
	ThemeToggle,
	NavigationMenuLink
} from "@/components"
import Logo from "@/assets/logo.png"
import Github from "@/assets/github.svg"
import Telegram from "@/assets/telegram.svg"
import { HeaderSearch } from "./search"
import { NavigationMenuLinks } from "@/constants"
import Link from "next/link"

type Props = {
	className?: string
}

export const Header: FC<Props> = ({ className }) => {
	return (
		<header className={cn(styles.header, className)}>
			<Container>
				<NavigationMenu className={styles.nav}>
					<div className={styles.left}>
						<div className={styles.logo}>
							<Link href={"/"}>
								<Image className={styles.logo_img} src={Logo} alt="logo" />
							</Link>
						</div>
						<NavigationMenuList className={styles.links}>
							{NavigationMenuLinks.map(link => (
								<NavigationMenuItem key={link.id} className={styles.links_item}>
									<NavigationMenuLink className={styles.links_link} href={link.url}>
										{link.name}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</div>
					<div className={styles.right}>
						<HeaderSearch />
						<NavigationMenuList className={styles.social}>
							<NavigationMenuItem className={styles.social_item}>
								<NavigationMenuLink href={"https://t.me/drujbanjo"} className={styles.social_link}>
									<Image className={styles.social_img} src={Telegram} alt="telegram" />
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem className={styles.social_item}>
								<NavigationMenuLink href={"https://github.com/drujbanjo"} className={styles.social_link}>
									<Image className={styles.social_img} src={Github} alt="github" />
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
						<Separator orientation="vertical" className="mr-3 ml-4 max-h-6" />
						<NavigationMenuList className={styles.tools}>
							<NavigationMenuItem className={styles.tools_item}>
								<ThemeToggle />
							</NavigationMenuItem>
						</NavigationMenuList>
					</div>
				</NavigationMenu>
			</Container>
		</header>
	)
}
