<template>
  <AppsList />
</template>
<script setup lang="ts">
import AppsList from "~/components/list/apps/AppsList.vue";
import { WEBSITE } from "~/helpers/constants";

const { $apps } = useNuxtApp();
const count = computed(() => $apps.$appsCount());
const description = computed(
  () =>
    `Browse Shortcuts of ${count.value} Apps for Developers. Check for Conflicts When Designing Your Own Shortcuts.`,
);
const title = computed(() => `Browse ${count.value} Apps | ${WEBSITE}`);

useSeoMeta({
  description,
  title,
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});
</script>
