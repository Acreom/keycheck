const app = {
  id: "atom",
  name: "Atom",
  icon: "/app-icons/atom.png",
  homepage: "https://www.atom.io",
  description:
    "Atom is free and open source text editor created by GitHub. It is no longer developed and maintained.",
  globals: {},
  shortcuts: {
    "cmdorctrl+,": "opens the preferences/settings view",
    "shift+cmdorctrl+p": "opens & closes the command palette",
    "cmdorctrl+p": "opens the fuzzy finder palette for file search",
    "cmdorctrl+t": "opens the fuzzy finder palette for file search",
    "cmdorctrl+b": "browses tabs within the window",
    "alt+cmd+left": "cycles left through open tabs (in the active pane)",
    "ctrl+pgup": "cycles left through open tabs (in the active pane)",
    "alt+cmd+right": "cycles right through open tabs (in the active pane)",
    "ctrl+pgdn": "cycles right through open tabs (in the active pane)",
    "cmdorctrl+shift+l": "selects the language the file is in",
    "cmdorctrl+shift+m": "previews the file in the markdown format",
    "cmdorctrl+.":
      "shows what keybindings the pressed key combination resolves to",
    "cmdorctrl+k+b": "toggles atom's file tree view",
    "cmdorctrl+k+\\": "toggles atom's file tree view",
    "ctrl+alt+cmd+l": "reloads the editor",
    "ctrl+alt+r": "reloads the editor",
    "ctrl+shift+o": "opens up a http or https link",
    "alt+meta+i": "opens up the chrome developer tools/console",
    "ctrl+alt+i": "opens up the chrome developer tools/console",
    "alt+shift+s": "shows the snippets available to atom",
    "cmdorctrl+n": "opens an empty file in a new tab",
    "shift+cmdorctrl+n": "opens a new editor window",
    "cmdorctrl+o": "shows the open file dialog",
    "cmdorctrl+shift+o": "shows the open folder dialog",
    "cmdorctrl+s": "saves the currently active file",
    "shift+cmdorctrl+s":
      "saves the currently active file under a different name",
    "alt+cmd+s": "saves all changed files",
    "cmdorctrl+w": "closes the currently active tab",
    "shift+cmdorctrl+w": "closes the currently active editor window",
    "cmdorctrl+k+up": "splits the currently active tab up",
    "cmdorctrl+k+down": "splits the currently active tab down",
    "cmdorctrl+k+left": "splits the currently active tab left",
    "cmdorctrl+k+right": "splits the currently active tab right",
    "ctrl+cmd+f": "toggle full screen window",
    f11: "toggle full screen window",
    "shift+cmdorctrl+d": "duplicates the line of the current cursor position",
    "ctrl+shift+k": "deletes the current line",
    "ctrl+cmd+up":
      "moves the contents of the current cursor position up one line",
    "ctrl+up": "moves the contents of the current cursor position up one line",
    "ctrl+cmd+down":
      "moves the contents of the current cursor position down one line",
    "ctrl+down":
      "moves the contents of the current cursor position down one line",
    "cmdorctrl+f": "opens up the find/replace panel",
    "cmd+g":
      "toggles forward through the results of the current buffer in the file while the find/replace panel is active",
    f3: "toggles forward through the results of the current buffer in the file while the find/replace panel is active",
    "shift+cmd+g":
      "toggles backward through the results of the current buffer in the file while the find/replace panel is active",
    "shift+f3":
      "toggles backward through the results of the current buffer in the file while the find/replace panel is active",
    "shift+cmdorctrl+f": "opens the find in project panel",
    "ctrl+g": "opens the go to line panel",
    "ctrl+m":
      "the cursor goes to the matching top bracket that the cursor is encapsulated in",
    "cmdorctrl+l":
      "selects the entire line the cursor's current position is in",
    "cmdorctrl+/":
      "toggles the selected text into a comment of the current grammar",
    "ctrl+shift+up":
      "allows to select multiple rows, where the same edit will be applied",
    "ctrl+shift+down":
      "allows to select multiple rows, where the same edit will be applied",
    "ctrl+alt+up":
      "allows to select multiple rows, where the same edit will be applied",
    "ctrl+alt+down":
      "allows to select multiple rows, where the same edit will be applied",
    "cmdorctrl+d": "selects the next same word as currently selected",
    "cmdorctrl+u": "undoes the previous selection, like from select same words",
    "cmd+ctrl+g": "selects all the matching words at once",
    "alt+f3": "selects all the matching words at once",
    "cmdorctrl+r":
      "opens a palette that lists all the symbols (or functions) in your current file",
    "ctrl+space": "show available auto-completions",
    "alt+cmdorctrl+[": "fold sections of code",
    "alt+cmdorctrl+]": "unfold sections of code",
  },
};

export default app;
