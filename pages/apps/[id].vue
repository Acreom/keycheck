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
    <div class="app-detail__shortcuts">
      <ShortcutDetails
          v-for="shortcut of shortcutsRemapped"
          :key="shortcut.keybind"
          :keybind="shortcut.keybind"
          :description="shortcut.description"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import ArrowBack from "@/assets/icons/ArrowBack.svg?component";
import AboutApp from "~/components/AboutApp.vue";
const route = useRoute();
const { $apps } = useNuxtApp();

const currentApp = computed(() => $apps.$getApps().find(app => app.id === id));
const shortcuts = computed(() => ({...currentApp.value.shortcuts, ...currentApp.value.globals}));
const shortcutsRemapped = computed(
    () => Object.keys(shortcuts.value).map(key => ({
      keybind: key,
      description: shortcuts.value[key]
    }))
);

const id = route.params.id;

if (!$apps.$getApps().find(app => app.id === id)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
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
      min-width: 6.984375rem;
      min-height: 2.71875rem;
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
    }
  }

  &__platform {
    margin-top: 0.875rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &__shortcuts {
    @include list(1.3125rem);
  }
}
</style>