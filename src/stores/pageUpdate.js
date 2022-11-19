import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePageUpdateStore = defineStore("page", () => {
  const currentPage = ref("Dashboard");

  return { currentPage };
});
