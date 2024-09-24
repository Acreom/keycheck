import { AppParams } from "~/types";

const app = {
  id: "vim",
  name: "Vim",
  icon: "/app-icons/vim.png",
  homepage: "https://www.vim.org/",
  description:
    "Vim is a highly configurable text editor built to enable efficient text editing.",
  globals: {},
  shortcuts: {
    h: "left",
    j: "down",
    k: "up",
    l: "right",
    w: "next word",
    b: "previous word",
    "shift+w": "next word (space separated)",
    "shift+b": "previous word (space separated)",
    e: "next end of word",
    "g+e": "previous end of word",
    "0": "start of line",
    $: "end of line",
    i: "start insert mode at cursor",
    a: "start insert mode after cursor",
    "shift+i": "start insert mode at the beginning of the line",
    "shift+a": "start insert mode at the end of the line",
    o: "add blank line below current line / move to other end of marked area",
    "shift+o":
      "add blank line above current line / move to other corner of block",
    esc: "exit insert mode",
    d: "delete / deletes from the cursor to the movement location",
    "d+d": "delete line",
    c: "delete, then start insert mode / deletes from the cursor to the movement location, then starts insert mode",
    "c+c": "delete line, then start insert mode",
    y: "copy from the cursor to the movement location",
    ">": "indent one level",
    "<": "unindent one level",
    v: "start visual mode",
    "shift+v": "start linewise visual mode",
    "ctrl+v": "start visual block mode",
    "y+y": "yank (copy) a line",
    p: "paste after cursor",
    "shift+p": "paste before cursor",
    "/": "search for pattern",
    "?": "search backward for pattern",
    n: "repeat search in same direction",
    "shift+n": "repeat search in opposite direction",
    u: "undo",
    "ctrl+r": "redo",
    "ctrl+d": "move down half a page",
    "ctrl+u": "move up half a page",
    "}": "go forward by paragraph",
    "{": "go backward by paragraph",
    "g+g": "go to the top of the page",
    "shift+g": "go the bottom of the page",
    "ctrl+e": "scroll down one line",
    "ctrl+y": "scroll up one line",
    ";": "repeat search forwards",
    ",": "repeat search backwards",
    "shift+j": "join line below to the current one",
    "g+t": "go to the next tab",
    "shift+g+t": "go to the previous tab",
    "ctrl+w+s": "split windows horizontally",
    "ctrl+w+v": "split windows vertically",
    "ctrl+w+w": "switch between windows",
    "ctrl+w+q": "quit a window",
    plus: "go back to the previous jump location",
    ".": "repeat last command",
    "ctrl+r+0": "inserts the last yanked text",
    "g+v": "reselect last selected block of text",
    "%": "jumps between matching `()` or `{}`",
    '"+y': "copy a selection to the system clipboard",
    '"+p': "paste from the system clipboard",
  },
} as AppParams;

export default app;
