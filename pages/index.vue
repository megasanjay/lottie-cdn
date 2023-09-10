<script setup>
const user = useUser();
</script>

<template>
  <main>
    <section class="px-3">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-6 text-slate-800 text-4xl font-extrabold md:text-5xl xl:text-6xl"
          >
            A new way to serve your Lottie animations
          </h1>

          <p class="max-w-2xl mb-6 lg:mb-8 text-lg lg:text-2xl font-medium">
            Upload your Lottie animations and use our CDN to serve them in your
            projects. Bypass the 10 animation limit on LottieFiles and use as
            many as you want.
          </p>

          <n-space align="center">
            <NuxtLink
              to="/animations"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-emerald-600 hover:bg-emerald-800 transition-all"
            >
              View Lotties
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </NuxtLink>

            <NuxtLink to="/auth/signup" v-if="!user">
              <n-button type="primary" size="large" secondary>
                <template #icon>
                  <Icon name="ph:sign-in-bold" />
                </template>

                Sign up
              </n-button>
            </NuxtLink>
          </n-space>
        </div>

        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://www.svgrepo.com/show/530624/coconut-tree.svg"
            alt="hero image"
          />
        </div>
      </div>
    </section>

    <section class="bg-emerald-50 px-3">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="max-w-screen-lg sm:text-lg">
          <h2 class="mb-4 text-4xl font-bold">Why does this exist?</h2>

          <p class="mb-4">
            LottieFiles is a great platform for hosting Lottie animations. They
            also provide a CDN for hosting your animations. However, the free
            plan only allows you to host 10 animations. This is a problem if you
            don't want to download the JSON file for every animation you want to
            use in your project.
          </p>

          <p class="mb-4">
            I created a library for users of the Vue/Nuxt ecosystem to use the
            beautiful lotties from LottieFiles in their projects. This library
            also supports importing lotties directly from a URL to prevent the
            need to download the JSON file.
          </p>

          <p class="mb-4 font-medium">
            This is where lottiel.ink comes in. You can use this platform to
            host your lotties and use them in your projects. You can also
            download the JSON file if you want to host the lottie yourself.
          </p>

          <n-space align="center">
            <NuxtLink to="https://vue3-lottie.vercel.app/">
              <n-button type="info" secondary size="large">
                <template #icon>
                  <Icon name="fa-regular:laugh-beam" />
                </template>

                Vue the library
              </n-button>
            </NuxtLink>

            <NuxtLink to="/about">
              <n-button secondary size="large">
                <template #icon>
                  <Icon name="fa-regular:laugh-beam" />
                </template>

                Learn more about LottieLink
              </n-button>
            </NuxtLink>
          </n-space>
        </div>
      </div>
    </section>
  </main>
</template>
