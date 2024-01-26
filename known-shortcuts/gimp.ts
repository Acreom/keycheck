const app = {
  id: "gimp",
  name: "GIMP",
  icon: "/app-icons/gimp.png",
  homepage: "https://www.gimp.org",
  description: "GIMP is a free and open-source raster graphics editor.",
  globals: {},
  shortcuts: {
    r: "rectangle select",
    e: "ellipse select",
    f: "free select",
    u: "fuzzy select",
    "shift+o": "select by color",
    i: "scissors",
    b: "paths",
    o: "color picker",
    m: "move",
    "shift+c": "crop and resize",
    "shift+r": "rotate",
    "shift+t": "scale",
    "shift+s": "shear",
    "shift+p": "perspective",
    "shift+f": "flip",
    t: "text",
    "shift+b": "bucket fill",
    l: "blend",
    n: "pencil",
    p: "paintbrush",
    "shift+e": "eraser",
    a: "airbrush",
    k: "ink",
    c: "clone",
    v: "convolve",
    s: "smudge",
    "shift+d": "dodge or burn",
    x: "swap colors",
    d: "default colors",
    "cmdorctrl+n": "new image",
    "cmdorctrl+o": "open image",
    "cmdorctrl+alt+n": "open image as new layer",
    "cmdorctrl+d": "duplicate image",
    "cmdorctrl+1": "open recent image 1",
    "cmdorctrl+2": "open recent image 2",
    "cmdorctrl+3": "open recent image 3",
    "cmdorctrl+4": "open recent image 4",
    "cmdorctrl+5": "open recent image 5",
    "cmdorctrl+6": "open recent image 6",
    "cmdorctrl+7": "open recent image 7",
    "cmdorctrl+8": "open recent image 8",
    "cmdorctrl+9": "open recent image 9",
    "cmdorctrl+0": "open recent image 10",
    "cmdorctrl+s": "save image",
    "cmdorctrl+q": "quit",
    "cmdorctrl+l": "layers",
    "cmdorctrl+shift+b": "brushes",
    "cmdorctrl+shift+p": "patterns",
    "cmdorctrl+g": "gradients",
    "cmdorctrl+shift+t": "tool options / toggle guides",
    "cmdorctrl+p": "palettes",
    "cmdorctrl+shift+i": "info window",
    "cmdorctrl+shift+n": "navigation window",
    tab: "jump to next widget",
    "shift+tab": "jump to previous widget",
    enter: "set the new value",
    space: "activate the current button or list",
    "cmdorctrl+alt+pgup": "in a multi-tab dialog, switch tabs",
    "shift+l": "open location",
    "alt+up": "up folder",
    "alt+down": "down folder",
    "alt+home": "home folder",
    esc: "close dialog",
    f10: "main menu",
    "shift+f10": "drop-down menu",
    f11: "toggle fullscreen",
    "shift+q": "toggle quickmask",
    "cmdorctrl+w": "close document window",
    plus: "zoom in",
    minus: "zoom out",
    "1": "zoom 1:1",
    "cmdorctrl+e": "shrink wrap",
    "cmdorctrl+shift+e": "fit image in window",
    "cmdorctrl+shift+r": "toggle rulers",
    pgup: "select the layer above",
    pgdn: "select the layer below",
    home: "select the first layer",
    end: "select the last layer",
    "cmdorctrl+m": "merge visible layers",
    "cmdorctrl+h": "anchor layer",
    "cmdorctrl+z": "undo",
    "cmdorctrl+y": "redo",
    "cmdorctrl+c": "copy selection",
    "cmdorctrl+x": "cut selection",
    "cmdorctrl+shift+c": "copy visible / named copy selection",
    "cmdorctrl+shift+v": "paste as new image / named paste clipboard",
    "cmdorctrl+v": "paste clipboard",
    "cmdorctrl+k": "clears selection",
    "cmdorctrl+shift+x": "named cut selection",
    "cmdorctrl+,": "fill with foreground color",
    "cmdorctrl+.": "fill with background color",
    "cmdorctrl+;": "fill with pattern",
    "cmdorctrl+t": "toggle selections",
    "cmdorctrl+a": "select all",
    "cmdorctrl+shift+a": "select none",
    "cmdorctrl+i": "invert selection",
    "cmdorctrl+shift+l": "float selection",
    "shift+v": "path to selection",
    "cmdorctrl+f": "repeat last plug-in",
    "cmdorctrl+shift+f": "reshow last plug-in",
    f1: "help",
    "shift+f1": "context help",
  },
};

export default app;