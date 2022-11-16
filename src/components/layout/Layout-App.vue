<template>
  <component :is="currentPage"></component>
</template>

<script setup>
import { ref } from "vue";
import Dashboard from "../pages/dashboard/Dashboard.vue";

const currentPage = ref("Dashboard");

// function changePage(){
//       if(currentPage.value === "Dashborad"){
//             currentPage.value = Dashborad
//       }
// }
</script>

<style lang="scss" scoped></style>
