import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		silenceDeprecations: ["legacy-js-api"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.*",
				port: "",
				search: "",
			},
		],
	},
}

export default nextConfig
