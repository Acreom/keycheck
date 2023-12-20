const app = {
  id: "nano",
  name: "GNU nano",
  icon: "/app-icons/nano.png",
  homepage: "https://www.nano-editor.org/",
  description:
    "GNU nano is a text editor for Unix-like computing systems or operating environments using a command line interface. nano is licensed under the GNU General Public License (GPL).",
  globals: {},
  shortcuts: {
    "ctrl+s": "save current file",
    "ctrl+o": "offer to write file ('save as')",
    "ctrl+r": "insert a file into current one",
    "ctrl+x": "close buffer, exit from nano",
    "ctrl+k": "cut current line into cutbuffer",
    "alt+6": "copy current line into cutbuffer",
    "ctrl+u": "paste contents of cutbuffer",
    "alt+t": "cut until end of buffer",
    "ctrl+]": "complete current word",
    "alt+3": "comment/uncomment line/region",
    "alt+u": "undo last action",
    "alt+e": "redo last undone action",
    "ctrl+q": "start backward search",
    "ctrl+w": "start forward search",
    "alt+q": "find next occurrence backward",
    "alt+w": "find next occurrence forward",
    "alt+r": "start a replacing session",
    "ctrl+h": "delete character before cursor",
    "ctrl+d": "delete character under cursor",
    "alt+backspace": "delete word to the left",
    "ctrl+delete": "delete word to the right",
    "alt+delete": "delete current line",
    "ctrl+t": "execute some command",
    "ctrl+j": "justify paragraph or region",
    "alt+j": "justify entire buffer",
    "alt+b": "run a syntax check",
    "alt+f": "run a formatter/fixer/arranger",
    "alt+:": "start/stop recording of macro",
    "alt+;": "replay macro",
    "ctrl+b": "one character backward",
    "ctrl+f": "one character forward",
    "ctrl+left": "one word backward",
    "ctrl+right": "one word forward",
    "ctrl+a": "to start of line",
    "ctrl+e": "to end of line",
    "ctrl+p": "one line up",
    "ctrl+n": "one line down",
    "ctrl+up": "to previous block",
    "ctrl+down": "to next block",
    "ctrl+y": "one page up",
    "ctrl+v": "one page down",
    "alt+\\": "to top of buffer",
    "alt+/": "to end of buffer",
    "alt+g": "go to specified line",
    "alt+]": "go to complementary bracket",
    "alt+up": "scroll viewport up",
    "alt+down": "scroll viewport down",
    "alt+<": "switch to preceding buffer",
    "alt+>": "switch to succeeding buffer",
    "ctrl+c": "report cursor position",
    "alt+d": "report line/word/character count",
    "ctrl+g": "display help text",
    "alt+a": "turn the mark on/off",
    tab: "indent marked region",
    "shift+tab": "unindent marked region",
    "alt+v": "enter next keystroke verbatim",
    "alt+n": "turn line numbers on/off",
    "alt+p": "turn visible whitespace on/off",
    "alt+x": "hide or unhide the help lines",
    "ctrl+l": "refresh the screen",
  },
};

export default app;