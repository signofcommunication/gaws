// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "PT GAWS Inti Solusi",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Description of GAWS" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/gaws-logo (1).ico" }],
    },
  },
  ssr: false,
  nitro: {
    baseURL: "http://localhost:3000",
    prerender: {
      crawlLinks: true,
      // failOnError: false,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/icon", "nuxt-aos"],
});
