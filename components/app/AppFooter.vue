<script setup lang="ts"></script>

<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10">
    <div class="mx-auto max-w-screen-xl text-center">
      <NuxtLink
        to="/"
        class="flex items-center space-x-3 group justify-center text-2xl font-semibold text-gray-900"
      >
        <img src="/logo.svg" class="w-10 transition-all" alt="" />

        <span
          class="text-2xl font-bold text-slate-700 group-hover:text-cyan-500 transition-all"
        >
          lottiel.ink
        </span>
      </NuxtLink>

      <p class="my-6 text-gray-500">
        A new way to share Lottie animations with the world.
      </p>

      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900">
        <li>
          <NuxtLink to="/about" class="mx-2 hover:underline md:mx-3">
            About
          </NuxtLink>
        </li>

        <li>
          <a href="#" class="mx-2 hover:underline md:mx-3">Contact</a>
        </li>
      </ul>

      <span class="text-sm text-gray-500 sm:text-center">
        © 2023
        <NuxtLink
          href="https://sanjaysoundarajan.dev"
          class="hover:underline hover:text-cyan-500 transition-all"
        >
          Sanjay Soundarajan</NuxtLink
        >. All Rights Reserved.
      </span>
    </div>
  </footer>
</template>
