import svgLoader from "vite-svg-loader";

const fonts = {
  families: {
    Inter: [300, 400, 500, 600, 700],
  },
  subsets: ["latin"],
  display: "swap",
  prefetch: false,
  preconnect: false,
  preload: false,
  download: false,
  base64: false,
};
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/reset.css", "@/assets/scss/global.scss"],
  modules: [["@nuxtjs/google-fonts", fonts], "@nuxt/image", "@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/colors.scss"; @import "@/assets/scss/mixins.scss"; @import "@/assets/scss/fonts.scss";',
        },
      },
    },
    plugins: [svgLoader({})],
  },
});
