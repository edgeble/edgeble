import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Custom breakpoint for larger screens
        '4xl': '2560px', // Custom breakpoint for even larger screens
        '5xl': '3200px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(to right, #00274d, #3d5a80 40%, #3d5a80 60%, #00274d)',
      },
      animation: {
        'bounce-slow': 'bounce 5s infinite',
      }
    },
  },
  plugins: [],
};

export default config;

