<template>
  <div class="global-shortcut" data-text="This is a global shortcut that will not be overridden by your shortcut.">
    <Danger class="icon" />
  </div>
</template>
<script setup lang="ts">
import Danger from "@/assets/icons/Danger.svg?component";

const props = defineProps({
  empty: Boolean
});
</script>
<style lang="scss" scoped>
.global-shortcut {
  position: relative;

  .icon {
    color: $orange;
  }

  &:hover:before, &:hover:after {
    display: block;
  }

  &:before {
      font-size: 0.6875rem;
      content: attr(data-text);
      position:absolute;

      left:50%;
      transform: translateX(-50%);
      bottom: 100%;
      margin-bottom: 1rem;

      width: 15rem;
      padding: 0.625rem;
      border-radius: 10px;
      background: #000;
      color: #fff;
      text-align: center;

      display:none;
  }

  &:after {
    content: "";
    position:absolute;

    left:50%;
    transform: translateX(-50%);

    bottom: 100%;
    margin-bottom: -5px;

    border: 10px solid #000;
    border-color: black transparent transparent transparent;

    display:none;
  }
}
</style>