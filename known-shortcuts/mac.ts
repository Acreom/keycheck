import { AppParams } from "~/types";

const app = {
  id: "macos",
  name: "macOS",
  icon: "/app-icons/macos.png",
  homepage: "https://www.apple.com/macos",
  description:
    "macOS is the primary operating system for Apple's Mac computers, developed and marketed by Apple Inc. It is the second most widely used desktop OS,",
  globals: {
    "cmd+tab": "switch to the next most recently used app among your open apps",
    "cmd+alt+space": "perform a spotlight search from a finder window",
    "cmd+space": "show or hide the spotlight search field",
    "cmd+t":
      "open a new tab / show or hide the tab bar when a single tab is open in the current finder window / show or hide the fonts window",
    "cmd+w": "close the front window",
    "alt+cmd+w": "close all windows of the app",
    "alt+cmd+esc": "force quit an app",
    "ctrl+cmd+space": "show the character viewer",
    "ctrl+cmd+f": "use the app in full screen, if supported by the app",
    "shift+cmd+5": "take a screenshot or make a screen recording",
    "ctrl+cmd+q": "immediately lock your screen",
    "shift+cmd+q": "log out of your macos user account",
    "alt+shift+cmd+q": "log out immediately without confirming",
  },
  shortcuts: {
    "cmd+x": "cut the selected item and copy it to the clipboard",
    "cmd+c": "copy the selected item to the clipboard",
    "cmd+v":
      "paste the contents of the clipboard into the current document or app",
    "cmd+z": "undo the previous command",
    "shift+cmd+z": "redo the undo command",
    "cmd+a": "select all items",
    "cmd+f": "find items in a document or open a find window",
    "cmd+g":
      "find again: find the next occurrence of the item previously found",
    "cmd+h": "hide the windows of the front app",
    "alt+cmd+h": "view the front app but hide all other apps",
    "cmd+m": "minimize the front window to the dock",
    "alt+cmd+m": "minimize all windows of the front app",
    "cmd+o":
      "open the selected item, or open a dialog to select a file to open",
    "cmd+p": "print the current document",
    "cmd+s": "save the current document",
    space: "use quick look to preview the selected item",
    "cmd+`":
      "switch between the windows of the app you're using / activate the next open window in the front app",
    "shift+cmd+n": "create a new folder in the finder",
    "cmd+,": "open preferences for the front app",
    "cmd+d":
      "duplicate the selected files / select the desktop folder from within an open dialog or save dialog",
    "cmd+e": "eject the selected disk or volume",
    "cmd+i":
      "show the get info window for a selected file / italicize the selected text, or turn italics on or off",
    "cmd+r":
      "show the original file for the selected alias in the finder, refresh or reload the page in some apps, or check for software updates again in software update",
    "shift+cmd+c": "open the computer window",
    "shift+cmd+d": "open the desktop folder",
    "shift+cmd+f":
      "open the recents window, showing all of the files you viewed or changed recently",
    "shift+cmd+g": "open a go to folder window",
    "shift+cmd+h": "open the home folder of the current macos user account",
    "shift+cmd+i": "open icloud drive",
    "shift+cmd+k": "open the network window",
    "alt+cmd+l": "open the downloads folder",
    "shift+cmd+o": "open the documents folder",
    "shift+cmd+p":
      "show or hide the preview pane in finder windows / page setup: display a window for selecting document settings",
    "shift+cmd+r": "open the airdrop window",
    "shift+cmd+t": "show or hide the tab bar in finder windows",
    "ctrl+shift+cmd+t":
      "add selected finder item to the dock (os x mavericks or later)",
    "shift+cmd+u": "open the utilities folder",
    "alt+cmd+d": "show or hide the dock",
    "ctrl+cmd+t":
      "add the selected item to the sidebar (os x mavericks or later)",
    "alt+cmd+p": "hide or show the path bar in finder windows",
    "alt+cmd+s": "hide or show the sidebar in finder windows",
    "cmd+/": "hide or show the status bar in finder windows",
    "cmd+j": "show view options",
    "cmd+k": "open the connect to server window",
    "ctrl+cmd+a": "make an alias of the selected item",
    "cmd+n": "open a new finder window",
    "alt+cmd+n": "create a new smart folder",
    "alt+cmd+t":
      "show or hide the toolbar when a single tab is open in the current finder window / show or hide a toolbar in the app",
    "alt+cmd+v":
      "move the files in the clipboard from their original location to the current location / paste style: apply the copied style to the selected item",
    "cmd+y": "use quick look to preview the selected files",
    "alt+cmd+y": "view a quick look slideshow of the selected files",
    "cmd+1": "view the items in the finder window as icons",
    "cmd+2": "view the items in a finder window as a list",
    "cmd+3": "view the items in a finder window in columns",
    "cmd+4": "view the items in a finder window in a gallery",
    "cmd+[": "go to the previous folder",
    "cmd+]": "go to the next folder",
    "cmd+up":
      "open the folder that contains the current folder / move the insertion point to the beginning of the document",
    "cmd+ctrl+up":
      "open the folder that contains the current folder in a new window",
    "cmd+down":
      "open the selected item / move the insertion point to the end of the document",
    right: "open the selected folder (list view only)",
    left: "close the selected folder (list view only)",
    "cmd+delete": "move the selected item to the trash",
    "shift+cmd+delete": "empty the trash",
    "alt+shift+cmd+delete": "empty the trash without confirmation dialog",
    "ctrl+down": "show all windows of the front app",
    "cmd+b": "boldface the selected text, or turn boldfacing on or off",
    "cmd+u": "underline the selected text, or turn underlining on or off",
    "ctrl+cmd+d": "show or hide the definition of the selected word",
    "shift+cmd+:": "display the spelling and grammar window",
    "cmd+;": "find misspelled words in the document",
    "alt+delete": "delete the word to the left of the insertion point",
    "ctrl+h": "delete the character to the left of the insertion point",
    "ctrl+d": "delete the character to the right of the insertion point",
    "fn+delete":
      "forward delete on keyboards that don't have a forward delete key",
    "ctrl+k":
      "delete the text between the insertion point and the end of the line or paragraph",
    "fn+up": "page up: scroll up one page",
    "fn+down": "page down: scroll down one page",
    "fn+left": "home: scroll to the beginning of a document",
    "fn+right": "end: scroll to the end of a document",
    "cmd+left": "move the insertion point to the beginning of the current line",
    "cmd+right": "move the insertion point to the end of the current line",
    "alt+left":
      "move the insertion point to the beginning of the previous word",
    "alt+right": "move the insertion point to the end of the next word",
    "shift+cmd+up":
      "select the text between the insertion point and the beginning of the document",
    "shift+cmd+down":
      "select the text between the insertion point and the end of the document",
    "shift+cmd+left":
      "select the text between the insertion point and the beginning of the current line",
    "shift+cmd+right":
      "select the text between the insertion point and the end of the current line",
    "shift+up":
      "extend text selection to the nearest character at the same horizontal location on the line above",
    "shift+down":
      "extend text selection to the nearest character at the same horizontal location on the line below",
    "shift+left": "extend text selection one character to the left",
    "shift+right": "extend text selection one character to the right",
    "alt+shift+up":
      "extend text selection to the beginning of the current paragraph, then to the beginning of the following paragraph if pressed again",
    "alt+shift+down":
      "extend text selection to the end of the current paragraph, then to the end of the following paragraph if pressed again",
    "alt+shift+left":
      "extend text selection to the beginning of the current word, then to the beginning of the following word if pressed again",
    "alt+shift+right":
      "extend text selection to the end of the current word, then to the end of the following word if pressed again",
    "ctrl+a": "move to the beginning of the line or paragraph",
    "ctrl+e": "move to the end of a line or paragraph",
    "ctrl+f": "move one character forward",
    "ctrl+b": "move one character backward",
    "ctrl+l": "center the cursor or selection in the visible area",
    "ctrl+p": "move up one line",
    "ctrl+n": "move down one line",
    "ctrl+o": "insert a new line after the insertion point",
    "ctrl+t":
      "swap the character behind the insertion point with the character in front of the insertion point",
    "cmd+{": "left align",
    "cmd+}": "right align",
    "shift+cmd+|": "center align",
    "alt+cmd+f": "go to the search field",
    "alt+cmd+c":
      "copy style: copy the formatting settings of the selected item to the clipboard",
    "alt+shift+cmd+v":
      "paste and match style: apply the style of the surrounding content to the item pasted within that content",
    "alt+cmd+i": "show or hide the inspector window",
    "shift+cmd+s":
      "display the save as dialog, or duplicate the current document",
    "shift+cmd+minus": "decrease the size of the selected item",
    "shift+cmd+plus": "increase the size of the selected item",
    "shift+cmd+?": "open the help menu",
    "ctrl+alt+cmd+8": "invert colors",
    "ctrl+alt+cmd+,": "reduce contrast",
    "ctrl+alt+cmd+.": "increase contrast",
    "ctrl+f2": "move focus to the menu bar",
    "fn+ctrl+f2": "move focus to the menu bar",
    "ctrl+f3": "move focus to the dock",
    "fn+ctrl+f3": "move focus to the dock",
    "ctrl+f4": "move focus to the active window or next window",
    "fn+ctrl+f4": "move focus to the active window or next window",
    "ctrl+f5": "move focus to the window toolbar",
    "fn+ctrl+f5": "move focus to the window toolbar",
    "ctrl+f6": "move focus to the floating window",
    "fn+ctrl+f6": "move focus to the floating window",
    "ctrl+shift+f6": "move focus to the previous panel",
    "ctrl+f7":
      "change the way tab moves focus—between navigation of all controls on the screen, or only text boxes and lists",
    "fn+ctrl+f7":
      "change the way tab moves focus—between navigation of all controls on the screen, or only text boxes and lists",
    "ctrl+f8": "move focus to the status menu in the menu bar",
    "fn+ctrl+f8": "move focus to the status menu in the menu bar",
    "shift+cmd+`": "activate the previous open window in the front app",
    "alt+cmd+`": "move the focus to the window drawer",
    tab: "move to next control",
    "shift+tab": "move to previous control",
    "ctrl+tab": "move to the next control when a text field is selected",
    "ctrl+shift+tab": "move to the previous grouping of controls",
  },
} as AppParams;

export default app;
