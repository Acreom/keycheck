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
    <input ref="mobileInput" placeholder="Mobile Input" autocapitalize="none" v-if="isMobile" />
  </div>
  <CheckerCaptureControls @input="onInputKey"/>
  <CheckerSearch v-if="capturedKeys.length" :query="capturedKeys" />
</template>
<script setup lang="ts">
import {extractKeys, transformKeys, platformPreprocessCapturedKeys } from "~/helpers/shortcuts";
import CloseIcon from "@/assets/icons/CloseIcon.svg?component";
import CheckerCaptureControls from "@/components/checker/CheckerCaptureControls.vue";
import Key from "~/components/checker/Key.vue";

const mobileInput = ref<HTMLInputElement | null>(null);

const platform = useState('platform', () => "mac");
const isMobile = useState('isMobile', () => false);

const focusedIndex = ref<number>(0);

const capturedRaw = ref<string[]>([]);
const capturedKeys = computed(() => {
  return platformPreprocessCapturedKeys(capturedRaw.value);
});

const clear = () => {
  capturedRaw.value = [];
  focusedIndex.value = 0;
}

const onFocusChanged = (index: number) => {
  focusedIndex.value = index;
  if (isMobile) {
    mobileInput.value?.focus();
  }
}

const onInputKey = (key: string) => {
if (focusedIndex.value === capturedRaw.value.length) {
    focusedIndex.value += 1;
  }
  if (focusedIndex.value < capturedRaw.value.length) {
    capturedRaw.value.splice(focusedIndex.value, 1, key);
  } else {
    capturedRaw.value.push(key);
  }
}

const onInput = (event: KeyboardEvent, index: number) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  if (event.key === 'Backspace' || event.key === 'Delete') {
    if (index === 0) {
      clear();
    } else {
      capturedRaw.value.splice(index , 1);
      focusedIndex.value -= 1;
    }
    return;
  }
  const key = [...extractKeys(event ?? null)].filter(key => !capturedRaw.value.includes(key))[0];
  if (!key) {
    return;
  }

  if (focusedIndex.value === capturedRaw.value.length) {
    focusedIndex.value += 1;
  }
  if (index < capturedRaw.value.length) {
    capturedRaw.value.splice(index, 1, key);
  } else {
    capturedRaw.value.push(key);
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
  flex-direction: column;

  input {
    margin-top: 1rem;
    outline: none;
    border-radius: 6px;
    padding: 0 0.5rem;
    background: $dark-20;
  }

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