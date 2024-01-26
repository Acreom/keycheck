<template>
  <div class="checker-wrapper" :class="{ empty: isEmpty }">
    <div v-show="isEmpty" class="checker-wrapper__empty">
      Find usage of any shortcut. Try
      <kbd>{{ transformKeys([preprocess("cmdorctrl")])[0] }}</kbd
      ><kbd>K</kbd>
    </div>
    <div class="checker-wrapper__checker" v-show="!isEmpty">
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
        :focused="focusedIndex === capturedKeys.length"
        @inputKey="onInput"
        @focus="onFocusChanged"
      />
    </div>
    <input
      ref="mobileInput"
      placeholder="Mobile Input"
      autocapitalize="none"
      v-if="isMobile"
    />
  </div>
  <CheckerCaptureControls @input="onInputKey" />
  <CheckerSearch v-if="capturedKeys.length" :query="capturedKeys" />
  <AppAbout />
</template>
<script setup lang="ts">
import {
  extractKeys,
  transformKeys,
  platformPreprocessCapturedKeys,
  preprocess,
} from "~/helpers/shortcuts";
import CloseIcon from "@/assets/icons/CloseIcon.svg?component";
import CheckerCaptureControls from "@/components/checker/CheckerCaptureControls.vue";
import Key from "~/components/checker/Key.vue";
import { isEqualWith } from "lodash";

const mobileInput = ref<HTMLInputElement | null>(null);

const isEmpty = computed(() => capturedKeys.value.length === 0);
const isMobile = useState("isMobile", () => false);

const focusedIndex = ref<number>(0);

const capturedRaw = ref<string[]>([]);
const capturedKeys = computed(() => {
  return platformPreprocessCapturedKeys(capturedRaw.value);
});

const clear = () => {
  capturedRaw.value = [];
  focusedIndex.value = 0;
};

const onFocusChanged = (index: number) => {
  focusedIndex.value = index;
  if (isMobile) {
    mobileInput.value?.focus();
  }
};

const onInputKey = (key: string) => {
  if (focusedIndex.value === capturedRaw.value.length) {
    focusedIndex.value += 1;
  }
  if (focusedIndex.value < capturedRaw.value.length) {
    capturedRaw.value.splice(focusedIndex.value, 1, key);
  } else {
    capturedRaw.value.push(key);
  }
};

const onInput = (event: KeyboardEvent, index: number) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  if (event.key === "Escape") {
    clear();
    return;
  }
  if (event.key === "Backspace" || event.key === "Delete") {
    if (index === 0) {
      clear();
    } else {
      capturedRaw.value.splice(index, 1);
      focusedIndex.value -= 1;
    }
    return;
  }
  const key = [...extractKeys(event ?? null)].filter(
    (key) => !capturedRaw.value.includes(key),
  )[0];
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
};
</script>
<style lang="scss" scoped>
.checker-wrapper {
  margin: 4rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:not(.empty) {
    max-width: 35rem;
    margin: 4.13rem auto 0;
  }

  &__empty {
    @include h1;
    max-width: 50rem;

    kbd {
      font-style: normal;
      font-size: 3.4rem;
      font-weight: 500;
      letter-spacing: -0.014rem;
      color: $blueGrey50;
      border-radius: 8px;
      padding: 0 1rem;
      background: rgba(241, 241, 241, 0.2);
      margin-right: 0.5rem;
      box-shadow:
        0px 0.38741591572761536px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0.9310142993927002px 0px 0px rgba(0, 0, 0, 0.07),
        0px 1.7530173063278198px 0.5364286303520203px 0px rgba(0, 0, 0, 0.08),
        0px 3.1270833015441895px 3.2195169925689697px 0px rgba(0, 0, 0, 0.09),
        0px 5.848865509033203px 9.389363288879395px 0px rgba(0, 0, 0, 0.1),
        0px 0px 0px 1px rgba(255, 255, 255, 0.2) inset;
    }
  }

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
      color: #d9d9d9;

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
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }
}
</style>
