import { AppParams } from "~/types";

const app = {
  id: "chrome-devtools",
  name: "Chrome DevTools",
  icon: "/app-icons/chrome-devtools.png",
  homepage: "https://developers.google.com/web/tools/chrome-devtools",
  description:
    "Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser.",
  globals: {},
  shortcuts: {
    "ctrl+shift+i": "open whatever panel you used last",
    "ctrl+shift+j": "open the console panel",
    "ctrl+shift+c": "open the elements panel",
    "cmd+alt+i": "open whatever panel you used last",
    "cmd+alt+j": "open the console panel",
    "cmd+alt+c": "open the elements panel",
    f1: "show settings",
    "cmdorctrl+]": "focus the next panel",
    "cmdorctrl+[": "focus the previous panel",
    "cmdorctrl+shift+d":
      "switch back to whatever docking position you last used",
    "cmdorctrl+shift+m": "toggle device mode",
    "cmdorctrl+shift+c": "toggle inspect element mode",
    "cmdorctrl+shift+p": "open the command menu",
    esc: "toggle the drawer / reject autocomplete suggestion",
    "cmdorctrl+r": "normal reload",
    "cmdorctrl+shift+r": "hard reload",
    "cmdorctrl+f": "search for text within the current panel",
    "cmdorctrl+shift+f": "opens the search tab in the drawer",
    "cmdorctrl+p": "open a file in the sources panel",
    "cmdorctrl+shift+plus": "zoom in",
    "cmdorctrl+minus": "zoom out",
    "cmdorctrl+0": "restore default zoom level",
    "cmdorctrl+o": "run snippet / load recording",
    "cmdorctrl+z": "undo change",
    "cmdorctrl+y": "redo change",
    up: "select the element above the currently-selected element / get previous statement",
    down: "select the element below the currently-selected element / get next statement",
    right: "expand the currently-selected node",
    left: "collapse the currently-selected node",
    enter: "toggle edit attributes mode on the currently-selected element",
    tab: "select the next attribute after entering edit attributes mode / accept autocomplete suggestion",
    "shift+tab":
      "select the previous attribute after entering edit attributes mode",
    h: "hide the currently-selected element",
    f2: "toggle edit as html mode on the currently-selected element",
    "cmdorctrl+\\":
      "pause script execution (if running), or resume (if paused)",
    "cmdorctrl+'": "step over next function call",
    "cmdorctrl+;": "step into next function call",
    "cmdorctrl+shift+;": "step out of current function",
    "cmdorctrl+.":
      "select the call frame below or above the currently-selected frame",
    "cmdorctrl+,":
      "select the call frame below or above the currently-selected frame",
    "cmdorctrl+s": "save changes to local modifications",
    "cmdorctrl+alt+s": "save all changes",
    "cmdorctrl+g": "go to line",
    "alt+w": "close the active tab",
    "cmdorctrl+delete":
      "delete all characters in the last word, up to the cursor",
    "cmdorctrl+m": "go to matching bracket",
    "cmdorctrl+/": "toggle single-line comment",
    "cmdorctrl+d":
      "select the next occurrence of whatever word the cursor is on",
    "cmdorctrl+u":
      "deselect the next occurrence of whatever word the cursor is on",
    "cmdorctrl+e": "start or stop recording",
    "cmdorctrl+`": "focus the console",
    "cmdorctrl+l": "clear the console",
    "shift+enter": "force a multi-line entry",
  },
} as AppParams;

export default app;
