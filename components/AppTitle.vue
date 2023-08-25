<template>
  <h1>Keyboard Shortcut Checker</h1>
  <p>Check availability of keyboard shortcuts for your app. Currently shows shortcuts of {{count}} tools <nuxt-link to="/apps">(see list)</nuxt-link>. This app is open sourced on <nuxt-link to="https://github.com/acreom">github.com/acreom</nuxt-link>.</p>
</template>
<script setup lang="ts">
const {$apps} = useNuxtApp();
const count = computed(() => {
  return $apps.$getApps().length;
})
</script>
<style lang="scss" scoped>
h1 {
  color: $white;
  text-align: center;
  font-size: 3.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 4.425rem;
}

p {
  color: $blueGrey300;
  text-align: center;
  max-width: 640px;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.134rem;
  margin: 32px auto 0;
}
</style>