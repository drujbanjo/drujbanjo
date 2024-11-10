import { githubConfig } from '@/configs'
import { ProjectsType } from "@/types"

export const projects: ProjectsType[] = [
	{
		id: 1,
		label: "CSS библиотека - Chaoscss",
		description:
			"Библиотека Chaoscss - это CSS библиотека которая создана для стилизации с помощью HTML-классов. Она разработана для удобства стилизации сайта, используя HTML-классы. Разработанная препроцессором SASS.",
		url: `${githubConfig.githubAccount}/chaoscss`,
		target: "_blank",
	},
	{
		id: 2,
		label: "CSS библиотека - Rebootcss",
		description:
			"Библиотека Rebootcss - это CSS библиотека для исправления ненужных стилей путем добавления нужных HTML-классов к тегам",
		url: `${githubConfig.githubAccount}/rebootcss`,
		target: "_blank",
	},
	{
		id: 3,
		label: "Браузер",
		description: "Страница браузера для удобной и простой кастомизации",
		url: "/browser",
	},
]
