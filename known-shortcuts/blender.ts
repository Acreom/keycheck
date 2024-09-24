import { AppParams } from "~/types";

const app = {
  id: "blender",
  name: "Blender",
  icon: "/app-icons/blender.png",
  homepage: "https://www.blender.org/",
  description:
    "Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality, and computer games.",
  globals: {},
  shortcuts: {
    esc: "cancels blender functions without changes",
    space: "open the toolbox",
    tab: "start or quit edit mode",
    f1: "loads a blender file, changes the window to a file window",
    "shift+f1": "appends parts from other files, or loads as library data",
    f2: "writes a blender file, changes the window to a file window",
    "shift+f2": "exports the scene as a dxf file",
    "cmdorctrl+f2": "exports the scene as a vrml1 file",
    f3: "writes a picture, if a picture has been rendered, and the file format is as indicated in the display buttons",
    "cmdorctrl+f3": "saves a screen dump of the active window",
    "cmdorctrl+shift+f3": "saves a screen dump of the whole blender screen",
    f4: "displays the logic context",
    f5: "displays the shading context, light, material, or world sub-contexts",
    f6: "displays the shading context and texture sub-context",
    f7: "displays the object context",
    f8: "displays the shading context and world sub-context",
    f9: "displays the editing context",
    f10: "displays the scene context",
    f11: "hides or shows the render window",
    f12: "starts the rendering from the active camera",
    left: "go to the previous frame",
    "shift+left": "go to the first frame",
    right: "go to the next frame",
    "shift+right": "go to the last frame",
    up: "go forward 10 frames",
    down: "go back 10 frames",
    "alt+a":
      "change the current blender window to animation playback mode, the cursor changes to a counter",
    "alt+shift+a":
      "change the current window and all 3d windows to animation playback mode",
    i: "insert key menu, this menu differs from window to window",
    j: "toggle the render buffers",
    "cmdorctrl+o": "opens the last saved file",
    q: "quit blender",
    "cmdorctrl+alt+t":
      "timer menu, this menu offers access to information about drawing speed",
    "cmdorctrl+u":
      "save user defaults, current project settings are written to the default file that will be loaded every time you start blender",
    "cmdorctrl+w": "write file without opening a file window",
    "alt+w": "write videoscape file",
    "cmdorctrl+x":
      "erase everything except the render buffer, the default scene is reloaded",
    "cmdorctrl+y": "redo",
    "cmdorctrl+z": "undo",
    "cmdorctrl+shift+z": "redo",
  },
} as AppParams;

export default app;
