import MiniSearch from "minisearch";
import { preprocess } from "~/helpers/shortcuts";
import { App } from "~/helpers/AppBase";

export default defineNuxtPlugin((nuxtApp) => {
  const miniSearch = new MiniSearch({
    fields: ["description", "keybind", "appName"],
    storeFields: ["app", "description", "keybind", "global"],
    searchOptions: {
      fuzzy: 0.2,
      prefix: true,
    },
  });
  nuxtApp.provide("search", {
    $index: () => {
      const { $apps } = useNuxtApp();
      const shortcuts = $apps
        .$getApps()
        .reduce((acc: Record<string, any>[], app: App) => {
          const appShortcuts = { ...app.shortcuts, ...app.globals };
          const shortcuts = Object.keys(appShortcuts).map((keybind) => ({
            id: `${app.id}-${keybind.toLowerCase()}`,
            app: {
              id: app.id,
              icon: app.icon,
              name: app.name,
            },
            appName: app.name,
            description: appShortcuts[keybind],
            keybind: keybind.toLowerCase().replaceAll("+", " "),
            global: Object.keys(app.globals).includes(keybind),
          }));
          acc.push(...shortcuts);
          return acc;
        }, []);
      miniSearch.addAll(shortcuts);
    },
    $search: (query: string) => {
      return miniSearch.search(query).map((result) => ({
        id: result.id,
        app: result.app,
        description: result.description,
        keys: preprocess(result.keybind.replaceAll(" ", "+")),
        redirect: `/apps/${result.app.id}/`,
        global: result.global,
      }));
    },
  });
});
