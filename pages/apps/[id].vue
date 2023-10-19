<template>
  <div class="app-detail">
    <div class="app-detail__back">
      <nuxt-link to="/apps" class="app-detail__back__wrapper">
        <ArrowBack class="icon" />
        <span>BACK</span>
      </nuxt-link>
    </div>
    <div class="app-detail__stats">
      <AboutApp />
    </div>
    <div class="app-detail__platform">
      <PlatformSwitcher />
    </div>
    <ShortcutsList :shortcuts="shortcuts" />
  </div>
</template>
<script setup lang="ts">
import ArrowBack from "@/assets/icons/ArrowBack.svg?component";
import AboutApp from "~/components/app/AboutApp.vue";
import ShortcutsList from "~/components/list/shortcuts/ShortcutsList.vue";
import {WEBSITE} from "~/helpers/constants";

const route = useRoute();
const { $apps } = useNuxtApp();

const currentApp = computed(() => $apps.$getApps().find(app => app.id === id));
const shortcuts = computed(() => ({...currentApp.value.shortcuts, ...currentApp.value.globals}));

const id = route.params.id;

if (!$apps.$getApps().find(app => app.id === id)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}

const description = computed(() => `Browse ${Object.keys(shortcuts.value).length} Shortcuts of ${currentApp.value.name}. Check for Conflicts When Designing Your Own Shortcuts.`);
const title = computed(() => `${currentApp.value.name} - Browse ${Object.keys(shortcuts.value).length} Shortcuts | ${WEBSITE}`);
const ogImageOptions = {
  title: title.value.split(' | ')[0],
  description: description.value,
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
<style lang="scss" scoped>
.app-detail {
  @include sizer;

  &__back {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    &__wrapper {
      @include font-system-ui;
      min-width: 111.75px;
      min-height: 43.5px;
      background-image: url("/Union.svg");
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      gap: 0.90625rem;
      color: #676667;
      text-align: center;
      font-size: 0.9273125rem;
      font-style: normal;
      font-weight: 600;
      line-height: 114.2%;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }

  &__platform {
    @include sizer(2rem);
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &__shortcuts {
    @include list(1.3125rem);
  }
}
</style>