import svgLoader from "vite-svg-loader";
import { buildAppRoutes, buildShortcutRoutes } from "./helpers/apps";

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
  modules: [
    ["@nuxtjs/google-fonts", fonts],
    "@nuxt/image",
    "nuxt-og-image",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
  ],
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
  sitemap: {
    urls: async () => {
      const appRoutes = await buildAppRoutes();
      const shortcutRoutes = await buildShortcutRoutes();
      return [...appRoutes, ...shortcutRoutes];
    },
  },
  site: {
    url: "https://keycheck.dev",
  },
  robots: {
    disallow: [],
    allow: "/",
  },
});
