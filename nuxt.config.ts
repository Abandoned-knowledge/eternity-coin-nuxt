export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "dayjs-nuxt",
    "@primevue/nuxt-module",
    "@vee-validate/nuxt",
    "@nuxtjs/supabase",
  ],
  srcDir: "src/",

  devtools: {
    enabled: true,
  },

  vite: {
    server: {
      hmr: false,
    },
  },

  dir: {
    layouts: "app/layouts",
  },

  css: ["~/app/style/main.scss"],

  components: {
    dirs: ["shared/icons/ui/", "widgets/", "shared/layouts/frame/ui/", "shared/components/"],
  },
  serverDir: "server/",
  imports: {
    autoImport: true,
    dirs: ["shared/composables", "shared/helpers", "shared/store", "shared/types", "features/Form"],
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
  },

  ssr: false,

  // supabase: {
  //   redirectOptions: {
  //     login: "/login",
  //     callback: "/confirm",
  //     exclude: ["/login", "/register"],
  //   },
  //   url: import.meta.env.SUPABASE_URL,
  //   key: import.meta.env.SUPABASE_KEY,
  // },

  // runtimeConfig: {
  //   public: {
  //     SUPABASE_URL: import.meta.env.SUPABASE_URL,
  //     SUPABASE_KEY: import.meta.env.SUPABASE_KEY,
  //   },
  // },
});
