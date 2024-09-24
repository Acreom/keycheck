import { AppParams } from "~/types";

const app = {
  id: "pages",
  name: "Pages",
  icon: "/app-icons/pages.png",
  homepage: "https://www.apple.com/pages/",
  description: "Create and edit documents.",
  globals: {},
  shortcuts: {
    "cmd+m": "minimize the window",
    "alt+cmd+m": "minimize all open windows/documents of the Pages app",
    "cmd+h": "hide Pages",
    "alt+cmd+h": "hide all other app windows",
    "ctrl+cmd+f": "enter full-screen mode",
    "shift+cmd+>": "zoom in",
    "shift+cmd+<": "zoom out",
    "shift+cmd+0": "zoom to selection",
    "cmd+0": "return to normal size",
    "cmd+,": "open Pages preferences",
    "shift+cmd+?": "open the Pages User Guide",
    "shift+cmd+p": "open the Pages Setup window",
    "cmd+w": "close the window",
    "alt+cmd+w": "close all windows",
    "cmd+q": "quit Pages",
    "alt+cmd+q": "quit Pages with windows open",
    "cmd+n": "open the Template Chooser",
    escape: "close the Template Chooser",
    "fn+d": "start dictation",
    "cmd+o": "open an existing document",
    "cmd+s": "save a document",
    "alt+shift+cmd+s": "save a document as",
    "shift+cmd+s": "duplicate a document",
    "cmd+p": "print a document",
    "shift+cmd+v": "select a file to insert",
    "cmd+z": "undo",
    "shift+cmd+z": "redo",
    left: "move left one character",
    right: "move right one character",
    "ctrl+b": "move back one character",
    "ctrl+f": "move forward one character",
    up: "move up one line",
    down: "move down one line",
    "ctrl+alt+b": "move to the start of the current or previous word",
    "ctrl+alt+f": "move to the end of the current or previous word",
    "ctrl+a": "move to the start of the paragraph",
    "alt+up": "move to the start of the paragraph",
    "ctrl+e": "move to the end of the paragraph",
    "alt+down": "move to the end of the paragraph",
    "fn+left": "move to the start of the document without the insertion point",
    "fn+right": "move to the end of the document without the insertion point",
    "fn+up": "scroll one page up without moving the insertion point",
    pageup: "scroll one page up without moving the insertion point",
    "fn+down": "scroll one page down without moving the insertion point",
    pagedown: "scroll one page down without moving the insertion point",
    "alt+pageup": "scroll up one page with the insertion point",
    "ctrl+v": "scroll down one page with the insertion point",
    "alt+pagedown": "scroll down one page with the insertion point",
    "ctrl+cmd+g": "go to a certain page",
    "alt+cmd+t": "show or hide the toolbar",
    "cmd+drag": "rearrange a toolbar item",
    "alt+cmd+i": "show or hide the sidebar (right side)",
    "ctrl+`": "open the next sidebar tab",
    "shift+ctrl+`": "open the previous sidebar tab",
    "shift+cmd+t": "show or hide the tab bar",
    "cmd+r": "show or hide the ruler",
    "shift+cmd+c": "show the Colors window",
    "shift+cmd+l": "show or hide layout boundaries",
    "shift+cmd+i": "show formatting characters",
  },
} as AppParams;

export default app;
