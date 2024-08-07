import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'laranjaBX': '#FF8113',
        'verdeBX': '#52CC50',
        'azulBX': '#81C9E4',
        'brancoBX': '#E6E4E0',
        'pretoBX': '#031621'
      },
      keyframes: {
        appear: {
          "0%": { opacity: '0' },
          "100%": { opacity: '0.4' },
        },
      },
      animation: {
        appear: "appear 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;

