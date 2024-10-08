import { AppParams } from "~/types";

const app = {
  id: "webflow",
  name: "Webflow",
  icon: "/app-icons/webflow.png",
  homepage: "https://webflow.com",
  description:
    "Webflow empowers designers to build professional, custom websites in a completely visual canvas with no code.",
  globals: {},
  shortcuts: {
    "shift+/": "show shortcut cheatsheet",
    "cmdorctrl+shift+s": "save as a snapshot",
    esc: "deselect or abort",
    del: "delete element",
    "shift+p": "show publish dialog",
    "shift+e": "show export code dialog",
    enter: "edit element",
    "cmdorctrl+shift+p": "preview mode",
    "cmdorctrl+shift+g": "guide overlay",
    "cmdorctrl+shift+e": "show element edges",
    "cmdorctrl+shift+x": "x-ray mode",
    a: "show add panel",
    z: "show navigator tab",
    p: "show pages panel",
    "shift+a": "show symbols panel",
    "cmdorctrl+shift+a": "make selected element a symbol",
    j: "show asset manager",
    s: "show style tab",
    d: "show settings tab",
    g: "show style manager tab",
    h: "show interactions tab",
    "cmdorctrl+c": "copy",
    "cmdorctrl+x": "cut",
    "cmdorctrl+v": "paste",
    "cmdorctrl+z": "undo",
    "cmdorctrl+shift+z": "redo",
    "1": "desktop view",
    "2": "tablet view",
    "3": "phone (landscape) view",
    "4": "phone (portrait) view",
    "cmdorctrl+enter": "add class to selected element",
    "cmdorctrl+shift+enter": "rename last class on selected element",
    "cmdorctrl+k": "quick find",
    up: "select parent element",
    down: "select child element",
    left: "select sibling element",
    right: "select sibling element",
    "alt+left": "select previous element",
    "alt+right": "select next element",
    "cmdorctrl+shift+l": "toggle collaborators on selected element",
  },
} as AppParams;

export default app;
