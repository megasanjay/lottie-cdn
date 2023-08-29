<script setup lang="ts">
const route = useRoute();
const message = useMessage();

const settingsStore = useSettingsStore();

const cdnLottieUrl = ref("https://cdn.lottiel.ink/assets");

const { data, error } = await useFetch(`/api/lottie`, {
  method: "GET",
});

if (error.value) {
  console.error(error.value.message);
  message.error("Something went wrong. " + error.value.data.message);
}
</script>

<template>
  <main class="flex flex-col max-w-screen-xl mx-auto w-full p-8">
    <h1>Animations</h1>

    <p class="pt-3">
      A collection of animations that you can use in your projects. You can
      download the JSON file or copy the URL and use it in your project.
    </p>

    <n-divider />

    <n-space justify="start">
      <n-space>
        <span class="text-sm text-slate-600">Always open in new tab</span>

        <n-switch
          :round="false"
          v-model:value="settingsStore.openLottiesInNewTab"
        />
      </n-space>
    </n-space>

    <n-divider />

    <div class="grid grid-cols-4 gap-8 py-5">
      <div
        v-for="lottie in data"
        class="border p-2 shadow-md rounded-xl hover:shadow-lg transition-all cursor-pointer flex flex-col space-y-2 justify-center"
      >
        <NuxtLink
          :to="`/animation/${lottie.id}`"
          :target="settingsStore.openLottiesInNewTab ? '_blank' : ''"
        >
          <ClientOnly>
            <Vue3Lottie :animation-link="`${cdnLottieUrl}/${lottie.id}.json`" />
          </ClientOnly>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
