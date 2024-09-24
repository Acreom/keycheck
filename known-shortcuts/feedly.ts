import { AppParams } from "~/types";

const app = {
  id: "feedly",
  name: "Feedly",
  icon: "/app-icons/feedly.png",
  homepage: "https://feedly.com",
  description:
    "Feedly is a news aggregator application for various web browsers and mobile devices, also available as a cloud-based service.",
  globals: {},
  shortcuts: {
    "g+t": "show today",
    "g+a": "show all",
    "g+f": "show favorites",
    "g+g": "jump to...",
    "g+l": "read later",
    "g+i": "index",
    "g+o": "organize sources",
    "shift+j": "next source or collection",
    "shift+k": "previous source or collection",
    r: "refresh",
    j: "inline next article",
    k: "inline previous article",
    n: "select the next article",
    p: "select the previous article",
    "shift+a": "mark all as read",
    o: "inline or close the currently selected article",
    v: "view the original in a new tab",
    m: "toggle mark as read",
    x: "mark as read and hide",
    s: "read later",
    t: "save to board",
    b: "save to buffer",
    c: "clip to evernote",
    "shift+v": "preview",
    "?": "show keyboard shortcuts",
  },
} as AppParams;

export default app;
