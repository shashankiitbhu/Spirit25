/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
            float: 'float 6s ease-in-out infinite',
            typing: 'typing 3s steps(40, end) 1 normal both',

          },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translate3d(-20px, 0, 0)' },
            '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.5)' },
            '100%': { opacity: '1', transform: 'scale(1)' }
          },
          float: {
            '0%, 100%': { transform: 'translateY(-10px)' },
            '50%': { transform: 'translateY(10px)' },
          },
          typing: {
            '0%': { width: '0' },
            '100%': { width: '100%' },
          },
        },
      }
    },
    plugins: [],

    
  }
  