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

  css: ['~/app/style/main.css'],

  components: {
    dirs: [
      "shared/icons/ui/", 
      "widgets/", 
      "shared/layouts/frame/ui/",
    ],
  },

  imports: {
    autoImport: true,
    dirs: [
      "shared/composables",
      "shared/helpers",
      "shared/store",
      "shared/types",
    ],
  },
  googleFonts: {
    families: {
      Jost: [400, 500, 700],
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
