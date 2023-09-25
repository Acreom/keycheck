import { defineStore } from "pinia";

export interface Options {
  platform: "win" | "mac";
}

export const useOptionsStore = defineStore({
  id: "options",
  state: (): Options => ({
    platform: "mac",
  }),
  actions: {
    setPlatform(platform: "win" | "mac") {
      this.platform = platform;
    },
  },
  getters: {
    currentPlatform: (state) => {
      return state.platform;
    },
  },
});
