/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'arctic': '#F4F4F5',      // Silver white text / foreground
        'forsythia': '#FFFFFF',    // Accent highlight / pure white
        'nocturnal': '#27272A',    // Matte grey mid-tone
        'mystic': '#E4E4E7',       // Light grey/zinc tone
        'saffron': '#A1A1AA',      // Muted silver/zinc-400
        'oceanic': '#09090B',      // Base black/charcoal background
      },
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
