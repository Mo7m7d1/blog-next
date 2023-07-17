module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			animation: {
				smoothPulse: "smoothPulse 3.5s ease-in-out infinite",
			},
			keyframes: {
				smoothPulse: {
					"0%, 100%": { opacity: "0.9" },
					"50%": { opacity: "0.5" },
				},
			},
		},
	},
	plugins: [],
};
