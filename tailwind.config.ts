import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{ts,vue,js}"],
  theme: {
    borderRadius: {
      DEFAULT: '10px',
    },
    extend: {
      fontFamily: {
        sans: ['"Jost", system-ui'],
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
        surface: colors.slate[50],
        primary: colors.sky[500],
        'light-gray': colors.slate[200],
        gray: colors.gray[400],
        expense: colors.red[600],
        income: colors.green[500],
        dark: colors.black,
        link: colors.blue[500],
        warning: colors.red[700],
      },
    },
  },
  plugins: [],
};
