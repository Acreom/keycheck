import { AppParams } from "~/types";

const app = {
  id: "sketchup",
  name: "Sketchup",
  icon: "/app-icons/sketchup.png",
  homepage: "https://www.sketchup.com/",
  description:
    "SketchUp is a 3D modeling computer program for a wide range of drawing applications such as architectural, interior design, landscape architecture, civil and mechanical engineering, film and video game design.",
  globals: {},
  shortcuts: {
    a: "2 point arc tool",
    c: "circle tool",
    "shift+c": "circle tool - lock current inferences",
    e: "eraser tool",
    "alt+e": "eraser tool - soften or smooth",
    "shift+e": "eraser tool - hide",
    "alt+shift+e": "eraser tool - unsoften or unsmooth",
    l: "line tool",
    "shift+l": "line tool - lock in current inference direction",
    m: "move tool",
    "alt+m": "move tool - move a copy",
    "shift+m": "move tool - hold down to lock in current inference direction",
    "cmdorctrl+m": "move tool - auto-fold",
    f: "offset tool",
    o: "orbit tool",
    "alt+o": "orbit tool - disable 'gravity-weighted' orbiting",
    "shift+o": "orbit tool - activate pan tool",
    b: "paint bucket tool",
    "alt+b":
      "paint bucket tool - fill material, paint all matching adjacent faces",
    "shift+b":
      "paint bucket tool - replace material, paint all matching faces in the model",
    "alt+shift+b":
      "paint bucket tool - replace material on object, paint all matching faces on the same object",
    "cmdorctrl+b": "paint bucket tool - sample material",
    p: "push and pull tool",
    "alt+p":
      "push and pull tool - push or pull a copy of the face, leaving original in place",
    r: "rectangle tool",
    "alt+r": "rectangle tool - start drawing from center",
    q: "rotate tool",
    "alt+q": "rotate tool - rotate a copy",
    s: "scale tool",
    "alt+s": "scale tool - scale about center",
    "shift+s": "scale tool - scale uniformly, don't distort",
    space: "select tool",
    "alt+space": "select tool - add to selection",
    "shift+space": "select tool - add or subtract from selection",
    "alt+shift+space": "select tool - subtract from selection",
    t: "tape measure tool",
    "alt+t": "tape measure tool - toggle create guide or measure only",
    z: "zoom tool",
    "shift+z":
      "zoom tool - combine with click-drag mouse to change field of view",
  },
} as AppParams;

export default app;
