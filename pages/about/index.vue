<script setup lang="ts"></script>

<template>
  <main class="flex flex-col max-w-screen-lg mx-auto w-full p-8 h-full">
    <section class="prose mt-10 min-h-[300px] max-w-none">
      <h1 class="heading">About</h1>

      <h2 class="subheading">What is LottieLink?</h2>

      <p class="content">
        LottieLink is a platform for you to upload and share your lotties. You
        have no limit on how many lotties you can upload. Feel free to explore
        the collection of lotties and download them for your own use. Many of
        them are from the
        <NuxtLink to="https://lottifiles.com">
          <span className="text-url cursor-pointer text-base">
            LottieFiles
          </span>
        </NuxtLink>
        community.
      </p>

      <h2 class="subheading">Vue 3 Lottie</h2>

      <p class="content">
        I built a library called
        <NuxtLink to="https://vue3-lottie.vercel.app/">
          <span className="text-url cursor-pointer text-base">
            Vue 3 Lottie
          </span>
        </NuxtLink>
        that enables you to use lottie animations in your Vue/Nuxt 3 projects.
        One of the main features of the library is the ability to use lotties
        both in JSON and url format. To use the JSON format, you need to have
        the JSON file in your project. This is the case for almost every other
        lottie library that I have encountered.

        <br />

        The ability to use Lotties in url format is a feature that I believe
        should exist in every lottie library. This is a simple addition that
        only requires a fetch before loading the animation.

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
        the best collection of of free to use Lotties on the internet. Each
        lottie on their platform also included a cdn link to the json file
        hosted on their platform. This was great for me because I could use the
        url format in my projects.
      </p>

      <p class="content">
        However, with a recent update, LottieFiles has limited the number of
        lottie files you can generate CDN links for to 10 on the free plan. To
        have access to unlimited files, they require you to move to a paid plan.
      </p>
    </section>
  </main>
</template>
