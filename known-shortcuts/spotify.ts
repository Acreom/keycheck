import { AppParams } from "~/types";

const app = {
  id: "spotify",
  name: "Spotify",
  icon: "/app-icons/spotify.png",
  homepage: "https://www.spotify.com/",
  description:
    "Spotify is a digital music, podcast, and video service with millions of songs and other content from various creators. Basic functions such as playing music are free, Premium functions are paid.",
  globals: {},
  shortcuts: {
    "cmdorctrl+n": "create new playlist",
    "cmdorctrl+x": "cut",
    "cmdorctrl+c": "copy",
    "cmdorctrl+alt+c": "copy (alternative link)",
    "cmdorctrl+v": "paste",
    delete: "delete",
    "cmdorctrl+a": "select all",
    space: "play/pause",
    "cmdorctrl+right": "next track",
    "cmdorctrl+left": "previous track",
    "cmdorctrl+up": "volume up",
    "cmdorctrl+down": "volume down",
    "cmdorctrl+shift+down": "mute",
    "cmdorctrl+shift+up": "max volume",
    f1: "show help",
    "cmdorctrl+f": "filter (in songs and playlists)",
    "cmdorctrl+l": "give focus to search field",
    "alt+left": "go back",
    "alt+right": "go forward",
    enter: "play selected row",
    "cmdorctrl+p": "preferences",
    "cmdorctrl+shift+w": "logout active user",
    "alt+f4": "quit",
  },
} as AppParams;

export default app;
