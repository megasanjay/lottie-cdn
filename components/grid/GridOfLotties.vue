<script setup lang="ts">
interface LottieItem {
  id: string;
  created_at: string;
  created_by: string;
}

defineProps({
  lottieList: {
    type: Array as PropType<LottieItem[]>,
    required: true,
    default: () => [],
  },
});

const settingsStore = useSettingsStore();

const cdnLottieUrl = ref("https://cdn.lottiel.ink/assets");
</script>

<template>
  <div class="grid grid-cols-4 gap-8 py-5">
    <div
      v-for="lottie in lottieList"
      class="border p-2 shadow-md rounded-xl hover:shadow-lg transition-all cursor-pointer flex flex-col space-y-2 justify-center"
    >
      <NuxtLink
        :to="`/animation/${lottie.id}`"
        :target="settingsStore.openLottiesInNewTab ? '_blank' : ''"
      >
        <ClientOnly>
          <template #fallback>
            <div class="flex justify-center items-center">
              <n-skeleton height="250px" circle />
            </div>
          </template>

          <Vue3Lottie
            :animation-link="`${cdnLottieUrl}/${lottie.id}.json`"
            :width="250"
            :height="250"
          />
        </ClientOnly>
      </NuxtLink>
    </div>
  </div>
</template>
