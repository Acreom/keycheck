const app = {
  id: "ticktick",
  name: "TickTick",
  icon: "/app-icons/ticktick.png",
  homepage: "https://ticktick.com/",
  description:
    "TickTick is a task management app with cloud synchronization across multiple devices.",
  globals: {},
  shortcuts: {
    "cmdorctrl+shift+a": "show quick add bar",
    "cmdorctrl+shift+l": "show or hide mini window",
    "cmdorctrl+shift+p": "start or abandon pomo",
    "cmdorctrl+s": "sync task",
    "cmdorctrl+f": "search for a task",
    "cmdorctrl+n": "add task",
    "cmdorctrl+shift+m": "complete task",
    "cmdorctrl+0": "clear date, set no priority",
    "cmdorctrl+d": "set date",
    "cmdorctrl+1": "set today, set low priority",
    "cmdorctrl+2": "set tomorrow, set medium priority",
    "cmdorctrl+3": "set next week, set high priority",
    "cmdorctrl+p": "print",
    "cmdorctrl+alt+t": "open today's list",
    "cmdorctrl+alt+n": "open next 7 days list",
    "cmdorctrl+alt+a": "open all list, open the assigned to me list",
    "cmdorctrl+alt+c": "open the calendar view, open completed tasks",
    "cmdorctrl+alt+1": "open the inbox",
  },
};

export default app;
