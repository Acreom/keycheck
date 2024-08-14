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
  escape: "⎋",
  esc: "⎋",
  plus: "+",
  minus: "-",
  win: "⊞",
  delete: "␡",
  home: "↖",
  end: "↘",
  pageup: "⇞",
  pagedown: "⇟",
};

const tooltips: Record<string, string> = {
  "⇧": "Shift",
  "^": "Ctrl",
  "⎇": "Alt",
  "␣": "Space",
  "↑": "Arrow Up",
  "↓": "Arrow Down",
  "←": "Arrow Left",
  "→": "Arrow Right",
  "↵": "Enter",
  "⌫": "Backspace",
  "↹": "Tab",
  "⎋": "Escape",
  "+": "Plus",
  "-": "Minus",
  "⊞": "Windows",
  "␡": "Delete",
  "↖": "Home",
  "↘": "End",
  "⇞": "Page Up",
  "⇟": "Page Down",
  "⌘": "Command",
  FN: "Function",
};

function getTooltip(key: string) {
  return tooltips[key];
}
function transformKeys(keys: string[]) {
  return keys.map((key: string) => {
    key = key.toLowerCase();
    if (key === "meta" || key === "cmd") {
      return "⌘";
    }
    if (Object.keys(keysMap).includes(key)) {
      return keysMap[key];
    }
    return toUpperCase(key);
  });
}

const toUpperCase = (key: string): string => {
  const char = key.charCodeAt(0);
  const upperNumber = String.fromCharCode(char - 40);
  return upperNumber;
};

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
  171: "plus",
  189: "minus",
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
    const platform = useState("platform", () => "win").value;
    if (platform === "mac") {
      modifiers.push("meta");
    } else {
      modifiers.push("win");
    }
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

function normalizeModifierKeys(keys: string) {
  const keysArray = keys.split("+");
  const modifiers = keysArray.slice(0, -1);
  const key = keysArray[keysArray.length - 1];
  const normalized = modifiers.sort(
    (a: string, b: string) => a.localeCompare(b) * -1,
  );
  return normalized.length ? normalized.join("+") + "+" + key : key;
}

function platformPreprocessCapturedKeys(keys: string[]) {
  return keys.map((key) => {
    if (key === "meta") {
      const platform = useState("platform", () => "win").value;
      return platform === "mac" ? "meta" : "ctrl";
    }
    return key;
  });
}

function routeToCapturedKeys(keys: string) {
  return keys
    .split("+")
    .map((key) => {
      if (key.toLowerCase() === "cmdorctrl") {
        return "meta";
      }
      return key;
    })
    .join("+");
}

function preprocess(key: string) {
  return platformPreprocess(
    key,
    useState("platform", (): "mac" | "win" => "mac").value,
  );
}

function platformPreprocess(shortcut: string, platform: "mac" | "win") {
  const generalPreprocessed = normalizeModifierKeys(shortcut.toLowerCase())
    .replace(/(return)/g, "enter")
    .replace(/(pgup)/g, "pageup")
    .replace(/(pgdn)/g, "pagedown")
    .replace(/(pgdown)/g, "pagedown");
  if (platform === "win") {
    return generalPreprocessed
      .replace(/(cmdorctrl)/g, "ctrl")
      .replace(/(cmd)/g, "meta");
  }
  return generalPreprocessed
    .replace(/(cmdorctrl)/g, "meta")
    .replace(/(cmd)/g, "meta");
}

export {
  extractKeys,
  transformKeys,
  platformPreprocess,
  platformPreprocessCapturedKeys,
  routeToCapturedKeys,
  getTooltip,
  preprocess,
};
