<script setup lang="ts">
const push = usePush();

const settingsStore = useSettingsStore();

const { data, error } = await useFetch(`/api/user/my-lotties`, {
  method: "GET",
});

if (error.value) {
  console.error(error.value.message);

  push.error({
    title: "Error",
    message: "An error occurred while fetching your animations",
  });
}

useSeoMeta({
  title: "My Animations | Lottiel.ink",
});
</script>

<template>
  <main class="flex flex-col max-w-screen-xl mx-auto w-full p-8">
    <h1>My Animations</h1>

    <p class="pt-3">All lotties that you have uploaded to LottieLink.</p>

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
