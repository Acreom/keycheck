const app = {
  id: "airtable",
  name: "Airtable",
  icon: "/app-icons/airtable.png",
  homepage: "https://www.airtable.com/",
  description:
    "Airtable is a spreadsheet-database hybrid, with the features of a database but applied to a spreadsheet. The fields in an Airtable table are similar to cells in a spreadsheet, but have types such as 'checkbox', 'phone number', and 'drop-down list', and can reference file attachments like images.",
  globals: {},
  shortcuts: {
    "cmdorctrl+z": "undo action",
    "cmdorctrl+shift+z": "redo action",
    "cmdorctrl+p":
      "print the current table view or current expanded record (if inside an expanded record)",
    "cmdorctrl+j": "opens the table switcher in the current base",
    "cmdorctrl+k":
      "opens the quick base switcher if on the home screen or inside a base",
    "cmdorctrl+shift+k": "opens the view switcher in the current base",
    "cmdorctrl+shift+f":
      "opens the filter menu in the current view, press enter to create a new filter",
    "cmdorctrl+shift+d":
      "opens the grouped records menu in the current view, press enter to collapse or expand all groups",
    "cmdorctrl+shift+s":
      "opens the sort menu in the current view, press enter to re-apply the most recent sort",
    "cmdorctrl+shift+\\": "toggles blocks",
    "cmdorctrl+f": "opens the find bar, use esc to close it",
    "cmdorctrl+;": "sets the selected date/datetime field to now",
    "cmdorctrl+c": "copy a cell or range of cells",
    "cmdorctrl+x": "cut a cell or range of cells",
    "cmdorctrl+v":
      "paste a cell (if you select a range of cells, you can paste the same value into multiple cells at once)",
    space: "expand the active record, use esc to return to the table",
    "shift+space":
      "expand the active cell, you can then use arrow keys to move to different cells",
    pgup: "scrolls one screen up",
    pgdn: "scrolls one screen down",
    "alt+pgup": "scrolls one screen left",
    "alt+pgdn": "scrolls one screen right",
    "cmdorctrl+shift+up": "jump to the edge of table and select cells",
    "cmdorctrl+shift+down": "jump to the edge of table and select cells",
    "cmdorctrl+shift+left": "jump to the edge of table and select cells",
    "cmdorctrl+shift+right": "jump to the edge of table and select cells",
    "shift+up":
      "select range of cells, you can also click while holding shift to select cells",
    "shift+down":
      "select range of cells, you can also click while holding shift to select cells",
    "shift+left":
      "select range of cells, you can also click while holding shift to select cells",
    "shift+right":
      "select range of cells, you can also click while holding shift to select cells",
    "shift+enter": "insert a record below the selected cell",
    enter: "edit the selected cell",
    "cmdorctrl+up":
      "jump to the edge of the table/ scroll to edge of gallery / scroll all stacks to the top",
    "cmdorctrl+down":
      "jump to the edge of the table / scroll to edge of gallery / scroll all stacks to the bottom",
    left: "scroll kanban board to the left by one stack",
    right: "scroll kanban board to the right by one stack",
    "cmdorctrl+left":
      "jump to the edge of the table / scroll kanban board to the left edge",
    "cmdorctrl+right":
      "jump to the edge of the table / scroll kanban board to the right edge",
    "cmdorctrl+shift+<":
      "move to the previous record while viewing an expanded record",
    "cmdorctrl+shift+>":
      "move to the next record while viewing an expanded record",
    esc: "close expanded record",
  },
};

export default app;
