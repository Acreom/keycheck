import { AppParams } from "~/types";

const app = {
  id: "outlook",
  name: "Outlook",
  icon: "/app-icons/outlook.png",
  homepage:
    "https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook",
  description:
    "Outlook is a personal information manager from Microsoft, available as a part of the Microsoft Office suite.",
  globals: {},
  shortcuts: {
    esc: "close / clear the search results",
    "alt+h": "go to home tab",
    "cmdorctrl+shift+m": "new message",
    "alt+s":
      "send/receive / save and close (except in mail view) / send or post or invite all",
    "alt+n": "insert file",
    "cmdorctrl+shift+k": "new task",
    delete: "delete",
    "cmdorctrl+e": "search / center text",
    "cmdorctrl+r": "reply / right align text",
    "cmdorctrl+f": "forward",
    "cmdorctrl+shift+r": "reply all",
    "cmdorctrl+c": "copy",
    "alt+h,m,v": "move to folder",
    "alt+j,a": "attachment save as",
    "cmdorctrl+1": "switch to mail view",
    "cmdorctrl+2": "switch to calendar view",
    "cmdorctrl+3": "switch to contacts view",
    "cmdorctrl+4": "switch to tasks view",
    "cmdorctrl+5": "switch to notes",
    "cmdorctrl+6": "switch to folders list in the folder pane",
    "cmdorctrl+7": "switch to shortcuts",
    "cmdorctrl+.": "switch to next open message",
    "cmdorctrl+,": "switch to previous open message",
    "cmdorctrl+shift+tab": "move between folder/outlook/reading/to-do",
    "cmdorctrl+tab": "move around message header lines in the folder pane",
    "cmdorctrl+y": "go to a different folder",
    "alt+up": "in the reading pane, go to the previous message",
    space: "in the reading pane, page down through text",
    "shift+space": "in the reading pane, page up through text",
    left: "collapse a group in the email message list",
    right: "expand a group in the email message list",
    "alt+b": "go back to previous view in the main outlook window",
    "alt+right": "go forward to next view in the main outlook window",
    "cmdorctrl+shift+w":
      "select the infobar and, if available, show menu of commands / open the mailtip in the selected message",
    "cmdorctrl+alt+a":
      "expand the search to include all items in module you are in",
    "cmdorctrl+shift+f": "use advanced find",
    "cmdorctrl+shift+p": "create a search folder",
    f4: "search for text within an open item / find or replace",
    "cmdorctrl+h": "find and replace text/symbols in reading pane",
    "cmdorctrl+alt+k": "expand search to include items from the current folder",
    "cmdorctrl+alt+z": "expand search to include subfolders",
    "cmdorctrl+shift+a": "create an appointment",
    "cmdorctrl+shift+c": "create a contact",
    "cmdorctrl+shift+l": "create a contact group",
    "cmdorctrl+shift+x": "create a fax",
    "cmdorctrl+shift+e": "create a folder",
    "cmdorctrl+shift+q": "create a meeting request",
    "cmdorctrl+shift+n": "create a note / apply normal style",
    "cmdorctrl+shift+h": "create an office document",
    "cmdorctrl+shift+s": "post to the selected folder",
    "cmdorctrl+t": "post a reply in the selected folder",
    "cmdorctrl+s": "save (except in tasks view)",
    f12: "save as (only in mail view)",
    "cmdorctrl+z": "undo",
    "cmdorctrl+d": "delete an item",
    "cmdorctrl+p": "print",
    "cmdorctrl+shift+y": "copy an item",
    "cmdorctrl+shift+v": "move an item",
    "cmdorctrl+k": "check names",
    f7: "check spelling",
    "cmdorctrl+shift+g": "flag for follow-up",
    f2: "endable editing in a field, all views except mail/icon",
    "cmdorctrl+l": "left align text",
    "cmdorctrl+shift+i": "switch to inbox / display blocked external content",
    "cmdorctrl+shift+o": "switch to outbox",
    "cmdorctrl+alt+r": "reply with meeting request",
    "cmdorctrl+alt+j": "mark a message as not junk",
    "cmdorctrl+m": "check for new messages",
    up: "go to the previous message",
    down: "go to next message",
    "cmdorctrl+n": "create a message (in mail view)",
    "cmdorctrl+o": "open a received message",
    "cmdorctrl+shift+d": "delete and ignore a conversation",
    "cmdorctrl+shift+b": "open the address book",
    ins: "add a quick flag to an unopened message",
    "cmdorctrl+q": "mark as read",
    "cmdorctrl+u": "mark as unread",
    "shift+f4": "find next",
    "cmdorctrl+enter": "send",
    "cmdorctrl+alt+f": "forward as attachment",
    "alt+enter": "show the properties for the selected item",
    "cmdorctrl+alt+m": "mark for download",
    "cmdorctrl+alt+u": "check mark for download status",
    "cmdorctrl+b": "display send/receive progress",
  },
} as AppParams;

export default app;
