/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#183D2B',
          900: '#0E2319',
          800: '#183D2B',
          700: '#1F4E37',
          600: '#276246',
        },
        deepGreen: {
          DEFAULT: '#245B40',
          800: '#1A422F',
          700: '#245B40',
          600: '#2E7552',
          500: '#3A9266',
        },
        sage: {
          DEFAULT: '#A8B99A',
          light: '#D3DDD0',
          dark: '#7D936D',
        },
        cream: {
          DEFAULT: '#F5F2E8',
          light: '#FAF8F2',
          card: '#FFFFFF',
          dark: '#E7E1D0',
        },
        earth: {
          DEFAULT: '#8A6748',
          dark: '#634730',
          light: '#B28E6E',
          soft: '#E8DED4',
        },
        limeAccent: {
          DEFAULT: '#C6DB82',
          light: '#DEEBB5',
          dark: '#9CB74F',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Be Vietnam Pro"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(24, 61, 43, 0.08)',
        'soft-lg': '0 16px 45px rgba(24, 61, 43, 0.12)',
        'glow-lime': '0 0 25px rgba(198, 219, 130, 0.35)',
        'glow-green': '0 0 25px rgba(36, 91, 64, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.92' },
        }
      }
    },
  },
  plugins: [],
}
