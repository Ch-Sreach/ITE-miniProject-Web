/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for class names
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
  ],
  darkMode: 'class', // Enable class-based dark mode

  theme: {
    extend: {
      // Custom Font Families
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans:    ['"Syne"',              'sans-serif'],
        body:    ['"Inter"',             'sans-serif'],
      },

      // Custom Color Palette
      colors: {
        luxe: {
          50:  '#fdf8f0',
          100: '#f9efd9',
          200: '#f0d9a8',
          300: '#e5be6f',
          400: '#d9a03c',
          500: '#c4861f',
          600: '#a86b17',
          700: '#8a5215',
          800: '#6e3f15',
          900: '#5a3414',
        },
        dark: {
          900: '#0c0a09',
          800: '#1c1917',
          700: '#292524',
          600: '#3c3735',
          500: '#57534e',
        },
      },

      // Custom Animations
      animation: {
        'fade-up':    'fadeUp 0.6s ease both',
        'fade-in':    'fadeIn 0.4s ease both',
        'slide-left': 'slideLeft 0.5s ease both',
        'marquee':    'marquee 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },

      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)'     },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },

      // Custom Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },

      // Custom Screen
      screens: {
        'xs': '480px',
      },

      // Custom Box Shadow
      boxShadow: {
        'luxe': '0 10px 40px rgba(196, 134, 31, 0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-dark': '0 4px 24px rgba(0,0,0,0.4)',
      },

      // Custom letter-spacing
      letterSpacing: {
        'ultra': '0.3em',
        'super': '0.4em',
      },
    },
  },

  plugins: [],
}
