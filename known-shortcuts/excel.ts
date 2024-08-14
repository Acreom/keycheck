import { AppParams } from "~/types";

const app = {
  id: "excel",
  name: "Excel",
  icon: "/app-icons/excel.png",
  homepage: "https://www.microsoft.com/microsoft-365/excel",
  description:
    "Microsoft Excel is a spreadsheet editor developed by Microsoft. It features calculation or computation capabilities, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications (VBA).",
  globals: {},
  shortcuts: {
    "cmdorctrl+n": "create a new workbook",
    "cmdorctrl+o": "open an existing workbook",
    "cmdorctrl+s": "save a workbook/spreadsheet",
    "cmdorctrl+w": "close the current workbook",
    "cmdorctrl+f4": "close excel",
    "cmdorctrl+pagedown": "move to the next sheet",
    "cmdorctrl+pageup": "move to the previous sheet",
    "alt+a": "go to the data tab",
    "alt+w": "go to the view tab",
    "alt+m": "go the formula tab",
    f2: "edit a cell",
    "cmdorctrl+c": "copy cells",
    "cmdorctrl+v": "paste cells",
    "cmdorctrl+i": "italicize font",
    "cmdorctrl+b": "make font bold",
    "alt+h+a+c": "center align cell contents",
    "alt+h+h": "fill color",
    "alt+h+b": "add a border",
    "cmdorctrl+shift+_": "remove outline border",
    "cmdorctrl+shift+&": "add an outline to the select cells",
    tab: "move to the next cell",
    "shift+tab": "move to the previous cell",
    "cmdorctrl+shift+right": "select all the cells on the right",
    "cmdorctrl+shift+left": "select all the cells on the left",
    "cmdorctrl+shift+down":
      "select the column from the selected cell to the end of the table",
    "cmdorctrl+shift+up": "select all the cells above the selected cell",
    "shift+f2": "add a comment to a cell",
    "shift+f10+d": "delete a cell comment",
    "cmdorctrl+h": "display find and replace",
    "cmdorctrl+shift+l": "activate the filter",
    "alt+down": "activate the filter",
    "cmdorctrl+;": "insert the current date",
    "cmdorctrl+shift+:": "insert current time",
    "cmdorctrl+k": "insert a hyperlink",
    "cmdorctrl+shift+$": "apply the currency format",
    "cmdorctrl+shift+%": "apply the percent format",
    "alt+q": "go to the 'tell me what you want to do' box",
    "shift+space": "select the entire row",
    "cmdorctrl+space": "select the entire column",
    "alt+h+d+c": "delete a column",
    "shift+space+cmdorctrl+minus": "delete a row",
    "cmdorctrl+9": "hide selected row",
    "cmdorctrl+shift+9": "unhide selected row",
    "cmdorctrl+0": "hide a selected column",
    "cmdorctrl+shift+0": "unhide a selected column",
    "alt+shift+right": "group rows or columns / group pivot table items",
    "alt+shift+left": "ungroup rows or columns / ungroup pivot table items",
    "cmdorctrl+minus": "hide pivot table items",
    "alt+f1": "create a pivot chart on the same sheet",
    f11: "create a pivot chart on a new worksheet",
  },
} as AppParams;

export default app;
