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
  nuxtApp.provide("apps", {
    $getApps: () => apps.value,
    $getShortcutsMatches: (input: string, platform: "win" | "mac") => {
      return getShortcutsMatches(input, apps.value, platform);
    },
    $getMatchesCount: (appId: string) => {
      const app = apps.value.find((app) => app.id === appId);
      const platform = useState("platform", () => "mac");
      if (!app) return [];
      return Object.keys(app.shortcuts).reduce((acc: number, val: string) => {
        return (
          acc + getShortcutsMatches(val, apps.value, platform.value).length
        );
      }, 0);
    },
  });
});
