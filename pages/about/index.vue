<script setup lang="ts">
useSeoMeta({
  title: "About | Lottiel.ink",
});
</script>

<template>
  <main class="flex flex-col max-w-screen-lg mx-auto w-full p-8 h-full">
    <h1 class="heading">About</h1>

    <h2 class="subheading">What is LottieLink?</h2>

    <p class="content">
      LottieLink is a platform designed to make your lottie animation experience
      both enjoyable and efficient. With LottieLink, you have the freedom to
      upload and share as many lotties as you like. Explore an extensive
      collection of lotties, many of which are contributed by the
      <NuxtLink to="https://lottifiles.com">
        <span class="text-url"> LottieFiles</span>
      </NuxtLink>
      community, and feel free to download or link to them for your projects.
    </p>

    <h2 class="subheading">Vue 3 Lottie</h2>

    <p class="content">
      I built a library called
      <NuxtLink to="https://vue3-lottie.vercel.app/">
        <span class="text-url"> Vue 3 Lottie</span>
      </NuxtLink>
      that enables you to use lottie animations in your Vue/Nuxt 3 projects. One
      of the main features of the library is the ability to use lotties both in
      JSON and url format. To use the JSON format, you need to have the JSON
      file in your project. This is the case for almost every other lottie
      library that I have encountered.

      <br />

      The ability to use Lotties in url format is a feature that I believe
      should exist in every lottie library. This is a simple addition that only
      requires a fetch before loading the animation.

      <br />

      This is a rather small feature addition but, in my opinion, it is a
      massive improvement to the developer experience. It allows you to use
      multiple lotties in quick succession without having to download the JSON
      file individually for each lottie. In Vue SPAs that I have built, I use
      the url format almost exclusively.
    </p>

    <h2 class="subheading">LottieFiles project limit</h2>

    <p class="content">
      LottieFiles used to be my go-to place for lotties. It still is probably
      the best collection of of free to use Lotties on the internet. Each lottie
      on their platform also included a cdn link to the json file hosted on
      their platform. This was great for me because I could use the url format
      in my projects.
    </p>

    <p class="content">
      However, with a recent update, LottieFiles has limited the number of
      lottie files you can generate CDN links for to 10 on the free plan. To
      have access to unlimited files, they require you to move to a paid plan. I
      don't agree with these changes and I believe that it is a step in the
      wrong direction. I understand their need to monetize their platform but
      using contributors' free work as a means to limit the adoption of their
      platform is not the way to go about it.
    </p>

    <h2 class="subheading">Project Goal</h2>

    <p class="content">
      This is why I built LottieLink. I want to provide a platform for people to
      share their lotties without any limits. The main goal of this project is
      to have a large collection of lotties that are free to use. The focus is
      on the collection of lotties and not the platform itself. I want to keep
      the platform as simple as possible. Feel free to upload your own or use
      the ones that are already on the platform.
    </p>

    <h2 class="subheading">Accountability</h2>

    <p class="content">
      As a platform that is built on the work of others, I believe that it is my
      responsibility to ensure that the platform is used for its intended
      purpose. I will be monitoring the platform to ensure that the lotties that
      are uploaded are free to use and are confirming to the
      <NuxtLink to="https://lottifiles.com">
        <span class="text-url"> Lottie Simple License</span> </NuxtLink
      >. Any violations will be removed from the platform. I will be adding a
      way for users to report lotties that are not in compliance with the
      license in the near future.
    </p>

    <h2 class="subheading">Final Thoughts</h2>

    <p class="content">
      I don't want this project to be a competitor to LottieFiles. I want it to
      be a complementary platform that developers can use to share their
      lotties. All future updates to the platform will be focused on this core
      goal.
    </p>
  </main>
</template>
