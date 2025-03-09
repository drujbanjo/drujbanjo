export type TNavigationMenuLink = {
	id: number
	name: string
	url: string
}

export const HeaderMenuLinks: TNavigationMenuLink[] = [
	{
		id: 0,
		name: "блог",
		url: "/blog"
	},
	{
		id: 1,
		name: "проекты",
		url: "/projects"
	},
	{
		id: 2,
		name: "блокнот",
		url: "/notebook"
	}
]
