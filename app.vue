<template>
  <NaiveConfig>
    <Notivue v-slot="item">
      <NotivueSwipe :item="item">
        <Notifications :item="item" :theme="materialTheme" />
      </NotivueSwipe>
    </Notivue>

    <NuxtLoadingIndicator color="#065f46" :height="5" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NaiveConfig>
</template>

<script setup lang="ts">
import { ThemeConfig } from "@bg-dev/nuxt-naiveui";
import { materialTheme } from "notivue";

const themeConfig: ThemeConfig = {
  dark: {}, // Theme options applied on dark mode
  light: {}, // Theme options applied on light mode
  mobile: {}, // Theme options applied on mobile only
  mobileOrTablet: {}, // Theme options applied on mobile and tablet
  shared: {}, // Common theme options
};

useHead({
  title: "Lottiel.ink",
  link: [
    { href: "/favicon.ico", rel: "icon", type: "image/x-icon" },
    {
      href: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    {
      href: "/favicon-16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
    },
    {
      href: "/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
    },
    {
      color: "#5bbad5",
      href: "/safari-pinned-tab.svg",
      rel: "mask-icon",
    },
    {
      href: "/site.webmanifest",
      rel: "manifest",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Lottiel.ink is a new way to store and discover lottie animations. With CDN hosting, using Lottie animations on your website has never been easier.",
    },
    {
      name: "msapplication-TileColor",
      content: "#2b5797",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
});
</script>
