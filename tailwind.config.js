/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5C092C',
        'primary-container': '#5C092C',
        'on-primary': '#FFFFFF',
        'secondary-a': '#6C1C0B',
        'secondary-b': '#3B0847',
        surface: '#FFFFFF',
        'on-surface': '#131313',
        'on-surface-variant': '#4b5563',
        'surface-container': '#f3f4f6',
        'surface-container-low': '#f9fafb',
        'surface-container-lowest': '#FFFFFF',
        'outline-variant': '#d1d5db',
      },
      fontFamily: {
        headline: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        label: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-soft': '0 12px 40px rgba(58, 0, 24, 0.06)',
      },
    },
  },
  plugins: [],
};
