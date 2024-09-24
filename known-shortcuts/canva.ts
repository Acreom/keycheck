import { AppParams } from "~/types";

const app = {
  id: "canva",
  name: "Canva",
  icon: "/app-icons/canva.png",
  homepage: "https://www.canva.com/",
  description:
    "Canva is a graphic design platform that allows users to create social media graphics, presentations, posters and other visual content.",
  globals: {},
  shortcuts: {
    "cmdorctrl+z": "undo",
    "cmdorctrl+y": "redo",
    "cmdorctrl+s": "save",
    "cmdorctrl+a": "select all",
    t: "add text",
    r: "add rectangle",
    l: "add line",
    c: "add circle",
    "cmdorctrl+k": "add link",
    "cmdorctrl+enter": "add empty page",
    "cmdorctrl+backspace": "delete empty page",
    "cmdorctrl+f1": "navigate to toolbar",
    "cmdorctrl+f2": "skip to canvas",
    "/": "canva assistant shortcut",
    "cmdorctrl+e": "canva assistant shortcut",
    "shift+cmdorctrl+f": "open font menu",
    "cmdorctrl+b": "bold text",
    "cmdorctrl+i": "italicize text",
    "cmdorctrl+u": "underline",
    "shift+cmdorctrl+k": "uppercase text",
    "shift+cmdorctrl+l": "left align",
    "shift+cmdorctrl+c": "center align",
    "shift+cmdorctrl+r": "right align",
    "shift+cmdorctrl+j": "justify text",
    "shift+cmdorctrl+,": "decrease font size",
    "alt+cmdorctrl+down": "decrease line spacing",
    "alt+cmdorctrl+up": "increase line spacing",
    "alt+cmdorctrl+,": "decrease letter spacing",
    "cmdorctrl+shift+h": "anchor text to top / open the home page",
    "cmdorctrl+shift+m": "anchor text to middle",
    "cmdorctrl+shift+b": "anchor text to bottom",
    "cmdorctrl+shift+7": "numbered list",
    "cmdorctrl+shift+8": "bulleted list",
    "alt+cmdorctrl+c": "copy text style",
    "alt+cmdorctrl+v": "paste text style",
    "cmdorctrl+plus": "zoom in",
    "cmdorctrl+minus": "zoom out",
    "cmdorctrl+0": "zoom to actual size",
    "alt+cmdorctrl+0": "zoom to fit",
    "shift+cmdorctrl+0": "zoom to fill",
    "shift+r": "toggle rulers and guides",
    "cmdorctrl+/": "toggle sidebar",
    "alt+cmdorctrl+1": "scrolling view",
    "alt+cmdorctrl+2": "thumbnail view",
    "alt+cmdorctrl+3": "grid view",
    "alt+cmdorctrl+p": "presentation mode",
    "alt+cmdorctrl+n": "add comment",
    n: "next comment",
    "shift+n": "previous comment",
    "alt+f4": "quit the whole canva app",
    "cmdorctrl+r": "reload the whole app",
    "cmdorctrl+w": "close the current tab",
    "cmdorctrl+pgdown": "select next tab",
    "cmdorctrl+tab": "select next tab",
    "cmdorctrl+pgup": "select previous tab",
    "cmdorctrl+shift+tab": "select previous tab",
    "cmdorctrl+shift+t": "re-open last closed tab",
    "cmdorctrl+t": "create new design",
    "cmdorctrl+1": "switch tabs to focus on a design tab from 1",
    "cmdorctrl+2": "switch tabs to focus on a design tab from 2",
    "cmdorctrl+3": "switch tabs to focus on a design tab from 3",
    "cmdorctrl+4": "switch tabs to focus on a design tab from 4",
    "cmdorctrl+5":
      "switch tabs to focus on a design tab from 5 / focus on comment in selection",
    "cmdorctrl+6": "switch tabs to focus on a design tab from 6",
    "cmdorctrl+7": "switch tabs to focus on a design tab from 7",
    "cmdorctrl+8": "switch tabs to focus on a design tab from 8",
    "cmdorctrl+9": "switch to the last tab",
    "cmdorctrl+shift+plus": "zoom in app interface",
    "cmdorctrl+shift+minus": "zoom out app interface",
    "cmdorctrl+shift+w": "close window",
  },
} as AppParams;

export default app;
