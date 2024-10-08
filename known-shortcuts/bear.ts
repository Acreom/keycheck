import { AppParams } from "~/types";

const app = {
  id: "bear",
  name: "Bear Notes",
  icon: "/app-icons/bear.png",
  homepage: "https://bear.app",
  description: "Bear is a flexible writing app for crafting notes and prose.",
  globals: {},
  shortcuts: {
    "cmd+1": "headings",
    "cmd+2": "headings",
    "cmd+3": "headings",
    "cmd+4": "headings",
    "cmd+5": "headings",
    "cmd+6": "headings",
    "alt+cmd+s": "line separator",
    "cmd+b": "bold",
    "cmd+i": "italic",
    "cmd+u": "underline",
    "shift+cmd+u": "strikethrough",
    "cmd+k": "link",
    "cmd+d": "wiki link",
    "cmd+l": "unordered list",
    "shift+cmd+l": "ordered list",
    "shift+cmd+t": "quote",
    "alt+cmd+c": "inline code",
    "ctrl+cmd+c": "code block",
    "shift+cmd+m": "highlighter/marker",
    "shift+cmd+e": "footnote",
    "shift+cmd+v": "insert file",
    "alt+cmd+t": "create table",
    "ctrl+cmd+enter": "add row",
    "shift+cmd+enter": "add column",
    "ctrl+cmd+delete": "delete row",
    "ctrl+shift+cmd+delete": "delete column",
    "cmd+t": "todo",
    "cmd+.": "toggle todo",
    "alt+cmd+right": "shift line right",
    "alt+cmd+left": "shift line left",
    "cmd+alt+up": "move line up",
    "cmd+alt+down": "move line down",
    tab: "shift the list element right",
    "shift+tab": "shift the list element left",
    "shift+cmd+7": "long form date with time",
    "shift+cmd+8": "long form date",
    "shift+cmd+9": "short form date",
    "shift+cmd+0": "hours",
    "cmd+a": "select all",
    "cmd+enter": "end editing",
    "cmd+p": "print note",
    "shift+cmd+k": "open link",
    "cmd+'": "toggle folding",
    "alt+shift+cmd+l": "copy link to note",
    "alt+shift+cmd+i": "copy note identifier",
    "cmd+plus": "zoom in",
    "cmd+minus": "zoom out",
    "cmd+0": "actual size",
    "shift+cmd+i": "toggle statistics panel",
    "shift+cmd+a": "toggle table of content panel",
    "shift+cmd+b": "toggle the backlinks panel",
    "cmd+f": "search inside the current note",
    "alt+cmd+f": "search and replace inside the current note",
    "shift+cmd+f": "search inside the note list",
    "cmd+n": "create a new note",
    "alt+cmd+n": "create a new note in a new window",
    up: "move the selection in the note and tags lists",
    down: "move the selection in the note and tags lists",
    left: "move the selection between the sidebar, the note list and the editor; open/close nested tags",
    right:
      "move the selection between the sidebar, the note list and the editor; open/close nested tags",
    enter: "edit the selected note",
    "cmd+delete": "delete selected note",
    "shift+cmd+r": "restore selected note",
    "shift+cmd+p": "pin/unpin selected note",
    "shift+cmd+delete": "empty trash",
    "alt+cmd+1": "select notes in the sidebar",
    "alt+cmd+2": "select untagged in the sidebar",
    "alt+cmd+3": "select todo in the sidebar",
    "alt+cmd+4": "select today in the sidebar",
    "alt+cmd+5": "select locked in the sidebar",
    "alt+cmd+9": "select trash in the sidebar",
    "alt+cmd+0": "select archive in the sidebar",
    "cmd+[": "navigate back in visualized notes history",
    "cmd+]": "navigate forward in visualized notes history",
    "cmd+,": "settings",
    "shift+cmd+s": "export selected notes",
    "shift+cmd+o": "import notes",
    "ctrl+1": "show editor only",
    "ctrl+2": "show note list and editor",
    "ctrl+3": "show sidebar, note list and editor",
    "ctrl+cmd+f": "enter fullscreen",
    "cmd+\\": "open main window",
  },
} as AppParams;

export default app;
