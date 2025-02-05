import { Inter, Roboto, JetBrains_Mono } from "next/font/google"

export const inter = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
	style: "normal"
})

export const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
	style: "normal"
})

export const jetbrains_mono = JetBrains_Mono({
	subsets: ["latin", "cyrillic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsmono",
	style: "normal"
})
