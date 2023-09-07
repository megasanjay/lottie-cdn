<script setup lang="ts">
const route = useRoute();

const devMode = process.env.NODE_ENV === "development";

const hideDivider = computed(() => {
  if (!route.path) return false;

  const hiddenRoutes = ["/auth/login", "/auth/signup"];

  return hiddenRoutes.includes(route.path);
});
</script>

<template>
  <div
    class="relative mx-auto flex h-screen w-full flex-col"
    :class="{ 'debug-screens': devMode }"
  >
    <AppHeader />
    <n-back-top />
    <slot />

    <n-divider v-if="!hideDivider" />

    <AppFooter />
  </div>
</template>
