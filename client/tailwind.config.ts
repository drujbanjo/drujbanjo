import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				light: "rgba(var(--light))",
				dark: "rgba(var(--dark))",
				background: "rgba(var(--background))",
				foreground: "rgba(var(--foreground))",
				card: {
					DEFAULT: "rgba(var(--card))",
					foreground: "rgba(var(--card-foreground))"
				},
				popover: {
					DEFAULT: "rgba(var(--popover))",
					foreground: "rgba(var(--popover-foreground))"
				},
				primary: {
					DEFAULT: "rgba(var(--primary))",
					foreground: "rgba(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "rgba(var(--secondary))",
					foreground: "rgba(var(--secondary-foreground))"
				},
				muted: {
					DEFAULT: "rgba(var(--muted))",
					foreground: "rgba(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "rgba(var(--accent))",
					foreground: "rgba(var(--accent-foreground))"
				},
				destructive: {
					DEFAULT: "rgba(var(--destructive))",
					foreground: "rgba(var(--destructive-foreground))"
				},
				border: "rgba(var(--border))",
				input: "rgba(var(--input))",
				ring: "rgba(var(--ring))",
				chart: {
					"1": "rgba(var(--chart-1))",
					"2": "rgba(var(--chart-2))",
					"3": "rgba(var(--chart-3))",
					"4": "rgba(var(--chart-4))",
					"5": "rgba(var(--chart-5))"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 0.125rem)",
				sm: "calc(var(--radius) - 0.25rem)"
			},
			keyframes: {
				shine: {
					"0%": { "background-position": "100%" },
					"100%": { "background-position": "-100%" }
				}
			},
			animation: {
				shine: "shine 5s linear infinite"
			}
		}
	},
	plugins: [tailwindAnimate]
} satisfies Config
