import { visit } from "unist-util-visit"
import type { Plugin } from "unified"
import type { Root, Element } from "hast"

export const rehypeRemoveUserContentPrefix: Plugin<[], Root> = () => {
	return (tree: Root) => {
		visit(tree, "element", (node: Element) => {
			if (typeof node.tagName === "string" && /^h[1-6]$/.test(node.tagName) && node.properties?.id) {
				if (typeof node.properties.id === "string") {
					node.properties.id = node.properties.id.replace(/^user-content-/, "")
				}
			}
		})
	}
}
