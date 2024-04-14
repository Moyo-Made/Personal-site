/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
	extend: {	
		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
	},
	screens: {
		xs: "480px",
		ss: "620px",
		sm: "768px",
		md: "1060px",
		lg: "1200px",
		xl: "1700px",
	},
};
export const plugins = [];
