export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "dayjs-nuxt",
    "@primevue/nuxt-module",
  ],
  srcDir: "src/",

  dir: {
    layouts: "app/layouts",
  },

  components: {
    dirs: ["shared/icons/ui", "widgets/"],
  },

  imports: {
    autoImport: true,
    dirs: ["shared/composables"],
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  tailwindcss: {
    viewer: false,
    configPath: "./tailwind.config.ts",
  },
  primevue: {
    importTheme: { from: "@/app/theme/main.ts" },
  },
});
