import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1F33",
          50: "#EAF0F6",
          100: "#CBDAE8",
          200: "#9FB9D1",
          300: "#6C93B3",
          400: "#3F6E93",
          500: "#234A6B",
          600: "#173853",
          700: "#122C41",
          800: "#0B1F33",
          900: "#071322",
          950: "#040B15",
        },
        sky: {
          DEFAULT: "#2E90D9",
          50: "#EAF5FD",
          100: "#CDE7FA",
          200: "#9BD0F5",
          300: "#69B8EF",
          400: "#45A3E6",
          500: "#2E90D9",
          600: "#2274B0",
          700: "#1A5987",
          800: "#133F5F",
          900: "#0C2739",
        },
        glass: {
          DEFAULT: "#8FD9E8",
          light: "#D8F4F8",
          dark: "#4FB8CE",
        },
        amber: {
          DEFAULT: "#F2A93B",
          light: "#FBD79A",
          dark: "#CE8620",
        },
        cloud: {
          DEFAULT: "#F7FAFC",
          dim: "#EDF2F6",
        },
        slate: {
          DEFAULT: "#64748B",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 31, 51, 0.12)",
        "glass-lg": "0 20px 60px -12px rgba(11, 31, 51, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drip": {
          "0%": { transform: "translateY(-8px)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "drip": "drip 2.4s ease-in infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
