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
        black: {
          1: "#333333",
        },
        green: {
          1: "#8BAC3E",
          2: "#F0FEEB",
          3: "#F9FFF6",
        },
        light_green: {
          1: "#A4B441",
          2: "#F3F7D9",
        },
        sky_walker: {
          1: '"#40A2B1"',
          2: "#E6F3F5",
        },
        dark_blue: {
          1: "#405EB6",
          2: "#EAEEFA",
        },
        dark_pink: {
          1: "#B23F74",
          2: "#F9EEF3",
        },

        dark_gray: "#757575",
        light_gray: "#F2F2F2",
        teen_gray: "#C4C4C4",
        dark_red: "#E7462D",
      },
    },
  },
  plugins: [],
} satisfies Config;
