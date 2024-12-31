import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sectionTitleBarColor: "var(--section-title-bar-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
