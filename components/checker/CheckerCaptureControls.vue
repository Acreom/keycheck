<template>
  <div class="divider"></div>
  <div class="checker-controls">
    <div class="checker-controls__title">
      <KeyboardIcon class="icon" /> Insert Special Key
    </div>
    <div class="checker-controls__keys">
      <button v-for="key of keys" :key="key" @click="emit('input', key)">
        <SmallKey :kb-key="getDisplayKey(key)" />
      </button>
    </div>
  </div>
  <div class="divider"></div>
</template>
<script setup lang="ts">
import KeyboardIcon from "@/assets/icons/KeyboardIcon.svg?component";
import { platformPreprocess, transformKeys } from "~/helpers/shortcuts";

const emit = defineEmits(["input"]);
const platform = useState("platform", (): "mac" | "win" => "mac");

const keys = [
  "win",
  "meta",
  "ctrl",
  "alt",
  "shift",
  "fn",
  "up",
  "down",
  "left",
  "right",
  "home",
  "end",
  "pageup",
  "pagedown",
  "enter",
  "space",
  "backspace",
  "delete",
  "tab",
  "esc",
  "plus",
  "minus",
  "=",
  "#",
  "@",
  "$",
];

const getDisplayKey = (key: string) => {
  return transformKeys([platformPreprocess(key, platform.value)])[0];
};
</script>
<style lang="scss" scoped>
.divider {
  margin-top: 2.7rem;
  height: 1px;
  background: rgba(#e2e2e2, 0.1);
  width: calc(100% - 1rem * 2);
  margin-left: 1rem;
}
.checker-controls {
  width: 100%;
  padding: 0 1rem;
  margin: 2.7rem auto 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 11rem;

  &__title {
    @include p;
    display: flex;
    align-items: center;
    gap: 9px;
    color: rgba(255, 255, 255, 0.77);
    white-space: pre;
    font-weight: 400;
    font-size: 1.25rem;
    .icon {
      flex-shrink: 0;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__keys {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.625rem;
    flex-wrap: wrap;

    button {
      outline: none;
    }

    :deep(.small-key) {
      box-shadow: none;
      max-width: 3rem;
      width: 100%;
      padding: 0 0.5rem;
      border-radius: 0.5rem;

      &:hover {
        background: rgba(241, 241, 241, 0.2);
      }
    }
  }
}
</style>
