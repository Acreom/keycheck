import { AppParams } from "~/types";

const app = {
  id: "vscode",
  name: "VSCode",
  icon: "/app-icons/vscode.png",
  homepage: "https://code.visualstudio.com/",
  description:
    "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor, including support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
  globals: {},
  shortcuts: {
    "cmdorctrl+shift+p": "show command palette",
    "cmdorctrl+p": "quick open, go to file",
    "cmdorctrl+shift+n": "new window/instance",
    "cmdorctrl+shift+w": "close window/instance",
    "cmdorctrl+,": "user settings",
    "cmdorctrl+k+s": "keyboard shortcuts",
    "cmdorctrl+x": "cut line (empty selection)",
    "cmdorctrl+c": "copy line (empty selection) / copy selection",
    "alt+up": "move line up",
    "alt+down": "move line down",
    "shift+alt+up": "copy line up",
    "shift+alt+down": "copy line down",
    "cmdorctrl+shift+k": "delete line",
    "cmdorctrl+enter": "insert line below",
    "cmdorctrl+shift+enter": "insert line above",
    "cmdorctrl+shift+\\": "jump to matching bracket",
    "cmdorctrl+]": "indent line",
    "cmdorctrl+[": "outdent line",
    home: "go to beginning of line",
    end: "go to end of line",
    "cmdorctrl+home": "go to beginning of file / scroll to top",
    "cmdorctrl+end": "go to end of file / scroll to bottom",
    "cmdorctrl+up": "scroll (line) up",
    "cmdorctrl+down": "scroll (line) down",
    "alt+pgup": "scroll page up",
    "alt+pgdown": "scroll page down",
    "cmdorctrl+shift+[": "fold (collapse) region",
    "cmdorctrl+shift+]": "unfold (uncollapse) region",
    "cmdorctrl+k+[": "fold (collapse) all subregions",
    "cmdorctrl+k+]": "unfold (uncollapse) all subregions",
    "cmdorctrl+k+0": "fold (collapse) all regions",
    "cmdorctrl+k+j": "unfold (uncollapse) all regions",
    "cmdorctrl+k+c": "add line comment",
    "cmdorctrl+k+u": "remove line comment",
    "cmdorctrl+/": "toggle line comment",
    "shift+alt+a": "toggle block comment",
    "alt+z": "toggle word wrap",
    "cmdorctrl+t": "show all symbols",
    "cmdorctrl+g": "go to line",
    "cmdorctrl+shift+o": "go to symbol",
    "cmdorctrl+shift+m": "show problems panel",
    f8: "go to next error or warning",
    "shift+f8": "go to previous error or warning",
    "cmdorctrl+shift+tab": "navigate editor group history",
    "alt+left": "go back",
    "alt+right": "go forward",
    "cmdorctrl+m": "toggle tab moves focus",
    "cmdorctrl+f": "find",
    "cmdorctrl+h": "replace",
    f3: "find next",
    "shift+f3": "find previous",
    "alt+enter": "select all occurrences of find match",
    "cmdorctrl+d": "add selection to next find match",
    "cmdorctrl+k+d": "move last selection to next find match",
    "alt+c": "toggle case-sensitive",
    "alt+r": "toggle regex",
    "alt+w": "toggle whole word",
    "cmdorctrl+alt+up": "insert cursor above",
    "cmdorctrl+alt+down": "insert cursor below",
    "cmdorctrl+u": "undo last cursor operation",
    "shift+alt+i": "insert cursor at end of each line selected",
    "cmdorctrl+i": "select current line",
    "cmdorctrl+shift+l": "select all occurrences of current selection",
    "cmdorctrl+f2": "select all occurrences of current word",
    "shift+alt+right": "expand selection",
    "shift+alt+left": "shrink selection",
    "cmdorctrl+shift+alt+up": "column (box) selection",
    "cmdorctrl+shift+alt+down": "column (box) selection",
    "cmdorctrl+shift+alt+left": "column (box) selection",
    "cmdorctrl+shift+alt+right": "column (box) selection",
    "cmdorctrl+shift+alt+pgup": "column (box) selection page up",
    "cmdorctrl+shift+alt+pgdown": "column (box) selection page down",
    "cmdorctrl+space": "trigger suggestion",
    "cmdorctrl+shift+space": "trigger parameter hints",
    "shift+alt+f": "format document",
    "cmdorctrl+k+f": "format selection",
    f12: "go to definition",
    "alt+f12": "peek definition",
    "cmdorctrl+.": "quick fix",
    "shift+f12": "show references",
    f2: "rename symbol",
    "cmdorctrl+k+x": "trim trailing whitespace",
    "cmdorctrl+f4": "close editor",
    "cmdorctrl+w": "close editor",
    "cmdorctrl+\\": "split editor",
    "cmdorctrl+1": "focus into 1st editor group",
    "cmdorctrl+2": "focus into 2nd editor group",
    "cmdorctrl+3": "focus into 3rd editor group",
    "cmdorctrl+k+left": "focus into previous editor group",
    "cmdorctrl+k+right": "focus into next editor group",
    "cmdorctrl+shift+pgup": "move editor left",
    "cmdorctrl+shift+pgdown": "move editor right",
    "cmdorctrl+n": "new file",
    "cmdorctrl+o": "open file",
    "cmdorctrl+s": "save",
    "cmdorctrl+shift+s": "save as",
    "cmdorctrl+k+w": "close all",
    "cmdorctrl+shift+t": "reopen closed editor",
    "cmdorctrl+tab": "open next",
    f11: "step into / toggle full screen",
    "shift+alt+0": "toggle editor layout (horizontal/vertical)",
    "cmdorctrl+=": "zoom in",
    "cmdorctrl+plus": "zoom out",
    "cmdorctrl+b": "toggle sidebar visibility",
    "cmdorctrl+shift+e": "show explorer/toggle focus",
    "cmdorctrl+shift+f": "show search",
    "cmdorctrl+shift+g": "show source control",
    "cmdorctrl+shift+d": "show debug",
    "cmdorctrl+shift+x": "show extensions",
    "cmdorctrl+shift+j": "toggle search details",
    "cmdorctrl+shift+u": "show output panel",
    "cmdorctrl+shift+v": "open markdown preview",
    f9: "toggle breakpoint",
    f5: "start/continue",
    "shift+f5": "stop",
    "shift+f11": "step out",
    f10: "step over",
    "cmdorctrl+k+i": "show hover",
    "cmdorctrl+`": "show integrated terminal",
    "cmdorctrl+shift+`": "create new terminal",
    "cmdorctrl+v": "paste into active terminal",
    "shift+pgup": "scroll page up",
    "shift+pgdown": "scroll page down",
  },
} as AppParams;

export default app;
