import { AppParams } from "~/types";

const app = {
  id: "googlesheets",
  name: "Google Sheets",
  icon: "/app-icons/googlesheets.png",
  homepage: "https://www.google.com/sheets/about/",
  description: "Create and edit spreadsheets.",
  globals: {},
  shortcuts: {
    up: "move one cell up",
    down: "move one cell down",
    left: "move one cell left / move one character to the left (when in cell edit mode)",
    right:
      "move one cell right / move one character to the right (when in cell edit mode)",
    "cmdorctrl+left": "go to the leftmost cell in the current row",
    "cmdorctrl+right": "go to the rightmost cell in the current row",
    "cmdorctrl+down": "go to the bottommost cell in the current column",
    "cmdorctrl+up": "go to the topmost cell in the current column",
    home: "move to the beginning of the row",
    "cmdorctrl+home":
      "move to the beginning of the sheet / move to the beginning of the cell content (when in cell edit mode)",
    end: "move to the end of the row",
    tab: "move to the cell on the right / complete the data entry and move to the cell on the right",
    "shift+tab":
      "move to the cell on the left / completes the data entry and moves to the cell on the left",
    "cmdorctrl+end":
      "move to the end of the sheet / move to the end of the cell content (when in cell edit mode)",
    "cmdorctrl+shift+pagedown": "move to the next sheet",
    "cmdorctrl+shift+pageup": "move to the previous sheet",
    "alt+shift+k": "display the list of sheets",
    "cmdorctrl+c": "copy the selected cells",
    "cmdorctrl+x": "cut the selected cells",
    "cmdorctrl+v": "paste the content of the selected cells",
    "cmdorctrl+shift+v": "paste the values only",
    "cmdorctrl+z": "undo",
    "cmdorctrl+y": "redo",
    f4: "repeat the last action",
    "shift+f2": "insert/edit notes (comments)",
    "cmdorctrl+f": "find within the sheet",
    "cmdorctrl+h": "opens the find and replace dialogue box",
    "cmdorctrl+s": "save (every change is automatically saved in the drive)",
    "cmdorctrl+o": "open a file",
    "cmdorctrl+p": "print",
    "cmdorctrl+/": "show the common keyboard shortcuts",
    "cmdorctrl+shift+f": "compact controls",
    "alt+enter":
      "open a hyperlink (when the cell with a link is selected) / insert a new line in the same cell",
    "cmdorctrl+alt+z": "enable the screen reader support",
    "cmdorctrl+space": "select column",
    "shift+space": "select row",
    "cmdorctrl+a": "select all",
    enter: "complete the data entry and move to the cell below",
    "shift+enter": "completes the data entry and moves to the cell above",
    f2: "open the edit mode",
    "cmdorctrl+enter": "fill all the selected cells",
    "cmdorctrl+d":
      "copy the content of the selected cell in the cell below (all cells should be selected)",
    "cmdorctrl+r":
      "copy the content of the selected cell in the cell to the right (all cells should be selected)",
    "shift+up": "select all the content to the left of the cursor",
    "shift+down": "select all content to the right of the cursor",
    "shift+f11": "insert a new sheet",
    "cmdorctrl+k": "insert a hyperlink",
    "cmdorctrl+shift+;": "insert the current time",
    "cmdorctrl+;": "insert the current date",
    "alt+i+r": "insert the row above (in Google Chrome)",
    "alt+shift+i+r": "insert the row above (in other browsers)",
    "alt+i+w": "insert the row below (in Google Chrome)",
    "alt+shift+i+w": "insert the row below (in other browsers)",
    "alt+i+c": "insert a column to the left (in Google Chrome)",
    "alt+shift+i+c": "insert a column to the left (in other browsers)",
    "alt+i+g": "insert a column to the right (in Google Chrome)",
    "alt+shift+i+g": "insert a column to the right (in other browsers)",
    delete: "clear the cell contents Google Sheets shortcut",
    "cmdorctrl+b": "bold the contents of the selected cell",
    "cmdorctrl+u": "underline the contents of the selected cell",
    "cmdorctrl+i": "italicize the contents of the selected cell",
    "alt+shift+5": "apply the strikethrough format",
    "cmdorctrl+shift+e": "align the cell contents to the center",
    "cmdorctrl+shift+l": "align the cell contents to the left",
    "cmdorctrl+shift+r": "align the cell contents to the right",
    "alt+shift+1": "apply a top border to the selected cells",
    "alt+shift+2": "apply the right border to the selected cells",
    "alt+shift+3": "apply the bottom border to the selected cells",
    "alt+shift+4": "apply a left border to the selected cells",
    "alt+shift+6": "remove the borders from the selected cells",
    "alt+shift+7": "apply the outer border to the selected cells",
    "cmdorctrl+shift+1": "apply the decimal format",
    "cmdorctrl+shift+2": "apply the time format",
    "cmdorctrl+shift+3": "apply the date format",
    "cmdorctrl+shift+4": "apply the currency format",
    "cmdorctrl+shift+5": "apply the percentage format",
    "cmdorctrl+shift+6": "apply the exponential format",
    "cmdorctrl+\\": "clear all formatting",
    "cmdorctrl+~": "show all formulas",
    "cmdorctrl+shift+enter": "wrap the current formula in an array formula",
    "cmdorctrl+e": "collapse an expanded array formula",
    "shift+f1": "show/hide the formula help (when entering a formula)",
    "alt+f": "open the file menu (in Google Chrome)",
    "alt+e": "open the edit menu (in Google Chrome)",
    "alt+v": "open the view menu (in Google Chrome)",
    "alt+i": "open the insert menu (in Google Chrome)",
    "alt+o": "open the format menu (in Google Chrome)",
    "alt+d": "open the data menu (in Google Chrome)",
    "alt+t": "open the tools menu (in Google Chrome)",
    "alt+n": "open the add-ons menu",
    "alt+h": "help menu (in Google Chrome)",
    "alt+shift+s": "sheet menu (copy, delete, and other sheet actions)",
    "cmdorctrl+shift+\\": "context menu",
  },
} as AppParams;

export default app;
