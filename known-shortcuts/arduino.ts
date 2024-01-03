const app = {
  id: "arduino",
  name: "Arduino",
  icon: "/app-icons/arduino.png",
  homepage: "https://www.arduino.cc/",
  description:
    "Arduino is an open-source electronics platform based on easy-to-use hardware and software. ",
  globals: {},
  shortcuts: {
    "cmdorctrl+s": "save",
    "cmdorctrl+shift+s": "save as",
    "cmdorctrl+n": "open a new sketch",
    "cmdorctrl+o": "open an existing sketch",
    "cmdorctrl+q": "close the arduino ide",
    "cmdorctrl+r": "verify",
    "cmdorctrl+u": "upload",
    "cmdorctrl+f": "find",
    "cmdorctrl+t": "adjust the alignment and spacing",
    "cmdorctrl+/": "comment",
    "cmdorctrl+shift+m": "open the serial monitor",
    "cmdorctrl+k": "open the sketch folder",
  },
};

export default app;
