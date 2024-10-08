import { AppParams } from "~/types";

const app = {
  id: "notion",
  name: "Notion",
  icon: "/app-icons/notion.png",
  homepage: "https://notion.so",
  description:
    "Notion is a versatile software application that serves as an all-in-one workspace and productivity tool. It's designed to help individuals and teams organize, collaborate, and manage various tasks, projects, and information in a unified digital environment. Notion provides a flexible and customizable platform that can adapt to a wide range of personal and professional use cases.",
  globals: {},
  shortcuts: {
    "cmdOrCtrl+N": "Create a new page (desktop only)",
    "cmdOrCtrl+Shift+N": "Open a new Notion window",
    "cmdOrCtrl+P": "Open search",
    "cmdOrCtrl+[": "Go back",
    "cmdOrCtrl+]": "Go forward",
    "cmdOrCtrl+Shift+L": "Switch dark mode / light mode",
    "cmdOrCtrl+right": "Select a different block",
    "cmdOrCtrl+Shift+T": "Expand or close all toggles in a toggle list",
    "cmdOrCtrl+Alt+T": "Expand or close all toggles in a toggle list",
    "cmdOrCtrl+Shift+H": "Apply the last color or highlight color you used",
    "cmdOrCtrl+Enter": "Modify the current block you’re in",
    "cmdOrCtrl+up": "Select block you’re currently in",
    "cmdOrCtrl+A": "Select the block your cursor is in",
    "cmdOrCtrl+Space": "Open selected image fullscreen",
    "cmdOrCtrl+Backspace": "Delete selected blocks",
    "cmdOrCtrl+Delete": "Delete selected blocks",
    "cmdOrCtrl+D": "Duplicate the block(s) you’ve selected",
    "cmdOrCtrl+U": "Underline (when text selected)",
    "cmdOrCtrl+K": "Add a link (when text selected)",
    "cmdOrCtrl+V": "Paste over a link (when text selected)",
    "cmdOrCtrl+E": "Inline code (when text selected)",
    "cmdOrCtrl+Tab": "Indent / nest content",
    "cmdOrCtrl+Shift+Tab": "Un-indent / Un-nest content",
    "shift+enter": "Create a line break within a block of text",
    "cmdOrCtrl+Shift+A": "Apply the last color or highlight color you used",
    "cmdOrCtrl+Shift+M": "Create a comment",
    "cmdOrCtrl+/":
      "Select multiple cards to edit them all at once (board view)",
    "cmdOrCtrl+shift+up": "Move a selected block around",
    "cmdOrCtrl+shift+right": "Move a selected block around",
    "cmdOrCtrl+shift+down": "Move a selected block around",
    "cmdOrCtrl+shift+left": "Move a selected block around",
    plus: "Create a sub-page, page somewhere else or link a page",
    "cmdOrCtrl+Shift+P": "Move page to",
  },
} as AppParams;

export default app;
