<template>
  <div class="checker-controls">
    <div class="checker-controls__keys">
      <button v-for="key of keys" :key="key" @click="emit('input', key)">
        <SmallKey> {{ getDisplayKey(key) }}</SmallKey>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
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
  "enter",
  "space",
  "backspace",
  "delete",
  "tab",
  "esc",
  "plus",
  "minus",
  "#",
  "@",
  "$",
];

const getDisplayKey = (key: string) => {
  return transformKeys([platformPreprocess(key, platform.value)])[0];
};
</script>
<style lang="scss" scoped>
.checker-controls {
  width: 100%;
  padding: 0 1rem;
  margin: 4rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  &__keys {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.625rem;
    flex-wrap: wrap;

    button {
      outline: none;
    }

    :deep(.small-key) {
      box-shadow: none;
      min-width: 1.5rem;
      max-width: 2rem;
    }
  }
}
</style>
