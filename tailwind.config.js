module.exports = {
	darkMode: 'class',
	content: [
		"./hugo_stats.json",
		"./content/**/*.html",
		"./layouts/**/*.html"
	],
	plugins: [
		require('@tailwindcss/typography'),
		require("@catppuccin/tailwindcss")({
    	defaultFlavour: "mocha",
    }),
  ],
};
