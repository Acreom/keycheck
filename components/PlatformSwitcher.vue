<template>
  <div class="platform-switcher">
    <button
      ref="macSwitcher"
      :class="{ active: platform === 'mac' }"
      @click="setPlatform('mac')"
      @mouseover="onMouseOver('macOS')"
    >
      <MacIcon class="icon" />
    </button>
    <button
      ref="winSwitcher"
      :class="{ active: platform === 'win' }"
      @click="setPlatform('win')"
      @mouseover="onMouseOver('Windows')"
    >
      <WindowsIcon class="icon" />
    </button>
  </div>
</template>
<script setup lang="ts">
import WindowsIcon from "@/assets/icons/WindowsIcon.svg?component";
import MacIcon from "@/assets/icons/MacIcon.svg?component";
import { useTippy } from "vue-tippy";
import { useAsyncData } from "#app";

const platform = useState("platform", () => "win");

const setPlatform = (value: "win" | "mac") => {
  platform.value = value;
};

const macSwitcher = ref<Element>();
const winSwitcher = ref<Element>();
const onMouseOver = (platform: string) => {
  const switcher = platform === "macOS" ? macSwitcher : winSwitcher;
  useTippy(switcher!, {
    allowHTML: true,
    content: `<div class='tooltip'>Show shortcuts in ${platform} form</div>`,
    placement: "bottom",
    arrow: true,
    theme: "light",
    maxWidth: 300,
    offset: [0, 10],
    delay: 0,
    duration: 0,
  });
};

useAsyncData(async () => {});
</script>
<style lang="scss" scoped>
.platform-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 0.65rem;
    border-radius: 50%;

    &:hover {
      .icon {
        opacity: 0.6;
      }
    }

    .icon {
      color: $white;
      opacity: 0.2;
      width: 20px;
      height: 20px;
    }

    &.active {
      background: linear-gradient(
          0deg,
          rgba(94, 94, 94, 0.18) 0%,
          rgba(94, 94, 94, 0.18) 100%
        ),
        rgba(255, 255, 255, 0.07);
      background-blend-mode: color-dodge, normal;
      .icon {
        opacity: 1;
      }
    }
  }
}
</style>
