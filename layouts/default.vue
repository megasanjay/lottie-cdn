<script setup lang="ts">
const devMode = process.env.NODE_ENV === "development";
</script>

<template>
  <div
    class="relative mx-auto flex w-full flex-col"
    :class="{ 'debug-screens': devMode }"
  >
    <AppHeader />
    <n-back-top />
    <slot />

    <AppFooter />
  </div>
</template>
