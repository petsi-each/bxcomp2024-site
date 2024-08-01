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
      }
    }
  },
  plugins: [],
};
export default config;
