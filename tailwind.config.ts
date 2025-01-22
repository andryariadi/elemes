import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: {
          1: "#FFFFFF",
          2: "rgba(255, 255, 255, 0.72)",
          3: "rgba(255, 255, 255, 0.4)",
          4: "rgba(255, 255, 255, 0.64)",
          5: "rgba(255, 255, 255, 0.80)",
        },
        green: {
          1: "#8BAC3E",
          2: "#A4B441",
        },
        sky: "#40A2B1",
        dark_blue: "#405EB6",
        dark_pink: "#B23F74",
        dark_gray: "#757575",
        dark_red: "#E7462D",
      },
    },
  },
  plugins: [],
} satisfies Config;
