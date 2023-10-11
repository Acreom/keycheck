import * as apps from "../known-shortcuts";
async function loadAppsConfigs() {
  const allApps = Object.values(apps);
  return allApps.sort((a: any, b: any) => a.name.localeCompare(b.name));
}

async function buildAppRoutes() {
  const appConfigs = await loadAppsConfigs();
  return appConfigs.map((app: any) => ({
    loc: encodeURI(`/apps/${app.id}`),
    changefreq: "monthly",
    priority: 0.8,
  }));
}

async function buildShortcutRoutes() {
  const appConfigs = await loadAppsConfigs();
  const uniqueShortcuts = new Set<string>();
  appConfigs.forEach((app: any) => {
    Object.keys(app.shortcuts).forEach((shortcut: string) => {
      uniqueShortcuts.add(shortcut);
    });
  });
  return Array.from(uniqueShortcuts).map((shortcut: string) => ({
    loc: encodeURI(`/shortcuts/${shortcut}`),
    changefreq: "monthly",
    priority: 0.8,
  }));
}

export { loadAppsConfigs, buildAppRoutes, buildShortcutRoutes };
