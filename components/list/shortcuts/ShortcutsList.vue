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
import { longestCommonSubstring } from 'string-algorithms';

const props = defineProps({
  shortcuts: { type: Object, required: true },
  groupByShortcut: { type: Boolean, default: false }
});
const preprocess = (key: string) => platformPreprocess(key, useState('platform', (): 'mac' | 'win' => 'mac').value);

const shortcutsUsages = computed(() => {
  const shortcuts = Object.keys(props.shortcuts).reduce((acc, key) => ({...acc, [preprocess(key)]: []}), {} as Record<string, string[]>);
  const { $apps } = useNuxtApp();
  Object.keys(props.shortcuts).forEach(key => {
    shortcuts[preprocess(key)].push(props.shortcuts[key].toLowerCase());
  })

  return shortcuts;
});

const shortcutsRemapped = computed(
    () => {
      return Object.keys(props.shortcuts).map(key => {
        const shortcutUsages = shortcutsUsages.value[preprocess(key)];
        const description = longestCommonSubstring(shortcutUsages)[0];
        // const description = props.groupByShortcut ? `${shortcutUsages} usage${shortcutUsages > 1 || shortcutUsages <= 0 ? 's' : ''}` : props.shortcuts[key];
        return {
          keybind: key,
          description
        };
      })
    }
);
</script>
<style lang="scss" scoped>
.shortcuts-list {
  @include list(1rem);
}
</style>
