<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// eslint-disable-next-line import/no-named-as-default-member
dayjs.extend(utc);

const message = useMessage();
const route = useRoute();

const bunnyCDNLottieUrl = ref(
  `https://cdn-lottie.b-cdn.net/assets/${route.params.id}.json`,
);
const cdnLottieUrl = ref(
  `https://cdn.lottiel.ink/assets/${route.params.id}.json`,
);

const { data, error } = await useFetch(`/api/lottie/${route.params.id}`, {
  method: "GET",
});

if (error.value) {
  console.error(error.value.message);
  message.error("Something went wrong. " + error.value.data.message);
}

const copyToClipboard = (url: string) => {
  navigator.clipboard.writeText(url);

  message.success("Copied to clipboard");
};

const createdDate = computed(() => {
  if (!data.value) return null;

  return dayjs(data.value.created_at).format("MMM DD, YYYY - hh:mm A");
});
</script>

<template>
  <main class="flex flex-col max-w-screen-lg mx-auto w-full p-8">
    <n-space justify="space-between">
      <h3>
        {{ data?.name }}
      </h3>

      <n-space>
        <n-button type="error" secondary class="hidden">
          <template #icon>
            <Icon name="ant-design:delete-filled" />
          </template>

          Delete
        </n-button>

        <n-button type="info" secondary>
          <template #icon>
            <Icon name="mingcute:download-fill" />
          </template>

          Download
        </n-button>
      </n-space>
    </n-space>

    <n-divider />

    <div class="w-full h-full max-h-[500px]">
      <ClientOnly>
        <Vue3Lottie :animation-link="bunnyCDNLottieUrl" />
      </ClientOnly>
    </div>

    <n-tabs type="line" animated>
      <n-tab-pane name="Details" tab="Details">
        <n-space vertical class="px-2">
          <p class="text-lg py-4">
            {{ data?.description }}
          </p>

          <n-space>
            <Icon name="bi:calendar-date-fill" />
            <span class="text-sm">{{ createdDate }}</span>
          </n-space>
        </n-space>
      </n-tab-pane>

      <n-tab-pane name="Asset Links" tab="Asset Links">
        <n-space vertical class="px-2 py-4">
          <n-space
            align="center"
            class="border w-full pl-3"
            justify="space-between"
          >
            <p class="font-medium text-slate-700 text-sm">
              {{ cdnLottieUrl }}
            </p>

            <n-button
              color="black"
              size="medium"
              @click="copyToClipboard(cdnLottieUrl)"
            >
              <template #icon>
                <Icon name="ant-design:copy-filled" />
              </template>
              Copy
            </n-button>
          </n-space>

          <n-space
            align="center"
            class="border w-full pl-3"
            justify="space-between"
          >
            <p class="font-medium text-sm text-slate-700 break-all">
              {{ bunnyCDNLottieUrl }}
            </p>

            <n-button
              color="black"
              size="medium"
              @click="copyToClipboard(cdnLottieUrl)"
            >
              <template #icon>
                <Icon name="ant-design:copy-filled" />
              </template>
              Copy
            </n-button>
          </n-space>
        </n-space>
      </n-tab-pane>
    </n-tabs>

    <n-divider />
  </main>
</template>
