const app = {
  id: "notejoy",
  name: "Notejoy",
  icon: "/app-icons/notejoy.png",
  homepage: "https://notejoy.com/",
  description: "Notejoy is a collaborative notes app for teams.",
  globals: {},
  shortcuts: {
    c: "create note",
    "cmdorctrl+n": "create note (desktop)",
    "cmdorctrl+shift+n": "new window (desktop)",
    b: "create notebook",
    "cmdorctrl+j": "quick find",
    "cmdorctrl+/": "search",
    "cmdorctrl+f": "find in page",
    down: "next note",
    up: "previous note",
    e: "edit note",
    t: "edit title",
    s: "star note",
    l: "like note",
    v: "focus view",
    "@": "archive note",
    "#": "delete note",
    d: "next notebook",
    f: "previous notebook",
    esc: "remove input focus",
    "?": "toggle shortcuts list",
    "cmdorctrl+[": "go back",
    "cmdorctrl+]": "go forward",
    "cmdorctrl+r": "reload",
    "cmdorctrl+plus": "zoom in",
    "cmdorctrl+minus": "zoom out",
    "cmdorctrl+0": "zoom to actual size",
    "cmdorctrl+p": "print",
    "cmdorctrl+1": "header 1",
    "cmdorctrl+2": "header 2",
    "cmdorctrl+3": "header 3",
    "cmdorctrl+4": "header 4",
    "cmdorctrl+5": "header 5",
    "cmdorctrl+b": "bold",
    "cmdorctrl+i": "italic",
    "cmdorctrl+u": "underline",
    "cmdorctrl+s": "strikethrough",
    "cmdorctrl+shift+y": "color",
    "cmdorctrl+y": "highlight",
    "cmdorctrl+k": "link",
    "cmdorctrl+shift+d": "date/time",
    "cmdorctrl+7": "list",
    "cmdorctrl+8": "bullet",
    "cmdorctrl+e": "checklist",
    "cmdorctrl+shift+i": "images",
    "cmdorctrl+shift+o": "video",
    "cmdorctrl+shift+u": "document",
    "cmdorctrl+shift+b": "quote",
    "cmdorctrl+shift+c": "code",
    "cmdorctrl+shift+l": "divider",
    "cmdorctrl+z": "undo",
    "cmdorctrl+shift+v": "paste w/o formatting",
    "cmdorctrl+up": "move list item up",
    "cmdorctrl+down": "move list item down",
  },
};

export default app;
