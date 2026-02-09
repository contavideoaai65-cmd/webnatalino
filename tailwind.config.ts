import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
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
        neon: {
          DEFAULT: "hsl(var(--neon-green))",
          glow: "hsl(var(--neon-green-glow))",
        },
        purple: {
          DEFAULT: "hsl(var(--purple-accent))",
        },
        graphite: {
          DEFAULT: "hsl(var(--graphite))",
          light: "hsl(var(--graphite-light))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--neon-green) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--neon-green) / 0.5)" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))",
            borderColor: "hsl(var(--primary))",
          },
          "50%": {
            boxShadow: "0 0 2px hsl(var(--primary)), 0 0 5px hsl(var(--primary) / 0.5)",
            borderColor: "hsl(var(--primary) / 0.5)",
          },
        },
        "neon-pulse-coral": {
          "0%, 100%": {
            boxShadow: "0 0 5px #ff8a2b, 0 0 10px #ff8a2b, 0 0 20px #ff8a2b, 0 0 40px #ff8a2b",
            borderColor: "#ff8a2b",
          },
          "50%": {
            boxShadow: "0 0 2px #ff8a2b, 0 0 5px rgba(255,138,43,0.5)",
            borderColor: "rgba(255,138,43,0.5)",
          },
        },
        "neon-text-pulse": {
          "0%, 100%": {
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px hsl(var(--primary))",
            boxShadow: "0 0 5px hsl(var(--primary)), 0 0 15px hsl(var(--primary)), 0 0 25px hsl(var(--primary))",
          },
          "50%": {
            textShadow: "none",
            boxShadow: "0 0 2px hsl(var(--primary))",
          },
        },
        "neon-text-pulse-coral": {
          "0%, 100%": {
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff8a2b",
            boxShadow: "0 0 5px #ff8a2b, 0 0 15px #ff8a2b, 0 0 25px #ff8a2b",
          },
          "50%": {
            textShadow: "none",
            boxShadow: "0 0 2px #ff8a2b",
          },
        },
        "shrink": {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "neon-pulse": "neon-pulse 1.5s ease-in-out infinite",
        "neon-pulse-coral": "neon-pulse-coral 1.5s ease-in-out infinite",
        "neon-text-pulse": "neon-text-pulse 1.5s ease-in-out infinite",
        "neon-text-pulse-coral": "neon-text-pulse-coral 1.5s ease-in-out infinite",
        "shrink": "shrink 8s linear forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
