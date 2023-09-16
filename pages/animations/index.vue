<script setup lang="ts">
const push = usePush();

const settingsStore = useSettingsStore();

const { data, error } = await useFetch(`/api/lotties`, {
  method: "GET",
});

if (error.value) {
  console.error(error.value.message);

  push.error({
    title: "Error",
    message: "An error occurred while fetching the animations",
  });
}

useSeoMeta({
  title: "Animations | Lottiel.ink",
});
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
        <span class="text-sm text-slate-600">
          Always open lotties in new tab
        </span>

        <n-switch
          :round="false"
          v-model:value="settingsStore.openLottiesInNewTab"
        />
      </n-space>
    </n-space>

    <n-divider />

    <GridOfLotties :lottieList="data as any" />
  </main>
</template>
