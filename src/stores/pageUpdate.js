import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Dashboard from "../components/pages/dashboard/Dashboard.vue";
import Maintenance from "../components/pages/maintenance/Maintenance.vue";

export const usePageUpdateStore = defineStore("page", () => {
  const currentPage = ref("Dashboard");

  return { currentPage };
});
