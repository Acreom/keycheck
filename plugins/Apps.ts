import { App, AppParams, Result } from "~/helpers/AppBase";
async function loadApps() {
  const imports = await Promise.all(
    Object.values(import.meta.glob("@/known-shortcuts/*.ts")).map(
      async (app) => ((await app()) as any).app as AppParams,
    ),
  );
  const apps = imports.sort((a: any, b: any) => a.name.localeCompare(b.name));
  return apps.map((app) => new App(app));
}
export default defineNuxtPlugin(async (nuxtApp) => {
  const apps = ref<App[]>(await loadApps());
  nuxtApp.provide("apps", {
    $getApps: () => apps.value,
    $getShortcutsMatches: (input: string) => {
      const globalMatches = apps.value.reduce((acc: Result[], val: App) => {
        // TODO: platform options
        return [...acc, ...val.getGlobalMatches(input, "mac")];
      }, [] as Result[]);
      const results = apps.value.reduce((acc: Result[], val: App) => {
        // TODO: platform options
        return [...acc, ...val.getMatches(input, "mac")];
      }, [] as Result[]);
      return [...globalMatches, ...results];
    },
  });
});
