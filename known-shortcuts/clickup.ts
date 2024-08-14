import { AppParams } from "~/types";

const app = {
  id: "clickup",
  name: "ClickUp",
  icon: "/app-icons/clickup.png",
  homepage: "https://clickup.com",
  description:
    "ClickUp is an all-in-one productivity platform that works as an ideal place for teams to come together, brainstorm, plan, and collaborate on everything from process docs to product designs. ",
  globals: {},
  shortcuts: {
    Esc: "Close a task or window",
    s: "Command Center",
    "CmdOrCtrl+K":
      "Open the Command Center modal to search for items in ClickUp",
    "CmdOrCtrl+B": "Open your Billing page",
    h: "Home",
    Space: "Notifications",
    p: "Open Notepad",
    r: "Create a reminder",
    q: "Show or hide Sidebar",
    t: "Create a task",
    "@": "mention a person",
    "@+@": "mention a task",
    "@+@+@": "mention a Doc",
    "CmdOrCtrl+A": "Select all characters in a code block",
    up: "Edit your most recent comment",
    ":": "Open the emoji menu",
    "CmdOrCtrl+Shift+M": "Create a comment from your selected text.",
    "CmdOrCtrl+alt+T": "Create a task from your selected text",
    "CmdOrCtrl+Shift+H": "Highlight a text block.",
    "CmdOrCtrl+D": "Duplicate a text block",
    "CmdOrCtrl+Shift+L": "Align text to the left",
    "CmdOrCtrl+Shift+R": "Align text to the right",
    "CmdOrCtrl+Shift+C": "Use inline code",
    "CmdOrCtrl+Shift+9": "Create a bulleted list",
    "CmdOrCtrl+Shift+8": "Create a checklist",
    "CmdOrCtrl+Shift+7": "Create a numbered list",
    "CmdOrCtrl+Shift+1": "Create heading 1",
    "CmdOrCtrl+Shift+2": "Create heading 2",
    "CmdOrCtrl+Shift+3": "Create heading 3",
    "CmdOrCtrl+Shift+4": "Create heading 4",
  },
} as AppParams;

export default app;
