// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "nuxt-icon", "@vueuse/nuxt"],
  experimental: {
    viewTransition: true
  },
  devtools: {
    enabled: true,
  },
});
