"use client"

import { browserSearchConfig } from "@/configs"
import { useBrowserSearchStore, useBrowserTagsStore } from "@/hooks"
import { cn, jetbrains_mono } from "@/lib"
import { FC, FormEvent, useEffect, useRef, useState } from "react"
import { BiLogoGoogle as GoogleLogo, BiMenu } from "react-icons/bi"
import styles from "./browser.module.scss"
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	Input,
} from "@/components"
import { PlusIcon, Trash } from "lucide-react"
import { Github, Youtube } from "@/assets"
import Image, { StaticImageData } from "next/image"

export const BrowserSearch: FC = () => {
	const { value, setValue } = useBrowserSearchStore()
	const inputRef = useRef<HTMLInputElement>(null)
	useEffect(() => {
		if (!inputRef.current) return
		const onInput = () => setValue(inputRef.current?.value as string)
		const onSubmit = () => (window.location.href = browserSearchConfig(value))
		inputRef.current.addEventListener("input", onInput)
		inputRef.current.addEventListener("keydown", (e: KeyboardEvent) => {
			if (e.key === "Enter") {
				e.preventDefault()
				onSubmit()
			}
		})
	}, [value, setValue, inputRef])

	return (
		<div className={styles.search_wrap}>
			<div className={styles.search}>
				<GoogleLogo className={styles.search_icon} />
				<input
					className={styles.search_input}
					ref={inputRef}
					type="text"
					defaultValue={value}
					placeholder="Искать..."
					autoFocus
				/>
			</div>
		</div>
	)
}

export const BrowserTime: FC = () => {
	const date = new Date()
	const [time, setTime] = useState<string>(date.toLocaleTimeString())
	useEffect(() => {
		if (window === undefined) return
		const interval = setInterval(() => {
			const newDate = new Date()
			const time = newDate.toLocaleTimeString()
			setTime(time)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={styles.date}>
			<h2 className={cn(styles.time, jetbrains_mono.className)}>
				<span suppressHydrationWarning>{time}</span>
			</h2>
			<h3 className={styles.date_label}>
				{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
			</h3>
		</div>
	)
}
export const BrowserTags: FC = () => {
	const { data, deleteTag } = useBrowserTagsStore()
	const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>()

	const imageSrc = (tag: { url: string }): string | StaticImageData => {
		let src
		const idxOf = tag.url.indexOf("/", 8)
		if (idxOf !== -1) {
			src = `${tag.url.slice(0, idxOf)}/favicon.ico`
		} else if (tag.url == "https://youtube.com") {
			src = Youtube
		} else if (tag.url == "https://github.com") {
			src = Github
		} else {
			src = `${tag.url}/favicon.ico`
		}

		return src
	}

	return (
		<ul className={styles.tags}>
			{data.map(tag => (
				<li key={tag.id} className={styles.tag}>
					<DropdownMenu open={isDetailsOpen}>
						<DropdownMenuTrigger asChild>
							<button
								className={styles.tag_details}
								onClick={() => setIsDetailsOpen(true)}
							>
								<BiMenu
									width={22}
									height={22}
									className={styles.tag_details_icon}
								/>
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className={styles.tag_details_content}>
							<button
								className={styles.tag_details_button}
								onClick={() => {
									deleteTag(tag.id!)
									setIsDetailsOpen(false)
								}}
							>
								<Trash className={styles.tag_details_button_icon} />
								<span>Удалить</span>
							</button>
						</DropdownMenuContent>
					</DropdownMenu>
					<a
						className={styles.tag_link}
						href={
							tag.url.search("https://") === 0 ? tag.url : `https://${tag.url}`
						}
					>
						<div className={styles.tag_content}>
							{tag.url.search(".") !== 0 ? (
								<h4>{tag.url.slice(0, 1)}</h4>
							) : (
								<Image
									width={999}
									height={999}
									className={styles.tag_icon}
									src={imageSrc(tag)}
									alt={""}
								/>
							)}
						</div>
						<div className={styles.tag_name}>
							<span className={styles.tag_name_label}>{tag.label}</span>
						</div>
					</a>
				</li>
			))}
			{data.length <= 7 ? (
				<li className={styles.tag}>
					<div className={styles.tag_link}>
						<BrowserTagToggle />
					</div>
				</li>
			) : null}
		</ul>
	)
}

const BrowserTagToggle: FC = () => {
	const { addTag } = useBrowserTagsStore()
	const labelRef = useRef<HTMLInputElement>(null)
	const urlRef = useRef<HTMLInputElement>(null)
	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (!labelRef.current || !urlRef.current) return
		if (!labelRef.current.value || !urlRef.current.value) return

		addTag({
			label: labelRef.current.value,
			url:
				urlRef.current.value.search("https://") === 0
					? urlRef.current.value
					: urlRef.current.value.search("http://") === 0
						? urlRef.current.value
						: `https://${urlRef.current.value}`,
		})
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className={styles.tag_toggle} variant={"secondary"}>
					<div className={styles.tag_toggle_button}>
						<PlusIcon className={styles.tag_toggle_icon} />
					</div>
					<div className={styles.tag_name}>
						<span className={styles.tag_name_label}>Добавить ярлык</span>
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className={styles.tag_toggle_content}>
				<form onSubmit={e => onSubmit(e)} className={styles.tag_toggle_form}>
					<div>
						<label htmlFor="label" className={styles.tag_toggle_label}>
							имя
						</label>
						<Input
							ref={labelRef}
							id="label"
							name="label"
							placeholder="Имя ярлык"
						/>
					</div>
					<div>
						<label htmlFor="url" className={styles.tag_toggle_label}>
							ссылка
						</label>
						<Input
							ref={urlRef}
							name="url"
							id="url"
							placeholder="Ссылка на страницу"
						/>
					</div>
					<Button variant={"outline"} type="submit">
						Добавить
					</Button>
				</form>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
