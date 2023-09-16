<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// eslint-disable-next-line import/no-named-as-default-member
dayjs.extend(utc);

const push = usePush();
const route = useRoute();

const backgroundColor = ref("#FFFFFF");
const alternate = ref(false);

const cdnLottieUrl = ref(
  `https://cdn.lottiel.ink/assets/${route.params.id}.json`,
);

const { data, error } = await useFetch(`/api/lottie/${route.params.id}`, {
  method: "GET",
});

if (error.value) {
  console.error(error.value.message);

  push.error({
    title: "Error",
    message: "An error occurred while fetching the animation",
  });
}

const copyToClipboard = (url: string) => {
  navigator.clipboard.writeText(url);

  push.success({
    title: "Copied",
    message: "The URL has been copied to your clipboard",
  });
};

const createdDate = computed(() => {
  if (!data.value) return null;

  return dayjs(data.value.created_at).format("MMM DD, YYYY - hh:mm A");
});

useSeoMeta({
  title: `${data.value?.name} | Lottiel.ink`,
});
</script>

<template>
  <main class="flex flex-col max-w-screen-lg mx-auto w-full p-8 h-full">
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

    <div
      class="w-full max-h-[500px] relative mb-10"
      :style="{ backgroundColor }"
    >
      <ClientOnly>
        <template #fallback>
          <div class="flex justify-center items-center">
            <n-skeleton height="200px" circle />
          </div>
        </template>

        <Vue3Lottie
          :animation-link="cdnLottieUrl"
          :height="400"
          :alternate="alternate"
        />
      </ClientOnly>
    </div>

    <n-tabs type="line" animated>
      <n-tab-pane name="Details" tab="Details">
        <n-space vertical class="px-2 space-y-1">
          <p class="text-lg py-4">
            {{ data?.description }}
          </p>

          <n-space>
            <Icon name="ph:calendar-fill" size="25" />

            <p>{{ createdDate }}</p>
          </n-space>

          <n-space v-if="data?.original_animation_url">
            <Icon name="mingcute:external-link-fill" size="25" />

            <n-popover trigger="hover" placement="bottom-end">
              <template #trigger>
                <NuxtLink
                  :to="data?.original_animation_url"
                  target="_blank"
                  rel="noopener"
                  class="hover:underline hover:text-cyan-600 transition-all"
                >
                  {{ data?.original_animation_url }}
                </NuxtLink>
              </template>
              <p>
                {{
                  data?.original_animation_url.search("lottiefiles.com")
                    ? "View the original animation on LottieFiles"
                    : "View the original source of this lottie"
                }}
              </p>
            </n-popover>
          </n-space>

          <n-space>
            <Icon name="mdi:license" size="25" />

            <NuxtLink
              to="#"
              target="_blank"
              rel="noopener"
              class="hover:underline hover:text-cyan-600 text-sm transition-all"
            >
              <p>Distributed under the Lottie Simple License</p>
            </NuxtLink>
          </n-space>
        </n-space>
      </n-tab-pane>

      <n-tab-pane name="Adjust Lottie" tab="Adjust Lottie">
        <div class="px-2 py-4 flex flex-col space-y-5">
          <n-card title="Background Color" bordered>
            <p class="mb-4 text-sm">
              View the lottie animation with a different background color. This
              is a preview only and will not be saved.
            </p>

            <div class="flex w-full items-center space-x-3">
              <n-color-picker
                v-model:value="backgroundColor"
                :swatches="[
                  '#FFFFFF',
                  '#18A058',
                  '#2080F0',
                  '#F0A020',
                  'rgba(208, 48, 80, 1)',
                ]"
              />

              <n-button
                color="black"
                size="medium"
                @click="backgroundColor = '#FFFFFF'"
              >
                <template #icon>
                  <Icon name="system-uicons:reset-hard" />
                </template>

                Reset
              </n-button>
            </div>
          </n-card>

          <n-card title="Alternate direction" bordered>
            <p class="mb-4 text-sm">
              This will cause the animation to play in reverse on every
              iteration. Useful for animations that do not loop cleanly.
            </p>

            <div class="flex w-full items-center space-x-3">
              <n-switch v-model:value="alternate" />
            </div>
          </n-card>
        </div>
      </n-tab-pane>

      <n-tab-pane name="How to Use?" tab="How to Use?">
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
        </n-space>
      </n-tab-pane>
    </n-tabs>

    <n-divider />
  </main>
</template>
