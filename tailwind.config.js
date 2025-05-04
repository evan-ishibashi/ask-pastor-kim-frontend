/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 0.1s cubic-bezier(0.77, 0, 0.175, 1) 0.1s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translateY(100%)",
            opacity:0
          },
          "100%": {
            transform: "translateY(0)",
            opacity:1
          },
        },
      },
    },
  },
  plugins: [],
}

