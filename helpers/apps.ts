import * as apps from "../known-shortcuts";
async function loadAppsConfigs() {
  const allApps = Object.values(apps);
  return allApps.sort((a: any, b: any) => a.name.localeCompare(b.name));
}

async function buildAppRoutes() {
  const appConfigs = await loadAppsConfigs();
  return appConfigs.map((app: any) => ({
    loc: `/apps/${encodeURIComponent(app.id.toLowerCase())}/`,
  }));
}

async function buildShortcutRoutes() {
  const appConfigs = await loadAppsConfigs();
  const uniqueShortcuts = new Set<string>();
  appConfigs.forEach((app: any) => {
    Object.keys(app.shortcuts).forEach((shortcut: string) => {
      const winShortcut = shortcut.replace(/cmdorctrl/g, "ctrl");
      const macShortcut = shortcut.replace(/cmdorctrl/g, "cmd");
      if (
        winShortcut !== shortcut &&
        macShortcut !== shortcut &&
        winShortcut !== macShortcut
      ) {
        uniqueShortcuts.add(winShortcut);
        uniqueShortcuts.add(macShortcut);
        return;
      }
      uniqueShortcuts.add(shortcut);
    });
  });
  return Array.from(uniqueShortcuts).map((shortcut: string) => ({
    loc: `/shortcuts/${encodeURIComponent(shortcut.toLowerCase())}/`,
  }));
}

export { loadAppsConfigs, buildAppRoutes, buildShortcutRoutes };
