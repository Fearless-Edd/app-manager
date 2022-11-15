<template>
  <nav class="lg:text-sm lg:leading-6 relative">
    <div class="sticky top-0 -ml-0.5 pointer-events-none">
      <div class="bg-white dark:bg-slate-900 relative pointer-events-auto mt-8">
        <SearchBar />
      </div>
    </div>
    <div class="px-3 py-4 overflow-y-auto">
      <ul class="space-y-2">
        <SidebarItems />
      </ul>
    </div>
  </nav>
</template>

<script setup>
import SearchBar from "../global/SearchBar.vue";
import SidebarItems from "./Sidebar-Items.vue";
</script>

<style lang="scss" scoped></style>
