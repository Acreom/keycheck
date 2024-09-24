import { AppParams } from "~/types";

const app = {
  id: "wordpress",
  name: "WordPress",
  icon: "/app-icons/wordpress.png",
  homepage: "https://wordpress.org/",
  description:
    "WordPress is a free and open-source web content management system. It supports publishing blogs, websites, mailing lists, Internet forum, media galleries, membership sites, learning management systems, and online stores.",
  globals: {},
  shortcuts: {
    "cmdorctrl+c": "copy",
    "cmdorctrl+v": "paste",
    "cmdorctrl+a": "select all",
    "cmdorctrl+x": "cut",
    "cmdorctrl+z": "undo",
    "cmdorctrl+y": "redo",
    "cmdorctrl+b": "bold",
    "cmdorctrl+i": "italic",
    "cmdorctrl+u": "underline",
    "cmdorctrl+k": "insert or edit a link",
    "alt+shift+n": "check spelling, this requires a plugin",
    "alt+shift+l": "align text left",
    "alt+shift+j": "justify text",
    "alt+shift+c": "align text center",
    "alt+shift+d": "strikethrough",
    "alt+shift+r": "align text right",
    "alt+shift+u": "unordered list",
    "alt+shift+a": "insert a link",
    "alt+shift+o": "ordered list",
    "alt+shift+s": "remove a link",
    "alt+shift+q": "quote",
    "alt+shift+m": "insert an image",
    "alt+shift+w": "distraction free writing mode",
    "alt+shift+t": "insert a more tag",
    "alt+shift+p": "insert a page break tag",
    "alt+shift+h": "help",
    "alt+shift+x": "add or remove a code tag",
    "alt+shift+1": "heading one",
    "alt+shift+2": "heading two",
    "alt+shift+3": "heading three",
    "alt+shift+4": "heading four",
    "alt+shift+5": "heading five",
    "alt+shift+6": "heading six",
    "alt+shift+9": "insert an address",
  },
} as AppParams;

export default app;
