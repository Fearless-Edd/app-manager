<template>
  <nav
    class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200"
  >
    <ul class="flex space-x-8">
      <li v-for="link in links" :key="link.name">
        <a
          class="hover:text-red-500 dark:hover:text-red-400"
          :href="link.href"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const links = ref([
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
]);
</script>

<style lang="scss" scoped></style>
