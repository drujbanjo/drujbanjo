import { Inter, Roboto, Roboto_Mono, JetBrains_Mono } from "next/font/google"

export const inter = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
export const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["100", "300", "400", "500", "700", "900"],
})
export const roboto_mono = Roboto_Mono({
	subsets: ["latin", "cyrillic"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const jetbrains_mono = JetBrains_Mono({
	subsets: ["latin", "cyrillic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})
