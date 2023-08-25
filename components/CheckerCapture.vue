<template>
  <div v-if="!capturedEvent" class="checker empty">
    Input a shortcut to see what other tools use it.
  </div>
  <div v-else class="checker">
    <Key v-for="key of transformedKeys" :key="key">{{key}}</Key>
  </div>
  <div class="search">
    <CheckerSearch :query="extractedKeys" />
  </div>
</template>
<script setup lang="ts">
import {extractKeys, transformKeys} from "~/helpers/shortcuts";

const capturedEvent = ref<KeyboardEvent | null>(null);

const extractedKeys = computed(() => {
  return extractKeys(capturedEvent.value ?? null);
})

const transformedKeys = computed(() => {
  return transformKeys(extractedKeys.value)
})

const onKeyPress = (event: KeyboardEvent) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  capturedEvent.value = event;
}

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyPress);
});

onMounted(() => {
  window.addEventListener('keydown', onKeyPress);
});
</script>
<style lang="scss" scoped>
.checker {
  margin: 64px auto 0;
  color: $white;
  max-width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  user-select: none;
}
</style>