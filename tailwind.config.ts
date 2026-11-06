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
        snow: {
          green: "#293e40", // ServiceNow dark green
          light: "#f4f7f9",
          accent: "#81b49a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
