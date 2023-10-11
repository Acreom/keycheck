<template>
  <div class="shortcuts-list">
    <ShortcutDetails
        v-for="shortcut of shortcutsRemapped"
        :key="shortcut.keybind"
        :keybind="shortcut.keybind"
        :description="shortcut.description"
        :link="true"
    />
  </div>
</template>
<script setup lang="ts">

import ShortcutDetails from "~/components/list/shortcuts/ShortcutDetails.vue";

const props = defineProps({
  shortcuts: { type: Object, required: true }
});

const shortcutsRemapped = computed(
    () => Object.keys(props.shortcuts).map(key => ({
      keybind: key,
      description: props.shortcuts[key]
    }))
);
</script>
<style lang="scss" scoped>
.shortcuts-list {
  @include list(1rem);
}
</style>
