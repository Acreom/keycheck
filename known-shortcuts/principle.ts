import { AppParams } from "~/types";

const app = {
  id: "principle",
  name: "Principle",
  icon: "/app-icons/principle.png",
  homepage: "https://principleformac.com",
  description:
    "Principle makes it easy to create animated and interactive user interface designs.",
  globals: {},
  shortcuts: {
    r: "add rectangle",
    "alt+r": "add rectangle as a child",
    t: "add text",
    "alt+t": "add text as a child",
    a: "add artboard",
    "cmd+g": "group",
    "cmd+shift+g": "ungroup",
    "cmd+]": "bring forward",
    "cmd+shift+]": "bring to front",
    "cmd+[": "send backward",
    "cmd+shift+[": "send to back",
    up: "nudge",
    down: "nudge",
    left: "nudge",
    right: "nudge",
    "shift+up": "large nudge",
    "shift+down": "large nudge",
    "shift+left": "large nudge",
    "shift+right": "large nudge",
    "cmd+d": "duplicate",
    "cmd+r": "rename layer",
    "cmd+=": "zoom in",
    "cmd+minus": "zoom out",
    "cmd+1": "zoom all",
    "cmd+2": "zoom selection",
    "cmd+3": "center selection",
    "cmd+0": "zoom to actual size",
    esc: "select parent",
    enter: "select child",
    tab: "select next sibling",
    "shift+tab": "select previous sibling",
    "cmd+a": "select all siblings",
    w: "rewind prototype",
    "cmd+v": "start recording video",
    "cmd+alt+v": "start recording video without cursor",
  },
} as AppParams;

export default app;
