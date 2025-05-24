/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-primary-bg": "#f3f4f6",
        "custom-primary-text": "#000",
        "custom-bg-header": "#1e2939 ",
      },
    },
  },
};
