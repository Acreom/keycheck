const app = {
  id: "macos",
  name: "macOS",
  icon: "/app-icons/macos.png",
  homepage: "https://apple.com",
  description:
    "macOS is an operating system developed by Apple Inc. It is designed specifically for Apple's Macintosh computers, including desktops and laptops. macOS provides the core software infrastructure that allows users to interact with their Mac computers, run applications, and perform various tasks.",
  globals: {
    "cmd+H": "Hide window",
    "cmd+M": "Minimize window",
    "cmd+N": "New",
    "cmd+O": "Open",
    "cmd+P": "Print",
    "cmd+S": "Save",
    "cmd+W": "Close window",
    "cmd+Q": "Quit the app",
    "alt+cmd+Esc": "Force Quit",
    "cmd+Space": "Spotlight search",
    Space: "Quick Look",
    "cmd+Tab": "Switch apps",
    "shift+cmd+~": "Switch windows",
    "shift+cmd+3": "Screenshot",
    "cmd+,": "Preferences",
    powerButton: "Turn on, wake",
    "ctrl+cmd+powerButton": "Force restart",
    "ctrl+shift+powerButton": "Put your displays to sleep",
    "ctrl+alt+cmd+powerButton": "Quit all apps, shut down Mac",
    "shift+cmd+Q": "Log out of your account",
    "shift+cmd+:": "Display the Spelling and Grammar window",
    "cmd+;": "Find misspelled words in the document",
    "alt+Delete": "Delete the word to the left of the insertion point",
    "ctrl+H":
      "Delete the character to the left of the insertion point Or use Delete",
    "ctrl+D":
      "Delete the character to the right of the insertion point Or use Fn Delete",
    "Fn+Delete":
      "Forward delete on keyboards that don't have a Forward Delete key Or use ctrl  D",
    "ctrl+K":
      "Delete the text between the insertion point and the end of the line or paragraph",
    "cmd+Delete":
      "Select Delete or Don't Save in a dialog that contains a Delete or Don't Save button",
    "Fn+up": "Page Up: Scroll up one page",
    "Fn+down": "Page Down: Scroll down one page",
    "Fn+left": "Home: Scroll to the beginning of a document",
    "Fn+right": "End: Scroll to the end of a document",
    "cmd+up": "Move the insertion point to the beginning of the document",
    "cmd+down": "Move the insertion point to the end of the document",
    "cmd+left": "Move the insertion point to the beginning of the current line",
    "cmd+right": "Move the insertion point to the end of the current line",
    "alt+left":
      "Move the insertion point to the beginning of the previous word",
    "alt+right": "Move the insertion point to the end of the next word",
    "shift+cmd+up":
      "Select the text between the insertion point and the beginning of the document",
    "shift+cmd+down":
      "Select the text between the insertion point and the end of the document",
    "shift+cmd+left":
      "Select the text between the insertion point and the beginning of the current line",
    "shift+cmd+right":
      "Select the text between the insertion point and the end of the current line",
    "shift+up":
      "Extend text selection to the nearest character at the same horizontal location on the line above",
    "shift+down":
      "Extend text selection to the nearest character at the same horizontal location on the line below",
    "shift+left": "Extend text selection one character to the left",
    "shift+right": "Extend text selection one character to the right",
    "alt+shift+up":
      "Extend text selection to the beginning of the current paragraph, then to the beginning of the following paragraph if pressed again",
    "alt+shift+down":
      "Extend text selection to the end of the current paragraph, then to the end of the following paragraph if pressed again",
    "alt+shift+left":
      "Extend text selection to the beginning of the current word, then to the beginning of the following word if pressed again",
    "alt+shift+right":
      "Extend text selection to the end of the current word, then to the end of the following word if pressed again",
    "ctrl+A": "Move to the beginning of the line or paragraph",
    "ctrl+E": "Move to the end of a line or paragraph",
    "ctrl+F": "Move one character forward",
    "ctrl+B": "Move one character backward",
    "ctrl+L": "Center the cursor or selection in the visible area",
    "ctrl+P": "Move up one line",
    "ctrl+N": "Move down one line",
    "ctrl+O": "Insert a new line after the insertion point",
    "ctrl+T":
      "Swap the character behind the insertion point with the character in front of the insertion point",
    "cmd+{": "Left align",
    "cmd+}": "Right align",
    "shift+cmd+|": "Center align",
    "alt+cmd+F": "Go to the search field",
    "alt+cmd+T": "Show or hide a toolbar in the app",
    "alt+cmd+C":
      "Copy Style: Copy the formatting settings of the selected item to the Clipboard",
    "alt+cmd+V": "Paste Style: Apply the copied style to the selected item",
    "alt+shift+cmd+V":
      "Paste and Match Style: Apply the style of the surrounding content to the item pasted within that content",
    "alt+cmd+I": "Show or hide the inspector window",
    "shift+cmd+P":
      "Page setup: Display a window for selecting document settings",
    "shift+cmd+S":
      "Display the Save As dialog, or duplicate the current document",
    "shift+cmd+-": "Decrease the size of the selected item",
    "shift+cmd++":
      "Increase the size of the selected item cmd Equal sign (=) performs the same function",
    "shift+cmd+?": "Open Help menu",
    "cmd+D": "Duplicate",
    "cmd+E": "Eject disk or volume",
    "cmd+F": "Start a Spotlight search in the Finder window",
    "cmd+I": "Get info",
    "shift+cmd+C": "Open the Computer window",
    "shift+cmd+D": "Open the desktop folder",
    "shift+cmd+F": "Open the All My Files window",
    "shift+cmd+G": "Open a Go to Folder window",
    "shift+cmd+H": "Open the Home folder of the current macOS user account",
    "shift+cmd+I": "Open iCloud Drive",
    "shift+cmd+K": "Open the Network window",
    "alt+cmd+L": "Open Downloads",
    "shift+cmd+O": "Open Documents",
    "shift+cmd+R": "Open AirDrop",
    "ctrl+shift+cmd+T": "Add Finder item to the Dock",
    "shift+cmd+U": "Open Utilities",
    "alt+cmd+D": "Show or hide the Dock",
    "ctrl+cmd+T": "Add the selected item to the sidebar",
    "alt+cmd+P": "Hide or show the path bar in Finder windows",
    "alt+cmd+S": "Hide or show the Sidebar in Finder windows",
    "cmd+/": "Hide or show the status bar in Finder windows",
    "cmd+K": "Open the Connect to Server window",
    "cmd+L": "Make an alias of the selected item",
    "cmd+N": "Open a new Finder window",
    "shift+cmd+N": "Create a new folder",
    "alt+cmd+N": "Create a new Smart Folder",
    "cmd+R": "Show the original file for the selected alias",
    "cmd+T":
      "Show or hide the tab bar when a single tab is open in the current Finder window",
    "shift+cmd+T": "Show or hide a Finder tab",
    "alt+cmd+Y": "View a Quick Look slideshow of the selected files",
    "cmd+Y": "Use Quick Look to preview the selected files",
    "cmd+1": "View the items in the Finder window as icons",
    "cmd+2": "View the items in a Finder window as a list",
    "cmd+3": "View the items in a Finder window in columns",
    "cmd+4": "View the items in a Finder window with Cover Flow",
    "cmd+[": "Go to the previous folder",
    "cmd+]": "Go to the next folder",
    "cmd+up": "Open the folder that contains the current folder",
    "cmd+ctrl+up":
      "Open the folder that contains the current folder in a new window",
    "cmd+down": "Open the selected item",
    left: "Open the selected folder This works only when in list view",
    right: "Close the selected folder This works only when in list view",
    "cmd+Delete": "Move the selected item to the Trash",
    "shift+cmd+Delete": "Empty the Trash",
    "alt+shift+cmd+Delete": "Empty the Trash without confirmation dialog",
  },
  shortcuts: {
    "cmd+X": "Cut",
    "cmd+C": "Copy",
    "cmd+V": "Paste",
    "cmd+Z": "Undo",
    "cmd+shift+Z": "Redo",
    "cmd+A": "Select all",
    "cmd+F": "Search",
    "cmd+B": "Bold",
    "cmd+I": "Italic",
    "cmd+U": "Underline",
  },
};

export { app };
