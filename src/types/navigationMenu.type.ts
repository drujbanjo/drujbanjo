import { StaticImageData } from "next/image"
export type NavigationMenuType = {
	id: number
	label: string
	url: string
	dropdownItems?: Array<NavigationMenuDropdownItemType>
	target?: string
}

export type NavigationMenuDropdownItemType = {
	id: number
	label: string
	url: string
	icon?: StaticImageData
	target?: string
}
