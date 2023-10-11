const keysMap: Record<string, string> = {
  shift: "⇧",
  ctrl: "^",
  alt: "⎇",
  space: "␣",
  " ": "␣",
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
  enter: "↵",
  backspace: "⌫",
  tab: "↹",
  escape: "esc",
  powerButton: "⏻",
  plus: "+",
  minus: "-",
};

function transformKeys(keys: string[]) {
  return keys.map((key: string) => {
    key = key.toLowerCase();
    if (key === "meta") {
      const platform = useState("platform", () => "mac").value;
      return platform === "mac" ? "⌘" : "⊞";
    }
    if (Object.keys(keysMap).includes(key)) {
      return keysMap[key];
    }
    return key.toUpperCase();
  });
}

const MAP: Record<number, string> = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "ctrl",
  18: "alt",
  20: "capslock",
  27: "esc",
  32: "space",
  33: "pageup",
  34: "pagedown",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  45: "ins",
  46: "del",
  91: "meta",
  93: "meta",
  224: "meta",
};

for (let i = 1; i < 20; ++i) {
  MAP[111 + i] = "f" + i;
}

for (let i = 0; i <= 9; ++i) {
  MAP[i + 96] = i.toString();
}

const KEYCODE_MAP: Record<number, string> = {
  106: "*",
  107: "+",
  109: "-",
  110: ".",
  111: "/",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
};

function characterFromEvent(e: KeyboardEvent) {
  if (MAP[e.which]) {
    return MAP[e.which];
  }

  if (KEYCODE_MAP[e.which]) {
    return KEYCODE_MAP[e.which];
  }
  return String.fromCharCode(e.which).toLowerCase();
}

function getModifiers(event: KeyboardEvent) {
  const modifiers = [];
  if (event.shiftKey) {
    modifiers.push("shift");
  }
  if (event.altKey) {
    modifiers.push("alt");
  }
  if (event.ctrlKey) {
    modifiers.push("ctrl");
  }
  if (event.metaKey) {
    modifiers.push("meta");
  }
  return modifiers;
}

function extractKeys(event: KeyboardEvent | null) {
  if (!event) return [];
  const keys = getModifiers(event);
  const character = characterFromEvent(event);
  keys.push(character);
  return [...new Set(keys)];
}

function platformPreprocess(shortcut: string, platform: "mac" | "win") {
  const generalPreprocessed = shortcut
    .toLowerCase()
    .replace(/(return)/g, "enter");
  if (platform === "win") {
    return generalPreprocessed
      .replace(/win/g, "meta")
      .replace(/(cmdorctrl)/g, "ctrl");
  }
  return generalPreprocessed
    .replace(/(cmdorctrl)/g, "meta")
    .replace(/(cmd)/g, "meta");
}

export { extractKeys, transformKeys, platformPreprocess };
