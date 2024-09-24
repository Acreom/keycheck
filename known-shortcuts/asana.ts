import { AppParams } from "~/types";

const app = {
  id: "asana",
  name: "Asana",
  icon: "/app-icons/asana.png",
  homepage: "https://asana.com",
  description:
    "Asana is a web and mobile application designed to help teams organize, track, and manage their work.",
  globals: {},
  shortcuts: {
    "tab+y": "mark as today in your my tasks",
    "tab+u": "mark as upcoming in your my tasks",
    "tab+l": "mark as later in your my tasks",
    k: "move up/down",
    j: "move up/down",
    h: "jump to inbox tab",
    s: "jump to archive tab",
    f: "follow or unfollow",
    i: "archive",
    u: "move to inbox",
    enter: "new task",
    "tab+backspace": "delete selected task(s)",
    backspace: "delete current task (when task name is empty)",
    "cmdorctrl+enter": "complete selected task(s)",
    "cmdorctrl+up": "move up",
    "cmdorctrl+down": "move down",
    "cmdorctrl+shift+up": "jump up to the next section",
    "cmdorctrl+shift+down": "jump down to the next section",
    "cmdorctrl+c": "copy selected tasks",
    "cmdorctrl+v": "paste tasks (one per line)",
    "tab+m": "assign to me",
    "tab+h": "like a selected task",
    ":": "create a section (at the end of a task name)",
    "tab+z": "navigate to my tasks",
    "tab+i": "navigate to inbox",
    "tab+c": "comment on selected task",
    "tab+a": "assign selected task",
    "tab+d": "set due date",
    "tab+f": "add follower",
    "tab+t": "add a tag to the task",
    "tab+s": "focus subtasks",
    "tab+/": "search for a project, tag, person, or task",
    up: "change selection",
    down: "change selection",
    "shift+up": "select range",
    "shift+down": "select range",
    "cmdorctrl+/": "show keyboard shortcuts",
    tab: "expand the right pane",
    esc: "collapse the right pane",
    "tab+x": "enter focus mode",
    "tab+q": "quick add",
    "tab+enter": "post comment (from comment field)",
    "tab+b": "what it sounds like",
  },
} as AppParams;

export default app;
