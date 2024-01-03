<template>
  <div class="global-shortcut" ref="indicator">
    <Danger class="icon" />
  </div>
</template>
<script setup lang="ts">
import Danger from "@/assets/icons/Danger.svg?component";
import { useTippy } from "vue-tippy";

const indicator = ref<Element>();
useTippy(indicator!, {
  allowHTML: true,
  content: `<div class='tooltip'>This is a global shortcut that will not be overridden by your shortcut.</div>`,
  placement: "top",
  arrow: true,
  theme: "light",
  maxWidth: 300,
  offset: [0, 10],
  delay: 0,
  duration: 0,
});

const props = defineProps({
  empty: Boolean,
});
</script>
<style lang="scss" scoped>
.global-shortcut {
  .icon {
    color: $orange;
  }
}
</style>
