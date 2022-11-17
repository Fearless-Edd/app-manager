<template>
  <div>
    <Dashboard v-if="comp == 'Dashboard'" @update-page="updatePage" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dashboard from "../pages/dashboard/Dashboard.vue";

const comp = ref("Dashboard");

const updatePage = (page) => {
  comp.value = page;
};
</script>

<style lang="scss" scoped></style>
