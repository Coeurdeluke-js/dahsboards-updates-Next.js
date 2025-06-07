module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',        // Dark background
        secondary: '#1a1a1a',      // Slightly lighter background
        accent: '#ec4d58',         // Red accent
        highlight: '#00ffb3',      // Teal highlight
        gold: '#ffd700',           // Gold color
        'highlight-5': 'rgba(0, 255, 179, 0.05)',
        'highlight-8': 'rgba(0, 255, 179, 0.08)',
        'highlight-10': 'rgba(0, 255, 179, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}