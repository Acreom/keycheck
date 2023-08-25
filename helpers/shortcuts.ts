const keysMap: Record<string, string> = {
  meta: "⌘",
  shift: "⇧",
  control: "^",
  alt: "⎇",
  space: "␣",
  " ": "␣",
  arrowup: "↑",
  arrowdown: "↓",
  arrowleft: "←",
  arrowright: "→",
  enter: "↵",
  backspace: "⌫",
  tab: "↹",
  escape: "esc",
  powerButton: "⏻",
};

const specialCharsMap: Record<string, string> = {
  " ": "space",
  escape: "esc",
};

function transformKeys(keys: string[]) {
  return keys.map((key: string) => {
    key = key.toLowerCase();
    if (Object.keys(keysMap).includes(key)) {
      return keysMap[key];
    }
    return key.toUpperCase();
  });
}

function extractKeys(event: KeyboardEvent | null) {
  if (!event) return [];
  const keys = [];
  if (event.metaKey) {
    keys.push("meta");
  }
  if (event.shiftKey) {
    keys.push("shift");
  }
  if (event.ctrlKey) {
    keys.push("control");
  }
  if (event.altKey) {
    keys.push("alt");
  }
  if (Object.keys(specialCharsMap).includes(event.key)) {
    keys.push(specialCharsMap[event.key]);
  }
  if (
    !Object.keys(specialCharsMap).includes(event.key) &&
    !keys.includes(event.key.toLowerCase())
  ) {
    keys.push(event.key.toLowerCase());
  }
  return keys;
}

export { extractKeys, transformKeys };
