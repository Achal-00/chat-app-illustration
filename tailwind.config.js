/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontFamily: {
        "custom-font-family": ["Rubik", "sans-serif"],
      },
      colors: {
        "sub-heading-text": "hsl(276, 100%, 81%)",
        "chat-left-text": "hsl(276, 55%, 52%)",
        "chat-right-right": "hsl(271, 15%, 43%)",
        "placeholder-text": "hsl(206, 6%, 79%)",
        "main-heading-text": "hsl(271, 36%, 24%)",
        "paragraph-text": "hsl(270, 7%, 64%)",
        "gradient-from": "hsl(293, 100%, 63%)",
        "gradient-to": "hsl(264, 100%, 61%)",
        "app-background": "hsl(270, 20%, 96%)",
        "submit-button-background": "hsl(271, 36%, 24%)",
        "radio-button-outline": "hsl(289, 100%, 72%)",
      },
    },
  },
  plugins: [],
};
