import { AppParams } from "~/types";

const app = {
  id: "monday",
  name: "Monday",
  icon: "/app-icons/monday.png",
  homepage: "https://www.monday.com/",
  description:
    "monday.com is a work OS that powers teams to run processes, projects and workflows in one digital workspace",
  globals: {},
  shortcuts: {
    "cmdorctrl+b": "bolt switch (quick switch between boards)",
    esc: "close item page, close dialogs, close search",
    down: "navigate down",
    up: "navigate up",
    left: "navigate left",
    right: "navigate right",
    tab: "navigate to next cell",
    "shift+tab": "navigate to previous tab",
    enter: "edit cell content",
    backspace: "clear cell content",
    space: "open column view",
    "cmdorctrl+f": "search board",
    "cmdorctrl+c": "copy cell content",
    "cmdorctrl+v": "paste cell content",
    "cmdorctrl+x": "cut cell content",
    "cmdorctrl+enter": "select item",
    "shift+enter": "select range of items",
    "cmdorctrl+shift+g": "create new group",
    "cmdorctrl+shift+c": "create new column",
    "cmdorctrl+l": "open activity log",
    "cmdorctrl+g": "collapse/expand all groups",
  },
} as AppParams;

export default app;
