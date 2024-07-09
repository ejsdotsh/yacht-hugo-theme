module.exports = {
	darkMode: 'class',
	content: [
		"./hugo_stats.json",
		"./content/**/*.html",
	  "./content/**/*.md",
	  "./layouts/**/*.html",
	  "./layouts/**/*.md"
	],
	plugins: [
		require('@tailwindcss/typography'),
		require("@catppuccin/tailwindcss")({
    	defaultFlavour: "mocha",
    }),
  ],
};
