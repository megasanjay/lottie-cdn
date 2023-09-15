<script setup lang="ts">
import { Icon } from "#components";

const user = useUser();
const queryParams = useRoute().query;

const searchInput = ref<HTMLInputElement | null>(null);
const searchTerm = ref(queryParams.q?.toString() || "");

const renderIcon = (name: string) => {
  return () => {
    return h(Icon, { name, size: "20", class: "text-emerald-600" });
  };
};

const options = [
  {
    label: "My Profile",
    key: "profile",
    icon: renderIcon("iconamoon:profile-circle-fill"),
  },
  {
    label: "My Animations",
    key: "profile/my-animations",
    icon: renderIcon("typcn:th-list"),
  },
  {
    key: "d1",
    type: "divider",
  },
  {
    label: "Logout",
    key: "logout",
    icon: renderIcon("solar:logout-2-bold-duotone"),
  },
];

const handleSelect = async (option: string) => {
  if (option === "profile") {
    console.log("profile");
    await navigateTo("/profile");
  }

  if (option === "profile/my-animations") {
    console.log("profile/my-animations");
    await navigateTo("/profile/my-animations");
  }

  if (option === "logout") {
    console.log("logout");
    await navigateTo("/auth/logout");
  }
};

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
  <header class="bg-emerald-50 border-b border-emerald-600 px-2 py-2">
    <n-space
      justify="space-between"
      class="max-w-screen-xl mx-auto"
      align="center"
    >
      <n-space align="center">
        <NuxtLink
          to="/"
          class="flex items-center space-x-2 hover:space-x-3 group"
        >
          <img
            src="/logo.svg"
            class="w-8 group-hover:scale-[1.1] transition-all"
            alt=""
          />

          <span
            class="text-2xl font-bold text-slate-700 group-hover:text-emerald-600 transition-all"
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

        <n-divider v-if="user" vertical />

        <n-dropdown
          v-if="user"
          size="large"
          :options="options"
          @select="handleSelect"
          trigger="hover"
          placement="bottom-end"
        >
          <n-avatar
            round
            size="large"
            :src="`https://api.dicebear.com/6.x/thumbs/svg?seed=${user.userId}&radius=50&backgroundColor=b6e3f4,c0aede,d1d4f9`"
          />
        </n-dropdown>

        <NuxtLink v-else to="/auth/login">
          <n-button color="black" size="medium" class="w-full">
            <template #icon>
              <Icon name="solar:login-2-bold-duotone" />
            </template>

            Login
          </n-button>
        </NuxtLink>
      </n-space>
    </n-space>
  </header>
</template>
