// tailwind.config.cjs

/** @type {import('tailwindcss').Config} */
module.exports = {
  // --- ADD THIS 'content' SECTION ---
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // --- END ADD ---
  theme: {
    extend: {},
  },
  plugins: [],
}