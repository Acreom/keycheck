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
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "@nuxtjs/plausible",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/colors.scss"; @import "@/assets/scss/mixins.scss"; @import "@/assets/scss/variables.scss";',
        },
      },
    },
    plugins: [svgLoader({})],
  },
  imports: {
    dirs: ["types/*.ts"],
  },
  sitemap: {
    urls: async () => {
      const appRoutes = buildAppRoutes();
      const shortcutRoutes = buildShortcutRoutes();
      return [...appRoutes, ...shortcutRoutes];
    },
    autoLastmod: true,
    trailingSlash: true,
  },
  site: {
    url: process.env.BASE_URL || "https://keycheck.dev",
  },
  plausible: {
    domain: process.env.DOMAIN || "keycheck.dev",
  },
  robots: {
    disallow: [],
    allow: "/",
  },
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      const appRoutes = await buildAppRoutes();
      const shortcutRoutes = await buildShortcutRoutes();
      const allRoutes = [...appRoutes, ...shortcutRoutes].map(
        (route) => route.loc,
      );
      nitroConfig.prerender!.routes!.push(...allRoutes);
    },
  },
  runtimeConfig: {
    public: {
      url: process.env.BASE_URL || "https://keycheck.dev",
    },
  },
});
