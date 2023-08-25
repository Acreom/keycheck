export interface AppParams {
  id: string;
  name: string;
  icon: string;
  homepage: string;
  shortcuts: Record<string, string>;
  globals?: Record<string, string>;
}

export interface Result {
  global: boolean;
  icon: string;
  name: string;
  description: string;
  keys: string;
}
export class App {
  public id: string;
  name: string;
  icon: string;
  homepage: string;
  shortcuts: Record<string, string>;
  globals: Record<string, string>;
  constructor(params: AppParams) {
    this.id = params.id;
    this.name = params.name;
    this.icon = params.icon;
    this.homepage = params.homepage;
    this.shortcuts = params.shortcuts;
    this.globals = params.globals ?? {};
  }

  platformPreprocess(shortcut: string, platform: "mac" | "win") {
    return shortcut
      .toLowerCase()
      .replace(/(esc)/g, "escape")
      .replace(/(cmdorctrl)/g, platform === "mac" ? "meta" : "control")
      .replace(/(cmd)/g, "meta");
  }

  hasMatch(shortcut: string, query: string) {
    const shortcutParts = shortcut.split("+");
    const queryParts = query.split("+");
    // the shortcut must include all parts of the query
    return (
      shortcutParts.length === queryParts.length &&
      shortcutParts.filter((key) => queryParts.includes(key)).length ===
        shortcutParts.length
    );
  }

  getGlobalMatches(input: string, platform: "mac" | "win") {
    const matches = Object.keys(this.globals!).filter((key) =>
      this.hasMatch(this.platformPreprocess(key, platform), input),
    );
    return matches.map((match) => ({
      global: true,
      icon: this.icon,
      name: this.name,
      description: this.globals[match],
      keys: this.platformPreprocess(match, platform),
    }));
  }
  getMatches(input: string, platform: "mac" | "win") {
    const matches = Object.keys(this.shortcuts!).filter((key) =>
      this.hasMatch(this.platformPreprocess(key, platform), input),
    );
    return matches.map((match) => ({
      global: false,
      icon: this.icon,
      name: this.name,
      description: this.shortcuts[match],
      keys: this.platformPreprocess(match, platform),
    }));
  }
}
