import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        inter: ['"Inter"', ...fontFamily.sans]
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite forwards'
      },
      colors: {
        'Navy-blue': "#202A44",
        'Bronze': "#a0824d",
        'Champagne-Gold':"#FAEEC8",
        'GreenDark': "#019966",
        'GreenLight': "#01FFAA"
      }
    },
  },
  plugins: [],
} satisfies Config;
