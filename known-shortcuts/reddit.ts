const app = {
  id: "reddit",
  name: "Reddit",
  icon: "/app-icons/reddit.png",
  homepage: "https://www.reddit.com",
  description:
    "Reddit is a social news aggregation, web content rating, and discussion website.",
  globals: {},
  shortcuts: {
    "shift+?": "show shortcuts",
    j: "next post or comment",
    k: "previous post or comment",
    n: "next post in lightbox",
    p: "previous post in lightbox",
    enter: "open post",
    x: "open or close expando",
    l: "go to post link",
    a: "upvote",
    z: "downvote",
    c: "new post",
    r: "reply to comments",
    "cmdorctrl+enter": "submit comment or post",
    s: "save",
    h: "hide",
    q: "open navigation",
  },
};

export default app;
