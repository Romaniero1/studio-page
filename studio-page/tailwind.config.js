/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    container: {
      padding: '120px',
    },
		extend: {
			fontFamily: {
				mono: ['"LeagueSpartan"'],
				sans: ['"Futura"'],
			},
		},
		fontSize: {
			xs: ['16px', '21.25px'],
			sm: ['24px', '31.88px'],
			base: ['28px', '33.6px'],
			lg: ['48px', '67.2px'],
			xl: ['64px', '89.6px'],
		},
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			black: '#000000',
			blue: '#7ADEE6',
			orange: '#EF8C94',
			'dark-blue': '#14182E',
			pink: '#B12663',
			'dark-pink': '#8E1E4F',
			'press-pink': '#6A173B',
			'gold': '#F5C053',
      'purple': '#7803D5',
		},
	},
	plugins: [],
};