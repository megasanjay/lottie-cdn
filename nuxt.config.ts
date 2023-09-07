// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  alias: {
    "@server": "./server",
  },

  app: {
    head: {
      title: "LottieLinker",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: [],
      },
    },
  },

  css: ["@/assets/css/tailwind.css"],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  imports: {
    dirs: ["stores"],
  },

  modules: [
    "@bg-dev/nuxt-naiveui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: true,
        },
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/devtools",
    "nuxt-icon", // icons are found here: https://icones.js.org/
  ],

  naiveui: {
    colorModePreference: "light",
    iconSize: 18,
    themeConfig: {},
  },

  nitro: {},
});
