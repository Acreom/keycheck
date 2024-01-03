const app = {
  id: "github",
  name: "Github",
  icon: "/app-icons/github.png",
  homepage: "https://github.com",
  description:
    "GitHub is a web-based hosting service for version control using Git.",
  globals: {},
  shortcuts: {
    s: "focus the search bar",
    "g+n": "go to your notifications",
    h: "opens and focuses on a user, issue, or pull request hovercard / move column to the left / move card to the bottom of the column on the left / scroll left",
    esc: "when focused on above, closes hovercard / cancel the move in progress / cancel the move in progress",
    "g+c": "go to the code tab",
    "g+i": "go to the issues tab",
    "g+p": "go to the pull requests tab",
    "g+b": "go to the projects tab",
    "g+w": "go to the wiki tab",
    "cmdorctrl+f": "start searching in file editor",
    "cmdorctrl+g": "find next / inserts a suggestions",
    "cmdorctrl+shift+g": "find previous",
    "cmdorctrl+shift+f": "replace",
    "cmdorctrl+shift+r": "replace all",
    "alt+g": "jump to line",
    "cmdorctrl+z": "undo",
    "cmdorctrl+y": "redo",
    t: "activates the file finder / open the list of changed files in the pull request",
    l: "jump to a line in your code / filter by or edit labels / apply a label / move column to the right / mark as read / scroll right",
    w: "switch to a new branch or tag",
    y: "expand a url to its canonical form / mark as read",
    i: "show or hide comments on diffs",
    b: "open blame view",
    "cmdorctrl+b": "inserts markdown formatting for bolding text",
    "cmdorctrl+i": "inserts markdown formatting for italicizing text",
    "cmdorctrl+k":
      "inserts markdown formatting for creating a link / move card to the top of the column",
    "cmdorctrl+shift+p": "toggles between the write and preview comment tabs",
    "cmdorctrl+enter": "submits a comment",
    "cmdorctrl+.":
      "opens saved replies menu and then autofills comment field with a saved reply",
    r: "quote the selected text in your reply",
    c: "create an issue / open the list of commits in the pull request",
    "cmdorctrl+/":
      "focus your cursor on the issues or pull requests search bar",
    u: "filter by author",
    m: "filter by or edit milestones / set a milestone",
    a: "filter by or edit assignee / set an assignee",
    o: "open issue",
    q: "request a reviewer",
    j: "move selection down in the list / move card down / scroll down",
    k: "move selection up in the list / move card up / scroll up",
    "cmdorctrl+shift+enter": "add a single comment on a pull request diff",
    enter:
      "start moving the focused column / complete the move in progress / start moving the focused card / complete the move in progress",
    space: "start moving the focused column / start moving the focused card",
    left: "move column to the left / move card to the bottom of the column on the left / scroll left",
    "cmdorctrl+left":
      "move column to the leftmost position / move card to the bottom of the leftmost column",
    "cmdorctrl+h":
      "move column to the leftmost position / move card to the bottom of the leftmost column",
    right:
      "move column to the right / move card to the bottom of the column on the right / scroll right",
    "cmdorctrl+right":
      "move column to the rightmost position / move card to the bottom of the rightmost column",
    "cmdorctrl+l":
      "move column to the rightmost position / move card to the bottom of the rightmost column",
    down: "move card down / scroll down",
    "cmdorctrl+down": "move card to the bottom of the column",
    "cmdorctrl+j": "move card to the bottom of the column",
    up: "move card up / scroll up",
    "cmdorctrl+up": "move card to the top of the column",
    "shift+left":
      "move card to the top of the column on the left / scroll all the way left",
    "shift+h":
      "move card to the top of the column on the left / scroll all the way left",
    "cmdorctrl+shift+left": "move card to the top of the leftmost column",
    "cmdorctrl+shift+h": "move card to the top of the leftmost column",
    "shift+right":
      "move card to the top of the column on the right / scroll all the way right",
    "shift+l":
      "move card to the top of the column on the right / scroll all the way right",
    "cmdorctrl+shift+right": "move card to the top of the rightmost column",
    "cmdorctrl+shift+l": "move card to the top of the rightmost column",
    e: "mark as read",
    "shift+m": "mute thread",
    "shift+up": "scroll all the way up",
    "shift+k": "scroll all the way up",
    "shift+down": "scroll all the way down",
    "shift+j": "scroll all the way down",
  },
};

export default app;
