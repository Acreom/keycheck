import { AppParams } from "~/types";

const app = {
  id: "copilot",
  name: "GitHub Copilot",
  icon: "/app-icons/copilot.png",
  homepage: "https://github.com/features/copilot",
  description:
    "GitHub Copilot is a cloud-based artificial intelligence tool for autocompleting code.",
  globals: {},
  shortcuts: {
    tab: "accept an inline suggestion",
    esc: "dismiss an inline suggestion",
    "alt+]": "show next inline suggestion",
    "alt+[": "show previous inline suggestion",
    "alt+\\": "trigger inline suggestion",
    "alt+enter":
      "open GitHub Copilot (additional suggestions in separate pane)",
  },
} as AppParams;

export default app;
