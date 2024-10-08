import { AppParams } from "~/types";

const app = {
  id: "inkscape",
  name: "Inkscape",
  icon: "/app-icons/inkscape.png",
  homepage: "https://inkscape.org/",
  description:
    "Inkscape is a free and open-source vector graphics editor used to create vector images, primarily in Scalable Vector Graphics (SVG) format. Other formats can be imported and exported.",
  globals: {},
  shortcuts: {
    f1: "selector",
    s: "selector",
    space: "selector / activate current button or list",
    f2: "node tool",
    n: "node tool",
    f3: "zoom tool",
    z: "zoom tool",
    f4: "rectangle tool",
    r: "rectangle tool",
    f5: "ellipse/arc tool",
    e: "ellipse/arc tool",
    f6: "freehand (pencil) tool",
    p: "freehand (pencil) tool",
    "shift+f6": "bezier (pen) tool",
    b: "bezier (pen) tool",
    "cmdorctrl+f6": "calligraphic tool",
    c: "calligraphic tool",
    "cmdorctrl+f1": "gradient tool",
    g: "gradient tool",
    f7: "dropper tool",
    d: "dropper tool",
    f8: "text tool",
    t: "text tool",
    f9: "spiral tool",
    i: "spiral tool",
    "shift+f9": "star tool",
    "*": "star tool",
    "cmdorctrl+f2": "connector tool",
    o: "connector tool",
    "shift+cmdorctrl+f": "fill and stroke",
    "shift+cmdorctrl+w": "swatches",
    "shift+cmdorctrl+t": "text and font",
    "shift+cmdorctrl+m": "transform",
    "shift+cmdorctrl+l": "layers",
    "shift+cmdorctrl+a": "align and distribute",
    "shift+cmdorctrl+o": "object properties",
    "shift+cmdorctrl+h": "undo history",
    "shift+cmdorctrl+x": "xml editor",
    "shift+cmdorctrl+d": "document preferences",
    "shift+cmdorctrl+p": "inkscape preferences",
    "shift+cmdorctrl+e": "export to png",
    "cmdorctrl+f": "find",
    "shift+alt+b": "trace bitmap",
    f12: "toggle dialogs",
    esc: "return to the canvas / deselect / cancel rubberband, move, transformation / deselect all nodes",
    "cmdorctrl+f4": "close the dialog",
    "cmdorctrl+w": "close the dialog",
    tab: "jump to next widget / select next object / select next node",
    "shift+tab": "jump to previous widget / select previous object/node",
    enter: "set the new value",
    "cmdorctrl+enter": "in xml editor, set the attr value / enter group",
    "cmdorctrl+pgup": "in a multi-tab dialog, switch tabs",
    "cmdorctrl+pgdn": "in a multi-tab dialog, switch tabs",
    "alt+x": "jump to the first editable field",
    up: "change value by 0.1",
    down: "change value by 0.1",
    pgup: "change value by 5.0 / raise selection one step",
    pgdn: "change value by 5.0 / lower selection one step",
    "=": "zoom in",
    plus: "zoom in",
    minus: "zoom out",
    "alt+z": "activate zoom field",
    "1": "zoom 1:1",
    "2": "zoom 1:2",
    "3": "zoom to selection",
    "4": "zoom to drawing",
    "5": "zoom to page",
    "6": "zoom to page width",
    "cmdorctrl+e": "zoom to page width",
    "`": "previous zoom",
    "shift+`": "next zoom",
    "shift+\\": "toggle guides and snapping to guides",
    "#": "toggle grid and snapping to grid",
    "shift+3": "toggle grid and snapping to grid",
    "cmdorctrl+5": "toggle normal/outline mode",
    "cmdorctrl+n": "create new document",
    "cmdorctrl+o": "open an svg document",
    "cmdorctrl+i": "import bitmap or svg",
    "cmdorctrl+p": "print document",
    "cmdorctrl+s": "save document",
    "shift+cmdorctrl+s": "save under a new name",
    "shift+cmdorctrl+alt+s": "save a copy",
    "cmdorctrl+q": "exit inkscape",
    "cmdorctrl+r": "toggle rulers",
    "cmdorctrl+b": "toggle scrollbars",
    f11: "toggle fullscreen",
    f10: "main menu",
    "shift+f10": "drop-down (context) menu",
    "cmdorctrl+tab": "next document window",
    "shift+cmdorctrl+tab": "previous document window",
    "shift+pgup": "move to layer above",
    "shift+pgdn": "move to layer below",
    "shift+cmdorctrl+pgup": "raise layer",
    "shift+cmdorctrl+pgdn": "lower layer",
    "shift+cmdorctrl+home": "raise layer to top",
    "shift+cmdorctrl+end": "lower layer to bottom",
    "shift+cmdorctrl+y": "undo",
    "cmdorctrl+z": "undo",
    "shift+cmdorctrl+z": "redo",
    "cmdorctrl+y": "redo",
    "cmdorctrl+c": "copy selection",
    "cmdorctrl+x": "cut selection",
    "cmdorctrl+v": "paste clipboard",
    "cmdorctrl+alt+v": "paste in place",
    "shift+cmdorctrl+v": "paste style",
    "cmdorctrl+d": "duplicate selection",
    "alt+d": "clone object",
    "shift+alt+d": "unlink clone",
    "shift+d": "select original",
    "alt+b": "create a bitmap copy",
    "alt+i": "object(s) to pattern",
    "shift+alt+i": "pattern to object(s)",
    "shift+cmdorctrl+u": "group selected objects",
    "cmdorctrl+g": "group selected objects",
    "shift+cmdorctrl+g": "ungroup selected group(s)",
    "cmdorctrl+u": "ungroup selected group(s)",
    home: "raise selection to top",
    end: "lower selection to bottom",
    "shift+cmdorctrl+c": "convert selected object(s) to path",
    "cmdorctrl+alt+c": "convert stroke to path",
    "cmdorctrl+plus": "union",
    "cmdorctrl+minus": "difference",
    "cmdorctrl+*": "intersection",
    "cmdorctrl+^": "exclusive or (xor)",
    "cmdorctrl+/": "division (cut)",
    "cmdorctrl+alt+/": "cut path",
    "cmdorctrl+(": "inset path (towards center)",
    "cmdorctrl+)": "outset path (away from center)",
    "alt+(": "inset path by 1 pixel",
    "alt+)": "outset path by 1 pixel",
    "shift+alt+(": "inset path by 10 pixels",
    "shift+alt+)": "outset path by 10 pixels",
    "cmdorctrl+j": "create dynamic offset",
    "cmdorctrl+alt+j": "create linked offset",
    "cmdorctrl+k": "combine paths",
    "shift+cmdorctrl+k": "break paths apart",
    "cmdorctrl+l": "simplify",
    "cmdorctrl+a":
      "select all (current layer) / select all nodes in subpath(s)",
    "cmdorctrl+alt+a": "select all (all layers) / select all nodes in path",
    "!": "invert selection (current layer) / invert selection in subpath(s)",
    "alt+!": "invert selection (all layers) / invert selection in path",
    backspace: "delete selection/selected node(s)",
    delete: "delete selection/selected nodes",
    ".": "scale selection/nodes up by the scale step",
    ",": "scale selection/nodes down by the scale step",
    "cmdorctrl+.": "scale selection to 200%",
    "cmdorctrl+,": "scale selection to 50%",
    "alt+.": "scale selection/nodes up by 1 pixel",
    "alt+,": "scale selection/nodes down by 1 pixel",
    "[": "rotate both nodes/handles/selection by the angle step",
    "]": "rotate both nodes/handles/selection by the angle step",
    "cmdorctrl+[": "rotate selection by 90 degrees",
    "cmdorctrl+]": "rotate selection by 90 degrees",
    "alt+[": "rotate selection/nodes by 1 pixel",
    "alt+]": "rotate selection/nodes by 1 pixel",
    h: "flip selection/nodes horizontally",
    v: "flip selection/nodes vertically",
    "cmdorctrl+backspace":
      "go to parent group/layer / delete without preserving shape",
    "<": "contract/expand both handles by scale step",
    ">": "contract/expand both handles by scale step",
    "shift+l": "make line",
    "shift+u": "make curve",
    "shift+c": "make cusp",
    "shift+s": "make smooth",
    "shift+y": "make symmetric",
    "shift+j": "join selected nodes",
    "shift+b": "break selected node(s)",
    "cmdorctrl+delete": "delete without preserving shape",
  },
} as AppParams;

export default app;
