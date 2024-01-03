<template>
  <button
    class="key"
    :class="{
      empty: !capturedKey,
      'has-focus': focused,
    }"
    @click="onFocus"
  >
    {{ capturedKey || "Press a key" }}
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  capturedKey: {
    type: String,
    required: false,
  },
  keyIndex: Number,
  focused: Boolean,
});

const emit = defineEmits(["focus", "inputKey"]);

const onKeyDown = (event: KeyboardEvent) => {
  emit("inputKey", event, props.keyIndex);
};

const isFocused = computed(() => {
  return props.focused;
});

watch(
  isFocused,
  (val, _prevVal) => {
    if (typeof window == "undefined") return;
    if (val) {
      window.addEventListener("keydown", onKeyDown);
    } else {
      window.removeEventListener("keydown", onKeyDown);
    }
  },
  { immediate: true },
);

const onFocus = () => {
  emit("focus", props.keyIndex);
};
</script>
<style lang="scss" scoped>
.key {
  width: 7rem;
  height: 7rem;
  position: relative;
  cursor: default;
  border-radius: 1.5rem;
  background-image: image-set("/key.png" 1x, "/key@2x.png" 2x);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  outline: none;

  font-variant-numeric: tabular-nums;
  color: $blueGrey50;
  font-size: 2.625rem;
  font-weight: 500;
  line-height: 3.75rem;
  letter-spacing: -0.0515rem;
  text-align: center;
  padding: 0 0 1.5rem 0;

  &.has-focus {
    outline: 4px solid #83d2ff;
  }

  &.empty {
    font-size: 0.6875rem;
  }

  &__image {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

  &__input {
    position: absolute;
    z-index: 2;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 2.6875rem;
    background: none;
    outline: none;
    user-select: all;
  }

  &__letter {
    position: absolute;
    z-index: 2;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
