import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        footer: "0 -5px 20px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "hero-left-bubble": "url('/images/hero-left-bubble.svg')",
        "hero-center-bubble": "url('/images/hero-center-bubble.svg')",
        "about-right-bubble": "url('/images/about-right-bubble.svg')",
        "services-right-bubble": "url('/images/services-right-bubble.svg')",
        "about-page-top-left-bubble":
          "url('/images/about-page-top-left-bubble.svg')",
        "about-page-bottom-left-bubble":
          "url('/images/about-page-bottom-left-bubble.svg')",
        "about-page-top-right-bubble":
          "url('/images/about-page-top-right-bubble.svg')",
        "about-page-bottom-right-bubble":
          "url('/images/about-page-bottom-right-bubble.svg')",
        "services-page-top-left-bubble":
          "url('/images/services-page-top-left-bubble.svg')",
        "services-page-top-right-bubble":
          "url('/images/services-page-top-right-bubble.svg')",
        "services-page-bottom-left-bubble":
          "url('/images/services-page-bottom-left-bubble.svg')",
        "services-page-bottom-right-bubble":
          "url('/images/services-page-bottom-right-bubble.svg')",
        "admin-form-left-bubble": "url('/images/admin-form-left-bubble.svg')",
        "admin-form-right-bubble": "url('/images/admin-form-right-bubble.svg')",
      },
      colors: {
        "green-primary": "#224F34",
        "green-secondary": "#C9E1C2",
        "red-light": "#FEDFDB",
        "red-error": "#F83F3F",
        "yellow-light": "#F8F1DE",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
