/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter","ui-sans-serif","system-ui"],
        display: ["Montserrat","Inter","ui-sans-serif","system-ui"]
      },
      colors: { base: "#00053D" },
      boxShadow: {
        glow: "0 0 0 2px rgba(255,255,255,0.12), 0 0 24px 4px rgba(129,140,248,0.28)"
      },
      keyframes: {
        gradientShift: {
          "0%": { transform: "translate3d(-2%, -2%, 0) scale(1.02)" },
          "50%": { transform: "translate3d(2%, 1%, 0) scale(1.03)" },
          "100%": { transform: "translate3d(-2%, -2%, 0) scale(1.02)" }
        }
      },
      animation: { gradientShift: "gradientShift 14s ease-in-out infinite" }
    }
  },
  plugins: []
}
