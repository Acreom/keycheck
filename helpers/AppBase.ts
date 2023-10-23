import { platformPreprocess } from "~/helpers/shortcuts";

export interface AppParams {
  id: string;
  name: string;
  icon: string;
  homepage: string;
  shortcuts: Record<string, string>;
  globals: Record<string, string>;
  description: string;
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
  description?: string;
  constructor(params: AppParams) {
    this.id = params.id;
    this.name = params.name;
    this.icon = params.icon;
    this.homepage = params.homepage;
    this.shortcuts = Object.keys(params.shortcuts).reduce(
      (acc, keybind) => {
        acc[keybind.toLowerCase()] = params.shortcuts[keybind];
        return acc;
      },
      {} as Record<string, string>,
    );
    this.globals = Object.keys(params.globals ?? {}).reduce(
      (acc, keybind) => {
        acc[keybind.toLowerCase()] = params.globals![keybind];
        return acc;
      },
      {} as Record<string, string>,
    );
    this.description = params.description ?? "No description provided";
  }

  hasFullMatch(shortcut: string, query: string) {
    const shortcutParts = shortcut.split("+");
    const queryParts = query.split("+");
    const numMatches = queryParts.filter((key) => shortcutParts.includes(key));
    return (
      numMatches.length === shortcutParts.length &&
      queryParts.length === shortcutParts.length
    );
  }

  hasPartialMatch(shortcut: string, query: string) {
    const shortcutParts = shortcut.split("+");
    const queryParts = query.split("+");
    const numMatches = queryParts.filter((key) => shortcutParts.includes(key));
    return (
      numMatches.length === queryParts.length &&
      shortcutParts.length > queryParts.length
    );
  }

  getGlobalMatches(input: string, platform: "mac" | "win") {
    const fullMatches = Object.keys(this.globals!)
      .filter((key) =>
        this.hasFullMatch(platformPreprocess(key, platform), input),
      )
      .map((match) => ({
        global: true,
        icon: this.icon,
        name: this.name,
        description: this.globals[match],
        keys: platformPreprocess(match, platform),
        partial: false,
      }));
    const partialMatches = Object.keys(this.globals!)
      .filter((key) =>
        this.hasPartialMatch(platformPreprocess(key, platform), input),
      )
      .map((match) => ({
        global: true,
        icon: this.icon,
        name: this.name,
        description: this.globals[match],
        keys: platformPreprocess(match, platform),
        partial: true,
      }));
    return [...fullMatches, ...partialMatches];
  }

  getMatches(input: string, platform: "mac" | "win") {
    const fullMatches = Object.keys(this.shortcuts!)
      .filter((key) =>
        this.hasFullMatch(platformPreprocess(key, platform), input),
      )
      .map((match) => ({
        global: false,
        icon: this.icon,
        name: this.name,
        description: this.shortcuts[match],
        keys: platformPreprocess(match, platform),
        partial: false,
      }));
    const partialMatches = Object.keys(this.shortcuts!)
      .filter((key) =>
        this.hasPartialMatch(platformPreprocess(key, platform), input),
      )
      .map((match) => ({
        global: false,
        icon: this.icon,
        name: this.name,
        description: this.shortcuts[match],
        keys: platformPreprocess(match, platform),
        partial: true,
      }));
    return [...fullMatches, ...partialMatches];
  }
}
