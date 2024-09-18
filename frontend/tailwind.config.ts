import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite", // Slow spinning
        "pentagon-move": "move 5s infinite ease-in-out",
        "pentagon-move-slow": "moveSlow 8s infinite ease-in-out",
        "pentagon-move-fast": "moveFast 3s infinite ease-in-out",
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translate(0, 0) rotate(45deg)" },
          "50%": { transform: "translate(50px, 50px) rotate(45deg)" },
        },
        moveSlow: {
          "0%, 100%": { transform: "translate(0, 0) rotate(45deg)" },
          "50%": { transform: "translate(-60px, 60px) rotate(45deg)" },
        },
        moveFast: {
          "0%, 100%": { transform: "translate(0, 0) rotate(45deg)" },
          "50%": { transform: "translate(70px, -40px) rotate(45deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
