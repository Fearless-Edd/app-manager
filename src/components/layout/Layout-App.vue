<template>
  <keep-alive>
    <component :is="store.currentPage" />
  </keep-alive>
</template>

<script setup>
import { usePageUpdateStore } from "../../stores/pageUpdate";

const store = usePageUpdateStore();
</script>

<style lang="scss" scoped></style>
