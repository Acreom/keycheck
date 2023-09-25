import { App, AppParams, Result } from "~/helpers/AppBase";
import { useOptionsStore } from "~/store/options";
async function loadApps() {
  const imports = await Promise.all(
    Object.values(import.meta.glob("@/known-shortcuts/*.ts")).map(
      async (app) => ((await app()) as any).app as AppParams,
    ),
  );
  const apps = imports.sort((a: any, b: any) => a.name.localeCompare(b.name));
  return apps.map((app) => new App(app));
}

function getShortcutsMatches(input: string, apps: App[]) {
  const store = useOptionsStore();
  const platform = store.currentPlatform;
  const globalMatches = apps.reduce((acc: Result[], val: App) => {
    return [...acc, ...val.getGlobalMatches(input, platform)];
  }, [] as Result[]);
  const results = apps.reduce((acc: Result[], val: App) => {
    return [...acc, ...val.getMatches(input, platform)];
  }, [] as Result[]);
  return [...globalMatches, ...results];
}
export default defineNuxtPlugin(async (nuxtApp) => {
  const apps = ref<App[]>(await loadApps());
  nuxtApp.provide("apps", {
    $getApps: () => apps.value,
    $getShortcutsMatches: (input: string) => {
      return getShortcutsMatches(input, apps.value);
    },
    $getMatchesCount: (appId: string) => {
      const app = apps.value.find((app) => app.id === appId);
      if (!app) return [];
      return Object.keys(app.shortcuts)
        .map((shortcut) => getShortcutsMatches(shortcut, apps.value).length)
        .filter((count) => count > 1).length;
    },
  });
});
