import { AppParams } from "~/types";

const app = {
  id: "x",
  name: "X",
  icon: "/app-icons/x.png",
  homepage: "https://www.x.com",
  description:
    "𝕏, is an online social media and social networking service where users can post text messages, images and videos, like, repost, quote repost, comment on posts, direct message, video and audio call, bookmark, join lists and communities, and join public Spaces with other registered users.",
  globals: {},
  shortcuts: {
    N: "New post",
    L: "Like",
    R: "Reply",
    T: "Repost",
    M: "new Direct message",
    U: "Mute account",
    x: "Block account",
    Enter: "Open post details",
    O: "Expand photos",
    I: "Open/Close Messages dock",
    "/": "Search",
    "cmdOrCtrl+Enter": "Send post",
    "?": "Shortcut help",
    J: "Next post",
    K: "Previous post",
    Space: "Page down",
    ".": "Load new posts",
    "G+h": "Home",
    "G+e": "explore",
    "G+N": "Notifications",
    "G+R": "Mentions",
    "G+P": "Profile",
    "G+L": "Likes",
    "G+I": "Lists",
    "G+M": "Direct messages",
    "G+S": "Settings",
    "G+b": "bookmarks",
    "G+U": "Go to user...",
    "G+D": "display settings",
  },
} as AppParams;

export default app;
