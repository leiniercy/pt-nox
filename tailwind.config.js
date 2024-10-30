/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'indigo-400': '#818CF8',
        'indigo-500': '#6366F1',
        'indigo-600': '#4F46E5',
        'indigo-900': '#312E81',
        'blue-gray-200': '#E2E8F0',
        'blue-gray-300': '#CBD5E1',
        'blue-gray-400': '#94A3B8',
        'blue-gray-600': '#475569',
        'blue-gray-700': '#334155',
        'blue-gray-900': '#0F172A'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }, 
      screens: {
        'sm': '375px',
         // => @media (min-width: 375px) { ... }
        'sm2': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  plugins: []
}
