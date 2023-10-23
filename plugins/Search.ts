import MiniSearch from "minisearch";
export default defineNuxtPlugin((nuxtApp) => {
  const miniSearch = new MiniSearch({
    fields: ["description", "keybind", "app"],
    storeFields: ["app", "description", "keybind"],
  });
  nuxtApp.provide("search", {
    $index: () => {
      const { $apps } = useNuxtApp();
      const shortcuts = $apps.$getApps().reduce((acc, app) => {
        const appShortcuts = { ...app.shortcuts, ...app.globals };
        const shortcuts = Object.keys(appShortcuts).map((keybind) => ({
          id: `${app.id}-${keybind.toLowerCase()}`,
          app: app.name,
          description: appShortcuts[keybind],
          keybind: keybind.toLowerCase().replaceAll("+", " "),
        }));
        acc.push(...shortcuts);
        return acc;
      }, []);
      miniSearch.addAll(shortcuts);
    },
    $search: (query: string) => {
      return miniSearch.search(query);
    },
  });
});
