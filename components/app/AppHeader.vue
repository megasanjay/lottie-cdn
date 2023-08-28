<script setup lang="ts">
const user = useUser();
const message = useMessage();

console.log(user);

const options = [
  {
    disabled: true,
    key: "marina bay sands",
    label: "Marina Bay Sands",
  },
  {
    key: "brown's hotel, london",
    label: "Brown's Hotel, London",
  },
  {
    key: "atlantis nahamas, nassau",
    label: "Atlantis Bahamas, Nassau",
  },
  {
    key: "the beverly hills hotel, los angeles",
    label: "The Beverly Hills Hotel, Los Angeles",
  },
];

const handleSelect = (key: string | number) => {
  message.info(String(key));
};
</script>

<template>
  <header class="bg-slate-50 px-3 py-2">
    <div class="flex justify-between items-center max-w-screen-xl mx-auto">
      <NuxtLink to="/">
        <h1 class="">LottieLinker</h1>
      </NuxtLink>

      <n-dropdown
        v-if="user"
        trigger="hover"
        :options="options"
        placement="bottom-end"
        @select="handleSelect"
      >
        <n-avatar
          round
          size="large"
          :src="`https://api.dicebear.com/6.x/thumbs/svg?seed=${user.userId}&radius=50&backgroundColor=b6e3f4,c0aede,d1d4f9`"
        />
      </n-dropdown>
    </div>
  </header>
</template>
