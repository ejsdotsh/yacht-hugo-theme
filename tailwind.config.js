/** @type {import('tailwindcss').Config} */

const theme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: 'class',
	content: [
		// "./hugo_stats.json",
		// "./exampleSite/content/**/*.md",
		// "./content/**/*.json",
	  // "./content/**/*.md",
	  // "./layouts/**/*.html",
	  // "./layouts/**/*.json",
	  // "./layouts/**/*.md"
	],
	theme: {
		extend: {},
	},
	variants: { typography: ["light"], extend: {} },
	plugins: [
		require('@tailwindcss/typography'),
		require("@catppuccin/tailwindcss")({
    	defaultFlavour: "mocha",
    }),
  ],
};
