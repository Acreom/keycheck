<template>
  <div class="app-detail">
    <div class="app-detail__stats">
      <AboutApp />
    </div>
    <ShortcutsList :shortcuts="shortcuts" />
  </div>
</template>
<script setup lang="ts">
import AboutApp from "~/components/app/AboutApp.vue";
import ShortcutsList from "~/components/list/shortcuts/ShortcutsList.vue";
import { WEBSITE } from "~/helpers/constants";
import { preprocess } from "~/helpers/shortcuts";
import { AppParams } from "~/types";

const route = useRoute();
const { $apps } = useNuxtApp();

const currentApp = computed(() =>
  $apps.$getApps().find((app: AppParams) => app.id === id),
);
const shortcuts = computed(() => {
  const shortcuts = Object.keys(currentApp.value.shortcuts).map((shortcut) => ({
    keys: preprocess(shortcut),
    description: currentApp.value.shortcuts[shortcut],
    redirect: `/shortcuts/${encodeURIComponent(shortcut.toLowerCase())}/`,
  }));
  const globals = Object.keys(currentApp.value.globals).map((shortcut) => ({
    keys: preprocess(shortcut),
    description: currentApp.value.globals[shortcut],
    redirect: `/shortcuts/${encodeURIComponent(shortcut.toLowerCase())}/`,
    global: true,
  }));
  return [...globals, ...shortcuts];
});

const id = route.params.id;

if (!$apps.$getApps().find((app: AppParams) => app.id === id)) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const description = computed(
  () =>
    `Browse ${Object.keys(shortcuts.value).length} Shortcuts of ${
      currentApp.value.name
    }. Check for Conflicts When Designing Your Own Shortcuts.`,
);
const title = computed(
  () =>
    `${currentApp.value.name} - Browse ${
      Object.keys(shortcuts.value).length
    } Shortcuts | ${WEBSITE}`,
);
useSeoMeta({
  description,
  title,
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});
</script>
<style lang="scss" scoped>
.app-detail {
  @include sizer(4rem);

  &__platform {
    @include sizer(2rem);
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &__shortcuts {
    @include list(1.3125rem);
  }

  :deep(.shortcuts-list) {
    margin-top: 2rem;
  }
}
</style>
