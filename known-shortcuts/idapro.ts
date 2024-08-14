import { AppParams } from "~/types";

const app = {
  id: "idapro",
  name: "IDA Pro",
  icon: "/app-icons/idapro.png",
  homepage: "https://www.hex-rays.com/products/ida/",
  description:
    "IDA is a Windows, Linux or Mac OS X hosted multi-processor disassembler and debugger that offers so many features it is hard to describe them all.",
  globals: {},
  shortcuts: {
    enter: "jump to operand",
    "alt+enter": "jump in a new window",
    esc: "jump to previous position",
    tab: "jump to pseudocode",
    g: "go to (jump to address)",
    "cmdorctrl+l": "jump by name",
    "cmdorctrl+p": "jump to function",
    "cmdorctrl+s": "jump to segment",
    "cmdorctrl+g": "jump to segment register",
    "cmdorctrl+q": "jump to problem",
    "cmdorctrl+x": "list cross references to",
    "cmdorctrl+j": "list cross references from",
    x: "jump to xref of operand",
    "cmdorctrl+e": "jump to entry point",
    "alt+m": "mark position",
    "cmdorctrl+m": "jump to marked position",
    f2: "set breakpoint",
  },
} as AppParams;

export default app;
