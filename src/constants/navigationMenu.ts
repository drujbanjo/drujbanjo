import { Chaoscss } from "@/assets"
import { NavigationMenuType } from "@/types"

export const headerMenu: Array<NavigationMenuType> = [
	{
		id: 1,
		label: "проекты",
		url: "",
		dropdownItems: [
			{
				id: 1,
				label: "chaoscss",
				url: "https://github.com/Drugban/chaoscss",
				icon: Chaoscss,
				target: "_blank",
			},
			{
				id: 2,
				label: "rebootcss",
				url: "https://github.com/Drugban/rebootcss",
				target: "_blank",
			},
		],
	},
	{
		id: 2,
		label: "блог",
		url: "/blog",
	},
	{
		id: 3,
		label: "браузер",
		url: "/browser",
	},
]
