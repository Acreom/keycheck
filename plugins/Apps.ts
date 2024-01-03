import { App, Result } from "~/helpers/AppBase";
import { loadAppsConfigs } from "~/helpers/apps";
async function loadApps() {
  const appConfigs = await loadAppsConfigs();
  return appConfigs.map((app) => new App(app));
}

function getShortcutsMatches(
  input: string,
  apps: App[],
  platform: "win" | "mac",
) {
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
  const getShortcuts = () =>
    apps.value.reduce(
      (acc: Record<string, string>, val) => ({
        ...acc,
        ...val.shortcuts,
        ...val.globals,
      }),
      {},
    );
  nuxtApp.provide("apps", {
    $getApps: () => apps.value,
    $getShortcutsMatches: (input: string, platform: "win" | "mac") => {
      return getShortcutsMatches(input, apps.value, platform);
    },
    $getMatchesCount: (appId: string) => {
      const app = apps.value.find((app) => app.id === appId);
      if (!app) return [];
      const matchShortcut = (shortcut: string) => {
        for (const app of apps.value) {
          if (app.id === appId) continue;
          if (app.shortcuts[shortcut]) return true;
        }
      };
      return Object.keys(app.shortcuts).reduce((acc: number, val: string) => {
        return acc + (matchShortcut(val) ? 1 : 0);
      }, 0);
    },
    $getAllShortcuts: () => {
      return getShortcuts();
    },
    $appsCount: () => {
      return apps.value.length;
    },
    $allShortcutsCount: () => {
      return Object.keys(getShortcuts()).length;
    },
  });
});
