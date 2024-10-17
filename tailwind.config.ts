import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add your custom background images or gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // Add custom colors
      colors: {
        primary: "#1E90FF", // Your custom primary color
        secondary: "#FF4500", // Your custom secondary color
        neutral: "#F5F5F5", // Neutral color for backgrounds
        dark: "#333333", // Example dark color for text
        accent: "#FFD700", // Example accent color (gold)
        error: "#FF0000", // Error color
      },

      // You can also extend other properties like box shadows, spacing, etc.
      boxShadow: {
        custom: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Example shadow
      },
    },
  },
  plugins: [],
};

export default config;
