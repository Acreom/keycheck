import { AppParams } from "~/types";

const app = {
  id: "visualstudio",
  name: "Visual Studio",
  icon: "/app-icons/visualstudio.png",
  homepage: "https://visualstudio.microsoft.com/",
  description:
    "Visual Studio is an integrated development environment (IDE) from Microsoft. It is used to develop computer programs, as well as websites, web apps, web services, and mobile apps.",
  globals: {},
  shortcuts: {
    "alt+enter": "code suggestions",
    "ctrl+shift+space": "intellisense list parameter info",
    "ctrl+space": "intellisense list members",
    f5: "start with debugging / continue execution from breakpoint",
    "ctrl+f5": "start without debugging",
    "ctrl+alt+p": "attach to process",
    "ctrl+shift+p": "reattach to process",
    f9: "add/remove breakpoint",
    "ctrl+shift+f9": "delete all breakpoints",
    f10: "step over",
    f11: "step into",
    "shift+f11": "step out",
    "alt+f10": "apply code changes",
    "shift+f5": "stop debugging",
    "ctrl+b": "build project",
    "ctrl+shift+b": "rebuild all projects",
    "ctrl+f": "search current file",
    "ctrl+shift+f": "search solution",
    "ctrl+t": "search and go to files, classes, methods",
    "ctrl+l": "cut line into clipboard",
    "ctrl+enter": "new line above the current line",
    "ctrl+alt+l": "switch focus to solution explorer",
    "ctrl+tab": "switch focus back to editor",
    f2: "rename file or directory",
    "ctrl+s": "save focused file",
    "ctrl+shift+s": "save all",
    "ctrl+shift+a": "add new item",
    "ctrl+shift+d": "create new project folder",
  },
} as AppParams;

export default app;
