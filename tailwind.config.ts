/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat", system-ui'],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        title: "1.5rem",
      },
      boxShadow: {
        DEFAULT: "0px 0px 5px #00000025",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        bg: "var(--bg-color)",
        frame: "var(--frame-color)",
        primary: "var(--primary-color)",
        grey: "var(--grey-color)",
        expense: "var(--expense-color)",
        income: "var(--income-color)",
        dark: "var(--dark-color)",
        link: "var(--link-color)",
        warning: "var(--warning-color)",
      },
    },
  },
  plugins: [],
};
