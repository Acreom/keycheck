<template>
  <StaticChecker />
</template>
<script setup lang="ts">
import StaticChecker from "~/components/checker/StaticChecker.vue";
import {WEBSITE} from "~/helpers/constants";
import {platformPreprocess} from "~/helpers/shortcuts";
const {$apps} = useNuxtApp();
const route = useRoute();
const keybind = computed(() => route.params.keybind);
const matches = computed(
    () => {
      const windowsMatches = $apps.$getShortcutsMatches(platformPreprocess(keybind.value as string, 'win'), 'win');
      const macMatches = $apps.$getShortcutsMatches(platformPreprocess(keybind.value as string, 'mac'), 'mac');
      const merged = new Set(
          [
              ...windowsMatches.map((match: any) => `${match.name}-${match.description}`),
              ...macMatches.map((match: any) => `${match.name}-${match.description}`)
          ]
      );
      return Array.from(merged).filter((match: any) => !match.partial).length;
    }
);
const description = computed(() => `Browse ${matches.value} matches of the ${keybind.value} shortcut. Check for conflicts when designing your own shortcuts.`);
const title = computed(() => `${keybind.value} - Browse ${matches.value} matches | ${WEBSITE}`);
const ogImageOptions = {
  title: title.value.split(' | ')[0],
  description: description.value
}

defineOgImage(ogImageOptions)
useSeoMeta({
  description,
  title,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})

</script>