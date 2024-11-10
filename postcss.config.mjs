/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		styleLint: {
			configFile: "./.stylelintrc.json",
		},
	},
}

export default config
