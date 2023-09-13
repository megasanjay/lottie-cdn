<script setup lang="ts"></script>

<template>
  <footer
    class="p-4 bg-emerald-50/90 border-t border-b border-emerald-600 md:p-8 lg:p-10"
  >
    <div class="mx-auto w-max max-w-screen-xl text-center">
      <NuxtLink
        to="/"
        class="flex items-center space-x-3 group justify-center text-2xl font-semibold text-gray-900"
      >
        <img src="/logo.svg" class="w-10 transition-all" alt="" />

        <span
          class="text-2xl font-bold group-hover:text-emerald-600 transition-all"
        >
          lottiel.ink
        </span>
      </NuxtLink>

      <p class="mb-5 mt-2">A new way to share Lotties with the world!</p>

      <n-divider />

      <ul class="flex flex-wrap justify-center items-center my-5 divide-x">
        <li>
          <NuxtLink to="/about" class="mx-2 text-url md:mx-3"> About </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/contact" class="mx-2 text-url md:mx-3">
            Contact
          </NuxtLink>
        </li>
      </ul>

      <n-divider />

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
