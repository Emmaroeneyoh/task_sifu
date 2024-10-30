/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/*.tsx", "./src/**/*.tsx", "./src/**/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				tag: "#45485F",
			},
		},
	},
	plugins: [],
};
