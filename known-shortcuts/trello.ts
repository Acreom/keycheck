import { AppParams } from "~/types";

const app = {
  id: "trello",
  name: "Trello",
  icon: "/app-icons/trello.png",
  homepage: "https://trello.com/",
  description: "Trello is a web-based, kanban-style, list-making application.",
  globals: {},
  shortcuts: {
    up: "navigate cards",
    down: "navigate cards",
    left: "navigate cards",
    right: "navigate cards",
    b: "open header boards menu",
    "/": "focus search box",
    c: "archive card",
    d: "due date",
    e: "quick edit mode",
    esc: "close menu/cancel editing",
    "cmdorctrl+enter": "save text",
    enter: "open card",
    f: "open card filter menu",
    l: "label",
    ";": "toggle label names",
    m: "add/remove members",
    n: "insert new card",
    ",": "move card to adjacent list",
    ".": "move card to adjacent list",
    "<": "move card to adjacent list",
    ">": "move card to adjacent list",
    q: "my cards filter",
    s: "watch",
    space: "assign self",
    t: "edit title",
    v: "vote",
    w: "toggle board menu",
    x: "clear all filters",
    "?": "open shortcuts page",
    "shift+2": "autocomplete members",
    "shift+3": "autocomplete labels",
    "shift+6": "autocomplete position",
    "cmdorctrl+c": "copy card",
    "cmdorctrl+v": "paste card",
    "cmdorctrl+x": "move card",
  },
} as AppParams;

export default app;
