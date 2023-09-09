<script setup lang="ts">
const user = useUser();
const queryParams = useRoute().query;

const searchInput = ref<HTMLInputElement | null>(null);
const searchTerm = ref(queryParams.q?.toString() || "");

const highlightText = () => {
  searchInput.value?.select();
};

const searchForLotties = async () => {
  const query = searchTerm.value.trim();

  if (!query) return;

  console.log("searchForLotties", query);

  await navigateTo({
    path: "/search",
    query: {
      q: encodeURIComponent(query),
    },
    replace: true,
  });

  // reload the page
  window.location.reload();
};
</script>

<template>
  <header class="bg-slate-50 px-2 py-2">
    <n-space
      justify="space-between"
      class="max-w-screen-xl mx-auto"
      align="center"
    >
      <n-space align="center">
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 hover:space-x-2 group"
        >
          <img
            src="/logo.svg"
            class="w-8 group-hover:scale-[1.1] transition-all"
            alt=""
          />

          <span
            class="text-2xl font-bold text-slate-700 group-hover:text-cyan-500 transition-all"
          >
            lottiel.ink
          </span>
        </NuxtLink>

        <n-divider vertical />

        <n-space align="center">
          <NuxtLink to="/animations">
            <n-button quaternary> Animations </n-button>
          </NuxtLink>

          <NuxtLink to="/lotties/new">
            <n-button quaternary> Upload </n-button>
          </NuxtLink>
        </n-space>
      </n-space>

      <n-space align="center">
        <n-input-group>
          <n-input
            v-model:value="searchTerm"
            type="text"
            clearable
            placeholder="Loaders"
            @keyup.enter="searchForLotties"
            ref="searchInput"
            @focus="highlightText"
          />
          <n-button type="info" secondary @click="searchForLotties">
            Search
          </n-button>
        </n-input-group>

        <n-divider vertical />

        <n-popover trigger="hover" v-if="user" placement="bottom-end">
          <template #trigger>
            <n-avatar
              round
              size="large"
              :src="`https://api.dicebear.com/6.x/thumbs/svg?seed=${user.userId}&radius=50&backgroundColor=b6e3f4,c0aede,d1d4f9`"
            />
          </template>
          <template #header>
            <n-text strong depth="1"> Divider is on the bottom. </n-text>
          </template>
          Content.
          <template #footer> Divider is on the top. </template>
        </n-popover>
      </n-space>
    </n-space>
  </header>
</template>
