import { AppParams } from "~/types";

const app = {
  id: "adobe-xd",
  name: "Adobe XD",
  icon: "/app-icons/adobe-xd.png",
  homepage: "https://www.adobe.com/products/xd.html",
  description:
    "Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc.",
  globals: {},
  shortcuts: {
    "cmdorctrl+z": "undo",
    "cmdorctrl+shift+z": "redo",
    "cmdorctrl+x": "cut",
    "cmdorctrl+c": "copy",
    "cmdorctrl+v": "paste",
    "cmdorctrl+alt+v":
      "paste appearance (design mode) or paste interaction (prototype mode)",
    "cmdorctrl+d": "duplicate",
    delete: "delete",
    "cmdorctrl+a": "select all / see all connections in prototype mode",
    "cmdorctrl+shift+a": "deselect all",
    "cmdorctrl+n": "new",
    "cmdorctrl+shift+o": "open...",
    "alt+f4": "close",
    "cmdorctrl+s": "save...",
    "cmdorctrl+shift+s": "save as...",
    "cmdorctrl+shift+e": "export batch / share prototype online",
    "cmdorctrl+e": "export selected",
    "cmdorctrl+shift+i": "import",
    p: "switch to pen tool / pen",
    alt: "asymmetric control point / from center",
    shift: "snap control point angle / constrain",
    "cmdorctrl+alt+u": "add",
    "cmdorctrl+alt+s": "subtract",
    "cmdorctrl+alt+i": "intersect",
    "cmdorctrl+alt+x": "exclude overlap",
    "cmdorctrl+8": "convert to path",
    "cmdorctrl+g": "group layers",
    "cmdorctrl+shift+g": "ungroup layers",
    "cmdorctrl+k": "make component",
    "cmdorctrl+l": "lock/unlock layer",
    "cmdorctrl+,": "hide/show layer",
    "cmdorctrl+shift+m": "mask with shape",
    "cmdorctrl+r": "make repeat grid",
    "1": "change layer opacity",
    "2": "change layer opacity",
    "3": "change layer opacity",
    "4": "change layer opacity",
    "5": "change layer opacity",
    "6": "change layer opacity",
    "7": "change layer opacity",
    "8": "change layer opacity",
    "9": "change layer opacity",
    "cmdorctrl+;": "show/hide artboard guides",
    "cmdorctrl+shift+;": "lock artboard guides",
    "cmdorctrl+shift+left": "left",
    "shift+c": "center (horizontally)",
    "cmdorctrl+shift+right": "right",
    "cmdorctrl+shift+up": "top",
    "shift+m": "middle (vertically)",
    "cmdorctrl+shift+down": "bottom",
    "cmdorctrl+shift+]": "bring to front",
    "cmdorctrl+]": "bring forward",
    "cmdorctrl+[": "send backward",
    "cmdorctrl+shift+[": "send to back",
    "cmdorctrl+shift+h": "horizontal",
    "cmdorctrl+shift+v": "vertical",
    "cmdorctrl+b": "bold",
    "cmdorctrl+i": "italic",
    "cmdorctrl+shift+.": "increase font size",
    "cmdorctrl+shift+,": "decrease font size",
    enter: "edit text / start editing selected vector object",
    cmdorctrl: "direct select",
    "cmdorctrl+tab": "switch between design and prototype mode",
    v: "select",
    r: "rectangle",
    e: "ellipse",
    y: "polygon",
    l: "line",
    t: "text",
    a: "artboard",
    z: "zoom",
    "cmdorctrl+3": "zoom to selection",
    i: "eyedropper",
    "cmdorctrl+plus": "zoom in",
    "cmdorctrl+minus": "zoom out",
    "cmdorctrl+0": "zoom to fit / reset zoom",
    "cmdorctrl+1": "zoom to 100%",
    "cmdorctrl+2": "zoom to 200%",
    space: "pan",
    "cmdorctrl+shift+y": "assets",
    "cmdorctrl+y": "layers",
    "cmdorctrl+shift+'": "show layout grid",
    "cmdorctrl+'": "show square grid",
    up: "increase a value in a field by 1",
    down: "decrease a value in a field by 1",
    "shift+up": "increase a value in a field by 10",
    "shift+down": "decrease a value in a field by 10",
    esc: "go from spec view to ux flow view or remove focus from artboard in ux flow view / stop editing selected vector object",
    "cmdorctrl+enter": "preview",
    left: "navigate artboards in preview or shared prototype",
    right: "navigate artboards in preview or shared prototype",
  },
} as AppParams;

export default app;
