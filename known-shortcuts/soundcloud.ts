const app = {
  id: "soundcloud",
  name: "SoundCloud",
  icon: "/app-icons/soundcloud.png",
  homepage: "https://soundcloud.com",
  description:
    "SoundCloud is an online audio distribution platform and music sharing website.",
  globals: {},
  shortcuts: {
    space: "play or pause",
    "shift+right": "play next track",
    "shift+l": "repeat playing track",
    "shift+left": "play previous track",
    right: "seek forward",
    l: "like playing track",
    r: "repost playing track",
    s: "search",
    "g+l": "navigate to likes",
    "g+c": "navigate to library",
    "g+h": "navigate to history",
    "shift+s": "shuffle",
    "shift+down": "decrease volume",
    "shift+up": "increase volume",
    m: "mute volume",
    left: "seek backwards",
    p: "navigate to playing track",
    h: "show keyboard shortcuts",
    "g+s": "navigate to stream",
    "g+p": "navigate to profile",
    q: "show next up",
  },
};

export default app;
