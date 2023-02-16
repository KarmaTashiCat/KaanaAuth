// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      title: "One account. All of Kaana.",
      meta: [
        {
          name: "description",
          content: "Sign in. Use your Kaana Account.",
        },
      ],
      script: [
        //{ src: '' },
      ],
      link: [
        //{ rel: 'stylesheet', href: '' },
      ],
    },
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
    "@nuxtjs/i18n",
    "nuxt-icon",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  imports: {
    dirs: ["stores"],
  },
  i18n: {
    defaultLocale: "en-US",
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        name: "English",
        code: "en-US",
        file: "en-US.json",
      },
      {
        name: "Español",
        code: "es-ES",
        file: "es-ES.json",
      },
      {
        name: "Français",
        code: "fr-FR",
        file: "fr-FR.json",
      },
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.scss", "@/assets/css/fonts.css"],
  piniaPersistedstate: {
    storage: "localStorage",
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
});
