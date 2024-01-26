const app = {
  id: "filezilla",
  name: "FileZilla",
  icon: "/app-icons/filezilla.png",
  homepage: "https://filezilla-project.org/",
  description:
    "FileZilla is a free software, cross-platform FTP application, consisting of FileZilla Client and FileZilla Server.",
  globals: {},
  shortcuts: {
    f2: "rename selected file",
    f3: "search remote files",
    f5: "refreshes local and remote file and folder views",
    tab: "switches to the next view",
    "alt+down":
      "transfers the currently selected item to an item of the same name in the other pane",
    "alt+up":
      "navigates up one line in a tree view, navigates to parent folder in file view",
    "cmdorctrl+b": "add bookmark",
    "cmdorctrl+shift+b": "manage bookmarks",
    "cmdorctrl+c": "stops the current operation",
    "cmdorctrl+d": "disconnects from server",
    "cmdorctrl+e": "show files currently being edited",
    "cmdorctrl+i": "directory listing filters",
    "cmdorctrl+m": "manual transfer",
    "cmdorctrl+shift+n": "create a new directory",
    "cmdorctrl+o": "enable directory comparison",
    "cmdorctrl+p": "process queue",
    "cmdorctrl+q": "exit",
    "cmdorctrl+r": "reconnects to server",
    "cmdorctrl+s": "opens the site manager",
    "cmdorctrl+t": "opens a new tab",
    "cmdorctrl+u": "preserve the timestamps of transferred files",
    "cmdorctrl+y": "toggle synchronized browsing",
    "cmdorctrl+w": "close tab",
    enter:
      "transfer the currently selected item if it is a file, or expands if it is a directory",
    "cmdorctrl+pgup": "switches to the next tab",
    "cmdorctrl+pgdn": "switches to the previous tab",
    up: "moves up one item in the current view",
    down: "moves down one item in the current view",
    left: "nothing in a files view, up on level in a tree view",
    right:
      "down one level in a tree view if there are subfolders, nothing if there are none",
  },
};

export default app;
