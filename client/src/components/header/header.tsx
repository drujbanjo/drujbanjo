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
	NavigationMenuLink,
	AnimatedContent
} from "@/components"
import Logo from "@/assets/logo.png"
import Github from "@/assets/github.svg"
import Telegram from "@/assets/telegram.svg"
import { HeaderSearch } from "./search"
import { HeaderMenuLinks } from "@/constants"
import Link from "next/link"

type Props = {
	className?: string
}

export const Header: FC<Props> = ({ className }) => {
	return (
		<header className={cn(styles.header, className)}>
			<Container>
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
					<NavigationMenu className={styles.nav}>
						<div className={styles.left}>
							<div className={styles.logo}>
								<Link href={"/"}>
									<Image className={styles.logo_img} src={Logo} alt="logo" />
								</Link>
							</div>
							<HeaderSearch />
						</div>
						<div className={styles.center}>
							<NavigationMenuList className={styles.links}>
								{HeaderMenuLinks.map(link => (
									<NavigationMenuItem key={link.id} className={styles.links_item}>
										<NavigationMenuLink className={styles.links_link} href={link.url}>
											{link.name}
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</div>
						<div className={styles.right}>
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
							<Separator orientation="vertical" className="mr-4 ml-4 max-h-6" />
							<NavigationMenuList className={styles.tools}>
								<NavigationMenuItem className={styles.tools_item}>
									<ThemeToggle className={styles.tools_toggle} />
								</NavigationMenuItem>
							</NavigationMenuList>
						</div>
					</NavigationMenu>
				</AnimatedContent>
			</Container>
		</header>
	)
}
