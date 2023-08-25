const fonts = {
  families: {
    Inter: [300, 400, 500, 600, 700],
  },
  subsets: ["latin"],
  display: "swap",
  prefetch: false,
  preconnect: false,
  preload: false,
  download: true,
  base64: false,
};
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/scss/global.scss"],
  modules: [["@nuxtjs/google-fonts", fonts], "@nuxt/image"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/colors.scss";',
        },
      },
    },
  },
});
