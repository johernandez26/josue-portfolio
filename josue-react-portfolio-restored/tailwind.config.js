export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#282a36",      // Background
        darkCard: "#44475a",    // Card / panel background
        darkText: "#f8f8f2",    // Main text
        accent: "#ff79c6",      // Interactive / hover accent
        comment: "#6272a4",     // Subtitle or secondary
      },
    },
  },
  plugins: [],
};
