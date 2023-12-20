const app = {
  id: "sublime",
  name: "Sublime Text",
  icon: "/app-icons/sublime.png",
  homepage: "https://www.sublimetext.com/",
  description:
    "Sublime Text is a shareware text and source code editor, natively supporting many programming languages and markup languages. Users can customize it with themes and expand its functionality with plugins, typically community-built and maintained under free-software licenses.",
  globals: {},
  shortcuts: {
    "cmdOrCtrl+L": "select the line",
    "cmdOrCtrl+X": "cut the line",
    "cmdOrCtrl+D": "select the word",
    "cmdOrCtrl+M": "go to the matching parenthesis",
    "cmdOrCtrl+Enter": "insert the line after",
    "Shift+cmdOrCtrl+Enter": "insert the line before",
    "Shift+cmdOrCtrl+M":
      "This shortcut key is used to select all the content of the current parenthesis",
    "Shift+cmdOrCtrl+UP": "move the line or selection in the up direction",
    "Shift+cmdOrCtrl+Down": "move the line or selection in down",
    "Alt+F2": "select all bookmarks",
    F2: "select the next bookmark",
    "Shift+F2": "select the previous bookmark",
    "cmdOrCtrl+F2": "toggle the bookmark",
    "cmdOrCtrl+U": "undo the previously performed action",
    "cmdOrCtrl+Y": "redo the previously performed action",
    "cmdOrCtrl+J": "join the line below to the end of the current line",
    "cmdOrCtrl+/": "add or remove the comment on the current line",
    "cmdOrCtrl+]": "add indent on the current line",
    "cmdOrCtrl+[": "remove indent on the current line",
    "Shift+cmdOrCtrl+V": "paste and indent correctly",
    "Shift+cmdOrCtrl+/": "block the comments on the current selection",
    "Shift+cmdOrCtrl+D": "create duplicate lines",
    "cmdOrCtrl+Space": "select the next autocomplete suggestions",
    "cmdOrCtrl+G": "go to the line in the current file",
    "cmdOrCtrl+;": "goto word in the current file",
    "cmdOrCtrl+R": "go to a symbol",
    "cmdOrCtrl+P": "open the file by name quickly",
    "cmdOrCtrl+F": "find the word",
    "Shift+cmdOrCtrl+F": "find the word in the files",
    "Shift+F3": "find the previous",
    F3: "find the next",
    "cmdOrCtrl+H": "replace the selected word with a specified word",
    "Shift+Alt+1": "revert the view to a single column",
    "Shift+Alt+2": "split the view into two columns",
    "Shift+Alt+5": "set the view to the grid",
    "Shift+cmdOrCtrl+2": "move files to group 2",
    "cmdOrCtrl+2": "jump to group 2",
    "cmdOrCtrl+Backspace": "delete the word in the backward direction",
    "cmdOrCtrl+Del": "delete the word in the forwarding direction",
    "Shift+cmdOrCtrl+K": "delete the entire line",
    "Shift+cmdOrCtrl+[": "fold the code",
    "Shift+cmdOrCtrl+]": "unfold the code",
    "Shift+cmdOrCtrl+L": "split the selection into lines",
    "Alt+cmdOrCtrl+UP": "add a new line above with cursor",
    "Alt+cmdOrCtrl+Down": "add a new line below with the cursor",
  },
};

export default app;
