import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        oxford: {
          blue: '#002147',
          mauve: '#776885',
          peach: '#E08D79',
          green: '#426A5A',
          royal: '#1D42A6',
        },
        primary: {
          DEFAULT: '#002147',
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#002147',
          600: '#001d3d',
          700: '#001933',
          800: '#001529',
          900: '#00111f',
        },
        accent: {
          mauve: '#776885',
          peach: '#E08D79',
          green: '#426A5A',
          royal: '#1D42A6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config