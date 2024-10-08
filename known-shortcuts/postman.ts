import { AppParams } from "~/types";

const app = {
  id: "postman",
  name: "Postman",
  icon: "/app-icons/postman.png",
  homepage: "https://www.postman.com/",
  description: "Postman is an API platform for developers. ",
  globals: {},
  shortcuts: {
    "cmdorctrl+alt+1": "focus sidebar",
    "cmdorctrl+alt+2": "focus builder",
    down: "move to next item",
    up: "move to previous item",
    right: "expand collection / folder",
    left: "collapse collection / folder",
    "shift+down": "select current and next item",
    "shift+up": "select current and previous item",
    "cmdorctrl+f": "search sidebar",
    enter: "open request in a tab",
    "cmdorctrl+c": "copy",
    "cmdorctrl+v": "paste",
    delete: "delete",
    "cmdorctrl+d": "duplicate",
    "cmdorctrl+e": "edit / rename",
    "cmdorctrl+s": "save",
    "cmdorctrl+shift+s": "save as",
    "cmdorctrl+enter": "send request",
    "cmdorctrl+\\": "toggle the sidebar",
    "cmdorctrl+l": "jump to url",
    "cmdorctrl+alt+c": "open console",
  },
} as AppParams;

export default app;
