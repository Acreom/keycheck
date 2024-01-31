const app = {
  id: "guitarpro",
  name: "Guitar Pro",
  icon: "/app-icons/guitarpro.png",
  homepage: "https://www.guitar-pro.com/",
  description:
    "Guitar Pro is a tablature editor software for guitar, bass, and other fretted instruments.",
  globals: {},
  shortcuts: {
    "cmdorctrl+shift+ins": "add",
    "cmdorctrl+shift+delete": "delete",
    "cmdorctrl+alt+up": "move up",
    "cmdorctrl+alt+down": "move down",
    f6: "properties / fretboard / keyboard / drums",
    "cmdorctrl+ins": "insert bar",
    "cmdorctrl+delete": "delete bar",
    k: "clef",
    "cmdorctrl+k": "key signature",
    "cmdorctrl+t": "time signature",
    "cmdorctrl+/": "triplet feel",
    "|": "free time",
    "[": "repeat open / palm mute note",
    "]": "repeat close / palm-mute on beat",
    d: "directions",
    "cmdorctrl+r": "multi rest",
    "cmdorctrl+enter": "force line break",
    "shift+7": "prevent line break",
    "shift+ins": "insert or remove",
    "alt+left": "previous section",
    "alt+right": "next section",
    "shift+5": "repeat one bar / dotting",
    "cmdorctrl+shift+5": "repeat two bars / double dotting",
    plus: "increase (whole note, half note, etc)",
    minus: "decrease (whole note, half note, etc)",
    "/": "triplet",
    ins: "insert a beat",
    "shift+delete": "delete the beats",
    c: "copy the beats at the end",
    l: "tie note",
    "shift+l": "tie the beat",
    f: "fermata",
    r: "rest",
    "cmdorctrl+d": "brush downstroke",
    "cmdorctrl+u": "brush upstroke",
    "cmdorctrl+shift+d": "arpeggio down",
    "cmdorctrl+shift+u": "arpeggio up",
    "shift+r": "rasgueado",
    "shift+d": "pickstroke down",
    "shift+u": "pickstroke up",
    "shift+minus": "one semi-town down / tenuto",
    "shift+plus": "one semi-tone up",
    "alt+down": "shift down",
    "alt+up": "shift up",
    a: "chord",
    "shift+i": "barre",
    "shift+2": "timer",
    t: "text",
    x: "dead note",
    o: "ghost note",
    ";": "accented note",
    "shift+;": "heavily accented note",
    "shift+1": "staccato",
    "shift+h": "legato",
    i: "let ring",
    y: "natural harmonic",
    "alt+y": "artificial harmonic",
    b: "bend",
    "shift+w": "tremolo bar",
    h: "hammer on or pull-off",
    "shift+9": "left-hand tapping",
    "shift+0": "tapping",
    "shift+4": "slap",
    "cmdorctrl+shift+4": "pop",
    n: "trill",
    "shift+,": "fade in",
    "shift+.": "fade out",
    "cmdorctrl+shift+.": "volume swell",
    "cmdorctrl+shift+,": "volume swell",
    "alt+o": "wah open",
    "alt+c": "wah close",
    "cmdorctrl+alt+7": "double flat",
    "cmdorctrl+7": "flat",
    "cmdorctrl+8": "natural",
    "cmdorctrl+9": "sharp",
    "cmdorctrl+alt+9": "double sharp",
    "cmdorctrl+alt+8": "change the accidental",
    g: "before the beat",
    "alt+g": "on the beat",
    v: "left-hand vibrato (slight)",
    "alt+v": "left-hand vibrato (wide)",
    w: "vibrato with trem. bar (slight)",
    "alt+w": "vibrato with trem. bar (wide)",
    s: "legato slide",
    "alt+s": "shift slide",
    "shift+'": "thirty-second note",
    f4: "check the bars' duration",
    "cmdorctrl+shift+m": "move or swap voices",
    space: "play",
    "cmdorctrl+space": "play from the beginning",
    "cmdorctrl+home": "first bar",
    "cmdorctrl+left": "rewind",
    "cmdorctrl+right": "fast forward",
    "cmdorctrl+end": "last bar",
    f9: "play in loops (speed trainer)",
    f2: "rsi (realistic sound engine)",
    "cmdorctrl+alt+d": "design mode",
    f3: "multitrack",
    "cmdorctrl+b": "enable browser",
    f11: "full screen",
    "cmdorctrl+z": "undo",
    "cmdorctrl+shift+z": "redo",
    "cmdorctrl+x": "cut",
    "cmdorctrl+c": "copy",
    "cmdorctrl+v": "paste",
    "cmdorctrl+shift+x": "multitrack cut",
    "cmdorctrl+shift+c": "multitrack copy",
    "cmdorctrl+shift+v": "special paste",
    "cmdorctrl+a": "select all",
    "cmdorctrl+g": "go to",
    f10: "edit automations",
    "cmdorctrl+n": "new steel guitar",
    "cmdorctrl+o": "open",
    "cmdorctrl+w": "close",
    "cmdorctrl+s": "save",
    "cmdorctrl+shift+s": "save as",
    f5: "score information",
    f7: "stylesheet",
    f8: "print preview",
    "cmdorctrl+p": "print",
    f12: "preferences",
    "cmdorctrl+q": "quit",
  },
};

export default app;