export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "dayjs-nuxt",
    "@primevue/nuxt-module",
    '@vee-validate/nuxt',
  ],
  srcDir: "src/",

  dir: {
    layouts: "app/layouts",
  },

  css: ['~/app/style/main.scss'],

  components: {
    dirs: [
      "shared/icons/ui/", 
      "widgets/", 
      "shared/layouts/frame/ui/",
      "shared/components/",
    ],
  },

  imports: {
    autoImport: true,
    dirs: [
      "shared/composables",
      "shared/helpers",
      "shared/store",
      "shared/types",
      "features/Form",
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
  veeValidate: {
    autoImports: true,
  }
});
