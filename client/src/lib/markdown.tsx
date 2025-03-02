"use client"

import { Clipboard, Info } from "lucide-react"
import { FC } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula as themeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkDirective from "remark-directive"
import remarkEmoji from "remark-emoji"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import { jetbrains_mono } from "./fonts"
import { rehypeRemoveUserContentPrefix } from "./rehypeRemoveUserContentPrefix"
import { CodeBlockProps, MarkdownProps } from "@/types"

export const Markdown = ({ children }: MarkdownProps) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm, remarkBreaks, remarkToc, remarkEmoji, remarkDirective]}
			rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings, rehypeSanitize, rehypeRemoveUserContentPrefix]}
			components={Components}
		>
			{children}
		</ReactMarkdown>
	)
}

const Components = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	code({ node, inline, className = "", children, ...props }: any) {
		const match = /language-(\w+)/.exec(className)

		return !inline && match ? (
			<CodeBlock language={match[1]} code={String(children).trim()} />
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		)
	},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	blockquote({ children }: any) {
		return (
			<blockquote>
				<Info className="w-[20px] h-[20px]" />
				{children}
			</blockquote>
		)
	}
}

export const CodeBlock: FC<CodeBlockProps> = ({ language, code }) => {
	return (
		<div className="relative py-1.5 px-1.5 pt-6 bg-gray-900 rounded-md mb-10">
			<div className="absolute top-0 left-0 flex gap-2 p-2">
				<div className="w-2 h-2 rounded-full bg-red-500" />
				<div className="w-2 h-2 rounded-full bg-yellow-500" />
				<div className="w-2 h-2 rounded-full bg-green-500" />
			</div>
			<span className="absolute top-0 right-0 px-2 py-1 font-black text-light text-xs">{language}</span>
			<button
				onClick={() => navigator.clipboard.writeText(code)}
				className="absolute top-10 right-4 p-2 rounded-md text-light"
			>
				<Clipboard className="w-6 h-6" />
			</button>
			{language === "bash" && (
				<span
					style={{
						display: "inline-block",
						minWidth: "2.25em",
						paddingRight: "1em",
						textAlign: "right",
						userSelect: "none",
						color: "rgb(98, 114, 164)"
					}}
					className="absolute top-11 left-3.5 p-0 font-black text-light text-xl"
				>
					$
				</span>
			)}
			<SyntaxHighlighter
				style={themeStyle}
				customStyle={{
					fontSize: "1.25rem",
					fontWeight: "500",
					paddingLeft: language === "bash" ? "3.25rem" : "1.25rem",
					margin: "0"
				}}
				className={`${jetbrains_mono.className}`}
				PreTag="div"
				showLineNumbers={language === "bash" ? false : true}
				language={language}
			>
				{String(code).replace(/\n$/, "")}
			</SyntaxHighlighter>
		</div>
	)
}
