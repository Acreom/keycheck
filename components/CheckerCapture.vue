<template>
  <div class="checker-wrapper">
    <div class="checker-wrapper__checker">
      <button class="checker-wrapper__close" @click="clear">
        <CloseIcon class="icon" />
      </button>
      <Key
          v-for="(key, index) of capturedKeys"
          :key="key"
          :captured-key="transformKeys([key])[0]"
          :key-index="index"
          :focused="focusedIndex === index"
          @inputKey="onInput"
          @focus="onFocusChanged"
      />
      <Key
          :key="'empty'"
          :key-index="capturedKeys.length"
          :captured-key="null"
          :focused="focusedIndex === capturedKeys.length"
          @inputKey="onInput"
          @focus="onFocusChanged"
      />
    </div>
  </div>
  <CheckerSearch v-if="capturedKeys.length" :query="capturedKeys" />
</template>
<script setup lang="ts">
import {extractKeys, transformKeys} from "~/helpers/shortcuts";
import CloseIcon from "@/assets/icons/CloseIcon.svg?component";

const focusedIndex = ref<number>(0);

const capturedKeys = ref<string[]>([]);

const clear = () => {
  capturedKeys.value = [];
  focusedIndex.value = 0;
}

const onFocusChanged = (index: number) => {
  focusedIndex.value = index;
}

const onInput = (event: KeyboardEvent, index: number) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  const key = [...extractKeys(event ?? null)].filter(key => !capturedKeys.value.includes(key))[0];
  if (!key) {
    return;
  }
  if (focusedIndex.value === capturedKeys.value.length) {
    focusedIndex.value += 1;
  }
  if (index < capturedKeys.value.length) {
    capturedKeys.value.splice(index, 1, key);
  } else {
    capturedKeys.value.push(key);
  }
}
</script>
<style lang="scss" scoped>
.checker-wrapper {
  margin: 4rem auto 0;
  max-width: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &__close {
    position: absolute;
    top: -1.25rem;
    right: -1.25rem;
    outline: none;

    .icon {
      color: #D9D9D9;

      &:hover {
        color: $white;
      }
    }
  }

  &__checker {
    position: relative;
    background: $dark-20;
    user-select: none;
    padding: 1rem;
    border-radius: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }
}
</style>