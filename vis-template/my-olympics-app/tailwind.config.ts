import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        animation: {
          fadeIn: 'fadeIn 1s forwards',
        },
        keyframes: {
          fadeIn: {
            from: { transform: 'translateY(30px)' },
            to: { transform: 'translateY(0)' },
          },
      },
    },
  },
  plugins: [],
  },
};
export default config;
