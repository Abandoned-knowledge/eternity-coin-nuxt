// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "dayjs-nuxt",
    "nuxt-primevue"
  ],
  srcDir: "src/",

  dir: {
    layouts: "app/layouts",
  },

  imports: {
    dirs: ["shared/composables"],
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  tailwindcss: {
    viewer: false,
  },
});