<script setup lang="ts">
const message = useMessage();
const route = useRoute();

const settingsStore = useSettingsStore();

const query = useRoute().query;

console.log("query", query);
console.log("route.fullPath", route.fullPath);

const { data, error } = await useFetch(`/api/search`, {
  method: "GET",
  query: {
    q: query.q,
  },
  key: route.fullPath,
  server: true,
});

console.log("data", data.value);

if (error.value) {
  console.error(error.value.message);
  message.error("Something went wrong. " + error.value.data.message);
}
</script>

<template>
  <main class="flex flex-col max-w-screen-xl mx-auto w-full p-8">
    <h1>
      Search results for
      <span class="text-cyan-600">
        {{ query.q }}
      </span>
    </h1>

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

    <GridOfLotties :lottieList="data" />
  </main>
</template>
