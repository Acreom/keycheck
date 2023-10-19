<template>
  <div class="shortcuts-list">
    <ShortcutDetails
        v-for="shortcut of shortcutsRemapped"
        :key="shortcut.keybind"
        :keybind="shortcut.keybind"
        :description="shortcut.description"
        :link="true"
        :reverse="groupByShortcut"
    />
  </div>
</template>
<script setup lang="ts">
import ShortcutDetails from "~/components/list/shortcuts/ShortcutDetails.vue";
import {platformPreprocess} from "~/helpers/shortcuts";

const props = defineProps({
  shortcuts: { type: Object, required: true },
  groupByShortcut: { type: Boolean, default: false }
});
const preprocess = (key: string) => platformPreprocess(key, useState('platform', () => 'mac').value);

const shortcutsUsages = computed(() => {
  const shortcuts = Object.keys(props.shortcuts).reduce((acc, key) => ({...acc, [preprocess(key)]: 0}), {} as Record<string, number>);
  const { $apps } = useNuxtApp();
  $apps.$getApps().forEach(app => {
    Object.keys(app.shortcuts).forEach(key => {
      shortcuts[preprocess(key)] += 1;
    })
  })
  return shortcuts;
});

const shortcutsRemapped = computed(
    () => Object.keys(props.shortcuts).map(key => {
      const shortcutUsages = shortcutsUsages.value[preprocess(key)];
      const description = props.groupByShortcut ? `${shortcutUsages} usage${shortcutUsages > 1 || shortcutUsages <= 0 ? 's' : ''}` : props.shortcuts[key];
      return {
        keybind: key,
        description
      };
    })
);
</script>
<style lang="scss" scoped>
.shortcuts-list {
  @include list(1rem);
}
</style>
