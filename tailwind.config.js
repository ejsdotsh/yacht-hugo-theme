/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		"./hugo_stats.json",
		"./exampleSite/content/**/*.md",
		// "./content/**/*.json",
	  "./content/**/*.md",
	  "./layouts/**/*.html",
	  // "./layouts/**/*.json",
	  // "./layouts/**/*.md"
	],
	plugins: [
		require('@tailwindcss/typography'),
		require("@catppuccin/tailwindcss")({
    	defaultFlavour: "mocha",
    }),
  ],
};
