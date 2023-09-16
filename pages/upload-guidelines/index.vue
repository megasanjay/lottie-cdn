<script setup lang="ts">
useSeoMeta({
  title: "Upload Guidelines | Lottiel.ink",
});
</script>

<template>
  <main class="flex flex-col max-w-screen-lg mx-auto w-full p-8 h-full">
    <h1 class="heading">Upload Guidelines</h1>

    <p class="content font-medium">Last Modified: September 16, 2023</p>

    <p class="content">
      All files uploaded to LottieLink must be free to use. This means that the
      files must be licensed under the
      <NuxtLink to="/lottie-simple-license">
        <span class="text-url"> Lottie Simple License</span> </NuxtLink
      >. If you are unsure about the license of the file, please do not upload
      it to the platform.
    </p>

    <p class="content">
      If you upload an animation that you did not originally create but have
      made edits to, you must properly attribute the original creator and
      provide a link to the original animation in the description. Failure to do
      so may result in your upload being classified as plagiarized content,
      which can be reported and potentially removed from LottieLink.
    </p>

    <p class="content">
      Use descriptive titles and tags to make it easy for users to discover your
      animations.
    </p>

    <p class="content">Do not upload duplicate copies of the same animation.</p>
  </main>
</template>
