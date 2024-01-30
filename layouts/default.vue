<template>
  <Backdrop />
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
const isMobile = useState("isMobile", () => false);
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua,
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const { $search } = useNuxtApp();
const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  ogImage: `${runtimeConfig.public.url}/og.png`,
});

onMounted(() => {
  $search.$index();
  if (!navigator) return;
  isMobile.value = getDeviceType() === "mobile";
});
</script>
