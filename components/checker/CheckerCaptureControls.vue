<template>
  <div class="checker-controls">
    <PlatformSwitcher />
    <div class="checker-controls__keys">
      <button
          v-for="key of keys"
          :key="key"
          @click="emit('input', key)">
        <SmallKey> {{ getDisplayKey(key) }}</SmallKey>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {platformPreprocess, transformKeys} from "../../helpers/shortcuts";

const emit = defineEmits(['input']);
const platform = useState('platform', () => "mac");

const keys = ['meta', 'ctrl', 'alt', 'shift', 'up', 'down', 'left', 'right', 'enter', 'space', 'backspace', 'tab', 'esc', 'plus', 'minus', '#'];

const getDisplayKey = (key: string) => {
  return transformKeys([platformPreprocess(key, platform.value)])[0]
}

</script>
<style lang="scss" scoped>
.checker-controls {
  width: 100%;
  margin: 4rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__keys {
    display:flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.625rem;

    :deep(.small-key) {
      box-shadow: none;
      min-width: 1.5rem;
      max-width: 2rem;
    }
  }
}
</style>