import { AppParams } from "~/types";

const app = {
  id: "roam",
  name: "Roam Research",
  icon: "/app-icons/roam.png",
  homepage: "https://roamresearch.com/",
  description: "Roam Research is a note-taking tool for networked thought.",
  globals: {},
  shortcuts: {
    "/": "bring up a menu of many core functions",
    "cmdorctrl+u": "search the database",
    "cmdorctrl+enter":
      "jump back to page after search / create a todo checkbox / toggle todo or done",
    "cmdorctrl+f":
      "search on the current page / move one character to the right",
    "shift+enter":
      "open a new page created in search in the sidebar / create a new line inside of a block",
    "cmdorctrl+shift+d": "jump to the daily notes page",
    "cmdorctrl+b": "toggle brackets / move one character to the left / bold",
    tab: "indent block",
    "shift+tab": "un-indent block",
    "cmdorctrl+shift+up": "move block up",
    "cmdorctrl+shift+down": "move block down",
    enter: "create a new block, bullet point",
    "cmdorctrl+z": "undo",
    "cmdorctrl+shift+z": "redo",
    "cmdorctrl+.":
      "zoom in, show only the current block enlarged / expand all versions, all versions will appear in their own blocks",
    "cmdorctrl+,": "zoom out, restores the normal view / add a version",
    "cmdorctrl+o": "follow link under cursor, when editing a block",
    "cmdorctrl+shift+o": "open a link under cursor in the sidebar",
    "cmdorctrl+up": "collapse all child blocks under the current block",
    "cmdorctrl+down": "expand all child blocks under the current block",
    "shift+up": "select the block above where the cursor is placed",
    "shift+down": "select the block below where the cursor is placed",
    "cmdorctrl+shift+a": "select all blocks",
    "cmdorctrl+a": "jump to the beginning of the current block",
    "cmdorctrl+e": "jump to the end of the current block",
    "cmdorctrl+t": "swap all characters on either side of the cursor",
    "cmdorctrl+c+x": "show avatar of the last user to edit the block",
    "cmdorctrl+shift+.": "cycle versions to the right",
    "cmdorctrl+shift+,": "cycle versions to the left",
    "cmdorctrl+alt+1": "toggle between heading styles",
    "cmdorctrl+alt+2": "toggle between heading styles",
    "cmdorctrl+alt+3": "toggle between heading styles",
    "cmdorctrl+alt+0": "reset heading, or set to paragraph",
    "cmdorctrl+i": "italic",
    "cmdorctrl+k": "create an html link",
    "cmdorctrl+y": "strike-through",
    "cmdorctrl+h": "highlight",
    "`": "create an inline block of code",
  },
} as AppParams;

export default app;
