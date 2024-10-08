import { AppParams } from "~/types";

const app = {
  id: "youtube",
  name: "YouTube",
  icon: "/app-icons/youtube.png",
  homepage: "https://www.youtube.com/",
  description: "YouTube is an online video-sharing platform.",
  globals: {},
  shortcuts: {
    space:
      "play/pause when the seek bar is selected, activate a button if a button has focus",
    k: "play/pause in player",
    left: "seek backward 5 seconds",
    right: "seek forward 5 seconds",
    j: "seek backward 10 seconds in player",
    l: "seek forward 10 seconds in player",
    home: "seek to the beginning of the video",
    end: "seek to the last seconds of the video",
    up: "increase volume 5%",
    down: "decrease volume 5%",
    "1": "seek to the 10% of the video",
    "2": "seek to the 20% of the video",
    "3": "seek to the 30% of the video",
    "4": "seek to the 40% of the video",
    "5": "seek to the 50% of the video",
    "6": "seek to the 60% of the video",
    "7": "seek to the 70% of the video",
    "8": "seek to the 80% of the video",
    "9": "seek to the 90% of the video",
    "0": "seek to the beginning of the video",
    "shift+1": "move between h1 headers",
    "/": "go to search box",
    f: "activate full screen, press again (or esc) to exit",
    c: "activate closed captions and subtitles, press again to hide",
    "shift+n": "move to the next video",
    "shift+p": "move to the previous video",
    i: "launch the miniplayer",
    ".": "move forward a single frame (while paused)",
    ",": "move back a single frame (while paused)",
  },
} as AppParams;

export default app;
