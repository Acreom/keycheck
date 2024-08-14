import { AppParams } from "~/types";

const app = {
  id: "powerpoint",
  name: "PowerPoint",
  icon: "/app-icons/powerpoint.png",
  homepage: "https://www.microsoft.com/microsoft-365/powerpoint",
  description:
    "PowerPoint is a software package that can be used to create electronic presentations. These presentations can include animation, narration, images, videos, and more.",
  globals: {},
  shortcuts: {
    "cmdorctrl+tab": "switch between different open presentations",
    "cmdorctrl+n": "create a new presentation",
    "cmdorctrl+o": "open an existing presentation",
    "cmdorctrl+q": "save and close a presentation",
    "cmdorctrl+s": "save a presentation",
    "cmdorctrl+y": "repeat last action",
    "cmdorctrl+w": "close a presentation",
    "cmdorctrl+z": "undo an action",
    "cmdorctrl+f": "search in a presentation or use find and replace",
    "cmdorctrl+f1": "show or hide the ribbon",
    "cmdorctrl+f2": "print preview view",
    "alt+f2": "open the save as dialog box",
    "alt+f": "open the file tab menu",
    "alt+a": "go to the animations tab",
    "alt+g": "open the design tab",
    "alt+h": "go to the home tab",
    "alt+k": "go to the transitions tab",
    "alt+n": "open the insert tab",
    "alt+q": "go to the 'tell me what you want to do' box",
    "alt+r": "go to the review tab",
    "alt+s": "go to the slide show tab",
    "alt+w": "go to view tab",
    "alt+x": "go to the add-ins tab",
    "alt+y": "go to the help tab",
    "cmdorctrl+a":
      "select all text in a textbox, all slides in a presentation or all objects on a slide",
    tab: "select and/or switch to the next object on a slide",
    "shift+tab": "select or move to the previous object on a slide",
    home: "go to the first slide, or from within a text box, go to the beginning of the line",
    end: "go to the last slide, or from within a text box, go to the end of the line",
    pagedown: "go to the next slide",
    pageup: "go the previous slide",
    "cmdorctrl+down":
      "move a slide down in the presentation (click on a slide thumbnail first)",
    "cmdorctrl+up": "move a slide up in the presentation",
    "cmdorctrl+shift+up":
      "move a slide to the beginning of the presentation (click on a slide thumbnail first)",
    "cmdorctrl+shift+down": "move a slide to the end of the presentation",
    "cmdorctrl+b": "add or remove bold to selected text",
    "cmdorctrl+c":
      "copy selected text, selected object(s), or selected slide(s)",
    "cmdorctrl+d":
      "duplicate the selected object or slide (for the latter, click on a slide thumbnail first)",
    "cmdorctrl+e": "center a paragraph",
    "cmdorctrl+i": "add or remove italics to selected text",
    "cmdorctrl+j": "justify a paragraph",
    "cmdorctrl+k": "insert a hyperlink",
    "cmdorctrl+l": "left align a paragraph",
    "cmdorctrl+m": "insert a new slide",
    "cmdorctrl+r": "right align a paragraph",
    "cmdorctrl+t": "open the font dialog box when text or object is selected",
    "cmdorctrl+u": "add or remove underline to selected text",
    "cmdorctrl+v":
      "paste selected text, selected object(s), or selected slide(s)",
    "cmdorctrl+x":
      "cut selected text, selected object(s), or selected slide(s)",
    "cmdorctrl+alt+v": "open the paste special dialog box",
    delete: "remove selected text, selected object(s), or selected slide(s)",
  },
} as AppParams;

export default app;
