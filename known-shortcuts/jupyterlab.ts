import { AppParams } from "~/types";

const app = {
  id: "jupyter",
  name: "JuptyerLab",
  icon: "/app-icons/jupyter.png",
  homepage: "https://jupyter.org/",
  description:
    "JupyterLab is a web-based interactive development environment for Jupyter notebooks, code, and data.",
  globals: {},
  shortcuts: {
    "shift+enter": "run selected cell or cells",
    "cmdorctrl+b": "toggle hide/show left sidebar",
    "cmdorctrl+s": "save and checkpoint",
    "cmdorctrl+shift+s": "save as",
    "cmdorctrl+f": "find",
    enter: "enter edit mode in the active cell",
    a: "insert a new cell above the active cell",
    b: "insert a new cell below the active cell",
    m: "make the active cell a markdown cell",
    y: "make the active cell a code cell",
    "shift+up": "select the current cell and the cell above",
    "shift+down": "select the current cell and the cell below",
    "cmdorctrl+a": "select all cells",
    x: "cut the selected cell or cells",
    c: "copy the selected cell or cells",
    v: "paste the cell(s) which were copied or cut most recently",
    "shift+m": "merge multiple selected cells into one cell",
    "d+d": "delete the active cell",
    "0+0": "restart the kernel",
    z: "undo most recent command mode action",
    esc: "enter command mode",
    tab: "code completion or indent",
    "shift+tab": "tooltip help",
    "cmdorctrl+shift+minus": "split the active cell at the cursor",
    "cmdorctrl+]": "indent",
    "cmdorctrl+[": "dedent",
    "cmdorctrl+/": "toggle comment",
  },
} as AppParams;

export default app;
