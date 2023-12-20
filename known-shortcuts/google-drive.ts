const app = {
  id: "google-drive",
  name: "Google Drive",
  icon: "/app-icons/google-drive.png",
  homepage: "https://drive.google.com",
  description:
    "Google Drive is a file storage and synchronization service, allowing users to store files in the cloud (on Google's servers), synchronize files across devices, and share files.",
  globals: {},
  shortcuts: {
    "g+n": "go to navigation panel (folders list)",
    "g+l": "go to items view",
    v: "switch between grid and list in items view",
    "g+d": "go to details pane",
    "g+t": "go to top of application (google bar)",
    "g+a": "go to download status",
    "g+u": "go to upload status",
    d: "show or hide details pane",
    i: "show or hide activity pane",
    x: "select or deselect item",
    j: "select next item down",
    k: "select next item up",
    h: "select next item to the left",
    l: "select next item to the right",
    down: "select next item down",
    up: "select next item up",
    left: "select next item to the left",
    right: "select next item to the right",
    "shift+down": "extend selection down",
    "shift+up": "extend selection up",
    "shift+left": "extend selection left",
    "shift+right": "extend selection right",
    "shift+a": "select all visible items",
    "shift+n": "clear all selections",
    "cmdorctrl+down": "move down without changing selection",
    "cmdorctrl+up": "move up without changing selection",
    "cmdorctrl+left": "move left without changing selection",
    "cmdorctrl+right": "move right without changing selection",
    enter: "open selected item",
    n: "rename selected item",
    ".": "share selected items",
    z: "move selected items to new folder",
    s: "star or unstar selected items",
    "shift+z": "add selected items to an additional folder",
    delete: "remove selected items",
    "cmdorctrl+z": "undo last action",
    "cmdorctrl+shift+z": "redo last undone action",
    "shift+t": "document",
    "shift+p": "presentation",
    "shift+s": "spreadsheet",
    "shift+d": "drawing",
    "shift+f": "folder",
    "shift+o": "form",
    c: "create menu",
    a: "more actions menu",
    f: "current folder actions menu",
    r: "sort menu",
    t: "settings menu",
    "shift+/": "display keyboard shortcuts list",
    "q+q": "choose next visual density",
    "cmdorctrl+f": "find/find next",
    "cmdorctrl+p": "print",
    m: "show last message",
    "/": "search your drive",
    esc: "close",
    space: "play/pause",
    "=": "zoom in",
    plus: "zoom in",
    minus: "zoom out",
  },
};

export default app;
