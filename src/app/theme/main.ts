import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#BAE6FD",
      300: "#7DD3FC",
      400: "#38BDF8",
      500: "#0EA5E9",
      600: "#0284C7",
      700: "#0369A1",
      800: "#075985",
      900: "#0C4A6E",
      950: "#082F49",
    },

    menu: {},
  },
});

export default {
  preset: preset,
  autoImport: true,
  options: {
    darkModeSelector: "dark",
  },
};
