const app = {
  id: "photoshop",
  name: "Adobe Photoshop",
  icon: "/app-icons/photoshop.png",
  homepage: "https://www.adobe.com/products/photoshop",
  description: "Adobe Photoshop is a editing software for raster graphics.",
  globals: {},
  shortcuts: {
    "cmdorctrl+t": "free transform",
    "[": "decrease brush size",
    "]": "increase brush size",
    "shift+[": "decrease brush hardness",
    "shift+]": "increase brush hardness",
    "cmdorctrl+j": "new layer via copy",
    "cmdorctrl+shift+j":
      "new layer via cut / justify paragraph, left aligns last line",
    esc: "cancel any modal dialog window / cancel completely",
    enter:
      "select the first edit field of the tool bar / apply / highlight options bar (select tool first)",
    tab: "navigate between fields / cycle through controls on right from top / show/hide all panels",
    "shift+tab":
      "navigate between fields in the opposite direction / cycle through controls on right from bottom / show/hide all panels except the toolbox and options bar",
    alt: "change cancel to reset / change cancel button to reset / temporarily switch from add to erase mode for the adjustment brush tool, or from erase to add mode / temporarily switch to zoom out tool and change the image open button to open copy / transform from center or reflect / switch from pen tool to freeform pen tool to convert point tool when pointer is over anchor or direction point",
    "cmdorctrl+f": "invoke the search experience",
    f1: "start help",
    f2: "cut",
    f3: "copy",
    f4: "paste",
    f5: "show/hide brush panel",
    f6: "show/hide color panel",
    f7: "show/hide layers panel",
    f8: "show/hide info panel",
    f9: "show/hide actions panel",
    f12: "revert",
    "shift+f5": "fill",
    "shift+f6": "feather selection",
    "shift+f7": "inverse selection",
    d: "default foreground/background colors / thaw mask tool",
    x: "switch foreground/background colors / toggle between original image and selection preview / zoom 2x",
    v: "move tool / toggle pins for adjustment brush tool",
    m: "rectangular marquee tool / mirror tool / toggle auto mask for adjustment brush tool",
    l: "lasso tool / rotate image left",
    w: "magic wand tool / quick selection tool / forward warp tool",
    c: "crop tool / slice tool / slice select tool / twirl clockwise tool",
    i: "eyedropper tool / ruler tool / note tool / white balance tool",
    j: "spot healing brush tool / healing brush tool / patch tool / red eye tool / toggle radius preview on and off",
    b: "brush tool / pencil tool / color replacement tool / mixer brush tool / bloat tool / spot removal tool",
    s: "clone stamp tool / pattern stamp tool / pucker tool / color sampler tool",
    y: "history brush tool / art history brush tool / toggle show mask for adjustment brush tool",
    e: "eraser tool / background eraser tool / magic eraser tool / red eye removal tool",
    g: "gradient tool / paint bucket tool / graduated filter tool",
    o: "dodge tool / burn tool / sponge tool / push left tool / highlight clipping warning",
    p: "pen tool / freeform pen tool / toggle between original selection and refined version / toggle preview",
    t: "horizontal type tool / vertical type tool / horizontal type mask tool / vertical type mask tool / turbulence tool / last-used targeted adjustment tool",
    a: "path selection tool / direct selection tool / straighten tool",
    u: "rectangle tool / rounded rectangle tool / ellipse tool / polygon tool / line tool / shadows clipping warning",
    h: "hand tool / temporarily hide pins",
    r: "rotate view tool / reconstruct tool / rotate image right",
    z: "zoom tool",
    q: "toggle standard/quick mask modes",
    n: "switch to new mode from add or erase mode of the adjustment brush tool or graduated filter",
    k: "adjustment brush tool",
    "/": "toggle preserve transparency / lock transparent pixels on/off / Toggle lock transparency for target layer, or last applied lock",
    ",": "previous brush / select previous brush size",
    ".": "next brush / select next brush size",
    "shift+,": "first brush",
    "shift+.": "last brush",
    "cmdorctrl+tab": "cycle through open documents",
    "cmdorctrl+shift+tab": "switch to previous document",
    "cmdorctrl+shift+w": "close a file in photoshop and open bridge",
    f: "toggle forward between standard screen > full screen with menu bar > full screen modes / cycle forward through preview modes / freeze mask tool / full screen mode",
    "shift+f":
      "toggle backwards between standard screen > full screen with menu bar > full screen modes / cycle backwards through preview modes",
    "space+f": "toggle forward canvas color",
    "shift+space+f": "toggle backwards canvas color",
    space: "switch to hand tool (when not in text-edit mode)",
    "cmdorctrl+space": "switch to zoom in tool",
    "alt+space": "switch to zoom out tool",
    "shift+enter":
      "apply zoom percentage, and keep zoom percentage box active / apply value and keep text box active",
    pgup: "scroll up 1 screen",
    pgdn: "scroll down 1 screen",
    "shift+pgup": "scroll up 10 units",
    "shift+pgdn": "scroll down 10 units",
    home: "move view to upper-left corner",
    end: "move view to lower-right corner",
    "\\": "Toggle rubylith mode for layer mask on/off",
    "cmdorctrl+z": "undo last pin adjustment / undo/redo",
    "cmdorctrl+a": "select all",
    "cmdorctrl+d": "deselect all / deselect a point",
    "cmdorctrl+alt+r": "open the refine edge dialog box",
    "shift+e": "toggle between refine radius and erase refinement tools",
    "cmdorctrl+alt+f": "reapply last-used filter",
    cmdorctrl:
      "change cancel button to default / temporarily switch to zoom in tool / distort / switch from path selection, pen, add anchor point, delete anchor point, or convert point tools to direct selection tool",
    "cmdorctrl+shift+z": "step forward / redo last action",
    "cmdorctrl+alt+z": "step backward",
    "cmdorctrl+plus": "zoom in / cycle through blending modes",
    "cmdorctrl+minus": "zoom out / cycle through blending modes",
    "cmdorctrl+0": "fit in view",
    "cmdorctrl+h": "hide selection and panes",
    "cmdorctrl+c": "copy",
    "cmdorctrl+v": "paste",
    "cmdorctrl+shift+t": "repeat last duplicate and move",
    "cmdorctrl+alt+t":
      "create floating selection from the current selection / free transform with duplicate data",
    "alt+shift": "constrain selection to a 15 degree rotation",
    backspace:
      "delete last node while creating plane / open fill dialog box on background or standard layer / delete adjustment layer",
    "cmdorctrl+alt+1": "basic panel",
    "cmdorctrl+alt+2": "tone curve panel",
    "cmdorctrl+alt+3": "detail panel",
    "cmdorctrl+alt+4": "hsl/greyscale panel",
    "cmdorctrl+alt+5": "split toning panel",
    "cmdorctrl+alt+6": "lens corrections panel",
    "cmdorctrl+alt+7": "camera calibration panel",
    "cmdorctrl+alt+8": "presets panel",
    "cmdorctrl+alt+9": "open snapshots panel",
    "cmdorctrl+alt+shift+t": "parametric curve targeted adjustment tool",
    "cmdorctrl+alt+shift+h": "hue targeted adjustment tool",
    "cmdorctrl+alt+shift+s": "saturation targeted adjustment tool",
    "cmdorctrl+alt+shift+l": "luminance targeted adjustment tool",
    "cmdorctrl+alt+shift+g": "grayscale mix targeted adjustment tool",
    "alt+]": ["increase temporary adjustment brush tool size"],
    "alt+[": ["decrease temporary adjustment brush tool size"],
    "alt+shift+]": ["increase temporary adjustment brush tool feather"],
    "alt+shift+[": ["decrease temporary adjustment brush tool feather"],
    "alt+=":
      "increase temporary adjustment brush tool size flow in increments of 10",
    "alt+-":
      "decrease temporary adjustment brush tool size flow in increments of 10",
    shift:
      "temporarily activate the white balance tool and change the open image button to open object / constrain",
    "cmdorctrl+r": "open selected images in camera raw dialog box from bridge",
    "cmdorctrl+1": "add 1 star rating (filmstrip mode)",
    "cmdorctrl+2": "add 2 star rating (filmstrip mode)",
    "cmdorctrl+3": "add 3 star rating (filmstrip mode)",
    "cmdorctrl+4": "add 4 star rating (filmstrip mode)",
    "cmdorctrl+5": "add 5 star rating (filmstrip mode)",
    "cmdorctrl+./,": "increase/decrease rating (filmstrip mode)",
    "cmdorctrl+6": "add red label (filmstrip mode)",
    "cmdorctrl+7": "add yellow label (filmstrip mode)",
    "cmdorctrl+8": "add green label (filmstrip mode)",
    "cmdorctrl+9": "add blue label (filmstrip mode)",
    "cmdorctrl+shift+0": "add purple label (filmstrip mode)",
    "cmdorctrl+k": "camera raw preferences",
    "cmdorctrl+alt": "delete adobe camera raw preferences (on open)",
    "cmdorctrl+shift+alt+b": "open the black-and-white dialog box",
    "cmdorctrl+m": "open the curves dialog box",
    plus: "select next point on the curve",
    minus: "select the previous point on the curve",
    delete: "delete a point on the curve",
    "cmdorctrl+.": "cancel",
    "cmdorctrl+shift+alt+t":
      "transform again with duplicate data / toggle single/every-line composer on/off",
    "0+0": "mixer brush changes wet and mix to zero",
    "shift+plus": "cycle through blending modes",
    "shift+minus": "cycle through blending modes",
    "alt+backspace": "fill with foreground color",
    "cmdorctrl+backspace": "fill with background color",
    "cmdorctrl+alt+backspace": "fill from history",
    "shift+backspace": "displays fill dialog box",
    "shift+alt+n":
      "normal / set blending mode to threshold for bitmap images, normal for all other images",
    "shift+alt+i": "dissolve",
    "shift+alt+q": "behind (brush tool only)",
    "shift+alt+r": "clear (brush tool only)",
    "shift+alt+k": "darken",
    "shift+alt+m": "multiply",
    "shift+alt+b": "color burn",
    "shift+alt+a": "linear burn",
    "shift+alt+g": "lighten",
    "shift+alt+s": "screen",
    "shift+alt+d": "color dodge",
    "shift+alt+w": "linear dodge",
    "shift+alt+o": "overlay",
    "shift+alt+f": "soft light",
    "shift+alt+h": "hard light",
    "shift+alt+v": "vivid light",
    "shift+alt+j": "linear light",
    "shift+alt+z": "pin light",
    "shift+alt+l": "hard mix",
    "shift+alt+e": "difference",
    "shift+alt+x": "exclusion",
    "shift+alt+u": "hue",
    "shift+alt+t": "saturation",
    "shift+alt+c": "color",
    "shift+alt+y": "luminosity",
    "cmdorctrl+shift+l": "align left",
    "cmdorctrl+shift+c": "align center",
    "cmdorctrl+shift+r": "align right",
    "cmdorctrl+shift+x": "choose 100% horizontal scale",
    "cmdorctrl+shift+alt+x": "choose 100% vertical scale",
    "cmdorctrl+shift+alt+a": "choose auto leading",
    "cmdorctrl+shift+q": "choose 0 for tracking",
    "cmdorctrl+shift+f": "justify paragraph, justifies all",
    "cmdorctrl+shift+alt+h": "toggle paragraph hyphenation on/off",
    "cmdorctrl+shift+<":
      "decrease type size of selected text 2 points or pixels",
    "cmdorctrl+shift+>":
      "increase type size of selected text 2 points or pixels",
    "alt+up": "increase leading 2 points or pixels",
    "alt+down": "decrease leading 2 points or pixels",
    "shift+alt+up": "increase baseline shift 2 points or pixels",
    "shift+alt+down": "decrease baseline shift 2 points or pixels",
    "alt+left": "decrease kerning/tracking 20/1000 ems",
    "alt+right": "increase kerning/tracking 20/1000 ems",
    up: "increase selected value by 1%",
    down: "decrease selected value by 1%",
    "shift+up": "increase selected values by 10",
    "shift+down": "decrease selected values by 10",
    "alt+3": "choose red channel for adjustment",
    "alt+4": "choose green channel for adjustment",
    "alt+5": "choose blue channel for adjustment",
    "alt+2": "choose composite channel for adjustment",
    "Shift+Alt+P": "Toggle airbrush option",
    "Alt+Shift": "Show Clone Source (overlays iamge)",
    "Alt+Shift+<": "Rotate Clone Source",
    "Alt+Shift+>": "Rotate Clone Source",
    "Alt+Shift+[": "Scale (reduce size) Clone Source",
    "Alt+Shift+]": "Scale (increase size) Clone Source",
    "cmdorctrl+Shift+N": "New layer",
    "cmdorctrl+J": "New layer via copy",
    "cmdorctrl+Shift+J": "New layer via cut",
    "cmdorctrl+G": "Group layers",
    "cmdorctrl+Shift+G": "Ungroup layers",
    "cmdorctrl+Alt+G": "Create/release clipping mask",
    "cmdorctrl+Alt+A": "Select all layers",
    "cmdorctrl+Shift+E": "Merge visible layers",
    "Alt+.": "Select top layer / Select bottom layer",
    "Shift+Alt+[": "Add to layer selection in Layers panel",
    "Shift+Alt+]": "Add to layer selection in Layers panel",
    "Alt+[": "Select next layer up",
    "Alt+]": "Select next layer up",
    "cmdorctrl+[": "Move target layer down",
    "cmdorctrl+]": "Move target layer up",
    "cmdorctrl+Shift+Alt+E":
      "Merge a copy of all visible layers into target layer",
    "cmdorctrl+E": "Merge layers (while layers are highlighted)",
    "cmdorctrl+Shift+[": "Move layer to bottom",
    "cmdorctrl+Shift+]": "Move layer to top",
  },
};

export default app;
