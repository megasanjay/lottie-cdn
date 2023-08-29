import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore(
  "settings",
  () => {
    const openLottiesInNewTab = ref(false);

    return {
      openLottiesInNewTab,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  },
);
